import React from 'react';

import SkillProgressBar from '../SkillProgressBar/SkillProgressBar';
import ResumeSection from '../ResumeSection/ResumeSection';

import './ResumeSkills.css';

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
          {skills.map((skill, index) => {
            return (
              <div key={skill.name+index.toString()}>
                <ResumeSkillCard
                  name={skill.name}
                  level={skill.level}
                  keywords={skill.keywords}
                />
                <ResumeSkillEntry
                  name={skill.name}
                  level={skill.level}
                  keywords={skill.keywords}
                />
              </div>
            );
          })}
        </ul>
      </ResumeSection>
    </div>
  </> : <></>
}

export function ResumeSkillCard({ name, level, keywords, display_progress_bar = true }) {
  return (
    <li className="card card-nested card-skills no-print" key={name}>
      <div className="skill-info">
        <strong>{name}</strong>
        { display_progress_bar ? <SkillProgressBar level={level} /> : <></> }

        <div className="space-top labels">
          {keywords.map((keyword, index) => {
            return <span className="label label-keyword" key={keyword+index.toString()}>{keyword}</span>
          })}
        </div>
      </div>
    </li>
  )
}

export function ResumeSkillEntry({ name, level, keywords }) {
  return (
    <li className="card card-nested card-skills for-print print-only no-pagebreak" key={name}>
      <div className="skill-info">
        <div className="skill-name-and-progress-bar">
          <strong>{name}</strong>
          <SkillProgressBar level={level} />
        </div>
        <div className="skill-labels space-top labels">
          {keywords.map((keyword, index) => {
            return (
              <div
                className="space-right label label-boxed"
                key={keyword + index.toString()}
              >{keyword}</div>
            );
          })}
        </div>
      </div>
    </li>
  )
}
