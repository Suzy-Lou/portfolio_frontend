import './AddProject.css'
import Header from '../header/Header.jsx'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom';


function AdminPage() {

    const [titre, setTitre] = useState('');
    const [contenuBref, setContenuBref] = useState('');
    const [contenu, setContenu] = useState('');
    const [listeMots, setListeMots] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
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

        const response = await fetch('http://localhost:3000/newProject', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ titre, contenuBref, contenu, listeMots })
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
        <Header/>
        <button onClick={handleBackButtonClick}>retour à la liste des projets</button>
        <form onSubmit={createProject}>
            <label>
                Titre :
                <input type="text" value={titre} onChange={e => setTitre(e.target.value)} />
            </label>
            <label>
                Contenu Bref :
                <input type="text" value={contenuBref} onChange={e => setContenuBref(e.target.value)} />
            </label>
            <label>
                Contenu :
                <textarea value={contenu} onChange={e => setContenu(e.target.value)} />
            </label>
            <label>
                Liste de Mots :
                <input type="text" value={listeMots} onChange={e => setListeMots(e.target.value)} />
            </label>
            {errorMessage && <p>{errorMessage}</p>}

            <button type="submit"  >Envoyer</button>        
            </form>
        </>
      )
}

export default AdminPage;
