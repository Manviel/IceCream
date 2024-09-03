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
      /**
       * Arbitrary value. If present, allows keys generated after July 29th, 2022 to work with the old (deprecated) api.
       */
      plugin_name?: string;

      hosted_domain?: string;
    }): Promise<void>;
    getToken(): GoogleApiOAuth2TokenObject;
    setToken(token: GoogleApiOAuth2TokenObject | string): void;
  };
}

interface OverridableTokenClientConfig {
  /**
   * Optional. A space-delimited list of scopes that identify the
   * resources that your application could access on the user's
   * behalf. These values inform the consent screen that Google
   * displays to the user.
   */
  scope?: string;

  /**
   * Optional, defaults to true.
   * Enables applications to use incremental authorization
   * to request access to additional scopes in context.
   * If you set this parameter's value to false and the
   * authorization request is granted, then the new access token
   * will only cover any scopes to which the scope requested
   * in this OverridableTokenClientConfig.
   */
  include_granted_scopes?: boolean;

  /**
   * Optional. A space-delimited, case-sensitive list of prompts to
   * present the user.
   */
  prompt?: string;

  /**
   * Optional, defaults to true. If set to false, more granular Google
   * Account permissions would be disabled for OAuth client IDs
   * created before 2019. If both enable_granular_consent and
   * enable_serial_consent are set, only enable_granular_consent value
   * would take effect and enable_serial_consent value would be
   * ignored.
   *
   * No effect for newer OAuth client IDs, since more granular
   * permissions is always enabled for them.
   */
  enable_granular_consent?: boolean;

  /**
   * Deprecated, you should use enable_granular_consent instead.
   * This has the same effect as enable_granular_consent. Existing
   * applications that use enable_serial_consent can continue to do
   * so, but you are encouraged to update your code to use
   * enable_granular_consent in your next application update.
   */
  enable_serial_consent?: boolean;

  /**
   * Optional. If your application knows which user should authorize
   * the request, it can use this property to provide a login hint to
   * Google. When successful, account selection is skipped. The email
   * address or ID token sub field value for the target user. For more
   * information, see the login_hint field in the OpenID Connect
   * documentation.
   */
  login_hint?: string;

  /**
   * Deprecated, you should use login_hint instead.
   * Optional.
   * If your application knows which user should authorize the
   * request, it can use this property to provide a hint to Google.
   * The email address for the target user. For more information, see
   * the login_hint field in the OpenID Connect docs.
   */
  hint?: string;

  /**
   * Optional. Not recommended. Specifies any string value that your
   * application uses to maintain state between your authorization
   * request and the authorization server's response.
   */
  state?: string;
}

export interface TokenClient {
  /**
   * starts the OAuth 2.0 Token UX flow
   */
  requestAccessToken: (overrideConfig?: OverridableTokenClientConfig) => void;
}

export interface TokenResponse {
  /**
   * The access token of a successful token response.
   */
  access_token: string;

  /**
   * The lifetime in seconds of the access token.
   */
  expires_in: string;

  /**
   * The hosted domain the signed-in user belongs to.
   */
  hd: string;

  /**
   * The prompt value that was used from the possible list of values
   * specified by TokenClientConfig or OverridableTokenClientConfig.
   */
  prompt: string;

  /**
   * The type of the token issued.
   */
  token_type: string;

  /**
   * A space-delimited list of scopes that are approved by the user.
   */
  scope: string;

  /**
   * The string value that your application uses to maintain state
   * between your authorization request and the response.
   */
  state: string;

  /**
   * A single ASCII error code.
   */
  error: string;

  /**
   * Human-readable ASCII text providing additional information, used
   * to assist the client developer in understanding the error that
   * occurred.
   */
  error_description: string;

  /**
   * A URI identifying a human-readable web page with information
   * about the error, used to provide the client developer with
   * additional information about the error.
   */
  error_uri: string;
}

