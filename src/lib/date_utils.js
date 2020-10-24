import React from 'react'
import moment from 'moment'

export function Dates(startDate, endDate) {
  return endDate ? (
    <>{startDate} - {endDate}</>
  ) : (
    <>{startDate} - Present</>
  )
}

export function computeDuration(startDate, endDate) {
  return moment(startDate)
    .from(moment(endDate ? endDate : undefined), true);
}

export function Duration(startDate, endDate) {
  return (
    <span>
      <i className="fa fa-clock-o icon-left"></i>
      {computeDuration(startDate, endDate)}
    </span>
  )
}

export function SidebarDuration(startDate, endDate) {
  return (
    <p>
      <i className="fa fa-clock-o icon-left"></i>
      {computeDuration(startDate, endDate)}
    </p>
  )
}
