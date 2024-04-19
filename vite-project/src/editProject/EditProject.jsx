import './EditProject.css'
import Header from '../header/Header.jsx'

import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';


function EditProject() {
    const PORT = import.meta.env.VITE_PORT;
    const { id } = useParams();
    const navigate = useNavigate();
    const [project, setProject] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        fetch(`http://localhost:${PORT}/projects/${id}`)
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
        const response = await fetch(`http://localhost:${PORT}/projects/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            titre: event.target.titre.value,
            contenuBref: newContenuBref,
            contenu: newContenu,
            listeMots: event.target.listeMots.value,
            thumbnailImage: event.target.thumbnailImage.value,
            illustrationImage: event.target.illustrationImage.value,
        }),
    });
        if (response.ok) {
            navigate(`/admin/projects/${id}`);
        }
    }



    return (
        <>
        <Header />
            <div className="edit-project-container">
                <h1 className="edit-project-title">Modifier le projet</h1>
                <form onSubmit={handleSubmit} className="edit-project-form">
                    <label className="edit-project-label">
                        Titre :
                        <input type="text" name="titre" defaultValue={project?.titre} className="edit-project-input" />
                    </label>
                    <label className="edit-project-label">
                        Contenu Bref :
                        <input type="text" name="contenuBref" defaultValue={project?.contenuBref} className="edit-project-input" />
                    </label>
                    <label className="edit-project-label">
                        Contenu :
                        <textarea name="contenu" defaultValue={project?.contenu} className="edit-project-input" />
                    </label>
                    <label className="edit-project-label">
                        Liste de Mots :
                        <input type="text" name="listeMots" defaultValue={project?.listeMots} className="edit-project-input" />
                    </label>
                    <label className="edit-project-label">
                        Image Thumbnail:
                        <input type="text" name="thumbnailImage" defaultValue={project?.thumbnailImage} className="edit-project-input" />
                    </label>
                    <label className="edit-project-label">
                        Image Illustration :
                        <input type="text" name="illustrationImage" defaultValue={project?.illustrationImage} className="edit-project-input" />
                    </label>
                    {errorMessage && <p className="error-message">{errorMessage}</p>}
                    <button type="submit" className="edit-project-button">Modifier</button>
                </form>
            </div>
        </>
    )
}

export default EditProject