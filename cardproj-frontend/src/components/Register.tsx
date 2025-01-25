import { useNavigate } from 'react-router-dom';

function Register() {
    const navigate = useNavigate();
    return (
        <div>
            <form>
                <p>Enter username:</p><br/>
                <input type="text" name="username"></input>
                <p>Enter password:</p><br/>
                <input type="password" name="password"></input>
                <p>Confirm password:</p><br/>
                <input type="password" name="confirm-password"></input>
                <input type="submit" onClick={() => navigate("/home")} value='Register'></input>
            </form>
        </div>
    )
}

export default Register;