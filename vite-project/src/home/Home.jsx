import './Home.css'
import Header from '../header/Header.jsx'
import { useState } from 'react';





function Home() {

  // const [project, setProject] = useState(null);
  const [projectID, setProjectID] = useState(null);


  const getProject = async () => {
    const response = await fetch('http://localhost:3000/projects');
    if (response.ok) {
      const projects = await response.json();
      console.log(projects);
      // setProject(projects[2]);

    }
  }

  const getProjectID = async () => {
    const response = await fetch('http://localhost:3000/projects/66210edc638de9d7f60aea7d');
    if (response.ok) {
      const project = await response.json();
      setProjectID(project);
    }
  }


  const createProject = async () => {
    const request = await fetch(' http://localhost:3000/newProject',{
    method : 'POST',
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
        "titre":"projet1",
        "contenuBref": "projet1 contenu bref",
        "contenu": "projet1projet1projet1projet1projet1projet1",
        "listeMots": "projet1liste"
    })
  });
  console.log(request);
  }

  const deleteProject = async () => {
    const deleteRequest = await fetch(' http://localhost:3000/projects/66210edc638de9d7f60aea7d',{
    method : 'DELETE',
    headers: {
      "Content-Type": "application/json",
    }
    });
    console.log(deleteRequest);
    console.log("projet supprimé")
  };

    

    return (
        <>
        <Header/>
        <button onClick = {getProject} className="getButton">bouton get</button>
        {/* {project ? <a>Le titre du projet sans l ID est {project.titre}</a> : <div>Loading...</div>}         */}
        <button onClick = {createProject} className="createButton">bouton créer</button>
        <button onClick = {getProjectID} className="getButtonID">bouton get avec id</button>
        {projectID ? <a>Le titre du projet avec l ID est {projectID.titre}</a> : <div>Loading...</div>}
        <button onClick = {deleteProject} className="deleteButton">bouton delete</button>      
        </>
      )
}

export default Home
