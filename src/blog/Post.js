/* eslint-disable camelcase */
import { useState, useEffect } from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useParams } from 'react-router-dom';

export default function BlogPost() {
  // Get the ID from the URL Parameter
  const { slug } = useParams();
  const [post, setPost] = useState([]);

  useEffect(() => {
    fetch(`/api/posts/${slug}/`)
      .then((response) => response.json())
      .then(
        (result) => {
          setPost(result);
        },
      );
  }, [slug]);

  if (post) {
    const { title, header_image_url, content, last_modified } = post;

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
          <p>{content}</p>
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
