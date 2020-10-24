import React from 'react';

export default function ResumeAboutSummary ({ title, subtitle, description, icon }) {
  const aboutIcon = icon || 'user';
  return (
    <div className="detail" id="about">
      <div className="icon">
        <i className={`fa fa-lg fa-${aboutIcon}`}></i>
        <span className="mobile-title">{title}</span>
      </div>
      <div className="info">
        <h4 className="title text-uppercase">
          {title} <span className="grey">{subtitle}</span>
        </h4>

        <div className="content" itemProp="description">
          {description}
        </div>
      </div>
    </div>
  )
}
