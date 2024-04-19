import './Home.css'
import Header from '../header/Header.jsx'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';





function Home() {
    const navigate = useNavigate();

    useEffect(() => {
        navigate('/APropos');
    }, [navigate]);


    return (
        <>
        <Header/>  
        </>
      )
}

export default Home
