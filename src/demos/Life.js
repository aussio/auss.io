/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Fragment } from 'react';
import ExternalLink from '../lib/ExternalLink';
import * as COLORS from '../theme/colors';

export default function Life() {
  // https://en.wikipedia.org/wiki/List_of_countries_by_life_expectancy - using the United States
  const MALE_LIFE_EXPECTANCY = 76;
  // const FEMALE_LIFE_EXPECTANCY = 81;
  const AGE = 30;

  return (
    <div
      css={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <p>
        Inspired by
        {' '}
        <ExternalLink to="https://waitbutwhy.com/2014/05/life-weeks.html">this blog post from Wait But Why</ExternalLink>
        .
      </p>
      <p>
        This demo is
        {' '}
        <strong>not</strong>
        {' '}
        responsive. I suggest looking on a larger screen.
      </p>
      <LifeInYears
        age={AGE}
        lifeExpectancy={MALE_LIFE_EXPECTANCY}
      />
      <LifeInMonths
        age={AGE}
        lifeExpectancy={MALE_LIFE_EXPECTANCY}
      />
    </div>
  );
}

function Diamond({ value, size, color, borderSize, filled }) {
  return (
    <div
      css={{
        background: filled ? color : 'white',
        border: `${borderSize}px solid ${color}`,
        height: `${size}px`,
        width: `${size}px`,
        transform: 'rotate(45deg)',
        margin: `${size / 2}px`,
        color: filled ? color : 'white',
        ':hover': {
          color: COLORS.text,
        },
      }}
    >
      <p
        css={{
          margin: 0,
          padding: 0,
          textAlign: 'center',
          lineHeight: `${size}px`,
          transform: 'rotate(-45deg)',
        }}
      >
        {value}
      </p>
    </div>
  );
}


function LifeInYears({ age, lifeExpectancy }) {
  const YEARS_BOX_SIZE = 30;
  const YEARS_BORDER_SIZE = 4;
  const YEARS_BOX_COLOR = COLORS.blue;
  const now = age;

  const divs = [];
  for (let i = 1; i < lifeExpectancy + 1; i += 1) {
    divs.push(
      <div
        key={`${i}year`}
      >
        <Diamond
          value={i}
          size={YEARS_BOX_SIZE}
          color={i === now ? COLORS.yellow : YEARS_BOX_COLOR}
          borderSize={YEARS_BORDER_SIZE}
          filled={i <= now}
        />
      </div>,
    );
  }

  return (
    // eslint-disable-next-line react/jsx-fragments
    <Fragment>
      <h2
        css={{
          marginBottom: 0,
        }}
      >
        Life in Years (30 years old)
      </h2>
      <div
        css={{
          display: 'flex',
          margin: '2rem',
        }}
      >
        <div
          css={{
            display: 'flex',
          }}
        >
          <Diamond
            size={YEARS_BOX_SIZE}
            borderSize={YEARS_BORDER_SIZE}
            color={YEARS_BOX_COLOR}
          />
          <p>= 1 year</p>
        </div>
        <div
          css={{
            display: 'flex',
            marginLeft: '1rem',
          }}
        >
          <Diamond
            size={YEARS_BOX_SIZE}
            borderSize={YEARS_BORDER_SIZE}
            color={YEARS_BOX_COLOR}
            filled
          />
          <p>= time passed</p>
        </div>
      </div>
      <div
        css={{
          display: 'flex',
          flexWrap: 'wrap',
          width: `${(YEARS_BOX_SIZE + YEARS_BOX_SIZE + YEARS_BORDER_SIZE * 2) * 10}px`, // based on margin being /10
        }}
      >
        {divs}
      </div>
    </Fragment>
  );
}

function LifeInMonths({ age, lifeExpectancy }) {
  const MONTHS_BOX_SIZE = 20;
  const MONTHS_BORDER_SIZE = 3;
  const MONTHS_BOX_COLOR = COLORS.normal;
  const now = age * 12;

  const divs = [];
  for (let i = 1; i < (lifeExpectancy * 12) + 1; i += 1) {
    divs.push(
      <div
        key={`${i}month`}
      >
        <Diamond
          size={MONTHS_BOX_SIZE}
          color={i === now ? COLORS.yellow : MONTHS_BOX_COLOR}
          borderSize={MONTHS_BORDER_SIZE}
          filled={i <= now}
        />
      </div>,
    );
  }

  return (
    // eslint-disable-next-line react/jsx-fragments
    <Fragment>
      <h2
        css={{
          marginBottom: 0,
        }}
      >
        Life in Months (30 years old)
      </h2>
      <div
        css={{
          display: 'flex',
          margin: '2rem',
        }}
      >
        <div
          css={{
            display: 'flex',
          }}
        >
          <Diamond
            size={MONTHS_BOX_SIZE}
            borderSize={MONTHS_BORDER_SIZE}
            color={MONTHS_BOX_COLOR}
          />
          <p
            css={{
              margin: 0,
              lineHeight: `${MONTHS_BOX_SIZE * 2}px`,
            }}
          >
            = 1 month

          </p>
        </div>
        <div
          css={{
            display: 'flex',
            marginLeft: '1rem',
          }}
        >
          <Diamond
            size={MONTHS_BOX_SIZE}
            borderSize={MONTHS_BORDER_SIZE}
            color={MONTHS_BOX_COLOR}
            filled
          />
          <p
            css={{
              margin: 0,
              lineHeight: `${MONTHS_BOX_SIZE * 2}px`,
            }}
          >
            = 1 month

          </p>
        </div>
      </div>
      <div
        css={{
          display: 'flex',
          flexWrap: 'wrap',
          width: `${(MONTHS_BOX_SIZE + MONTHS_BOX_SIZE + MONTHS_BORDER_SIZE * 2) * 24}px`, // based on margin being /10
        }}
      >
        {divs}
      </div>
    </Fragment>
  );
}
