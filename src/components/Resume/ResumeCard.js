import React from 'react';

import ResumeAboutSummary from "./ResumeAboutSummary/ResumeAboutSummary";
import ResumeWorkExperience from "./ResumeWorkExperience/ResumeWorkExperience";
import ResumeEducation from "./ResumeEducation/ResumeEducation";
import ResumeSkills from './ResumeSkills/ResumeSkills';
import ResumeVolunteer from './ResumeVolunteer/ResumeVolunteer';
import ResumePublication from './ResumePublications/ResumePublications';
import ResumeInterests from './ResumeInterests/ResumeInterests';
import ResumeReferences from './ResumeReferences/ResumeReferences';

import './ResumeCard.css';

export default function ResumeCard({
  sections, summary, work, education, skills,
  volunteer, publications, interests, references
}) {
  const aboutMeta = sections.about || {};
  const workMeta = sections.work || {};
  const edMeta = sections.education || {};
  const volMeta = sections.volunteer || {};
  const skillsMeta = sections.skills || {};
  const pubsMeta = sections.publications || {};
  const intMeta = sections.interests || {};
  const refsMeta = sections.references || {};
  return (
    <section className="card-wrapper resume-card-wrapper">
      <div className="card resume-card">
        <div className="resume-details">
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
          <ResumePublication
            title={pubsMeta.title ? pubsMeta.title : 'What have you published?'}
            subtitle={pubsMeta.subtitle ? pubsMeta.subtitle : 'Talks &amp; Papers'}
            icon={pubsMeta.icon ? pubsMeta.icon : 'book'}
            publications={publications}
          />
          <ResumeInterests
            title={intMeta.title ? intMeta.title : 'What do you enjoy?'}
            subtitle={intMeta.subtitle ? intMeta.subtitle : 'Interests'}
            icon={intMeta.icon ? intMeta.icon : 'heart'}
            interests={interests}
          />
          <ResumeReferences
            title={refsMeta.title ? refsMeta.title : 'Who can vouch for you?'}
            subtitle={refsMeta.subtitle ? refsMeta.subtitle : 'Testimonials'}
            icon={refsMeta.icon ? refsMeta.icon : 'thumbs-up'}
            references={references}
          />
        </div>
      </div>
    </section>
  )
}