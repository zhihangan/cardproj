import { useNavigate } from 'react-router-dom';
import background from '../assets/background2.png';

function Register() {
    const navigate = useNavigate();
    return (
        <div style={{ backgroundImage: `url(${background})` }} className="h-screen bg-cover bg-center flex flex-col justify-center items-center">
            <div className="bg-white p-8 rounded-lg">
                <form className="flex flex-col items-center">
                    <p>Enter username:</p><br/>
                    <input type="text" name="username" className="border-black border-2 rounded-xs mb-2" required></input>
                    <p>Enter password:</p><br/>
                    <input type="password" name="password" className="border-black border-2 rounded-xs mb-2" required></input>
                    <p>Confirm password:</p><br/>
                    <input type="password" name="confirm-password" className="border-black border-2 rounded-xs mb-2" required></input>
                    <input type="submit" onClick={() => navigate("/home")} value='Register' className="bg-black text-white rounded-md p-2"></input>
                </form>
            </div>
        </div>
    )
}

export default Register;