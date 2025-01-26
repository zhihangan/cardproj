/**
 * TODO: Add buttons to background image, create header
 */
import { useNavigate } from 'react-router-dom';
import '../App.css';

function Landing() {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col align-center">
            <h1>FIXME</h1>
            <button onClick={() => navigate("/login")}>Login</button>
        </div>
    )
}

export default Landing;