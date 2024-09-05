type LoadCallback = (...args: unknown[]) => void;

type LoadConfig = {
  callback: LoadCallback;
  onerror?: LoadCallback;
  timeout?: number;
  ontimeout?: LoadCallback;
};

type CallbackOrConfig = LoadConfig | LoadCallback;

interface GoogleApiOAuth2TokenSessionState {
  extraQueryParams: {
    authuser: string;
  };
}

interface GoogleApiOAuth2TokenObject {
  /**
   * The OAuth 2.0 token. Only present in successful responses
   */
  access_token: string;
  /**
   * Details about the error. Only present in error responses
   */
  error: string;
  /**
   * The duration, in seconds, the token is valid for. Only present in successful responses
   */
  expires_in: string;
  session_state?: GoogleApiOAuth2TokenSessionState;
  /**
   * The Google API scopes related to this token
   */
  state: string;
}

interface Listener {
  /**
   * Returns true if the listener is currently listening for changes.
   * Returns false after remove() is called.
   */
  isActive: boolean;

  /**
   * Stops listening for changes.
   */
  remove(): void;

  /**
   * Triggers the callback function.
   */
  trigger(): void;
}

interface IsSignedIn {
  /**
   * Returns whether the current user is currently signed in.
   */
  get(): boolean;

  /**
   * Listen for changes in the current user's sign-in state.
   */
  listen(listener: (signedIn: boolean) => unknown): Listener;
}

interface GoogleUser {
  /**
   * Get the user's unique ID string.
   */
  getId(): string;

  /**
   * Returns true if the user is signed in.
   */
  isSignedIn(): boolean;

  /**
   * Revokes all of the scopes that the user granted.
   */
  disconnect(): void;
}

interface CurrentUser {
  /**
   * Returns a GoogleUser object that represents the current user. Note that in a newly-initialized
   * GoogleAuth instance, the current user has not been set. Use the currentUser.listen() method or the
   * GoogleAuth.then() to get an initialized GoogleAuth instance.
   */
  get(): GoogleUser;

  /**
   * Listen for changes in currentUser.
   */
  listen(listener: (user: GoogleUser) => unknown): Listener;
}

interface SigninOptions {
  /**
   * The package name of the Android app to install over the air.
   * See Android app installs from your web site:
   * https://developers.google.com/identity/sign-in/web/android-app-installs
   */
  app_package_name?: string | undefined;
  /**
   *     Fetch users' basic profile information when they sign in.
   *     Adds 'profile', 'email' and 'openid' to the requested scopes.
   *     True if unspecified.
   */
  fetch_basic_profile?: boolean | undefined;
  /**
   * Specifies whether to prompt the user for re-authentication.
   * See OpenID Connect Request Parameters:
   * https://openid.net/specs/openid-connect-basic-1_0.html#RequestParameters
   */
  prompt?: string | undefined;
  /**
   * The scopes to request, as a space-delimited string.
   * Optional if fetch_basic_profile is not set to false.
   */
  scope?: string | undefined;
  /**
   * The UX mode to use for the sign-in flow.
   * By default, it will open the consent flow in a popup.
   */
  ux_mode?: 'popup' | 'redirect' | undefined;
  /**
   * If using ux_mode='redirect', this parameter allows you to override the default redirect_uri that will be used at the end of the consent flow.
   * The default redirect_uri is the current URL stripped of query parameters and hash fragment.
   */
  redirect_uri?: string | undefined;
  /**
   * When your app knows which user it is trying to authenticate, it can provide this parameter as a hint to the authentication server.
   * Passing this hint suppresses the account chooser and either pre-fill the email box on the sign-in form, or select the proper session (if the user is using multiple sign-in),
   * which can help you avoid problems that occur if your app logs in the wrong user account. The value can be either an email address or the sub string,
   * which is equivalent to the user's Google ID.
   * https://developers.google.com/identity/protocols/OpenIDConnect?hl=en#authenticationuriparameters
   */
  login_hint?: string | undefined;
}

interface SigninOptionsBuilder {
  setAppPackageName(name: string): unknown;
  setFetchBasicProfile(fetch: boolean): unknown;
  setPrompt(prompt: string): unknown;
  setScope(scope: string): unknown;
  setLoginHint(hint: string): unknown;
}

interface GoogleAuthBase {
  isSignedIn: IsSignedIn;
  currentUser: CurrentUser;

  /**
   * Signs in the user using the specified options.
   * If no option specified here, fallback to the options specified to gapi.auth2.init().
   */
  signIn(options?: SigninOptions | SigninOptionsBuilder): Promise<GoogleUser>;

  /**
   * Signs out all accounts from the application.
   */
  signOut(): unknown;

  /**
   * Revokes all of the scopes that the user granted.
   */
  disconnect(): unknown;
}

// https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/gapi.auth2/index.d.ts
interface GoogleAuth extends GoogleAuthBase {
  /**
   * Calls the onInit function when the GoogleAuth object is fully initialized, or calls the onFailure function if
   * initialization fails.
   */
  then(
    onInit: (googleAuth: GoogleAuthBase) => unknown,
    onFailure?: (reason: { error: string; details: string }) => unknown
  ): unknown;
}

interface GoogleEvent {
  execute(callback: LoadCallback): void;
}

interface GoogleList {
  result: {
    items: object[];
  };
}

// https://developers.google.com/calendar/api/v3/reference/events
interface GoogleCalendar {
  events: {
    insert(parameters: object): GoogleEvent;
    list(event: object): Promise<GoogleList>;
  };
}

// https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/gapi/index.d.ts
export interface GApi {
  load(apiName: string, callback: CallbackOrConfig): void;
  client: {
    init(args: {
      /**
       * The API Key to use.
       */
      apiKey?: string;
      /**
       * An array of discovery doc URLs or discovery doc JSON objects.
       */
      discoveryDocs?: string[];
      /**
       * The app's client ID, found and created in the Google Developers Console.
       */
      clientId?: string;
      /**
       * The scopes to request, as a space-delimited string.
       */
      scope?: string;
    }): Promise<void>;
    getToken(): GoogleApiOAuth2TokenObject;
    setToken(token: GoogleApiOAuth2TokenObject | string): void;
    calendar: GoogleCalendar;
  };
  auth2: {
    getAuthInstance(): GoogleAuth;
  };
}
