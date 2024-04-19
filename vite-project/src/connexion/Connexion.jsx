import './Connexion.css'
import Header from '../header/Header.jsx'

import { useState } from 'react'
import {useNavigate} from 'react-router-dom'

function Connexion() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');


    const handleSubmit = async (event) => {
      event.preventDefault();

      setErrorMessage('');



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
        setErrorMessage('Failed to log in. Please check your email and password.');
      }
      
      
  }

  return (
    <div className="connexion-container">
      <Header/>
      <h1 className="connexion-title">Bienvenu sur la page de connexion</h1>

      <form className="connexion-form" onSubmit={handleSubmit}>
        <label>
          email :          
        <input className="connexion-input" type="text" value={email} onChange={e => setEmail(e.target.value)} />
        </label>
        <label>
          Mot de passe :
          <input className="connexion-input" type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </label>
        <input className="connexion-button" type="submit" value="Se connecter" />
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  )
}


export default Connexion;
