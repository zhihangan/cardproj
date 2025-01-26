import { useNavigate } from 'react-router-dom'
import background from '../assets/userbg.png'

function UserCharacters() {
    const navigate = useNavigate();
    return (
        <div style={{ backgroundImage: `url(${background})` }} className="h-screen bg-cover bg-center flex flex-col">
            <div className="fixed top-3 right-2 w-full flex flex-row justify-end items-center space-x-4 ">
                <button onClick={() => navigate("/home")} className="bg-black text-white text-center rounded-md p-4 w-fit transform transition-transform duration-300 hover:scale-110 hover:bg-white hover:text-black">Home</button>
                <button onClick={() => navigate("/create-character")} className="bg-black text-white text-center rounded-md p-4 w-fit transform transition-transform duration-300 hover:scale-110 hover:bg-white hover:text-black">Create Character</button>
                <button onClick={() => navigate("/global-characters")} className="bg-black text-white text-center rounded-md p-4 w-fit transform transition-transform duration-300 hover:scale-110 hover:bg-white hover:text-black">Everyone's Characters</button>
                <button onClick={() => navigate("/login")} className="bg-black text-white text-center rounded-md p-4 w-fit transform transition-transform duration-300 hover:scale-110 hover:bg-white hover:text-black">Logout</button>
            </div>
            <div className="flex flex-col self-center justify-center h-screen bg-white">
                <p>To be implementend in the future.</p>
            </div>
        </div>
    )
}

export default UserCharacters;