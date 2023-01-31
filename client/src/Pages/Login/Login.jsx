import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Login() {
  return (
    <StyledLogin>
        <StyledLoginTitle>Login</StyledLoginTitle>
        <StyledLoginForm>
            <StyledLoginLabel>Email</StyledLoginLabel>
            <StyledLoginInput type="text" placeholder="Enter your email..." />
            <label>Password</label>
            <input type="password" className="loginInput" placeholder="Enter your password..." />
            <StyledLoginButton>Login</StyledLoginButton>
        </StyledLoginForm>
        <StyledLoginRegisterButton>
            <Link className="link" to="/register">Register</Link>
        </StyledLoginRegisterButton>
    </StyledLogin>
  )
}

const StyledLogin = styled.div`
    height: calc(100vh - 50px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: linear-gradient(rgba(255, 255, 255, 0.5),rgba(255, 255, 255, 0.5)), url("https: //www.google.com/url?sa=i&url=https%3A%2F%2Fwww.login.gov%2F&psig=AOvVaw0wI_6Xaw0TFBcMoRwBZhD8&ust=1673049714338000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCPiIscDVsfwCFQAAAAAdAAAAABAT");
    background-size: cover;
`

const StyledLoginTitle = styled.span`
    font-size: 50px;
`

const StyledLoginForm = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
`

const StyledLoginLabel = styled.label`
    margin: 10px 0;
`

const StyledLoginInput = styled.input`
    padding: 10px;
    background-color: white;
    border: none;
`

const StyledLoginButton = styled.button`
    margin-top: 20px;
    cursor: pointer;
    background-color: lightcoral;
    color: white;
    border-radius: 10px;
    padding: 10px;
`

const StyledLoginRegisterButton = styled.button`
    position: absolute;
    top: 60px;
    right: 20px;
    background-color: teal;
    cursor: pointer;
    border: none;
    padding: 10px;
    color: white;
    border-radius: 10px;
`