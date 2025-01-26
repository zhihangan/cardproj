import { useNavigate } from 'react-router-dom';
import background from '../assets/background2.png';

function Login() {
    const navigate = useNavigate();
    return (
        <div style={{ backgroundImage: `url(${background})` }} className="h-screen bg-cover bg-center flex flex-col">
            <div className="flex flex-row justify-end items-center">
                <button onClick={() => navigate("/")} className="fixed top-3 right-2 bg-black text-white text-center rounded-md p-4 w-fit transform transition-transform duration-300 hover:scale-110 hover:bg-white hover:text-black">Go Back</button>
            </div>
            <div className="h-screen flex flex-col justify-center items-center">
                <div className="bg-white p-8 rounded-lg">
                    <form className="flex flex-col items-center">
                        <p>Enter username:</p>
                        <input type="text" name="username" className="border-black border-2 rounded-xs mb-2" required></input>
                        <p>Enter password:</p>
                        <input type="password" name="password" className="border-black border-2 rounded-xs mb-2" required></input>
                        <input type="submit" onClick={() => navigate("/home")} value='Login' className="bg-black text-white rounded-md p-2"></input>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;
