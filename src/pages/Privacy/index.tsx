import type { Component } from 'solid-js';

import HeaderTemplate from '../../components/Header/HeaderTemplate';
import ConnectFactory from '../../components/ConnectFactory';
import PageDecorator from '../../components/PageDecorator';

import Article from './Article';

const Privacy: Component = () => (
  <PageDecorator>
    <HeaderTemplate subtitle='Privacy' headline='Designed for your policy' />

    <Article name='Kanban vs Scrum'>
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
    </Article>

    <Article name='Functional and non functional requirements'>
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
    </Article>

    <Article name='Scope creep and Gold plating'>
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
    </Article>

    <Article name='Estimation techniques'>
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
    </Article>

    <Article name='Authentication and Authorization'>
      <p class='info'>
        Authentication is a process that verifies that someone or something is
        who they say they are. Technology systems typically use some form of
        authentication to secure access to an application or its data.
      </p>
      <p class='info'>
        Authorization is the security process that determines a user or
        service's level of access. In technology, we use authorization to give
        users or services permission to access some data or perform a particular
        action.
      </p>

      <ConnectFactory href='https://www.sailpoint.com/identity-library/difference-between-authentication-and-authorization/' />
    </Article>

    <Article name='What is Unit testing?'>
      <p class='info'>
        Unit testing ensures that the units within your program are working as
        expected.
      </p>
      <h3 class='info'>Write tests for a number of scenarios</h3>
      <p class='info'>
        When writing a test case, be sure that you’re considering all possible
        scenarios. In other words, don’t just write a test for the happy path.
        Think about other scenarios as well, such as error handling.
      </p>
      <h3 class='info'>Write good test names</h3>
      <p class='info'>
        A good unit test name should explicitly reflect the intent of the test
        case. Follow consistent naming conventions, and only use shorthand if
        they’re easily understood by a reader. Writing good test names supports
        code readability, which will make it easier for yourself and others to
        extend that code into the future.
      </p>
      <h3 class='info'>Set up automated tests</h3>
      <p class='info'>
        Opt for automated unit testing with the help of a unit testing
        framework. An even better practice is automating tests in your
        continuous integration (CI/CD) pipeline.
      </p>
      <h3 class='info'>Write deterministic tests</h3>
      <p class='info'>
        The goal is to have consistent outputs for tests in order to verify the
        desired function. Unit tests should therefore be deterministic. In other
        words, as long as the test code isn’t changed, a deterministic test
        should have consistent behavior every time the test is run.
      </p>
      <h3 class='info'>Arrange, Act, and Assert</h3>
      <p class='info'>
        As a unit testing best practice, it improves your test’s readability by
        giving it a logical flow. Arrange the setup and initialization for the
        test. Act on the unit for the given test. Assert or verify the outcome.
      </p>
      <h3 class='info'>Write tests before or during development</h3>
      <p class='info'>
        TDD - software development process through which we enhance our test
        cases and software code in parallel. In contrast to a typical
        development methodology, TDD involves writing test code before
        production code.
      </p>
      <h3 class='info'>One use case per unit test</h3>
      <p class='info'>
        Each test should focus on a single use case, and verify the output is as
        expected for that tested method. By focusing on one use case, you’ll
        have a clearer line of sight into the root problem in the event that a
        test fails.
      </p>
      <h3 class='info'>Avoid logic in tests</h3>
      <p class='info'>
        To reduce the chance of bugs, your test code should have little to no
        logical conditions or manual string concatenations.
      </p>
      <h3 class='info'>Reduce test dependencies</h3>
      <p class='info'>
        Tests should not be dependent on each other. By reducing dependencies
        between units, test runners can simultaneously run tests on different
        pieces of code. A unit can be considered testable only if its
        dependencies are staged within the test code. No real-world or external
        dependencies should affect the outcome of the test.
      </p>
      <h3 class='info'>Aim for maximum test coverage</h3>
      <p class='info'>
        While we can aim for 100% test coverage, this might not be always
        desirable or possible. That being said, we should aim for the most
        possible coverage given our constraints.
      </p>
      <h3 class='info'>Keep proper test documentation</h3>
      <p class='info'>
        Maintaining test documentation will help both developers and, in some
        cases, the end users. Reviewable: A test by any given resource is
        reviewable by others. Repeatable: A test is documented such that it can
        be repeated multiple times. This enables us to verify that a bug is
        fixed in an updated piece of code by repeating the same test.
        Archivable: Tests and related bugs can be archived in documentation,
        serving as a valuable resource for future extensions of the project.
      </p>

      <ConnectFactory href='https://www.educative.io/blog/unit-testing-best-practices-overview' />
    </Article>

    <Article name='OOD principles'>
      <p class='info'>
        Single responsibility - the class should be responsible for one task. If
        a class is responsible for solving several tasks, then its subsystems
        that implement the solution of these tasks turn out to be connected with
        each other, in which case changes in one such subsystem lead to changes
        in another.
      </p>
      <p class='info'>
        Open-closed - Program entities (classes, modules, functions) must be
        open for extension, but not for modification.
      </p>
      <p class='info'>
        Liskov substitution - descendant classes should be able to be used
        instead of the parent classes from which they are derived, without
        breaking the program.
      </p>
      <p class='info'>
        Interface segregation - create highly specialized interfaces designed
        for a specific client. Interfaces that are too large should be divided
        into smaller and more specific ones so that the program methods of these
        interfaces only know about the methods that they use to work.
      </p>
      <p class='info'>
        Dependency inversion - upper-level modules should not depend on
        lower-level modules, and lower-level modules should not depend on
        upper-level modules. Both types of modules must depend on abstractions.
      </p>

      <ConnectFactory href='https://meline.lviv.ua/development/other/ood/' />
    </Article>
  </PageDecorator>
);

export default Privacy;
