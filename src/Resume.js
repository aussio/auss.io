/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable max-len */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-use-before-define */
/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as COLORS from './theme/colors';
import * as STYLES from './theme/styles';
import Accordion from './Accordion';
import ExternalLink from './lib/ExternalLink';

export default function Resume() {
  const now = new Date();
  const UNEMPLOYED_START = new Date('2019-12-02');
  const SE2_START = new Date('2017-01-20');
  const SE1_START = new Date('2016-01-20');
  const WPE_SUPPORT_START = new Date('2014-01-20');
  const HOSTGATOR_MANAGER_START = new Date('2013-05-01');
  const HOSTGATOR_SUPPORT_START = new Date('2012-06-01');

  /*
    JSX HEADER CONSTS (to make the JSX more readable below)
  */
  const SOFTWARE_ENGINEERING = () => (
    <HeaderWithTimeElapsed
      headerSize="2"
      dateStart={SE1_START}
      dateEnd={now}
      ongoing
    >
      Software Engineering
    </HeaderWithTimeElapsed>
  );

  const PERSONAL_PROJECTS = () => (
    <HeaderWithTimeElapsed
      headerSize="3"
      dateStart={UNEMPLOYED_START}
      dateEnd={now}
      offAndOn
      ongoing
    >
      Personal Projects
    </HeaderWithTimeElapsed>
  );

  const SOFTWARE_ENGINEER_II = () => (
    <HeaderWithTimeElapsed
      headerSize="3"
      dateStart={SE2_START}
      dateEnd={UNEMPLOYED_START}
      subHeader={(
        <SubHeader
          label="Company:"
          text="WP Engine"
        />
      )}
    >
      Software Engineer II
    </HeaderWithTimeElapsed>
  );

  const SOFTWARE_ENGINEER_I = () => (
    <HeaderWithTimeElapsed
      headerSize="3"
      dateStart={SE1_START}
      dateEnd={SE2_START}
      subHeader={(
        <SubHeader
          label="Company:"
          text="WP Engine"
        />
      )}
    >
      Software Engineer I
    </HeaderWithTimeElapsed>
  );

  const CUSTOMER_SUPPORT = () => (
    <HeaderWithTimeElapsed
      headerSize="2"
      dateStart={HOSTGATOR_SUPPORT_START}
      dateEnd={SE1_START}
    >
      Customer Support
    </HeaderWithTimeElapsed>
  );


  const WPE_SUPPORT = () => (
    <HeaderWithTimeElapsed
      headerSize="3"
      dateStart={WPE_SUPPORT_START}
      dateEnd={SE1_START}
      subHeader={(
        <SubHeader
          label="Company:"
          text="WP Engine"
        />
      )}
    >
      Technical Support I, II, & III
    </HeaderWithTimeElapsed>
  );

  const SUPPORT_MANAGER = () => (
    <HeaderWithTimeElapsed
      headerSize="3"
      dateStart={HOSTGATOR_MANAGER_START}
      dateEnd={WPE_SUPPORT_START}
      subHeader={(
        <SubHeader
          label="Company:"
          text="HostGator"
        />
      )}
    >
      Support Manager
    </HeaderWithTimeElapsed>
  );

  const HG_SUPPORT = () => (
    <HeaderWithTimeElapsed
      headerSize="3"
      dateStart={HOSTGATOR_SUPPORT_START}
      dateEnd={HOSTGATOR_MANAGER_START}
      subHeader={(
        <SubHeader
          label="Company:"
          text="HostGator"
        />
      )}
    >
      Technical Support I & II
    </HeaderWithTimeElapsed>
  );

  const H4 = ({ children }) => (
    <h4
      css={{
        fontSize: '22px',
        margin: 0,
      }}
    >
      {children}
    </h4>
  );

  const ACCORDION_CSS = {
    position: 'absolute',
    zIndex: STYLES.RESUME_STICKY_ACCORDION_Z_INDEX,
    left: '2rem',
    top: '-2rem',
    '@media(max-width: 1100px)': {
      position: 'relative',
      left: 'unset',
      top: '-3rem',
      zIndex: 'unset',
    },
  };

  return (
    <div
      css={{
        textAlign: 'center',
      }}
    >
      <header
        css={{
          background: 'white',
          padding: '3rem 0',
        }}
      >
        <h1
          css={{
            textAlign: 'center',
            margin: 0,
          }}
        >
          Interactive Resume
        </h1>
        <div
          css={{
            padding: '2rem',
          }}
        >
          <a
            target="_blank" // Open target in new window
            rel="noopener noreferrer" // Security stuff with opening in new window
            href="https://res.cloudinary.com/https-auss-io/image/upload/v1591987334/code%20snippets/AustinCurtisResume.pdf"
            css={{
              textDecoration: 'none',
              background: COLORS.normal,
              color: 'white',
              boxShadow: '0 3px 5px rgba(0,0,0,.65)',
              padding: '1rem',
              borderRadius: STYLES.BUTTON_BORDER_RADIUS,
              ':hover': {
                filter: 'brightness(105%)',
              },
            }}
          >
            Simplified Printable Version
          </a>
        </div>
        <section
          css={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '0 20%',
            '*': {
              width: '200px',
              height: 'fit-content',
              margin: '1rem',
              fontWeight: 600,
            },
          }}
        >
          <h4>job history</h4>
          <h3>+</h3>
          <h4>getting to know me</h4>
          <h3>+</h3>
          <h4>answers to common resume questions</h4>
        </section>
      </header>
      <ResumeSection
        background={COLORS.veryVeryLight}
      >
        <ResumeSection
          css={{
            position: 'relative',
            marginBottom: '2rem',
          }}
        >
          <SOFTWARE_ENGINEERING />
          <PERSONAL_PROJECTS />
          <JobDescription>
            <p>
              Upon taking an extended break, I knew that I wanted to still be writing code. I decided to take the ample free time to learn the front-end skills that I'd often wanted to have.
            </p>
            <p>
              While learning React and CSS, I found a need for a note taking and learning app that worked better for actually retaining a large amount of knowledge long term. This led me to starting working on Effective Notes as a way to learn React and CSS with a real project.
            </p>
            <p>
              As the time for a job grew near, I used those same skills to build this website to hopefully help me stand out some from the crowd.
            </p>
          </JobDescription>
          <JobDescription>
            <H4>
              "Effective Notes" (React and Firebase)
            </H4>
            <p>
              A note taking and notecard application with the goal of helping the user actually retain the information they are learning. So far, I've stopped working on the project before completing a version I am proud to publish.
            </p>
            <div
              css={{
                display: 'flex',
                justifyContent: 'space-evenly',
                '@media(max-width: 750px)': {
                  flexDirection: 'column',
                  alignItems: 'center',
                },
              }}
            >
              <img
                src="https://res.cloudinary.com/https-auss-io/image/upload/v1592933699/code%20snippets/Screen_Shot_2020-01-04_at_8.32.09_PM_hmlvgv.png"
                alt="Screenshot of Effective Notes App"
                css={{
                  maxHeight: '100%',
                  maxWidth: '400px',
                  margin: 0,
                }}
              />
              <img
                src="https://res.cloudinary.com/https-auss-io/image/upload/v1592933819/code%20snippets/Screen_Shot_2020-01-24_at_3.41.59_PM_psu48b.png"
                alt="Screenshot of Effective Notes App"
                css={{
                  maxHeight: '250px',
                  maxWidth: '400px',
                  margin: 0,
                }}
              />
            </div>
            <ul
              css={{
                '& > li': {
                  marginLeft: '2rem',
                  paddingBottom: '.5rem',
                },
              }}
            >
              <li>
                A purely React frontend using <ExternalLink to="https://reactjs.org/docs/context.html">React's Context API</ExternalLink> for shared state and <ExternalLink to="https://emotion.sh/docs/introduction">Emotion</ExternalLink> for CSS-in-JS.
              </li>
              <li>
                The project uses <ExternalLink to="https://firebase.google.com/docs/firestore/">Google Cloud Firestore</ExternalLink> for a fast scaling NoSQL backend. It uses the Firestore Auth rules for securing a user's connection to the backend and isolating users and Firestore Hosting to host the user's images.
                <ul>
                  <li>
                    Firestore was chosen for being extremely cost-effective, easily understandable auth out of the box, an already-made API for the NoSQL backend, and a NoSQL Document store that readily fit my application's data modelling needs.
                  </li>
                </ul>
              </li>
              <li>I learned a ton about complex state management in React, non-trivial applications in React, NoSQL databases, and CSS.</li>
            </ul>
            <H4>
              This Website (React and Django)
            </H4>
            <p>
              I made this website to be my online resume, blog, and online library. I have a few different fun ideas floating around that I'd like to tinker with for a personal dashboard and this project gives me a nice launching point to do that. This site's <ExternalLink to="https://github.com/aussio/auss.io">Github repo can be found here</ExternalLink>.
            </p>
            <ul
              css={{
                '& > li': {
                  marginLeft: '2rem',
                  paddingBottom: '.5rem',
                },
              }}
            >
              <li>
                A purely React frontend using the vanilla Fetch API for communication with the backend and <ExternalLink to="https://emotion.sh/docs/introduction">Emotion</ExternalLink> for CSS-in-JS.
              </li>
              <li>
                A <ExternalLink to="https://www.django-rest-framework.org/">Django Rest Framework</ExternalLink> backend, which gives me a nice blog editing experience with just a couple of free plugins. I mostly chose Django because Python is my preferred language and I think <ExternalLink to="https://zapier.com/jobs/">Zapier</ExternalLink> looks like a really neat remote company to work for.
              </li>
              <li>
                Pushes to GitHub are automatically built and tested using <ExternalLink to="https://travis-ci.org/">TravisCI</ExternalLink>. Merges to the master branch are automatically deployed to Heroku. These were chosen since they are simple, effective, and free.
              </li>
            </ul>
          </JobDescription>
        </ResumeSection>
        <ResumeSection
          background={COLORS.veryVeryLight}
        >
          <Accordion
            header="Why did I leave?"
            backgroundColor={COLORS.blue}
            borderColor={COLORS.blue}
            textColor={COLORS.text}
            css={ACCORDION_CSS}
          >
            <strong>
              I left because I wanted to work on something that inspired me.
            </strong>
            <p>
              By this point in my career, I had worked in Web Hosting for about 7 and a half years and WP Engine for over 5 and a half. I was constantly enabled to work on projects that I found interesting and I was able to work with smart, friendly people. I was in many people's dream job.
            </p>
            <p>
              Up until this point, personal skills growth was my primary inspiration at work. I wanted to gain the skills that would allow me to work on problems that <ExternalLink to="https://80000hours.org/key-ideas/">may change the world</ExternalLink>. That's a big goal, but fantastical goals inspire me. After some extremely strong mentors and tech leads left my team for another company, I was forced to reevaluate.
            </p>
            <p>
              I knew that I was a solid, contributing, maybe even strong engineer. I knew that at this stage in my skill development, most things were in the category of <ExternalLink to="https://en.wikipedia.org/wiki/There_are_known_knowns">known unknowns</ExternalLink> as opposed to unknown unknowns, allowing me to reasearch and teach myself. With this, I asked myself for what reasons I should stay at the company I'd been at for 5+ years besides momentum.
            </p>
            <p>
              I found that I had no sufficiently strong reasons to stay, so I decided to take a bold move to transition into an area that I felt had more <ExternalLink to="https://80000hours.org/key-ideas/">positive impact on the world</ExternalLink>.
            </p>
          </Accordion>
          <SOFTWARE_ENGINEER_II />
          <JobDescription>
            <p>After my first year, I asked to no longer be a "Quality Engineer" as I had found that I was spending my time as a typical Backend Engineer with a strong belief in testing.</p>
            <p> I believe that all engineers on a team are responsible for the quality of their work, including testing and deployment. I build features that I know work and will continue to work due to automated tests.</p>
            <H4>Event-driven architecture & microservices</H4>
            <p>
              I assisted in the creation of the first event-driven system in the newly-forming microservice architecture at WP Engine. It was our goal to lead by example in regards to API scalability, monitoring and metric visibility, automated alerting of problems, and SRE principles.
            </p>
            <p>We created the seam in the legacy platform monolith that allowed teams to hook into it to generate events. Alongside this we created the pub-subs to hold these events and created our API to consume them. This created the first event-driven declarative API at the company, proving to the business how achievable "it just works" automation can be.</p>
            <p>We also created a project generator using <ExternalLink to="https://yeoman.io/">Yeoman</ExternalLink> so that other teams could take advantage of our project setup to bootstrap future API's more quickly.</p>
            <H4>Google-style SRE</H4>
            <p>We setup <ExternalLink to="https://landing.google.com/sre/books/">Google SRE-style</ExternalLink> SLO’s and SLA’s to monitor and alert on our own team’s systems, while teaching and guiding other teams to do the same.</p>
            <p>I believe that if you have the appropriate engineering culture and management backing, teams fully owning their own projects in production creates for happier engineers, better code, and thus happier customers.</p>
            <H4>Teaching fellow engineers</H4>
            <p>
              For roughly 3 years of my software engineering career I was actively mentoring collegues. 2 of my mentees were promoted to Software Engineer 1 from technical support at the end of our mentorship. 1 went on to get a software engineering job at another company. A couple of others lost their drive or interest and we amicably parted ways.
            </p>
            <p>
              I was also the leader of an internal continuing education group for junior and mid-level software engineers aimed at proactive, intentional advancement of our skills. We met weekly and I researched, learned, and taught roughly 50% of the lessons. The other 50% were from other participants of the group.
            </p>
            <H4>Maintain monolith and factor out services</H4>
            <p>
              Throughout my time as a software engineer I was a part of the "Platform Stewards" group - a set of subject matter experts in the platform's large monolithic codebase tasked with overseeing the maintenance and improvement of the project, as opposed to permitting continued piling of technical debt and decline.
            </p>
            <p>
              I advised on testing strategies, making seams for code improvement (<ExternalLink to="https://www.goodreads.com/book/show/44919.Working_Effectively_with_Legacy_Code">see: Working Effectively with Legacy Code</ExternalLink>), and helped build out and evangelise a Dependency Injection Framework for making the monolith more testable.
            </p>
            <H4>Testing and CI/CD</H4>
            <p>
              I believe testing to be everyone's responsibility and it to be a necessary part of any stable, reliable system. If you want your system to be iterated upon or maintained into the future - testing is a required priority.
            </p>
            <p>
              I believe Continuous Integration and automated deployments to be necessary. Without these, you cannot guarantee your project is tested and deployed the same way every time by every individual, thus you cannot guarantee the stability of your merges and releases. It's also relatively easy and a waste of time to do these frequent steps manually. We automate things for a living.
            </p>
            <p>
              Used a combination of Docker, Kubernetes, Terraform, and Jenkins to comprehensively test our applications and automate continuous deployments. I use TravisCI for this project since it's free and dramatically simpler to set up than Jenkins.
            </p>
            <p>
              I mostly write my tests in the given language's default unit testing framework as I believe them to be sufficient and readable with significantly less domain-specific learning overhead for onboarding onto the project. I've also used Selenium and custom end-to-end frameworks where appropriate.
            </p>
            <H4>Strong Scrum skills</H4>
            <p>
              I've gone through a comprehensive Scrum training and put much intentional thought into Scrum. I believe it really is an excellent and efficient approach to organizing a larger software project with a team of contributors. I find it unnecessary overhead for my personal projects and just use a Trello board, but the principles of time estimation, <ExternalLink to="https://less.works/less/framework/potentially-shippable-product-increment.html">"potentially shippable product increments"</ExternalLink> and <ExternalLink to="https://en.wikipedia.org/wiki/Vertical_slice">"vertical slices"</ExternalLink> still hold true and useful for just about any project.
            </p>
            <H4>Interviewing</H4>
            <p>
              I've performed over 80 interviews for various positions within the Engineering department, including Software Engineer, Quality Engineer, and Scrum Master. I would say those divide up as 80%, 15%, and 5% respectively.
            </p>
            <p>
              I actually rather enjoyed being a part of the interviewing group. I think that giving a good interview can be pretty fun. I also hold the common opinion that interviewing to bring in the right people is one of the most impactful things you can do for an organization.
            </p>
          </JobDescription>
        </ResumeSection>
        <SOFTWARE_ENGINEER_I />
        <JobDescription>
          <p>I started off my software engineering career on the Quality Engineering team. Coming straight from Customer Support for nearly 4 years, I wanted to learn everything I could of this aledged, yet seemingly elusive, ability to keep bug fixes and new features from breaking our users.</p>
          <p>During the year on Quality Engineering, our team members were spread out to be embedded on various product teams. I was placed on a backend platform team to utilize my knowledge accrued while in Support.</p>
          <H4>Jenkins infrastructure</H4>
          <p>Our team managed the self-hosted Jenkins cluster for all of R&D. We wrote any shared Jenkins library code for making CI/CD pipelines and the Docker config and Docker registry management as we pushed teams towards predictable builds through docker. A large proportion of our time was spent pairing with product teams on how to build their Jenkins pipelines.</p>
          <H4>Automated platform deploys</H4>
          <p>At this point in time, the QE team was effectively responsible for any scary legacy monolith deploys. The largely manual deployment process had been handing to us the months prior and we tasked ourselves to fully automate it. This involved packing the tests into docker containers for repeatable automated testing, adding the entire suite of end-to-end tests that didn't exist to this point, lots of Ansible to land the code onto the server farm, and Jenkins automation to narrow down where during builds and tests things potentially went wrong.</p>
          <H4>Platform bug fixes</H4>
          <p>I found a large backlog of platform bugs that no one really wanted to touch since that was the legacy monolith and was such seen as scary spaghetti. Due to the combination of me starting my development career fixing platform bugs and me spending a lot of time adding platform tests, I was one of the few people interested in tackling this list. I got clearance to pull in one bug per sprint and started my journey towards becoming a real platform subject matter expert.</p>
        </JobDescription>
      </ResumeSection>
      <ResumeSection
        background={COLORS.veryVeryLightRed}
      >
        <Accordion
          header="The jump from Support to Engineering"
          backgroundColor={COLORS.blue}
          borderColor={COLORS.blue}
          textColor={COLORS.text}
          css={ACCORDION_CSS}
        >
          <p>
            As I moved up to the highest level of Support, I was looking for what my next step would be. I was extremely fortunate to happen to meet an overtly positive, helpful, and kind individual who mentored me in software engineering after helping me solve a particularly tricky customer ticket that had the root cause of being a platform bug.
          </p>
          <p>I learned that the ability for <em>me</em> to permanently fix these bugs for everyone was actually something within reach. He helped show me that programming was largely pretty straight forward. After fixing a few platform bugs I was completely hooked on the <ExternalLink to="https://en.wikipedia.org/wiki/Sense_of_agency">sense of agency</ExternalLink>.</p>
          <p>I ended up falling in love with the idea of automated testing. I saw it as a super power that allowed you to make all the complicated fixes and cool things you wanted, while protecting the ultimate goal of keeping the customer experience successful. Coming straight from nearly 4 years of Customer Support, this was a prime objective. It baffled me at the time that so many programmers chose not to use the super power. Another mentor of mine later would say she believed this to be the difference between "programmers" and "engineers". I still believe she is on to something.</p>
        </Accordion>
        <CUSTOMER_SUPPORT />
        <JobDescription>
          <p css={{
            marginTop: 0,
          }}
          >I think that Support is an excellent experience for nearly any position within a typical "Engineering" or "R&D" department. It teaches you how to troubleshoot difficult problems, how to ask polite probing questions to understand requirements, and how to communicate concisely to team members and customers.
          </p>
          <strong>Support also teaches you how to think like a user and a customer.</strong>
          <p>So often I've worked with fellow engineers that don't understand the heart of why we're implementing a given feature or the importance a fixing a certain bug simply because they aren't really putting thought into <u>not</u> how <em>they</em> would use that feature, but how the <em>customer</em> experiences it.</p>
          <p>I've mentored many Support agents and Engineers and I've not once had to try hard to explain the importance of automated testing to the Support agents. They just get it. "You mean we can <em>drastically</em> reduce the number of bugs that make it to the customers? Why does R&D not do that more?"</p>
        </JobDescription>
        <ResumeSection
          background={COLORS.veryVeryLightRed}
        >
          <WPE_SUPPORT />
          <JobDescription>
            <p css={{
              marginTop: 0,
            }}
            >I shoved together all three levels of Support at WP Engine together because the main purpose of my resume now-a-days is Software Engineer skills. Suffice to say that as the promotions went on, I gained more expertise in the WPE platform, got better at Bash, and worked more difficult bugs and issues.
            </p>
            <p>At level 3 we were what most companies, and WPE today, call "Solutions Engineer".</p>
            <H4>
              Relevant highlights to software engineering:
            </H4>
            <ul
              css={{
                '& > li': {
                  marginLeft: '2rem',
                  paddingBottom: '.5rem',
                },
              }}
            >
              <li>I wrote tickets and detailed notes to customers on a regular basis. My software and Scrum Master peers today continually comment on how nice of JIRA tickets I still write. 🤷‍♂️</li>
              <li>I wrote alongside a friend a library of tools with a command line interface to automate many of support's regular tasks. The code was in Bash and Python. We added metrics into it later and at the time of my leaving the company 4 years later, our tool had 160 daily users. We added automated testing and continuous deployment once we both moved into the R&D department since we still maintained the tools.</li>
              <li>Troubleshooting skills and platform knowledge out the wazoo. Due to the above-mentioned friend and I joining R&D, the entire department began seeing the Support department as a concentration of platform and customer experts. A couple years later and it was a very normal thing for the software engineers to go to Support for help in troubleshooting a platform bug. That still makes my heart happy. 😊</li>
            </ul>
          </JobDescription>
        </ResumeSection>
        <ResumeSection>
          <Accordion
            header="Manager to Individual Contributor"
            backgroundColor={COLORS.blue}
            borderColor={COLORS.blue}
            textColor={COLORS.text}
            css={ACCORDION_CSS}
          >
            <p>
              I actually loved being a manager. I felt that I'd grown strong bonds with my direct reports. The junior and experienced employees alike were growing in their skills and promotions. By the end of my time as manager, my team's metrics were #1 across tens of teams in Support and my top reports and I were working on an extensive continuing education series to bring up the other teams in a scalable way.
            </p>
            <strong>Then I was told to stop changing the status quo.</strong>
            <p>Unfortunately, this is how it was made clear to me that my goals and passions were misaligned with the business. I was explicitly told by the Director (my boss) that the department's goals were not to inspire the employees to grow and achieve their dreams, but rather keep them complacent and in their current positions. I was told to stop putting time into continuing education as that cost the company money and to stop encouraging my employees to grow out of their current roles.</p>
            <p>I understand that hiring is expensive and hard, but as a people leader I felt empassioned to see my team members succeed in their whole lives. The company wanted me to just focus on the bottom line. I felt this wasn't a compromise I could make and started looking for another job.</p>
          </Accordion>
          <SUPPORT_MANAGER />
          <JobDescription>
            <p>I was promoted to being a Support Manager through a classic case of simply being good at my previous position. I got lucky that I happened to enjoy and excel at the position.</p>
            <p>I learned a number of very valuable lessons as a manager.</p>
            <ul
              css={{
                '& > li': {
                  marginLeft: '2rem',
                  paddingBottom: '.5rem',
                },
              }}
            >
              <li>I learned that people's expectations and goals for any given job position are vastly varied, with a wide breadth of reasoning behind those motives. If you want to understand your collegues, you need to talk with each one of them individually and get to know them.</li>
              <li>I learned that in general, everyone <em><strong>wants</strong></em> to be empassioned for their jobs. After following the above, most people can be inspired to find more passion in their current roles. A given company may not be someone's dream job, but encouragement and understand can go an extremely long way towards overall enthusiasm and happiness.</li>
              <li>I learned that people management involves an intimidating amount of trust in your direct reports. When you are leading 20+ people, you are no longer able to take control of the wheel yourself. You don't have enough hands or hours. You can only give guidance and clear blockers for your crew that drives the ship.</li>
            </ul>
            <p>I led a team of 20 Support Agents and our team became the leaders in the Support metrics at HostGator. We were successful, but for the time being, I don't believe I would be happiest as a Manager again. I believe that my ideal role would be that of a Team Captain and not the Coach. I would like to work towards leading more teams that I'm apart of as their peer rather than manage teams. For now, I too much enjoy the ability to get my hands dirty with the implementation of the projects that I'm working on.</p>
          </JobDescription>
        </ResumeSection>
        <ResumeSection
          background={COLORS.veryVeryLightRed}
        >
          <HG_SUPPORT />
          <JobDescription>
            <p>Technical Support is where my career really began. Before this position I worked a number of part-time jobs while in school, including working as a bicycle delivery driver for Jimmy John's. That was a blast.</p>
            <p>From this job I learned to type faster than the wind, that automation is the key to efficiency and consistency, and that if you work hard you'll both make friends and get promoted.</p>
          </JobDescription>
        </ResumeSection>
      </ResumeSection>
    </div>
  );
}

