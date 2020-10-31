import React from 'react';

function ResumeSection ({
  title, subtitle, slug, icon, defaultIcon, children
}) {
  const sectionIcon = icon || defaultIcon;
  return (<>
    <a name={slug}></a>
    <div className="icon">
      <i className={`fad fa-lg fa-${sectionIcon}`}></i>
      <span className="mobile-title">{title}</span>
    </div>
    <div className="info">
      <h4 className="title text-uppercase">
        {title} <span className="grey">{subtitle}</span>
      </h4>

      <div className="content">
        {children}
      </div>
    </div >
  </>);
}

export default ResumeSection;
