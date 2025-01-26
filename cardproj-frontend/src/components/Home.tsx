import { useNavigate } from 'react-router-dom';
import '../App.css'
function Home() {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col items-center justify-center">
            <button onClick={() => navigate("/create-character")} className="bg-black text-white rounded-md p-2 w-fit">Create Character</button>
            <button onClick={() => navigate("/user-characters")} className="bg-black text-white rounded-md p-2 w-fit">Your Characters</button>
            <button onClick={() => navigate("/global-characters")} className="bg-black text-white rounded-md p-2 w-fit">Everyone's Characters</button>
        </div>
    )
}

export default Home;