import React from 'react';

import { Duration } from "../../lib/date_utils";

export default function ResumeEducation({
  education, title, subtitle, icon
}) {
  const edIcon = icon || 'mortar-board';
  return (
    <div className="detail" id="education">
      <div className="icon">
        <i className={`fa fa-lg fa-${edIcon}`}></i>
        <span className="mobile-title">{title}</span>
      </div>
      <div className="info">
        <h4 className="title text-uppercase">
          {title} <span className="grey">{subtitle}</span>
        </h4>

        <div className="content">
          <ul className="list-unstyled">
            {education.map(({
              studyType, area, institution, startDate,
              endDate, gpa, courses
            }) => {
              return (
                <li className="card card-nested"
                  key={studyType+area+institution+startDate}>
                  <div className="content has-sidebar">
                    <p className="clear-margin-sm study-type">
                      <strong>{studyType}</strong>
                    </p>
                    <p className="clear-margin-sm study-area">
                      <strong>{area}</strong>
                    </p>
                    <p className="clear-margin-sm institution">
                      {institution}
                    </p>
                    <p className="visible-xs visible-sm text-muted">
                      <small>
                        {Duration(startDate, endDate)}
                      </small>
                    </p>
                    <i>{gpa}</i>
                    <div className="space-top labels">
                      {Courses(courses)}
                    </div>
                  </div>
                  <div className="sidebar text-muted text-center hidden-xs hidden-sm">
                    <p>
                      <strong>Started:</strong>
                      {startDate}
                    </p>
                    <p>
                      {EndDate(endDate)}
                    </p>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export function Courses(courses) {
  return courses.map((course, index) => {
    return (
      <span className="label label-keyword" key={course}>
        {course}
      </span>
    )
  })
}

export function EndDate(endDate) {
  return endDate ? (
    <>
      <strong>Completion:</strong>
      {endDate}
    </>
  ) : (
    <span className="label label-success">
      Currently Pursuing
    </span>
  )
}