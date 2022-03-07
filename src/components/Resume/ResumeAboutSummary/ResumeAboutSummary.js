import React from 'react';
import { marked } from 'marked';
import { sanitize } from 'dompurify';

import ResumeSection from '../ResumeSection/ResumeSection';

export default function ResumeAboutSummary ({ title, subtitle, description, icon }) {
  return (
    <div className="detail no-pagebreak" id="summary">
      <ResumeSection
        title={title}
        subtitle={subtitle}
        icon={icon}
        defaultIcon="user"
      >
        <span dangerouslySetInnerHTML={{ __html: sanitize(marked(description)) }}></span>
      </ResumeSection>
    </div>
  )
}
