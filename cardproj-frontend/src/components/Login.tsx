import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    return (
        <>
            <div>
                <form>
                    <p>Enter username:</p>
                    <input type="text" name="username"></input>
                    <p>Enter password:</p>
                    <input type="password" name="password"></input>
                    <input type="submit" onClick={() => navigate("/home")} value='Login'></input>
                </form>
            </div>
        </>
    )
}

export default Login;
