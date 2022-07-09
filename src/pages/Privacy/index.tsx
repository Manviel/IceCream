import type { Component } from 'solid-js';

import Header from '../../components/Header';
import BackwardNavigation from '../../components/Header/BackwardNavigation';

import './Privacy.css';

const Privacy: Component = () => (
  <div class='page view rounded content-full flex col'>
    <BackwardNavigation subtitle='Privacy' />

    <Header spot='Designed for your policy' />

    <article class='layer view content-full rounded screen'>
      <h2 class='info'>Kanban vs Scrum</h2>
      <p class='info'>
        Kanban is a methodology centered around visualizing tasks, while Scrum
        is a methodology that structures workflow and team culture to deliver
        projects in short timelines.
      </p>
      <p class='info'>
        Kanban delivers tasks continuously until the project is finished, while
        Scrum delivers chunks of deliverables in one to four-week periods.
      </p>
      <a
        href='https://www.coursera.org/articles/kanban-vs-scrum'
        target='_blank'
        rel='noopener noreferrer'
        class='connect'
      >
        Learn more
      </a>
    </article>

    <article class='layer view content-full rounded screen'>
      <h2 class='info'>Functional and non functional requirements</h2>
      <p class='info'>
        Functional requirements can be most simply defined as:
        <b> Something the system must do</b>. If the system does not meet a
        functional requirement it will fail. The functional requirement concept
        can also be understood through reviewing the system in terms of inputs
        and outputs. Functional requirements specify what the system must do in
        response to different inputs and what it must output.
      </p>
      <p class='info'>
        Non functional requirements in software engineering can be explained as:
        <b> Requirements that describe how the system works</b>. Non functional
        requirements are focused on how the system goes about delivering a
        specific function. Non functional requirements do not have an impact on
        the functionality of the system but they do impact on how it will
        perform. In short, non functional requirements are all about system
        usability. If non functional requirements are not met, users may become
        frustrated with how the system works and go elsewhere.
      </p>
      <a
        href='https://enkonix.com/blog/functional-requirements-vs-non-functional'
        target='_blank'
        rel='noopener noreferrer'
        class='connect'
      >
        Learn more
      </a>
    </article>

    <article class='layer view content-full rounded screen'>
      <h2 class='info'>Scope creep and Gold plating</h2>
      <p class='info'>
        Gold plating happens when the project team adds extra features that were
        not part of the original scope, usually as “freebies” for the client.
        The client may appreciate the extra work, but they could also be upset
        that changes were made without their approval. However, besides
        increasing costs, risks, and time delays, you have also increased your
        client’s expectations and set a troubling precedent.
      </p>
      <p class='info'>
        Scope creep occurs through uncontrolled changes or expansions to your
        project scope without adjusting the project’s time, cost, or other
        resources. It usually happens little by little and often creates issues
        in later stages. In scope creep, the scope changes, but other project
        details do not change accordingly. The scope is expanded without
        considering the impact on your project schedule, budget, risks, and
        more.
      </p>
      <a
        href='https://projectmanagementacademy.net/resources/blog/gold-plating-vs-scope-creep/'
        target='_blank'
        rel='noopener noreferrer'
        class='connect'
      >
        Learn more
      </a>
    </article>
  </div>
);

export default Privacy;
