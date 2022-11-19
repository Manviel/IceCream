import { Component, For, createEffect } from 'solid-js';

import PageDecorator from '../../components/PageDecorator';

import Article from './Article';

import './Privacy.css';

const containers = [
  {
    name: 'Kanban vs Scrum',
    link: 'https://www.coursera.org/articles/kanban-vs-scrum',
    content: [
      `Kanban is a methodology centered around visualizing tasks, while Scrum is a methodology that
      structures workflow and team culture to deliver projects in short timelines.`,
      `Kanban delivers tasks continuously until the project is finished, while Scrum delivers chunks of
      deliverables in one to four-week periods.`,
    ],
    titles: ['Project management'],
    date: 'Jul 9, 2022',
  },
  {
    name: 'Functional and non functional requirements',
    link: 'https://enkonix.com/blog/functional-requirements-vs-non-functional',
    content: [
      `If the system does not meet a functional requirement it will
      fail. The functional requirement concept can also be understood through
      reviewing the system in terms of inputs and outputs. Functional
      requirements specify what the system must do in response to different
      inputs and what it must output.`,
      `Non functional requirements are focused on how the system goes
      about delivering a specific function. Non functional requirements do not
      have an impact on the functionality of the system but they do impact on
      how it will perform. In short, non functional requirements are all about
      system usability. If non functional requirements are not met, users may
      become frustrated with how the system works and go elsewhere.`,
    ],
    titles: [
      'Functional requirements - Something the system must do',
      'Non functional - Requirements that describe how the system works',
    ],
    date: 'Jul 10, 2022',
  },
  {
    name: 'Scope creep and Gold plating',
    link: 'https://projectmanagementacademy.net/resources/blog/gold-plating-vs-scope-creep/',
    content: [
      `The scope of the project refers to all the work and processes required to be done to deliver the product and the product scope refers to technical specifications, features, functions of the product itself.`,
      `Gold plating happens when the project team adds extra features that were
      not part of the original scope, usually as “freebies” for the client.
      The client may appreciate the extra work, but they could also be upset
      that changes were made without their approval. However, besides
      increasing costs, risks, and time delays, you have also increased your
      client’s expectations and set a troubling precedent.`,
      `Scope creep occurs through uncontrolled changes or expansions to your
      project scope without adjusting the project’s time, cost, or other
      resources. It usually happens little by little and often creates issues
      in later stages. In scope creep, the scope changes, but other project
      details do not change accordingly. The scope is expanded without
      considering the impact on your project schedule, budget, risks, and more.`,
    ],
    titles: ['Project scope', 'Product scope'],
    date: 'Jul 11, 2022',
  },
  {
    name: 'Estimation techniques',
    link: 'https://www.wrike.com/blog/project-estimation-techniques/',
    content: [
      `For example, a project cost estimate is a general idea of the price model for a project.
      Without accurate estimates, it’s impossible to plan your project. If you
      don’t have an idea of how long the project will take or what resources
      you will need, there is no way to ensure you’ll have the right people,
      materials, or tools available when you need them.`,
      `A top-down estimating technique assigns an overall time for the project
      and then breaks it down into discrete phases, work, and tasks.`,
      `Using this estimation technique, you start by estimating each individual
      task or aspect of the project. Then you combine all those separate
      estimates to build up the overall project estimate.`,
      `This technique involves relying on the experience and gut feel of
      experts to estimate projects. It’s most useful when you’re planning a
      standard project that is similar to projects your team has completed before.`,
      `Comparative estimation uses past project data combined with a top-down
      approach to estimate project duration. If the average completion time of
      similar projects was eight months, you’d assume the current one will
      take eight months. Then you can break those eight months down across
      tasks and activities to get your lower-level work estimates.`,
      `Also uses past project data, but it attempts to adjust the data to
      reflect each project's differences. This technique takes the detail of
      past projects and pro-rates it to estimate the current project.`,
      `A technique sometimes used for creating bottom-up estimates. Rather than
      assuming one duration for a task, you may assign three: optimistic,
      pessimistic, and most likely. These three numbers are averaged to create
      your actual estimate.`,
    ],
    titles: [
      'Rough calculation of something',
      'Top-down',
      'Bottom-up',
      'Expert judgment',
      'Comparative or analogous',
      'Parametric model',
      'Three-point',
    ],
    date: 'Jul 12, 2022',
  },
  {
    name: 'Authentication and Authorization',
    link: 'https://www.sailpoint.com/identity-library/difference-between-authentication-and-authorization/',
    content: [
      `Authentication is a process that verifies that someone or something is
      who they say they are. Technology systems typically use some form of
      authentication to secure access to an application or its data.`,
      `Authorization is the security process that determines a user or
      service's level of access. In technology, we use authorization to give
      users or services permission to access some data or perform a particular action.`,
    ],
    titles: ['Process of verifying'],
    date: 'Jul 19, 2022',
  },
  {
    name: 'What is Unit testing',
    link: 'https://www.educative.io/blog/unit-testing-best-practices-overview',
    content: [
      `Unit testing ensures that the units within your program are working as expected.`,
      `When writing a test case, be sure that you’re considering all possible
      scenarios. In other words, don’t just write a test for the happy path.
      Think about other scenarios as well, such as error handling.`,
      `A good unit test name should explicitly reflect the intent of the test
      case. Follow consistent naming conventions, and only use shorthand if
      they’re easily understood by a reader. Writing good test names supports
      code readability, which will make it easier for yourself and others to
      extend that code into the future.`,
      `Opt for automated unit testing with the help of a unit testing
      framework. An even better practice is automating tests in your
      continuous integration (CI/CD) pipeline.`,
      `The goal is to have consistent outputs for tests in order to verify the
      desired function. Unit tests should therefore be deterministic. In other
      words, as long as the test code isn’t changed, a deterministic test
      should have consistent behavior every time the test is run.`,
      `As a unit testing best practice, it improves your test’s readability by
      giving it a logical flow. Arrange the setup and initialization for the
      test. Act on the unit for the given test. Assert or verify the outcome.`,
      `TDD - software development process through which we enhance our test
      cases and software code in parallel. In contrast to a typical
      development methodology, TDD involves writing test code before
      production code.`,
      `Each test should focus on a single use case, and verify the output is as
      expected for that tested method. By focusing on one use case, you’ll
      have a clearer line of sight into the root problem in the event that a
      test fails.`,
      `To reduce the chance of bugs, your test code should have little to no
      logical conditions or manual string concatenations.`,
      `Tests should not be dependent on each other. By reducing dependencies
      between units, test runners can simultaneously run tests on different
      pieces of code. A unit can be considered testable only if its
      dependencies are staged within the test code. No real-world or external
      dependencies should affect the outcome of the test.`,
      `While we can aim for 100% test coverage, this might not be always
      desirable or possible. That being said, we should aim for the most
      possible coverage given our constraints.`,
      `Maintaining test documentation will help both developers and, in some
      cases, the end users. Reviewable: A test by any given resource is
      reviewable by others. Repeatable: A test is documented such that it can
      be repeated multiple times. This enables us to verify that a bug is
      fixed in an updated piece of code by repeating the same test.
      Archivable: Tests and related bugs can be archived in documentation,
      serving as a valuable resource for future extensions of the project.`,
    ],
    titles: [
      'Software development proces',
      'Write tests for a number of scenarios',
      'Write good test names',
      'Set up automated tests',
      'Write deterministic tests',
      'Arrange, Act, and Assert',
      'Write tests before or during development',
      'One use case per unit test',
      'Avoid logic in tests',
      'Reduce test dependencies',
      'Aim for maximum test coverage',
      'Keep proper test documentation',
    ],
    date: 'Jul 21, 2022',
  },
  {
    name: 'OOD principles',
    link: 'https://meline.lviv.ua/development/other/ood/',
    content: [
      `Single responsibility - the class should be responsible for one task. If
      a class is responsible for solving several tasks, then its subsystems
      that implement the solution of these tasks turn out to be connected with
      each other, in which case changes in one such subsystem lead to changes in another.`,
      `Open-closed - Program entities (classes, modules, functions) must be
      open for extension, but not for modification.`,
      `Liskov substitution - descendant classes should be able to be used
      instead of the parent classes from which they are derived, without
      breaking the program.`,
      `Interface segregation - create highly specialized interfaces designed
      for a specific client. Interfaces that are too large should be divided
      into smaller and more specific ones so that the program methods of these
      interfaces only know about the methods that they use to work.`,
      `Dependency inversion - upper-level modules should not depend on
      lower-level modules, and lower-level modules should not depend on
      upper-level modules. Both types of modules must depend on abstractions.`,
    ],
    titles: ['Code smells'],
    date: 'Aug 12, 2022',
  },
  {
    name: 'UML Diagram',
    link: 'https://www.smartdraw.com/uml-diagram/',
    content: [
      `UML is a way of visualizing a software program using a collection of
      diagrams. A complex enterprise application with many collaborators will
      require a solid foundation of planning and clear, concise communication
      among team members as the project progresses. Visualizing user
      interactions, processes, and the structure of the system you're trying
      to build will help save time down the line and make sure everyone on the
      team is on the same page.`,
      `They describe the static structure of a system.`,
      `They organize elements of a system into related groups to minimize
      dependencies between packages.`,
      `They describe the static structure of a system at a particular time.`,
      `They model the functionality of a system using actors and use cases.`,
      `They illustrate the dynamic nature of a system by modeling the flow of
      control from activity to activity. An activity represents an operation
      on some class in the system that results in a change in the state of the
      system. Typically, they are used to model workflow or business processes
      and internal operation.`,
      `They describe interactions among classes in terms of an exchange of
      messages over time.`,
      `They describe the dynamic behavior of a system in response to external
      stimuli. They are especially useful in modeling reactive objects whose
      states are triggered by specific events.`,
      `They describe the organization of physical software components,
      including source code, run-time (binary) code, and executables.`,
    ],
    titles: [
      'General-purpose',
      'Class Diagram',
      'Package Diagram',
      'Object Diagram',
      'Use Case Diagram',
      'Activity Diagram',
      'Sequence Diagram',
      'State Diagram',
      'Component Diagram',
    ],
    date: 'Sep 8, 2022',
  },
  {
    name: 'Calculating the Velocity',
    link: 'https://michaellant.com/2010/07/23/calculating-the-velocity-of-your-agile-projects/',
    content: [
      `Time is the length of our Sprint which in my projects is two weeks.
      Velocity is thus Units of Effort Completed / Sprint.`,
      `The number and variety of factors that can affect the Velocity of a team are both significant in number, and difficult to quantify.
      Many of the factors will cancel each other out (electronics systems depend on this principle for noise reduction), but the net effect will be a bias on the team Velocity.`,
      `It is important to have a predictable Velocity. By reducing Friction and minimizing unnecessary Velocity changes prior to Calibration, you have optimized the individual and team Velocities.`,
    ],
    titles: ['Units of Effort Completed per Sprint'],
    date: 'Nov 10, 2022',
  },
];