interface ClientConfigError extends Error {
  message: string;
  stack?: string;
  type: 'unknown' | 'popup_closed' | 'popup_failed_to_open';
}

interface TokenClientConfig {
  /**
   * Required.
   * The client ID for your application. You can find this value in
   * the API Console.
   */
  client_id: string;

  /**
   * Required. The JavaScript function name that handles returned
   * token response.
   */
  callback: (tokenResponse: TokenResponse) => void;

  /**
   * Required.
   * A space-delimited list of scopes that identify the resources that
   * your application could access on the user's behalf. These values
   * inform the consent screen that Google displays to the user.
   */
  scope: string;

  /**
   * Optional, defaults to true.
   * Enables applications to use incremental authorization
   * to request access to additional scopes in context.
   * If you set this parameter's value to false and the
   * authorization request is granted, then the new access token
   * will only cover any scopes to which the scope requested
   * in this TokenClientConfig.
   */
  include_granted_scopes?: boolean;

  /**
   * Optional, defaults to 'select_account'.
   * A space-delimited, case-sensitive list of prompts to present the
   * user.
   * Possible values are:
   * empty string The user will be prompted only the first time your
   *     app requests access. Cannot be specified with other values.
   * 'none' Do not display any authentication or consent screens. Must
   *     not be specified with other values.
   * 'consent' Prompt the user for consent.
   * 'select_account' Prompt the user to select an account.
   */
  prompt?: '' | 'none' | 'consent' | 'select_account';

  /**
   * Optional, defaults to true. If set to false, more granular Google
   * Account permissions would be disabled for OAuth client IDs
   * created before 2019. If both enable_granular_consent and
   * enable_serial_consent are set, only enable_granular_consent value
   * would take effect and enable_serial_consent value would be
   * ignored.
   *
   * No effect for newer OAuth client IDs, since more granular
   * permissions is always enabled for them.
   */
  enable_granular_consent?: boolean;

  /**
   * Deprecated, you should use enable_granular_consent instead.
   * This has the same effect as enable_granular_consent. Existing
   * applications that use enable_serial_consent can continue to do
   * so, but you are encouraged to update your code to use
   * enable_granular_consent in your next application update.
   */
  enable_serial_consent?: boolean;

  /**
   * Optional. If your application knows which user should authorize
   * the request, it can use this property to provide a login hint to
   * Google. When successful, account selection is skipped. The email
   * address or ID token sub field value for the target user. For more
   * information, see the login_hint field in the OpenID Connect
   * documentation.
   */
  login_hint?: string;

  /**
   * Deprecated, you should use login_hint instead.
   * Optional.
   * If your application knows which user should authorize the
   * request, it can use this property to provide a hint to Google.
   * The email address for the target user. For more information, see
   * the login_hint field in the OpenID Connect docs.
   */
  hint?: string;

  /**
   * Optional.
   * If your application knows the Workspace domain the user belongs
   * to, use this to provide a hint to Google. For more information,
   * see the hd field in the OpenID Connect docs.
   */
  hd?: string;

  /**
   * Deprecated, you should use hd instead.
   * Optional.
   * If your application knows the Workspace domain the user belongs
   * to, use this to provide a hint to Google. For more information,
   * see the hd field in the OpenID Connect docs.
   */
  hosted_domain?: string;

  /**
   * Optional. Not recommended.
   * Specifies any string value that your application uses to maintain
   * state between your authorization request and the authorization
   * server's response.
   */
  state?: string;

  /**
   * Optional. The JavaScript function that handles some non-OAuth
   * errors, such as the popup window is failed to open; or closed
   * before an OAuth response is returned.
   */
  error_callback?: (error: ClientConfigError) => void;
}

// https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/google.accounts/index.d.ts
export interface GAccounts {
  accounts: {
    oauth2: {
      initTokenClient(config: TokenClientConfig): TokenClient;
      revoke(accessToken: string, done: () => void): void;
    };
  };
}
