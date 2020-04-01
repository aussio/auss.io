/* eslint-disable camelcase */
import { useState, useEffect } from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as colors from '../theme/colors';

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
        <BlogPostSnippet
          css={{
            margin: '2em',
          }}
          key={post.url}
          post={post}
        />
      ))}
    </ol>
  );
}

function BlogPostSnippet({ post, className }) {
  const { title, header_image_url, content } = post;

  const borderRadius = '20px';

  return (
    <li
      className={className} // Allow parent to override CSS
      css={{
        maxWidth: '800px',
        textAlign: 'center',
        backgroundColor: colors.veryLight,
        borderRadius,
      }}
    >
      <img
        css={{
          maxWidth: '100%',
          borderRadius: `${borderRadius} ${borderRadius} 0px 0px`,
        }}
        src={header_image_url}
        alt={title}
      />
      <h3>{title}</h3>
      <p>{content}</p>
    </li>
  );
}
