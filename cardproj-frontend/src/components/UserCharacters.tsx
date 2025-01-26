import { useNavigate } from 'react-router-dom'
import background from '../assets/background2.png'

function UserCharacters() {
    const navigate = useNavigate();
    return (
        <div style={{ backgroundImage: `url(${background})` }} className="h-screen bg-cover bg-center flex flex-col">
            <div className="flex flex-row justify-end items-center space-x-2 w-screen px-2">
                <button onClick={() => navigate("/home")} className="bg-black text-white text-center rounded-md p-4 w-fit">Home</button>
                <button onClick={() => navigate("/create-character")} className="bg-black text-white text-center rounded-md p-4 w-fit">Create Character</button>
                <button onClick={() => navigate("/global-characters")} className="bg-black text-white text-center rounded-md p-4 w-fit">Everyone's Characters</button>
                <button onClick={() => navigate("/login")} className="bg-black text-white text-center rounded-md p-4 w-fit">Logout</button>
            </div>
            <div className="flex flex-col self-center justify-center h-screen bg-white">
                <p>FIXME</p>
            </div>
        </div>
    )
}

export default UserCharacters;