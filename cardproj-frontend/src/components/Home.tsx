import { useNavigate } from 'react-router-dom';
import '../App.css'
function Home() {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col">
            <button onClick={() => navigate("/create-character")}>Create Character</button>
            <button onClick={() => navigate("/user-characters")}>Your Characters</button>
            <button onClick={() => navigate("/global-characters")}>Everyone's Characters</button>
        </div>
    )
}

export default Home;