const transformCase = (str: string) =>
  (str = str.replace(/\s+/g, '-').toLowerCase());

const Privacy: Component = () => {
  createEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute('id');

          if (entry.intersectionRatio > 0) {
            const article = document.querySelector(`.spy-nav a[href="#${id}"]`);

            article?.classList.add('live');
          } else {
            const article = document.querySelector(`.spy-nav a[href="#${id}"]`);

            article?.classList.remove('live');
          }
        });
      },
      {
        rootMargin: '-50px 0px -55%',
      }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });
  });

  return (
    <PageDecorator subtitle='Privacy' headline='Designed for your policy'>
      <div class='privacy'>
        <div class='flex col quick'>
          <For each={containers}>
            {(section) => (
              <Article
                name={section.name}
                href={section.link}
                id={transformCase(section.name)}
                date={section.date}
              >
                <For each={section.content}>
                  {(content, i) => (
                    <>
                      {section.titles && (
                        <h3 class='info'>{section.titles[i()]}</h3>
                      )}
                      <p class='info'>{content}</p>
                    </>
                  )}
                </For>
              </Article>
            )}
          </For>
        </div>

        <nav class='spy-nav flex col' aria-label='Contents'>
          <For each={containers}>
            {(section) => (
              <a href={`#${transformCase(section.name)}`}>{section.name}</a>
            )}
          </For>
        </nav>
      </div>
    </PageDecorator>
  );
};

export default Privacy;
