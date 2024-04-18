import './AdminProjects.css'
import Header from '../header/Header.jsx'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function AdminProjects() {
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
        <h1>Bienvenue sur la page admin</h1>
        <Link to="/projects/add" className="add-project-button">Ajouter un projet</Link>
        {
          
            project && project.map((project) => (
                <div className="project" key={project._id}>
                    <Link to={`/admin/projects/${project._id}`}>
                        <h2>{project.titre}</h2>
                        <p>{project.contenuBref}</p>
                    </Link>
                    
                </div>
            ))
        }
        </>
      )
}

export default AdminProjects
