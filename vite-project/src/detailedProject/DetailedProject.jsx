import './DetailedProject.css'
import Header from '../header/Header.jsx'

import { useState, useEffect } from 'react'

import { useParams } from 'react-router-dom';



function DetailedProject() {
    const [projectID,projectByID] = useState(null);
    const { id } = useParams();


    const getProjectID = async () => {
        const response = await fetch(`http://localhost:3000/projects/${id}`);
        if (response.ok) {
          const project = await response.json();
          console.log(project);
          projectByID(project);
    
        }
      }

      useEffect(() => {
        getProjectID();
      },);


    return (
        <>
        <Header/>
        {
    projectID && (
        <div className="project" key={projectID._id}>
            <h2>{projectID.titre}</h2>
            <p>{projectID.contenuBref}</p>
            <p>{projectID.contenu}</p>
            <p>{projectID.listeMots}</p>
        </div>
        )
        }

        </>
      )
}

export default DetailedProject

