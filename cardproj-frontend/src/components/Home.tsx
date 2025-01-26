import { useNavigate } from 'react-router-dom';
import '../App.css'
import backgroundVideo from '../assets/video-background.mp4'

function Home() {
    const navigate = useNavigate();
    return (
        <div className="relative h-screen flex flex-col">
            <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover">
                <source src={backgroundVideo} type="video/mp4"></source>
                Your browser doesn't support the video tag.
            </video>
            <div className="relative z-10 flex flex-col">
                <div className="flex flex-row justify-end items-center">
                    <button onClick={() => navigate("/login")} className="fixed top-3 right-2 bg-black text-white text-center rounded-md p-4 w-fit transform transition-transform duration-300 hover:scale-110 hover:bg-white hover:text-black">Log Out</button>
                </div>
                <div className="h-screen flex flex-col justify-center items-center space-y-4">
                    <button onClick={() => navigate("/create-character")} 
                        className="bg-black text-white text-center rounded-md p-4 w-xs transform transition-all hover:scale-110 hover:bg-white hover:text-black"
                        >Create Character</button>
                    <button onClick={() => navigate("/user-characters")} 
                        className="bg-black text-white text-center rounded-md p-4 w-xs transform transition-all hover:scale-110 hover:bg-white hover:text-black"
                        >Your Characters</button>
                    <button onClick={() => navigate("/global-characters")} 
                        className="bg-black text-white text-center rounded-md p-4 w-xs transform transition-all hover:scale-110 hover:bg-white hover:text-black"
                        >Everyone's Characters</button>
                </div>
            </div>
        </div>
    )
}

export default Home;