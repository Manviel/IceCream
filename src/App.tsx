import { ParentComponent } from 'solid-js';

import { Pages, Paths } from './models';

import TabLink from './components/Link';

import FlameIcon from './assets/icons/flame.svg';
import SquareTextIcon from './assets/icons/square-text.svg';
import TextFinderIcon from './assets/icons/text-finder.svg';
import BookIcon from './assets/icons/book.svg';

import './index.css';

const App: ParentComponent = ({ children }) => (
  <>
    <header class='sticky depth content-full flex justify-center'>
      <nav class='dock flex justify-between content-full' aria-label='Tab bar'>
        <TabLink href={Paths.Home} end id={Pages.Home}>
          <SquareTextIcon />
        </TabLink>

        <TabLink href={Paths.Products} id={Pages.Products}>
          <FlameIcon />
        </TabLink>

        <TabLink href={Paths.Privacy} id={Pages.Privacy}>
          <BookIcon />
        </TabLink>

        <TabLink href={Paths.Profile} id={Pages.Profile}>
          <TextFinderIcon />
        </TabLink>
      </nav>
    </header>

    {children}
  </>
);

export default App;
