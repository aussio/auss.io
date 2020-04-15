/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable react/no-danger */
/* eslint-disable camelcase */
import { useState, useEffect } from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useParams } from 'react-router-dom';

export default function BlogPost() {
  // Get the ID from the URL Parameter
  const { slug } = useParams();
  const [post, setPost] = useState([]);
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
    const { title, header_image_url, html_content, last_modified, is_draft } = post;

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
          src={header_image_url}
          alt={title}
          css={{
            maxHeight: '40vh',
            width: '100%',
            objectFit: 'contain',
          }}
        />
        <div css={{
          width: '70%',
        }}
        >
          <h1 css={{
            textAlign: 'center',
          }}
          >
            {title}
          </h1>
          <p css={{
            fontWeight: 'lighter',
            fontStyle: 'italic',
            textAlign: 'center',
          }}
          >
            last modified at:
            {' '}
            {last_modified}
          </p>
          <br />
          <div dangerouslySetInnerHTML={{
            __html: html_content,
          }}
          />
        </div>
      </div>
    );
  }
  return (
    <div>
      <p>Loading...</p>
    </div>
  );
}
