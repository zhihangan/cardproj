import { useNavigate } from 'react-router-dom';
import '../App.css'
import backgroundVideo from '../assets/video-background.mp4'

function Home() {
    const navigate = useNavigate();
    return (
        <div className="relative h-screen flex flex-col items-center justify-center bg-yellow-500">
            <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover">
                <source src={backgroundVideo} type="video/mp4"></source>
                Your browser doesn't support the video tag.
            </video>
            <div className="relative z-10">
                <button onClick={() => navigate("/create-character")} className="bg-black text-white rounded-md p-2 w-fit">Create Character</button>
                <button onClick={() => navigate("/user-characters")} className="bg-black text-white rounded-md p-2 w-fit">Your Characters</button>
                <button onClick={() => navigate("/global-characters")} className="bg-black text-white rounded-md p-2 w-fit">Everyone's Characters</button>
            </div>
            
        </div>
    )
}

export default Home;