import React from 'react';

import ResumeSection from '../ResumeSection/ResumeSection';

function ResumeInterests ({
  interests, title, subtitle, icon
}) {
  return (
    <div className="detail" id="interests labels">
      <ResumeSection
        title={title}
        subtitle={subtitle}
        icon={icon}
        defaultIcon="heart"
      >
        {interests.map((i) => (<span className="label label-keyword">{i.name}</span>))}
      </ResumeSection>
    </div>
  );
}

export default ResumeInterests;
