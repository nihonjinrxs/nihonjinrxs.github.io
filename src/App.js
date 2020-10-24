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

  return (
    <div className="App">
    {
      resume ?
        <ResumeSite
          resume={resume}
        ></ResumeSite> :
        <></>        
    }
    </div>
  );
}

export default App;
