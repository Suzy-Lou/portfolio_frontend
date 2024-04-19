import './AdminProjectDetailed.css'
import Header from '../header/Header.jsx'

import { useState, useEffect} from 'react'

import { useParams, useNavigate } from 'react-router-dom';



function AdminProjectDetailed() {
    const [projectID,projectByID] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();



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

      const deleteProject = async () => {
        const deleteRequest = await fetch(`http://localhost:3000/projects/${id}`,{
        method : 'DELETE',
        headers: {
          "Content-Type": "application/json",
        }
        });
        console.log(deleteRequest);
        console.log("projet supprimé");
        navigate('/admin/projects');
      };
      const editProjectClickButton = () => {
        navigate(`/admin/projects/edit/${id}`);
      }
      const handleBackButtonClick = () => {
        navigate('/admin/projects');
    }


//todo : ajouter le bouton modification et suppression
    return (
        <>
        <Header />
            <button onClick={handleBackButtonClick} className="back-button">retour à la liste des projets</button>
            <button onClick={deleteProject} className="delete-button">Supprimer le projet</button>
            <button onClick={editProjectClickButton} className="edit-button">Editer le projet</button>
            {
                projectID && (
                    <div className="project" key={projectID._id}>
                        <h2>{projectID.titre}</h2>
                        <p>{projectID.contenuBref}</p>
                        <p>{projectID.contenu}</p>
                        <p>{projectID.listeMots}</p>
                        <img src={projectID.illustrationImage} alt="imageillustration" />
                    </div>
                )
            }
        </>
      )
}

export default AdminProjectDetailed

