/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/accessible-emoji */
/** @jsx jsx */
import { jsx } from '@emotion/core';
import Gallery from 'react-photo-gallery';
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
            // '@media(min-width: 2400px)': {
            //   margin: '0 20%',
            // },
          }}
        >
          <p>Hey, I&apos;m</p>
          <h1>Austin Curtis</h1>
        </div>
      </div>

      <Section color="white">
        <h1
          css={{
            margin: 0,
            padding: '.5em',
          }}
        >
          My Work
        </h1>
      </Section>
      <Section color={COLORS.normal} />
      <Section color={COLORS.red} />
      <Section color={COLORS.charcoal} />
      <Section color={COLORS.blue} />
    </div>
  );
}

function Section({ color, children }) {
  return (
    <section
      css={{
        backgroundColor: color,
        textAlign: 'center',
        height: '500px',
      }}
    >
      {children}
    </section>
  );
}
