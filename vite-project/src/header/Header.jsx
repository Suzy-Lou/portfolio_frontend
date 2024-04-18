import './Header.css'
import utilisateurLogo from '../icones/utilisateur.png'
import homeLogo from '../icones/accueil.svg'
import { Link } from 'react-router-dom';


//TODO : faire le header en navBar

// import { useState } from 'react'

function HeaderContainer() {
    return (
        <div className="header-container">
            <Header />
        </div>
    );
}

function Header() {
    return (
        <>
        <div className="header">
            <div className="logoHome">
                <Link to="/">
                    <a href="URL_Home">
                        <img src={homeLogo} alt="home"/>
                    </a>
                </Link>
            </div>
            <div className="titre">
                <Link to="/APropos">
                    Suzy-Lou Gervot
                </Link>
            </div>
            <Link to="/projets">
                <button className="project-button">projets</button>
            </Link>
            <div className="logoUtilisateur">
                <Link to="/Connexion">
                    <a href="Connexion">
                        <img src={utilisateurLogo} alt="utilisateur"/>
                    </a>
                </Link>
            </div> 
        </div>
        </>
      )
}

export default HeaderContainer
