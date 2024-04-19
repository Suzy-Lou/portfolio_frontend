import './AddProject.css'
import Header from '../header/Header.jsx'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom';


function AdminPage() {

    const [titre, setTitre] = useState('');
    const [contenuBref, setContenuBref] = useState('');
    const [contenu, setContenu] = useState('');
    const [listeMots, setListeMots] = useState('');
    const [thumbnailImage, setThumbnailImage] = useState('');
    const [illustrationImage, setIllustrationImage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const PORT = import.meta.env.VITE_PORT;
    const navigate = useNavigate();

    const createProject = async (event) => {
        event.preventDefault();

        if (contenuBref.length > 80) {
            setErrorMessage('Le contenu bref ne doit pas dépasser 80 caractères.');
            return;
        }

        if (contenu.split(' ').length > 250) {
            setErrorMessage('Le contenu ne doit pas dépasser 250 mots.');
            return;
        }

        const response = await fetch(`http://localhost:${PORT}/newProject`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ titre, contenuBref, contenu, listeMots, thumbnailImage, illustrationImage})
        });

        if (response.ok) {
            navigate(`/admin/projects`);
        }
    }


    const handleBackButtonClick = () => {
        navigate('/admin/projects');
    }

return (
        <>
        <Header />
            <div className="edit-project-container">
            <button onClick={handleBackButtonClick} className="add-project-button">retour à la liste des projets</button>
    <form onSubmit={createProject} className="edit-project-form">
        <label className="edit-project-label">
            Titre :
            <input type="text" value={titre} onChange={e => setTitre(e.target.value)} className="edit-project-input" />
        </label>
        <label className="edit-project-label">
            Contenu Bref :
            <input type="text" value={contenuBref} onChange={e => setContenuBref(e.target.value)} className="edit-project-input" />
        </label>
        <label className="edit-project-label">
            Contenu :
            <textarea value={contenu} onChange={e => setContenu(e.target.value)} className="edit-project-input" />
        </label>
        <label className="edit-project-label">
            Liste de Mots :
            <input type="text" value={listeMots} onChange={e => setListeMots(e.target.value)} className="edit-project-input" />
        </label>
        <label className="edit-project-label">
            Thumbnail Image :
            <input type="text" value={thumbnailImage} onChange={e => setThumbnailImage(e.target.value)} className="edit-project-input" />
        </label>
        <label className="edit-project-label">
            Illustration Image :
            <input type="text" value={illustrationImage} onChange={e => setIllustrationImage(e.target.value)} className="edit-project-input" />
        </label>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button type="submit" className="edit-project-button">Envoyer</button>
    </form>
</div>
</>
      )
}

export default AdminPage;
