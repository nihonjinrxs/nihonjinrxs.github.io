import React from 'react';

import ResumeSection from '../ResumeSection/ResumeSection';

function ResumeInterests ({
  interests, title, subtitle, icon
}) {
  return (
    <div className="detail no-pagebreak" id="interests">
      <ResumeSection
        title={title}
        subtitle={subtitle}
        icon={icon}
        defaultIcon="heart"
      >
        <p className="labels">
        {interests.map((i) => (
          <>
            <span className="label label-keyword no-print">{i.name}</span>
            <span className="label label-boxed print-only">{i.name}</span>
          </>
        ))}
        </p>
      </ResumeSection>
    </div>
  );
}

export default ResumeInterests;
