import { Component } from 'solid-js';
import { Link } from '@solidjs/router';

import { Paths } from '../../models';

import Card from '../../components/Card';
import ConnectFactory from '../../components/ConnectFactory';
import PageDecorator from '../../components/PageDecorator';
import Header from '../../components/Header';

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

      <article class='box view rounded'>
        <Header spot='What is Coupling?' />

        <p class='info grey'>
          The degree to which components have knowledge of other components.
          Effectively, the coupling is about how changing one thing required
          change in another. Two modules have high coupling if they are closely
          connected. For example, two concrete classes storing references to
          each other and calling each other’s methods. Modules with low coupling
          among them work mostly independently of each other.
        </p>

        <div class='home-stats'>
          <Card
            phrase='Up to'
            number={randomInRange(11, 98)}
            measure='million'
            description='Active users'
          />
          <Card
            phrase='Support'
            number={randomInRange(8, 99)}
            description='Countries'
          />
          <Card
            phrase='Up to'
            number={randomInRange(1, 10)}
            measure='x'
            description='Faster than previous versions'
          />
          <Card
            phrase='Down to'
            number={randomInRange(1, 3)}
            measure='sec'
            description='Time to interactive'
          />
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

        <div class='flex justify-between items-center screen'>
          <ConnectFactory href='https://www.baeldung.com/cs/layered-architecture' />

          <Link href={Paths.Products} class='btn'>
            Go to Products
          </Link>
        </div>
      </article>

      <article class='flex col on-scroll material view screen content-full rounded'>
        <Header spot='The cost of ransomware' />

        <p class='info'>
          A successful ransomware attack costs the targeted organisation more
          than the ransom payment itself.
        </p>

        <div class='products'>
          <Card
            phrase='The average payment was'
            number='570,000'
            description='in the first half of 2021'
          />

          <Card
            phrase='With mega-breaches costing as much as'
            number='100'
            measure='times'
            description='higher'
          />
        </div>
      </article>
    </PageDecorator>
  );
};

export default Home;
