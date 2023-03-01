import { Component } from 'solid-js';
import { Link } from '@solidjs/router';

import { Paths } from '../../models';

import Card from '../../components/Card';
import ConnectFactory from '../../components/ConnectFactory';
import PageDecorator from '../../components/PageDecorator';
import Header from '../../components/Header';
import Shelf from '../../components/Card/Shelf';

import { randomInRange } from '../../services/utils';

import LayeredLevels from './LayeredLevels';

import './Home.css';

const Home: Component = () => {
  return (
    <PageDecorator subtitle='Home' headline='What is Cohesion?'>
      <p class='info'>
        The degree to which the elements inside a module belong together. It is
        a measure of how deeply each piece of device module functionality
        relates. Therefore, the most suitable term for defining cohesion is
        <em> the code that shifts together, stays together</em>. As we can see,
        strong cohesion makes thinking smoother and reduces dependency. Low
        coupling is generally associated with strong stability. In microservices
        - oriented systems, a low degree of cohesion is accomplished by pooling
        specific business processes together, such that, if developers need to
        change actions, only a single microservice has to be modified.
      </p>

      <article class='material view rounded'>
        <Header spot='What is Coupling?' />

        <p class='info grey-light'>
          The degree to which components have knowledge of other components.
          Effectively, the coupling is about how changing one thing required
          change in another. Two modules have high coupling if they are closely
          connected. For example, two concrete classes storing references to
          each other and calling each other’s methods. Modules with low coupling
          among them work mostly independently of each other.
        </p>

        <div class='grid home-stats gap'>
          <Card
            title='Up to'
            number={randomInRange(11, 98)}
            measure='million'
            description='Active users'
          />
          <Card
            title='Support'
            number={randomInRange(8, 99)}
            description='Countries'
          />
          <Card
            title='Up to'
            number={randomInRange(1, 10)}
            measure='x'
            description='Faster than previous versions'
          />
          <Card
            title='Down to'
            number={randomInRange(1, 3)}
            measure='sec'
            description='Time to interactive'
          />
        </div>

        <div class='flex justify-between items-center screen'>
          <ConnectFactory href='https://www.baeldung.com/cs/layered-architecture' />

          <Link href={Paths.Products} class='btn contained'>
            Go to Products
          </Link>
        </div>
      </article>

      <article class='flex col on-scroll layer view screen content-full rounded'>
        <Header spot='What is Layered Architecture?' />

        <p class='info'>
          It is describes an architectural pattern composed of several separate
          horizontal layers that function together as a single unit of software.
          A layer is a logical separation of components or code. In these
          frameworks, components that are related or that are similar are
          usually placed on the same layers. However, each layer is different
          and contributes to a different part of the overall system. This means
          that layers can be modified and the change won’t affect other layers.
          Separation of concerns is another notable feature that speaks to how
          the modules on a single layer together perform a single function.
        </p>

        <LayeredLevels />
      </article>

      <article class='flex col on-scroll material view screen content-full rounded'>
        <Header spot='The Separation of Concerns' />

        <p class='info'>
          The application of the SoC involves two processes: reduction of
          coupling and increasing cohesion. Don’t write your program as one
          solid block, instead, break up the code into chunks that are finalized
          tiny pieces of the system each able to complete a simple distinct job.
        </p>

        <div class='grid os-grid gap'>
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
            description='Beautiful - gorgeous, stunning. Sad - heartbroken, devastated. Tired - exhausted, drained, worn out, shattered. Happy - thrilled, on cloud nine, delighted. Surprised - astonished. Small - tiny, miniscule. Big - huge, tremendous, enormous, massive. Bad - terrible, horrible, horrendous, dreadful, appalling. Good - incredible, awesome, terrific, superb. Important - crucial, essential, vital. Interesting - fascinating, captivating, appealing. Hungry - starving, famished, ravenous. Angry - furious, mad. Clean - spotless, pristine. Dirty - filthy. Funny - hilarious. Cold - freezing. Hot - boiling, scorching.'
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
            description='Use linkers to provide reasons and examples. Otherwise, however, additionally, moreover, eventually, overall.'
          />
          <Shelf
            title='Well, you know'
            description='Use simple fillers to fill in pauses in a conversation.'
            hasColSpan
          />
          <Shelf
            title='Produce moderately'
            description='Have a positive impact on, meet the deadline.'
          />
          <Shelf
            title='Speak at a natural pace'
            description='In a variety of situations not limited by language incompetence.'
          />
          <Shelf
            title='Speak without strain'
            description='With substantial natural flow.'
          />
          <Shelf
            title='Linking words efficiently'
            description='To show the relationship between ideas, explain cause and effect.'
          />
        </div>
      </article>

      <footer class='layer view screen content-full rounded flex items-center justify-between'>
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
