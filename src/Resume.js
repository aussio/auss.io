/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-use-before-define */
/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as COLORS from './theme/colors';
import * as STYLES from './theme/styles';
import Accordion from './Accordion';


export default function Resume() {
  const now = new Date();
  const UNEMPLOYED_START = new Date('2019-10-25');
  const SE2_START = new Date('2017-01-20');
  const SE1_START = new Date('2016-01-20');
  const WPE_SUPPORT_START = new Date('2014-01-20');
  const HOSTGATOR_MANAGER_START = new Date('2013-05-01');
  const HOSTGATOR_SUPPORT_START = new Date('2012-06-01');

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
              position: 'relative',
              textDecoration: 'none',
              color: 'white',
              background: COLORS.normal,
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
        <HeaderWithTimeElapsed
          headerSize="2"
          dateStart={SE1_START}
          dateEnd={now}
        >
          Software Engineering
        </HeaderWithTimeElapsed>
        <HeaderWithTimeElapsed
          headerSize="3"
          dateStart={UNEMPLOYED_START}
          dateEnd={now}
          offAndOn
        >
          Vacation & Personal Projects
        </HeaderWithTimeElapsed>
        <JobDescription>
          <h4 css={{
            fontSize: '22px',
            margin: 0,
          }}
          >
            "Effective Notes" (React and Firebase)
          </h4>
          <p>
            Assisted in the creation of the first event-driven system in the newly-forming
            microservice architecture - a horizontally-scaling, declarative API serving millions
            of requests per week
          </p>
          <h4 css={{
            fontSize: '22px',
            margin: 0,
          }}
          >
            This Website (React and Django)
          </h4>
          <p>
            Assisted in the creation of the first event-driven system in the newly-forming
            microservice architecture - a horizontally-scaling, declarative API serving millions
            of requests per week
          </p>
        </JobDescription>
        <Accordion
          header="Why did I leave?"
          backgroundColor={COLORS.yellow}
          borderColor={COLORS.yellow}
        >
          <strong>
            I left because I wanted to do something that inspired me.
          </strong>
          <p>
            By this point in my career, I had worked in Web Hosting for about 7 and a half years and WP Engine for over 5 and a half.
          </p>
        </Accordion>
        <ResumeSection
          background={COLORS.veryVeryLight}
        >
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
          <JobDescription>
            <h4 css={{
              fontSize: '22px',
              margin: 0,
            }}
            >
              Event-driven architecture & microservies
            </h4>
            <p>
              Assisted in the creation of the first event-driven system in the newly-forming
              microservice architecture - a horizontally-scaling, declarative API serving millions
              of requests per week
            </p>
            <h4 css={{
              fontSize: '22px',
              margin: 0,
            }}
            >
              Google-style SRE
            </h4>
            <p>
              Setup Google SRE-style SLO’s and SLA’s to monitor and alert on our own team’s
              systems, while teaching and guiding other teams to do the same
            </p>
            <h4 css={{
              fontSize: '22px',
              margin: 0,
            }}
            >
              Maintain monolith and factor out services
            </h4>
            <p>
              Thought-leader and domain expert on the largest legacy monolithic repo, helping to
              maintain and refactor as our organization moved towards microservices
            </p>
            <h4 css={{
              fontSize: '22px',
              margin: 0,
            }}
            >
              Teaching fellow engineers
            </h4>
            <p>
              Leader of an internal continuing education group for junior and mid-level software
              engineers aimed at proactive, intentional advancement of our skills
            </p>
            <h4 css={{
              fontSize: '22px',
              margin: 0,
            }}
            >
              Strong Scrum skills
            </h4>
            <p>
              Firm believer in Scrum and always actively participating in project management
            </p>
            <h4 css={{
              fontSize: '22px',
              margin: 0,
            }}
            >
              Testing and CI/CD
            </h4>
            <p>
              Used a combination of Docker, Kubernetes, Terraform, and Jenkins to
              comprehensively test our applications and automate continuous deployments
            </p>
            <p>
              Regularly made contributions in a polyglot environment using PHP, Python, and Go
            </p>
          </JobDescription>
        </ResumeSection>
        <HeaderWithTimeElapsed
          headerSize="3"
          dateStart={SE1_START}
          dateEnd={SE2_START}
        >
          Software Engineer I
        </HeaderWithTimeElapsed>
      </ResumeSection>
      <ResumeSection
        background={COLORS.veryVeryLightRed}
      >
        <Accordion
          header="Moving from Support to Software"
          backgroundColor={COLORS.yellow}
          borderColor={COLORS.yellow}
        >
          <strong>
            I left because I wanted to do something that inspired me.
          </strong>
          <p>
            By this point in my career, I had worked in Web Hosting for about 7 and a half years and WP Engine for over 5 and a half.
          </p>
        </Accordion>
        <HeaderWithTimeElapsed
          headerSize="2"
          dateStart={HOSTGATOR_SUPPORT_START}
          dateEnd={SE1_START}
        >
          Customer Support
        </HeaderWithTimeElapsed>
        <JobDescription>
          <p>I think that Support is an excellent experience for nearly any position within a typical "Engineering" or "R&D" department. I think that Support is an excellent experience for nearly any position within a typical "Engineering" or "R&D" department. >I think that Support is an excellent experience for nearly any position within a typical "Engineering" or "R&D" department. I think that Support is an excellent experience for nearly any position within a typical "Engineering" or "R&D" department. I think that Support is an excellent experience for nearly any position within a typical "Engineering" or "R&D" department. >I think that Support is an excellent experience for nearly any position within a typical "Engineering" or "R&D" department. </p>
        </JobDescription>
        <ResumeSection
          background={COLORS.veryVeryLightRed}
        >
          <HeaderWithTimeElapsed
            headerSize="3"
            dateStart={WPE_SUPPORT_START}
            dateEnd={SE1_START}
          >
            Technical Support I, II, & III
        </HeaderWithTimeElapsed>
        </ResumeSection>
        <HeaderWithTimeElapsed
          headerSize="3"
          dateStart={HOSTGATOR_MANAGER_START}
          dateEnd={WPE_SUPPORT_START}
        >
          Support Manager
        </HeaderWithTimeElapsed>
        <ResumeSection
          background={COLORS.veryVeryLightRed}
        >
          <HeaderWithTimeElapsed
            headerSize="3"
            dateStart={HOSTGATOR_SUPPORT_START}
            dateEnd={HOSTGATOR_MANAGER_START}
          >
            Technical Support I & II
        </HeaderWithTimeElapsed>
        </ResumeSection>
      </ResumeSection>
    </div>
  );
}

function ResumeSection({ background, children, className }) {
  return (
    <section
      css={{
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
  headerSize, dateStart, dateEnd,
  offAndOn, subHeader, children, className,
}) {
  const HeaderTag = `h${headerSize}`;
  const offAndOnText = offAndOn ? '(off and on)' : '';

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
        text={`${getYearsAndMonthsPassed(dateStart, dateEnd)} ${offAndOnText}`}
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
