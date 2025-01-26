/**
 * TODO: create header
 */
import { useNavigate } from 'react-router-dom';
import '../App.css';
import background from '../assets/background2.png';

function Landing() {
    const navigate = useNavigate();
    return (
        <div style={{ backgroundImage: `url(${background})` }} className="h-screen bg-cover bg-center flex flex-col justify-center items-center">
            <h1 className="text-3xl">Character Gen!</h1>
            <button onClick={() => navigate("/login")} className="bg-black text-white rounded-md p-2 w-3xs">Login</button>
        </div>
    )
}

export default Landing;