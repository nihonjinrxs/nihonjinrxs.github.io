import React from 'react';

import ProfileCard from './Profile/ProfileCard'
import ResumeCard from './Resume/ResumeCard'
import ResumeNavigation from './ResumeNavigation/ResumeNavigation';
import './ResumeSite.css'

export default function ResumeSite ({ resume, sections }) {
  return (resume) ? (<>
    <div id="resume-container">
      <ProfileCard
        name={resume.basics.name}
        label={resume.basics.label}
        image={resume.basics.image}
        location={resume.basics.location}
        phone={resume.basics.phone}
        email={resume.basics.email}
        languages={resume.languages}
        social={resume.basics.profiles}
      ></ProfileCard>
      <ResumeCard
        sections={sections ? sections : {}}
        summary={resume.basics.summary}
        work={resume.work}
        education={resume.education}
        skills={resume.skills}
        volunteer={resume.volunteer}
        publications={resume.publications}
        interests={resume.interests}
        references={resume.references}
      ></ResumeCard>
    </div>
    <ResumeNavigation
      navItems={sections ? sections : {}}
    />
  </>) : (
    <div id="resume-container"></div>
  ) 
}
