import './Connexion.css'
import Header from '../header/Header.jsx'

import { useState } from 'react'
import {useNavigate} from 'react-router-dom'

function Connexion() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

    const handleSubmit = async (event) => {
      event.preventDefault();

      const response = await fetch('http://localhost:3000/login', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email, password })
      });
      if (response.ok){
        const data = await response.json();
        console.log(data);
        navigate('/admin/projects');
      } else {
        console.log('Failed to log in');
      }
      
      
  }

//a revoir en plus propre
    return (
        <>
        <Header/>
        bienvenu sur la page de connexion

        <form onSubmit={handleSubmit}>
            <label>
                Nom d utilisateur :
                <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
            </label>
            <label>
                Mot de passe :
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
            </label>
            <input type="submit" value="Se connecter" />
        </form>
        </>
      )
}


export default Connexion;
