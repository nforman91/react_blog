import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Register() {
  return (
    <StyledRegister>
        <StyledRegisterTitle>Register</StyledRegisterTitle>
        <StyledRegisterForm>
            <StyledRegisterLabel>Username</StyledRegisterLabel>
            <StyledRegisterInput type="text" placeholder="Enter your username..." />
            <StyledRegisterLabel>Email</StyledRegisterLabel>
            <StyledRegisterInput type="text" placeholder="Enter your email..." />
            <StyledRegisterLabel>Password</StyledRegisterLabel>
            <StyledRegisterInput type="password" placeholder="Enter your password..." />
            <StyledRegisterButton>Register</StyledRegisterButton>
        </StyledRegisterForm>
        <StyledRegisterLoginButton>
          <Link className="link" to="/login">Login</Link>
        </StyledRegisterLoginButton>
    </StyledRegister>
  )
}

const StyledRegister = styled.div`
    height: calc(100vh - 50px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: linear-gradient(rgba(255, 255, 255, 0.5),rgba(255, 255, 255, 0.5)), url("https: //t4.ftcdn.net/jpg/02/08/27/73/360_F_208277332_DgdJiQwSzIYw714ovaCwNBaSDdVtJB2M.jpg");
    background-size: cover;
`

const StyledRegisterTitle = styled.span`
    font-size: 50px;
`

const StyledRegisterForm = styled.form`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
`

const StyledRegisterLabel = styled.label`
    margin: 10px 0;
`

const StyledRegisterInput = styled.input`
    padding: 10px;
    background-color: white;
    border: none;
`

const StyledRegisterButton = styled.button`
    margin-top: 20px;
    cursor: pointer;
    background-color: teal;
    color: white;
    border-radius: 10px;
    padding: 10px;
`

const StyledRegisterLoginButton = styled.button`
    position: absolute;
    top: 60px;
    right: 20px;
    background-color: lightcoral;
    cursor: pointer;
    border: none;
    padding: 10px;
    color: white;
    border-radius: 10px;
`