/**
 * TODO: Add buttons to background image, create header
 */
import { useNavigate } from 'react-router-dom';

function Landing() {
    const navigate = useNavigate();
    return (
        <div>
            <h1>FIXME</h1>
            <button onClick={() => navigate("/login")}>Login</button>
        </div>
    )
}

export default Landing;