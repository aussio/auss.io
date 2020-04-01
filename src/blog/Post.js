/* eslint-disable camelcase */
import { useState, useEffect } from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useParams } from 'react-router-dom';

export default function BlogPost() {
  // Get the ID from the URL Parameter
  const { id } = useParams();
  const [post, setPost] = useState([]);

  useEffect(() => {
    fetch(`/api/posts/${id}/`)
      .then((response) => response.json())
      .then(
        (result) => {
          setPost(result);
        },
      );
  }, [id]);

  if (post) {
    const { title, header_image_url, content, last_modified } = post;

    return (
      <div css={{
        color: 'white',
      }}
      >
        <h1>{title}</h1>
        <img
          css={{
            
          }}
          src={header_image_url}
          alt={title}
        />
        <br />
        <em>
          last modified at
          {last_modified}
        </em>
        <br />
        <p>{content}</p>
      </div>
    );
  }
  return (
    <div css={{
      color: 'white',
    }}
    >
      <p>Loading...</p>
    </div>
  );
}
