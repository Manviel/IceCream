import { Component, For } from 'solid-js';

import { ISegregation } from '../../../global';

const listItems: ISegregation<string>[] = [
  {
    title: 'box',
    description: `Once the business analysis has communicated with stakeholders for
    understanding their requirements, it can be described as elicitation.
    Requirement elicitation can be done by communicating with stakeholders
    directly or by doing some research, experiments.`
  },
  {
    title: 'ghost',
    description: `Brainstorming is used to generate new ideas and find a solution for a
    specific issue. The members can be domain experts, subject matter
    experts. Multiple ideas and information give you a repository of
    knowledge and you can choose from different ideas.`
  },
  {
    title: 'price',
    description: `Interview techniques should be used for building strong relationships
    between business analysts and stakeholders. In this technique, the
    interviewer directs the question to stakeholders to obtain
    information.`
  },
  {
    title: 'material',
    description: `Document Analysis is used to gather business information by
    reviewing/examining the available materials that describe the business
    environment. This analysis is helpful to validate the implementation
    of current solutions and is also helpful in understanding the business
    need.`
  },
  {
    title: 'alias',
    description: `For Survey, a set of questions is given to stakeholders to quantify
    their thoughts. After collecting the responses from stakeholders, data
    is analyzed to identify the area of interest of stakeholders.`
  },
  {
    title: 'card',
    description: `Prototyping is used to identify missing or unspecified requirements.
    In this technique, frequent demos are given to the client by creating
    the prototypes so that client can get an idea of how the product will
    look like. Prototypes can be used to create a mock-up of sites, and
    describe the process using diagrams.`
  }
];

const Reviews: Component = () => {
  return (
    <section class="screen flex col">
      <h3 class="card-sub">Elicitation Tech</h3>

      <ul class="carousel flex gap" tabindex="0">
        <For each={listItems}>
          {slide => (
            <li class={`flex carousel-item view rounded ${slide.title}`}>
              {slide.description}
            </li>
          )}
        </For>
      </ul>
    </section>
  );
};

export default Reviews;
