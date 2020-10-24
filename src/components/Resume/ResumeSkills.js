import React from 'react';

export default function ResumeSkills({ title, subtitle, icon, skills }) {
  return skills ? <>
    <div className="detail" id="skills">
      <div className="icon">
        <i className={`fal fa-lg fa-${icon || "code"}`}></i>
        <span className="mobile-title">{title}</span>
      </div>
      <div className="info">
        <h4 className="title text-uppercase">
          {title} <span className="grey">{subtitle}</span>
        </h4>

        <div className="content">
          <ul className="list-unstyled">
            { skills.map((skill) => ResumeSkillCard(skill)) }
          </ul>
        </div>
      </div>
    </div>
  </> : <></>
}

export function ResumeSkillCard({ name, level, skill_class, keywords, display_progress_bar = true }) {
  return (
    <li className="card card-nested card-skills" key={name}>
      {
        display_progress_bar ? SkillProgressBar({ level, skill_class }) : ''
      }
      <div className="skill-info">
        <strong>{name}</strong>

        <div className="space-top labels">
          {keywords.map((keyword, index) => {
            return <span className="label label-keyword" key={keyword+index.toString()}>{keyword}</span>
          })}
        </div>
      </div>
    </li>
  )
}

export function SkillProgressBar({ level, skill_class }) {
  return (
    <div
      className="skill-level js-tooltip"
      title={level}
      data-placement="left"
    >
      <div className={`skill-progress ${skill_class}`}>
      </div>
    </div>
  );
}
