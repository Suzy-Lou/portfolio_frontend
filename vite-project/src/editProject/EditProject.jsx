import './EditProject.css'
import Header from '../header/Header.jsx'

import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function EditProject() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [project, setProject] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        fetch(`http://localhost:3000/projects/${id}`)
        .then(response => response.json())
        .then(data => {setProject(data);
        });
    }, [id]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const newContenuBref = event.target.contenuBref.value;
    const newContenu = event.target.contenu.value;

    if (newContenuBref.length > 80) {
        setErrorMessage('Le contenu bref ne doit pas dépasser 80 caractères.');
        return;
    }

    if (newContenu.split(' ').length > 250) {
        setErrorMessage('Le contenu ne doit pas dépasser 250 mots.');
        return;
    }
        const response = await fetch(`http://localhost:3000/projects/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            titre: event.target.titre.value,
            contenuBref: newContenuBref,
            contenu: newContenu,
            listeMots: event.target.listeMots.value,
        }),
    });
        if (response.ok) {
            navigate(`/admin/projects/${id}`);
        }
    }

    const handleBackButtonClick = () => {
        navigate('/admin/projects');
    }



    return (
        <>
        <Header/>
        <button onClick={handleBackButtonClick}>retour à la liste des projets</button>
        <h1>Modifier un projet</h1>
        <form onSubmit={handleSubmit}>
            <label>
                Titre :
                <input type="text" name="titre" defaultValue={project?.titre} />
            </label>
            <label>
                Contenu Bref :
                <input type="text" name="contenuBref" defaultValue={project?.contenuBref} />
            </label>
            <label>
                Contenu :
                <textarea name="contenu" defaultValue={project?.contenu} />
            </label>
            <label>
                Liste de Mots :
                <input type="text" name="listeMots" defaultValue={project?.listeMots} />
            </label>
            {errorMessage && <p>{errorMessage}</p>}

            <button type="submit">Modifier</button>
        </form>
        </>
    )
}

export default EditProject