import { Outlet } from 'react-router';
//import './App.css';
import Navbar from './Componets/Navbar';

function App() {
    
    return (
        <>
            <Navbar />
            <Outlet/>
        </>
    );
}

export default App;
