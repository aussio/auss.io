/* eslint-disable camelcase */
import { useState, useEffect } from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as colors from '../theme/colors';
import parseISOString from '../lib/datetime';
import { act } from 'react-dom/test-utils';

export default function ActivitiesPage() {
  return (
    <div>
      <h2
        css={{
          textAlign: 'center',
        }}
      >Activity Log</h2>
      <input type="file" accept="image/*" />
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
        const activitiesByDate = getActivitiesByDate(result.results)
        setActivities(activitiesByDate);
      });
  }, []);

  function getActivitiesByDate(activitiesJSON) {
    let activitiesByDate = {};
    activitiesJSON.forEach(activity => {
      const date = parseISOString(activity.created_at);
      if (activitiesByDate[date.toLocaleDateString()]) {
        activitiesByDate[date.toLocaleDateString()].push(activity)
      } else {
        activitiesByDate[date.toLocaleDateString()] = [activity];
      }
    });
    return activitiesByDate;
  }

  return (
    <ul
      css={{
        listStyleType: 'none',
      }}
    >
      {Object.entries(activities).map(([date, activityArray]) => (
        <ActivityDate date={date} activities={activityArray} />
      ))}
    </ul>
  );
}

function ActivityDate({ date, activities }) {
  return (
    <li>
      <h3
        css={{
          textAlign: 'center',
        }}
      >
        {date}
      </h3>
      <ul
        css={{
          listStyleType: 'none',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {
          activities.map((activity) => (
            <Activity
              css={{
                margin: '2rem',
              }}
              key={activity.url}
              activity={activity}
            />
          ))
        }
      </ul>
    </li>
  )
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
