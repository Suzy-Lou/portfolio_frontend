import './AdminProjects.css'
import Header from '../header/Header.jsx'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function AdminProjects() {
    const [project,allprojects] = useState(null);
    const PORT = import.meta.env.VITE_PORT;
    const getProject = async () => {
        const response = await fetch(`http://localhost:${PORT}/projects`);
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
        <Link to="/projects/add" className="add-project-button">Ajouter un projet</Link>
        {
            project && project.map((project) => (
                <div className="project" key={project._id}>
                    <Link to={`/admin/projects/${project._id}`}>
                        <h2>{project.titre}</h2>
                        <p>{project.contenuBref}</p>
                        <img src={project.thumbnailImage} alt="thumbnail"/>
                    </Link>
                    
                </div>
            ))
        }
        </>
      )
}

export default AdminProjects
