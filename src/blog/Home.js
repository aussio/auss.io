/* eslint-disable camelcase */
import { useState, useEffect } from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';

export default function Blog() {
  return (
    <div>
      <BlogPostSnippets />
    </div>
  );
}

function BlogPostSnippets() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('/api/posts/')
      .then((response) => response.json())
      .then((result) => {
        setPosts(result.results);
      });
  }, []);

  return (
    <ol
      css={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {posts.map((post) => (
        <li
          css={{
            maxWidth: '70%',
          }}
          key={post.url}
        >
          <BlogPostSnippet post={post} />
        </li>
      ))}
    </ol>
  );
}

function BlogPostSnippet({ post }) {
  const { title, header_image_url, content, last_modified } = post;

  return (
    <div
      css={{
        textAlign: 'center',
      }}
    >
      <img
        src={header_image_url}
        alt={title}
      />
      <h3>{title}</h3>
      <em
        css={{
          fontWeight: 'lighter',
        }}
      >
        last_modified modified at
        {' '}
        {last_modified}
      </em>
      <br />
      <p>{content}</p>
    </div>
  );
}
