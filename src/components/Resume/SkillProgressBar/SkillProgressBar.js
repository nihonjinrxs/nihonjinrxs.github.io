import React from 'react';

import './SkillProgressBar.css'

export default function SkillProgressBar ({ level }) {
  return (
    <div
      className="skill-level js-tooltip"
      title={level}
      data-placement="left"
    >
      <div className={`skill-progress ${level}`}>
        <small>{level.toUpperCase()}</small>
      </div>
    </div>
  );
}
