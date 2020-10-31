import React from 'react';

import SkillProgressBar from '../SkillProgressBar/SkillProgressBar';
import ResumeSection from '../ResumeSection/ResumeSection';

export default function ResumeSkills({ title, subtitle, icon, skills }) {
  return skills ? <>
    <div className="detail" id="skills">
      <ResumeSection
        title={title}
        subtitle={subtitle}
        icon={icon}
        defaultIcon="code"
      >
        <ul className="list-unstyled">
          { skills.map((skill) => ResumeSkillCard(skill)) }
        </ul>
      </ResumeSection>
    </div>
  </> : <></>
}

export function ResumeSkillCard({ name, level, keywords, display_progress_bar = true }) {
  return (
    <li className="card card-nested card-skills" key={name}>
      <div className="skill-info">
        <strong>{name}</strong> <small>({level.toUpperCase()})</small>
        { display_progress_bar ? SkillProgressBar({ level }) : '' }

        <div className="space-top labels">
          {keywords.map((keyword, index) => {
            return <span className="label label-keyword" key={keyword+index.toString()}>{keyword}</span>
          })}
        </div>
      </div>
    </li>
  )
}
