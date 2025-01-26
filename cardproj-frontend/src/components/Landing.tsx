/**
 * TODO: create header
 */
import { useNavigate } from 'react-router-dom';
import '../App.css';
import background from '../assets/background2.png';

function Landing() {
    const navigate = useNavigate();
    return (
        <div style={{ backgroundImage: `url(${background})` }} className="h-screen bg-cover bg-center flex flex-col items-center">
            <h1>FIXME</h1>
            <button onClick={() => navigate("/login")}>Login</button>
        </div>
    )
}

export default Landing;