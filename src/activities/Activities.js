/* eslint-disable camelcase */
import { useState, useEffect } from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as colors from '../theme/colors';

export default function ActivitiesPage() {
  return (
    <div>
      <h2>Activity Log</h2>
      <Activities />
    </div>
  );
}

function Activities() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch('/api/activities/')
      .then((response) => response.json())
      .then((result) => {
        setActivities(result.results);
      });
  }, []);

  return (
    <ul
      css={{
        listStyleType: 'none',
        display: 'flex',
      }}
    >
      {activities.map((activity) => (
        <Activity
          css={{
            margin: '2rem',
          }}
          key={activity.url}
          activity={activity}
        />
      ))}
    </ul>
  );
}

function Activity({ activity, className }) {
  const { title, image_url, html_description } = activity;

  return (
    <li
      className={className}
      css={{
        maxWidth: '400px',
        minHeight: '200px',
        textAlign: 'center',
        boxShadow: '5px 5px 5px rgba(0,0,0,.15)',
        paddingBottom: '2rem',
        background: `url(${image_url}) no-repeat center`,
        backgroundSize: 'contain',
        color: 'white',
      }}
    >
      <div
        css={{
          height: '100%',
          background: 'rgba(0, 0, 0, 0.6)',
          padding: '1rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          '*': {
            margin: '.5rem 1rem',
          }
        }}
      >
        <h3>{title}</h3>
        <div
          css={{
            fontSize: '14px',
          }}
          dangerouslySetInnerHTML={{
            __html: html_description,
          }}
        />
      </div>
    </li>
  );
}
