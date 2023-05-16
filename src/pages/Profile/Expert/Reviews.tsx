import { Component } from 'solid-js';
import { createSlider } from 'solid-slider';

import { ActionTypes } from '../../../models/config';

import ConnectFactory from '../../../components/ConnectFactory';

import PlayNextIcon from '../../../assets/icons/play-next.svg';
import PlayPrevIcon from '../../../assets/icons/play-prev.svg';

import Results from './Results';
import Notes from './Notes';

import 'solid-slider/slider.css';

const Reviews: Component = () => {
  const [slider, { current, next, prev }] = createSlider({
    loop: true,
    slides: { perView: 1.2, spacing: 10 },
  });

  return (
    <>
      <article class='flex col items-center justify-between layer rounded'>
        <h3 class='info card-sub'>Usage</h3>

        <ConnectFactory
          href='https://www.softwaretestinghelp.com/requirements-elicitation-techniques/'
          text='View All'
        />

        <Notes />
      </article>

      <article class='flex col items-center justify-between layer rounded'>
        <h3 class='info card-sub'>Design Patterns</h3>

        <ConnectFactory href='https://www.digitalocean.com/community/tutorials/gangs-of-four-gof-design-patterns' />

        <Results />
      </article>

      <div class='production flex justify-between items-center'>
        <h3 class='card-sub' id='candidate'>
          Elicitation Tech
        </h3>

        <nav class='flex justify-between gap' aria-labelledby='candidate'>
          <button
            type='button'
            class={ActionTypes.SuperEllipse}
            aria-label='Previous'
            onClick={prev}
          >
            <PlayPrevIcon />
          </button>
          <button
            type='button'
            class={ActionTypes.SuperEllipse}
            aria-label='Next'
            onClick={next}
          >
            <PlayNextIcon />
          </button>
        </nav>
      </div>

      <div class='production' use:slider>
        <p class='info box view rounded'>
          Once the business analysis has communicated with stakeholders for
          understanding their requirements, it can be described as elicitation.
          Requirement elicitation can be done by communicating with stakeholders
          directly or by doing some research, experiments.
        </p>
        <p class='info ghost view rounded'>
          Brainstorming is used to generate new ideas and find a solution for a
          specific issue. The members can be domain experts, subject matter
          experts. Multiple ideas and information give you a repository of
          knowledge and you can choose from different ideas.
        </p>
        <p class='info price view rounded'>
          Interview techniques should be used for building strong relationships
          between business analysts and stakeholders. In this technique, the
          interviewer directs the question to stakeholders to obtain
          information.
        </p>
        <p class='info document view rounded'>
          Document Analysis is used to gather business information by
          reviewing/examining the available materials that describe the business
          environment. This analysis is helpful to validate the implementation
          of current solutions and is also helpful in understanding the business
          need.
        </p>
        <p class='info alice view rounded'>
          For Survey, a set of questions is given to stakeholders to quantify
          their thoughts. After collecting the responses from stakeholders, data
          is analyzed to identify the area of interest of stakeholders.
        </p>
        <p class='info layer view rounded'>
          Prototyping is used to identify missing or unspecified requirements.
          In this technique, frequent demos are given to the client by creating
          the prototypes so that client can get an idea of how the product will
          look like. Prototypes can be used to create a mock-up of sites, and
          describe the process using diagrams.
        </p>
      </div>

      <p class='production grey-light term flex justify-center' role='status'>
        {current() + 1} out of 6
      </p>
    </>
  );
};

export default Reviews;