function ResumeSection({ background, children, className }) {
  return (
    <section
      css={{
        position: 'relative',
        padding: '1rem 0',
        background,
      }}
      className={className}
    >
      {children}
    </section>
  );
}

function JobDescription({ children, className }) {
  return (
    <section
      css={{
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '2rem',
        padding: '0 2rem',
      }}
    >
      <div
        css={{
          textAlign: 'left',
          maxWidth: '1000px',
        }}
        className={className}
      >
        {children}
      </div>
    </section>
  );
}

function HeaderWithTimeElapsed({
  headerSize, dateStart, dateEnd, offAndOn,
  ongoing, subHeader, children, className,
}) {
  const HeaderTag = `h${headerSize}`;
  const offAndOnText = offAndOn ? '(off and on)' : '';
  const ongoingText = ongoing ? ' - ongoing' : '';

  return (
    <section
      css={{
        marginBottom: '1rem',
      }}
    >
      <HeaderTag
        css={{
          marginBottom: 0,
          lineHeight: '1.4',
        }}
        className={className}
      >
        {children}
      </HeaderTag>
      {subHeader}
      <SubHeader
        label="Total time:"
        text={`${getYearsAndMonthsPassed(dateStart, dateEnd)} ${offAndOnText}${ongoingText}`}
      />
    </section>
  );
}

function SubHeader({ label, text }) {
  return (
    <div
      css={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '*': {
          height: 'fit-content',
          color: 'lightgrey',
          fontStyle: 'italic',
        },
      }}
    >
      <strong>{label}</strong>
      <p css={{
        paddingLeft: '1rem',
        margin: 0,
      }}
      >
        {text}
      </p>
    </div>
  );
}

export function getYearsAndMonthsPassed(dateStart, dateEnd) {
  let months = dateEnd.getMonth() - dateStart.getMonth();
  let years = dateEnd.getFullYear() - dateStart.getFullYear();
  // Account for partial years
  if (months < 0) {
    years -= 1;
    months = 12 + months;
  }
  // Plurals
  const yearLabel = years > 1 ? 'years' : 'year';
  const monthLabel = months > 1 ? 'months' : 'month';
  // Don't show text for 0 years or months
  const yearText = years === 0 ? '' : `${years} ${yearLabel}`;
  const monthText = months === 0 ? '' : `${months} ${monthLabel}`;

  return `${yearText} ${monthText}`.trim();
}
