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
            <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }} className="text-white text-4xl px-16 py-8 rounded-lg shadow-lg text-center w-full max-w-xl h-sm">
                Character Gen
            </div>
            <button onClick={() => navigate("/login")} className="mt-4 bg-black text-white rounded-md px-4 py-2 w-32 hover:bg-white hover:text-black transform hover:scale-105 transition-all">
                Login
            </button>
        </div>
    );
}


export default Landing;