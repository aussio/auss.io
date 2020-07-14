/* eslint-disable max-len */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/accessible-emoji */
/** @jsx jsx */
import { jsx } from '@emotion/core';
import Gallery from 'react-photo-gallery';
import { Link } from 'react-router-dom';
import ExternalLink from './lib/ExternalLink';
import * as COLORS from './theme/colors';

export default function LandingPage() {
  const pics = [
    {
      src: 'https://res.cloudinary.com/https-auss-io/image/upload/v1587591427/Just%20Me/42096550_10107032000586418_7763282094804959232_o.jpg_envp7u.jpg',
      height: 4,
      width: 3,
    },
    {
      src: 'https://res.cloudinary.com/https-auss-io/image/upload/v1587591615/Just%20Me/UNADJUSTEDNONRAW_thumb_2fc_uofa8f.jpg',
      height: 4,
      width: 3,
    },
    {
      src: 'https://res.cloudinary.com/https-auss-io/image/upload/v1587590701/Just%20Me/UNADJUSTEDNONRAW_thumb_2dc_klzvrd.jpg',
      height: 4,
      width: 3,
    },
    {
      src: 'https://res.cloudinary.com/https-auss-io/image/upload/v1587590719/Just%20Me/UNADJUSTEDNONRAW_thumb_2dd_ovy5sb.jpg',
      height: 4,
      width: 3,
    },
  ];

  function columns(containerWidth) {
    if (containerWidth <= 1050) return 2;
    if (containerWidth > 1050) return 4;
    return 1;
  }

  return (
    <div
      css={{
        position: 'relative',
      }}
    >
      <div
        css={{
          position: 'relative',
        }}
      >
        <Gallery
          photos={pics}
          margin={0}
          direction="column"
          columns={columns}
        />
        <div
          css={{
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0,0,0,.4)',
            p: {
              fontSize: '4rem',
              margin: 0,
              color: 'white',
            },
            h1: {
              fontSize: '6rem',
              margin: 0,
              color: 'white',
              fontWeight: 600,
              lineHeight: '7rem',
            },
          }}
        >
          <p>Hey, I&apos;m</p>
          <h1>Austin Curtis</h1>
        </div>
      </div>

      <Section
        color="white"
        css={{
          '*': {
            margin: 0,
          },
        }}
      >
        <p>
          Welcome to information about my work, thoughts, and feelings. I plan for this website to become a living journal of my experiences - more to come!
        </p>
      </Section>
      <Section
        color={COLORS.normal}
        css={{
          color: 'white',
        }}
      >
        <SectionHeader>
          My Work
        </SectionHeader>
        {/* <strong>Backend</strong> */}
        <p>
          I&apos;ve spent my professional career so far as a backend software developer working on making WP Engine&apos;s platform run faster, bigger, and more efficiently. These projects include development of new API&apos;s, improving the testability and test coverage of large monoliths, refactoring large monoliths into distinct services, and performance monitoring.
        </p>
        {/* <strong>Frontend</strong> */}
        <p>
          Of late I&apos;ve spent my personal time learning React and CSS to unlock the power of creating user interfaces outside of a terminal.
        </p>
        <p
          css={{
            marginTop: '3rem',
            fontWeight: 600,
          }}
        >
          <Link
            to="/resume"
            css={{
              color: 'white',
            }}
          >
            See more details within my long form resume
          </Link>
        </p>
      </Section>
      <Section
        color={COLORS.red}
        css={{
          color: 'white',
          '*': {
            color: 'white',
          },
        }}
      >
        <SectionHeader>Professional Interests</SectionHeader>
        <strong>Macro</strong>
        <p>
          I quit my previous job with the goal of finding work that more directly contributes to improving the world. I am impressed and motivated by organizations like
          {' '}
          <ExternalLink to="https://www.openphilanthropy.org/">Open Philanthropy</ExternalLink>
          {' '} and {' '}
          <ExternalLink to="https://80000hours.org/key-ideas/">80,000 Hours</ExternalLink>
          {' '} and I would really like the opportunity to spend my 2000 hours per year at work both making money and making an impact. Topics like Education, Factory Farming, and Internet Privacy really interest me. <a href="https://auss.io/blog/how-to-make-the-world-a-better-place">See this blog post</a> for more of my thoughts on this.
        </p>
        <strong>Micro</strong>
        <p>
          Throughout my career, one of the most rewarding areas for me has been mentoring and continuing education. I&apos;ve personally mentored 4 people into getting their first jobs in Tech through Technical Support, 3 people into getting their first Software Engineering jobs, and dozens of others in first learning to code. So far no project launch or code deploy has been so fulfilling. I absolutely love inspiring others to achieve their dreams and break out of whatever cognitive boxes they may be stuck within.
        </p>
      </Section>
      <Section
        color={COLORS.charcoal}
        css={{
          '*': {
            color: 'white',
          },
        }}
      >
        <SectionHeader>Hobbies</SectionHeader>
        <p>
          Outside of work I spend a lot of time with <ExternalLink to="https://www.instagram.com/caitlin.nicole.onaroll/">my beautiful fiancè Caitlin</ExternalLink> and <ExternalLink to="https://www.instagram.com/austin.shepsky/">our dogs Jack and Penny</ExternalLink>. The four of us love to travel and have just recently finished a 10-month RV trip around the United States.
        </p>
        <p>
          I also enjoy playing a variety of video games (recents being Hollow Knight, Breath of the Wild, and League of Legends), lifting weights, and random arts & craft projects.
        </p>
      </Section>
    </div>
  );
}

function Section({ color, children, className }) {
  return (
    <section
      css={{
        backgroundColor: color,
        textAlign: 'center',
        padding: '5rem',
        '*': {
          maxWidth: '1000px',
        },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
      className={className}
    >
      {children}
    </section>
  );
}

function SectionHeader({ children, className }) {
  return (
    <h1
      css={{
        margin: 0,
        padding: '0 2rem 2rem 2rem',
        color: 'white',
        '@media(max-width: 450px)': {
          padding: 0,
          fontSize: '3rem',
        },
      }}
      className={className}
    >
      {children}
    </h1>
  );
}
