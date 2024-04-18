import './AdminPage.css'
import Header from '../header/Header.jsx'

import { useState } from 'react'

function AdminPage() {

    const [titre, setTitre] = useState('');
    const [contenuBref, setContenuBref] = useState('');
    const [contenu, setContenu] = useState('');
    const [listeMots, setListeMots] = useState('');

    const createProject = async (event) => {
        event.preventDefault();

        const response = await fetch('http://localhost:3000/newProject', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ titre, contenuBref, contenu, listeMots })
        });

        if (response.ok) {
            const data = await response.json();
            console.log(data);
        } else {
            console.log('Failed to create project');
        }
    }

return (
        <>
        <Header/>
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
            <input type="submit" value="Envoyer" />
        </form>
        </>
      )
}

export default AdminPage;
