import React from 'react';

import ResumeAboutSummary from "./ResumeAboutSummary";
import ResumeWorkExperience from "./ResumeWorkExperience/ResumeWorkExperience";
import ResumeEducation from "./ResumeEducation";
import ResumeSkills from './ResumeSkills';
import ResumeVolunteer from './ResumeVolunteer';

import './ResumeCard.css';

export default function ResumeCard({
  sections, summary, work, education, skills, volunteer
}) {
  const aboutMeta = sections.about || {}
  const workMeta = sections.work || {}
  const edMeta = sections.education || {}
  const volMeta = sections.volunteer || {}
  const skillsMeta = sections.skills || {}
  return (
    <section className="card-wrapper resume-card-wrapper">
      <div className="card background-card">
        <div className="background-details">
          <ResumeAboutSummary
            title={aboutMeta.title ? aboutMeta.title : 'Who Are You?'}
            subtitle={aboutMeta.subtitle ? aboutMeta.subtitle : 'Summary'}
            icon={aboutMeta.icon ? aboutMeta.icon : 'user'}
            description={summary}
          />
          <ResumeWorkExperience
            title={workMeta.title ? workMeta.title : 'What have you done?'}
            subtitle={workMeta.subtitle ? workMeta.subtitle : 'Experience'}
            icon={workMeta.icon ? workMeta.icon : 'building'}
            work={work}
          />
          <ResumeEducation
            title={edMeta.title ? edMeta.title : 'What have you learned?'}
            subtitle={edMeta.subtitle ? edMeta.subtitle : 'Education'}
            icon={edMeta.icon ? edMeta.icon : 'mortar-board'}
            education={education}
          />
          <ResumeSkills
            title={skillsMeta.title ? skillsMeta.title : 'What can you do?'}
            subtitle={skillsMeta.subtitle ? skillsMeta.subtitle : 'Skills'}
            icon={skillsMeta.icon ? skillsMeta.icon : 'code'}
            skills={skills}
          />
          <ResumeVolunteer
            title={volMeta.title ? volMeta.title : 'What have you given?'}
            subtitle={volMeta.subtitle ? volMeta.subtitle : 'Volunteering'}
            icon={volMeta.icon ? volMeta.icon : 'hands-helping'}
            volunteer={volunteer}
          />
        </div>
      </div>
    </section>
  )
}