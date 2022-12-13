import './Present.css';
import { useState } from 'react';
import LandingPage from './LandingPage';
import ProjectView from './ProjectView';


function App() {
  const [page, setPage] = useState(0);
  const [filename, setFile] = useState("");
  window.onmessage = function(e) {
    console.log(e.data);
      if (e.data.startsWith('file:')) {
          alert('It works!');
      }
  };
  return (
    <>
        {
            page === 0 ? 
            <LandingPage setFile={(fname: string) => {setFile(fname); setPage(1)}} />
            : 
            <ProjectView filePath={filename} setPage={setPage} />
        }
    </>
  );
}

export default App;
