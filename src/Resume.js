/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as COLORS from './theme/colors';


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
          background: COLORS.normal,
          color: 'white',
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
              color: COLORS.dark,
              boxShadow: '0 3px 5px rgba(0,0,0,.65)',
              padding: '1rem',
              borderRadius: '5px',
              background: 'white',
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
      <section
        css={{
          padding: '1rem',
        }}
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
        <HeaderWithTimeElapsed
          headerSize="3"
          dateStart={SE2_START}
          dateEnd={UNEMPLOYED_START}
        >
          Software Engineer II
        </HeaderWithTimeElapsed>
        <HeaderWithTimeElapsed
          headerSize="3"
          dateStart={SE1_START}
          dateEnd={SE2_START}
        >
          Software Engineer I
        </HeaderWithTimeElapsed>
      </section>
      <section
        css={{
          padding: '1rem',
          background: COLORS.veryVeryLight,
        }}
      >
        <HeaderWithTimeElapsed
          headerSize="2"
          dateStart={HOSTGATOR_SUPPORT_START}
          dateEnd={SE1_START}
        >
          Customer Support
        </HeaderWithTimeElapsed>
        <HeaderWithTimeElapsed
          headerSize="3"
          dateStart={WPE_SUPPORT_START}
          dateEnd={SE1_START}
        >
          Technical Support I, II, & III
        </HeaderWithTimeElapsed>
        <HeaderWithTimeElapsed
          headerSize="3"
          dateStart={HOSTGATOR_MANAGER_START}
          dateEnd={WPE_SUPPORT_START}
        >
          Support Manager
        </HeaderWithTimeElapsed>
        <HeaderWithTimeElapsed
          headerSize="3"
          dateStart={HOSTGATOR_SUPPORT_START}
          dateEnd={HOSTGATOR_MANAGER_START}
        >
          Technical Support I & II
        </HeaderWithTimeElapsed>
      </section>
    </div>
  );
}

function HeaderWithTimeElapsed({ headerSize, dateStart, dateEnd, offAndOn, children, className }) {
  // eslint-disable-next-line no-shadow
  function getYearsAndMonthsPassed(dateStart, dateEnd) {
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

    return `${yearText} ${monthText}`;
  }

  const HeaderTag = `h${headerSize}`;
  const offAndOnText = offAndOn ? '(off and on)' : '';

  return (
    <section>
      <HeaderTag
        css={{
          marginBottom: 0,
          lineHeight: '1.4',
        }}
        className={className}
      >
        {children}
      </HeaderTag>
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
        <strong>Total time:</strong>
        <p css={{
          paddingLeft: '1rem',
          margin: 0,
        }}
        >
          {`${getYearsAndMonthsPassed(dateStart, dateEnd)} ${offAndOnText}`}
        </p>
      </div>
    </section>
  );
}
