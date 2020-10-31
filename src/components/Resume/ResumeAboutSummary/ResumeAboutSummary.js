import React from 'react';

import ResumeSection from '../ResumeSection/ResumeSection';

export default function ResumeAboutSummary ({ title, subtitle, description, icon }) {
  return (
    <div className="detail" id="about">
      <ResumeSection
        title={title}
        subtitle={subtitle}
        icon={icon}
        defaultIcon="user"
      >
        {description}
      </ResumeSection>
    </div>
  )
}
