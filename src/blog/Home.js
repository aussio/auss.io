/* eslint-disable camelcase */
import { useState, useEffect } from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
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
    <ul
      css={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        listStyleType: 'none',
        paddingLeft: 0, // Fix the default ul padding of list items
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
    </ul>
  );
}

function BlogPostSnippet({ post, className }) {
  const { slug, title, header_image_url, content } = post;
  const borderRadius = '20px';

  return (
    <Link
      to={`/blog/${slug}`}
      className={className} // Allow parent to override CSS
      css={{
        textDecoration: 'none',
        borderRadius,
        color: colors.text,
        ':hover': {
          filter: 'brightness(75%)',
          boxShadow: '10px 10px 10px rgba(0,0,0,.15)',
        },
      }}
    >
      <li
        css={{
          maxWidth: '800px',
          textAlign: 'center',
          backgroundColor: colors.veryLight,
          borderRadius,
          paddingBottom: '2rem',
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
        <ReactMarkdown
          source={`${content.substring(0, 300)}...`}
          css={{
            padding: '0 2em',
          }}
        />
      </li>
    </Link>
  );
}
