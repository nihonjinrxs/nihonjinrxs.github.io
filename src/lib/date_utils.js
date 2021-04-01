import React from 'react'
import moment from 'moment'

const MONTHS = [
  'January', 'February', 'March',
  'April', 'May', 'June',
  'July', 'August', 'September',
  'October', 'November', 'December'
];

export function displayDate (date) {
  const [year, month, day] = date.split('-')
    .map(a => parseInt(a, 10));
  return `${MONTHS[month - 1]} ${day}, ${year}`;
}

export function computeDuration(startDate, endDate) {
  const roundingDefault = moment.relativeTimeRounding();
  // Round relative time evaluation down
  moment.relativeTimeRounding(Math.floor);
  moment.relativeTimeThreshold('s', 60);
  moment.relativeTimeThreshold('m', 60);
  moment.relativeTimeThreshold('h', 24);
  moment.relativeTimeThreshold('d', 7);
  moment.relativeTimeThreshold('w', 4);
  moment.relativeTimeThreshold('M', 12);
  const duration = moment(startDate)
    .to(moment(endDate ? endDate : undefined), true);
  // back to default
  moment.relativeTimeRounding(roundingDefault);
  return duration;
}

export function Dates ({ startDate, endDate }) {
  return endDate ? (
    <>{displayDate(startDate)}&nbsp;-&nbsp;{displayDate(endDate)}</>
  ) : (
    <>{displayDate(startDate)}&nbsp;-&nbsp;Present</>
  )
}

export function Duration ({ startDate, endDate, schedule }) {
  return (
    <span>
      <i className="fa fa-clock-o icon-left"></i>
      {computeDuration(startDate, endDate)}{
        schedule ? (
          <>
            <span className="link-separator">•</span>
            {schedule[0].toUpperCase() + schedule.substring(1)}
          </>
        ) : <></>
      }
    </span>
  )
}

export function SidebarDuration ({ startDate, endDate, schedule }) {
  return (
    <p>
      <i className="fa fa-clock-o icon-left"></i>
      {computeDuration(startDate, endDate)}{
        schedule ? (
          <>
            <span className="link-separator">•</span>
            {schedule[0].toUpperCase() + schedule.substring(1)}
          </>
        ) : <></>
      }
    </p>
  )
}
