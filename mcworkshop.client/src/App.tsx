import { Outlet } from 'react-router';
import Navbar from './Componets/NavBar/Navbar';
//import './App.css';

function App() {
    
    return (
        <>
            <Navbar />
            <Outlet/>
        </>
    );
}

export default App;
