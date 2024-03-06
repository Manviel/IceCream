import { Component } from 'solid-js';
import { A } from '@solidjs/router';

import { Pages, Paths } from '../../models';
import { ActionTypes } from '../../models/config';

import ConnectFactory from '../../components/Link/ConnectFactory';
import PageDecorator from '../../components/PageDecorator';
import { SubTitle } from '../../components/Header';
import Shelf from '../../components/Card/Shelf';

import CameraFiltersIcon from '../../assets/icons/camera-filters.svg';
import LayersDownIcon from '../../assets/icons/layers-down.svg';

import LayeredLevels from './LayeredLevels';
import FullScreenMode from './FullScreenMode';

import './Home.css';

const Home: Component = () => {
  return (
    <PageDecorator
      headline={Pages.Home}
      subtitle='Our values lead the way'
      isDark
    >
      <article class='grid home-grid proximity card rounded'>
        <header class='flex col view os-column'>
          <SubTitle spot='What is Cohesion?' />

          <p class='info'>
            The degree to which the elements inside a module belong together. It
            is a measure of how deeply each piece of device module functionality
            relates. The most suitable term for defining cohesion is the code
            that shifts together, stays together. As we can see, strong cohesion
            makes thinking smoother and reduces dependency. Low coupling is
            generally associated with strong stability. In microservices -
            oriented systems, a low degree of cohesion is accomplished by
            pooling specific business processes together, such that, if
            developers need to change actions, only a single microservice has to
            be modified.
          </p>

          <ConnectFactory href='https://www.baeldung.com/cs/layered-architecture' />
        </header>

        <section class='material flex justify-center items-center cohesion'>
          <div class='readable-icon' role='img' aria-label='Cohesion icon'>
            <LayersDownIcon />
          </div>
        </section>
      </article>

      <article class='grid home-grid proximity screen'>
        <header class='flex col card rounded'>
          <div class='flex justify-center items-center price coupling'>
            <div class='readable-icon' role='img' aria-label='Coupling icon'>
              <CameraFiltersIcon />
            </div>
          </div>

          <div class='view'>
            <SubTitle spot='What is Coupling?' />

            <p class='info grey-light'>
              The degree to which components have knowledge of other components.
              Effectively, the coupling is about how changing one thing required
              change in another. Two modules have high coupling if they are
              closely connected. For example, two concrete classes storing
              references to each other and calling each other’s methods. Modules
              with low coupling among them work mostly independently of each
              other.
            </p>

            <FullScreenMode />
          </div>
        </header>

        <section class='flex col card view rounded os-column'>
          <SubTitle spot='What is Layered Architecture?' />

          <p class='info'>
            It is describes an architectural pattern composed of several
            separate horizontal layers that function together as a single unit
            of software. A layer is a logical separation of components or code.
            In these frameworks, components that are related or that are similar
            are usually placed on the same layers. However, each layer is
            different and contributes to a different part of the overall system.
            This means that layers can be modified and the change won’t affect
            other layers. Separation of concerns is another notable feature that
            speaks to how the modules on a single layer together perform a
            single function.
          </p>

          <LayeredLevels />
        </section>
      </article>

      <article class='grid home-grid proximity screen card rounded'>
        <header class='flex col view os-column'>
          <SubTitle spot='The Separation of Concerns' />

          <p class='info'>
            The application of the SoC involves two processes: reduction of
            coupling and increasing cohesion. Don’t write your program as one
            solid block, instead, break up the code into chunks that are
            finalized tiny pieces of the system each able to complete a simple
            distinct job.
          </p>

          <ConnectFactory
            href='https://www.wikihow.com/Respond-to-a-%22How-Was-Your-Weekend%3F%22-Text'
            text='How was your weekend?'
          />
        </header>

        <section class='ghost flex justify-center items-center cohesion view'>
          <A href={Paths.Products} class={ActionTypes.Secondary}>
            Go to Products
          </A>
        </section>
      </article>

      <article class='grid os-grid gap screen'>
        <Shelf
          title='Get USED TO'
          description='To talk about the process of becoming familiar with something.'
        />
        <Shelf
          title='BE ABOUT TO'
          description='If you are about to do something, you are going to do it very soon.'
        />
        <Shelf
          title='IRREGULAR VERBS'
          description='Use all: say, make, go, take, come, give, think, become, feel, put, lead, choose.'
          hasColSpan
        />
        <Shelf
          title='FUTURE CONTINUOUS'
          description='For future actions in progress. He will be drinking tea with us.'
        />
        <Shelf
          title='PASSIVE FORMS'
          description='In various tenses. My room is being cleaned.'
        />
        <Shelf
          title='giving opinion'
          description='Use varied phrases: I assume, would say, certain that.'
        />
        <Shelf
          title='figure out'
          description='Use common verbs, nouns, adjectives with prepositions and adverbs. Set up, Give up.'
          hasRowSpan
        />
        <Shelf
          title='Sophisticated vocabulary'
          description='Beautiful - gorgeous, stunning. Sad - heartbroken, devastated. Tired - exhausted, drained, worn out, shattered. Happy - thrilled, on cloud nine, delighted. Surprised - astonished, overwhelmed. Small - tiny, miniscule. Big - huge, tremendous, enormous, massive. Bad - terrible, horrible, horrendous, dreadful, appalling. Good - incredible, awesome, terrific, superb. Important - crucial, essential, vital. Hungry - starving, famished, ravenous. Angry - furious, mad. Clean - spotless, pristine. Dirty - filthy. Funny - hilarious. Cold - freezing. Hot - boiling.'
          hasRowSpan
          hasColSpan
        />
        <Shelf
          title='PRESENT PERFECT CONTINUOUS'
          description='For unfinished situations. I have been working for an hour.'
          hasColSpan
        />
        <Shelf
          title='I managed to'
          description='Proper vocabulary to describe problems / solutions.'
        />
        <Shelf
          title='Scalability'
          description='If the design or system fails when a quantity increases, it does not scale.'
        />
        <Shelf
          title='on the one hand'
          description='Use linkers to provide reasons. Otherwise, however, additionally, moreover, eventually, overall.'
        />
        <Shelf
          title='Well, you know'
          description='Use simple fillers to fill in pauses in a conversation. The way I see it. Interesting - fascinating, captivating, appealing.'
          hasColSpan
        />
        <Shelf
          title='Produce moderately'
          description='Have a positive impact on, meet the deadline.'
        />
        <Shelf
          title='Speak at a natural pace'
          description='Life has taught me that, I first realised this when I was.'
        />
        <Shelf
          title='Speak without strain'
          description='Struggle with, perform at a very.'
        />
        <Shelf
          title='Linking words efficiently'
          description='To show the relationship between ideas, cause and effect.'
        />
      </article>

      <footer class='card view screen content-full rounded flex items-center justify-between'>
        <p class='grey-light'>Provide feedback</p>

        <ConnectFactory
          href='https://github.com/Manviel/IceCream/issues'
          text='Contact Us'
        />
      </footer>
    </PageDecorator>
  );
};

export default Home;
