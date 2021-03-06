/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable react/no-danger */
/* eslint-disable camelcase */
import { useState, useEffect } from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useParams } from 'react-router-dom';
import * as colors from '../theme/colors';

export default function BlogPost() {
  // Get the ID from the URL Parameter
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`/api/posts/${slug}/`)
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
          setPost(result);
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
        <h3>Unable to find the post you're looking for.</h3>
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

  if (post) {
    const {
      title, header_image_url, header_image_url_wide,
      html_content, is_draft,
    } = post;
    const lastModifiedDate = new Date(post.last_modified);
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    return (
      <div
        // Post Contents Container
        css={{
          display: 'flex',
          flexDirection: 'column',
          // justifyContent: 'center',
          // alignContent: 'center',
          alignItems: 'center',
        }}
      >
        {is_draft
          ? (
            <h2
              css={{
                margin: 0,
                padding: '.5em',
                width: '100%',
                textAlign: 'center',
                background: 'repeating-linear-gradient(45deg, red, transparent 100px)',
                color: 'black',
                fontWeight: '600',
                height: '1em',
                lineHeight: '1.25em',
              }}
            >
              DRAFT
            </h2>
          )
          : null}
        <img
          src={header_image_url_wide || header_image_url}
          alt={title}
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
        />
        <div css={{
          width: '70%',
        }}
        >
          <h1 css={{
            textAlign: 'center',
            marginBottom: 0,
          }}
          >
            {title}
          </h1>
          <p css={{
            fontWeight: 'lighter',
            fontStyle: 'italic',
            textAlign: 'center',
            margin: 0,
          }}
          >
            {`${months[lastModifiedDate.getMonth()]} ${lastModifiedDate.getFullYear()}`}
          </p>
          <br />
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
