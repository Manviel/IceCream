import type { Component } from 'solid-js';

import Header from '../../components/Header';
import BackwardNavigation from '../../components/Header/BackwardNavigation';
import ConnectFactory from '../../components/ConnectFactory';

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

      <ConnectFactory href='https://www.coursera.org/articles/kanban-vs-scrum' />
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

      <ConnectFactory href='https://enkonix.com/blog/functional-requirements-vs-non-functional' />
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

      <ConnectFactory href='https://projectmanagementacademy.net/resources/blog/gold-plating-vs-scope-creep/' />
    </article>

    <article class='layer view content-full rounded screen'>
      <h2 class='info'>Estimation techniques</h2>
      <p class='info'>
        An estimate is a rough calculation of something. For example, a project
        cost estimate is a general idea of the price model for a project.
        Without accurate estimates, it’s impossible to plan your project. If you
        don’t have an idea of how long the project will take or what resources
        you will need, there is no way to ensure you’ll have the right people,
        materials, or tools available when you need them.
      </p>
      <h3 class='info'>Top-down</h3>
      <p class='info'>
        A top-down estimating technique assigns an overall time for the project
        and then breaks it down into discrete phases, work, and tasks.
      </p>
      <h3 class='info'>Bottom-up</h3>
      <p class='info'>
        Using this estimation technique, you start by estimating each individual
        task or aspect of the project. Then you combine all those separate
        estimates to build up the overall project estimate.
      </p>
      <h3 class='info'>Expert judgment</h3>
      <p class='info'>
        This technique involves relying on the experience and gut feel of
        experts to estimate projects. It’s most useful when you’re planning a
        standard project that is similar to projects your team has completed
        before.
      </p>
      <h3 class='info'>Comparative or analogous</h3>
      <p class='info'>
        Comparative estimation uses past project data combined with a top-down
        approach to estimate project duration. If the average completion time of
        similar projects was eight months, you’d assume the current one will
        take eight months. Then you can break those eight months down across
        tasks and activities to get your lower-level work estimates.
      </p>
      <h3 class='info'>Parametric model</h3>
      <p class='info'>
        Also uses past project data, but it attempts to adjust the data to
        reflect each project's differences. This technique takes the detail of
        past projects and pro-rates it to estimate the current project.
      </p>
      <h3 class='info'>Three-point</h3>
      <p class='info'>
        A technique sometimes used for creating bottom-up estimates. Rather than
        assuming one duration for a task, you may assign three: optimistic,
        pessimistic, and most likely. These three numbers are averaged to create
        your actual estimate.
      </p>

      <ConnectFactory href='https://www.wrike.com/blog/project-estimation-techniques/' />
    </article>
  </div>
);

export default Privacy;
