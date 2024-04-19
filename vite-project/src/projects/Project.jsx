import './Project.css'
import Header from '../header/Header.jsx'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Project() {
    const [project,allprojects] = useState(null);
    const getProject = async () => {
        const response = await fetch('http://localhost:3000/projects');
        if (response.ok) {
          const projects = await response.json();
          console.log(projects);
          allprojects(projects);
    
        }
      }
    useEffect(() => {
        getProject();
      }, []);

    return (
        <>
        <Header/>
        <div className='project-container'>
        {
            project && project.map((project) => (
                <div className="project" key={project._id}>
                    <Link to={`/projets/${project._id}`}>
                        <h2>{project.titre}</h2>
                        <p>{project.contenuBref}</p>
                        <img src={project.thumbnailImage} alt="thumbnail"/>
                    </Link>
                    
                </div>
            ))
        }
        </div>
        </>
      )
}

export default Project
