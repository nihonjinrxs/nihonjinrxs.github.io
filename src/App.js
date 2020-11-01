import React,  { useEffect, useState } from 'react';
import './App.css';
import ResumeSite from './components/ResumeSite';

// import ResumeSite from './components/ResumeSite';

function App() {
  const [resume, setResume] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const loadResume = async () => {
      setLoading(true);
      const resp = await fetch('/resume.json');
      setResume(await resp.json());
      setLoaded(true);
      setLoading(false);
    };
    if (!(loading || loaded)) { loadResume(); }
    return () => { };
  }, [loaded, loading]);

  const sections = {
    summary: {
      title: 'Who are you?',
      subtitle: 'Summary',
      slug: 'summary',
      icon: 'user'
    },
    work: {
      title: 'What have you done?',
      subtitle: 'Experience',
      slug: 'experience',
      icon: 'building'
    },
    education: {
      title: 'What have you learned?',
      subtitle: 'Education',
      slug: 'education',
      icon: 'graduation-cap'
    },
    skills: {
      title: 'What can you do?',
      subtitle: 'Skills',
      slug: 'skills',
      icon: 'code'
    },
    volunteer: {
      title: 'What have you given?',
      subtitle: 'Volunteering',
      slug: 'volunteer',
      icon: 'hands-helping'
    },
    publications: {
      title: 'What have you published?',
      subtitle: 'Talks & Papers',
      slug: 'publications',
      icon: 'book'
    },
    interests: {
      title: 'What do you enjoy?',
      subtitle: 'Interests',
      slug: 'interests',
      icon: 'heart'
    },
    references: {
      title: 'Who can vouch for you?',
      subtitle: 'Testimonials',
      slug: 'references',
      icon: 'thumbs-up'
    }
  };

  return (
    <div className="App">
    {
      resume ?
        <ResumeSite resume={resume} sections={sections} /> :
        <></>
    }
    </div>
  );
}

export default App;
