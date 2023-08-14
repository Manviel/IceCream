import { Component, ParentComponent } from 'solid-js';
import { createSlider } from 'solid-slider';

import { ActionTypes } from '../../../models/config';
import { IDType } from '../../../models';

import PlayNextIcon from '../../../assets/icons/play-next.svg';
import PlayPrevIcon from '../../../assets/icons/play-prev.svg';

import 'solid-slider/slider.css';

const SlideItem: ParentComponent<IDType> = ({ children, id }) => (
  <p class={`view rounded info ${id}`} aria-roledescription='slide'>
    {children}
  </p>
);

const Reviews: Component = () => {
  const [slider, { current, next, prev }] = createSlider({
    loop: true,
    slides: { perView: 1.2, spacing: 10 },
  });

  return (
    <>
      <header class='production flex justify-between items-center'>
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
      </header>

      <section class='production' aria-roledescription='carousel' use:slider>
        <SlideItem id='box'>
          Once the business analysis has communicated with stakeholders for
          understanding their requirements, it can be described as elicitation.
          Requirement elicitation can be done by communicating with stakeholders
          directly or by doing some research, experiments.
        </SlideItem>
        <SlideItem id='ghost'>
          Brainstorming is used to generate new ideas and find a solution for a
          specific issue. The members can be domain experts, subject matter
          experts. Multiple ideas and information give you a repository of
          knowledge and you can choose from different ideas.
        </SlideItem>
        <SlideItem id='price'>
          Interview techniques should be used for building strong relationships
          between business analysts and stakeholders. In this technique, the
          interviewer directs the question to stakeholders to obtain
          information.
        </SlideItem>
        <SlideItem id='document'>
          Document Analysis is used to gather business information by
          reviewing/examining the available materials that describe the business
          environment. This analysis is helpful to validate the implementation
          of current solutions and is also helpful in understanding the business
          need.
        </SlideItem>
        <SlideItem id='alice'>
          For Survey, a set of questions is given to stakeholders to quantify
          their thoughts. After collecting the responses from stakeholders, data
          is analyzed to identify the area of interest of stakeholders.
        </SlideItem>
        <SlideItem id='layer'>
          Prototyping is used to identify missing or unspecified requirements.
          In this technique, frequent demos are given to the client by creating
          the prototypes so that client can get an idea of how the product will
          look like. Prototypes can be used to create a mock-up of sites, and
          describe the process using diagrams.
        </SlideItem>
      </section>

      <p class='production grey-light term flex justify-center' role='status'>
        {current() + 1} out of 6
      </p>
    </>
  );
};

export default Reviews;
