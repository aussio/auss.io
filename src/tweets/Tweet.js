/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable react/no-danger */
/* eslint-disable camelcase */
import { useState, useEffect } from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useParams } from 'react-router-dom';
import * as colors from '../theme/colors';

function Tweet() {
  // Get the ID from the URL Parameter
  const { slug } = useParams();
  const [tweet, setTweet] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`/api/tweets/${slug}/`)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } if (response.status >= 400 && response.status <= 499) {
          return setError(404);
        }
        return setError(500);
      })
      .then(
        (result) => {
          setTweet(result);
        },
      );
  }, [slug]);

  if (error === 404) {
    return (
      <div css={{
        textAlign: 'center',
      }}
      >
        <h1>4🤔4</h1>
        <h3>Unable to find the tweet you're looking for.</h3>
        <h3>
          For more posts, see:
          {' '}
          <a href="https://auss.io/blog">https://auss.io/blog</a>
        </h3>
      </div>
    );
  }
  if (error) {
    return (
      <div css={{
        textAlign: 'center',
      }}
      >
        <h1>5😔😔</h1>
        <h2>Something seems to be wrong on the site at the moment.</h2>
      </div>
    );
  }

  if (tweet) {
    const {
      image_url, html_content,
    } = tweet;
    // const lastModifiedDate = new Date(tweet.last_modified);
    // const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    return (
      <div
        // Tweet Contents Container
        css={{
          display: 'flex',
          flexDirection: 'column',
          // justifyContent: 'center',
          // alignContent: 'center',
          alignItems: 'center',
        }}
      >
        {image_url ? (
          <img
            src={image_url}
            alt=''
            css={{
              maxHeight: '40vh',
              width: '100%',
              // Zooms in the wider the image is.
              objectFit: 'cover',
              // Make the image a little less wide & zoomed on wide screens.
              '@media(min-width: 1100px)': {
                width: '80%',
              },
            }}
          />)
          : null}
        <div css={{
          width: '70%',
        }}
        >
          <div
            css={{
              // Styling for the footnotes produced in the markdown
              "[id^='fn']": {
                fontSize: 'small',
                listStyleType: 'none',
              },
              img: {
                width: '80%',
                // Zooms in the wider the image is.
                objectFit: 'cover',
                // Make the image a little less wide & zoomed on wide screens.
                '@media(min-width: 1100px)': {
                  width: '60%',
                },
              },
              pre: {
                background: colors.veryVeryLight,
                border: `2px solid ${colors.veryLight}`,
                borderRadius: '2px',
                padding: '1em',

                // code blocks
                code: {
                  color: 'black',
                },
              },
              // In-line code
              code: {
                color: colors.dark,
              },
            }}
            dangerouslySetInnerHTML={{
              __html: html_content,
            }}
          />
        </div>
      </div>
    );
  }
  return (
    // A silly loading animation
    <div>
      <h3
        css={{
          textAlign: 'center',
          animation: 'pulse 1s ease-in-out 0s alternate infinite',
          '@keyframes pulse': {
            '0%': {
              transform: 'scale(0.95)',
            },
            '100%': {
              transform: 'scale(1.05)',
            },
          },
        }}
      >
        Loading...
      </h3>
      <h3
        css={{
          textAlign: 'center',
          animation: 'rollaround 3s ease-in-out 0s alternate infinite',
          '@keyframes rollaround': {
            '0%': {
              transform: 'translate(-100px) rotate(-720deg)',
            },
            '100%': {
              transform: 'translate(100px) rotate(720deg)',
            },
          },
        }}
      >
        🤠
      </h3>
    </div>
  );
}

export default Tweet;