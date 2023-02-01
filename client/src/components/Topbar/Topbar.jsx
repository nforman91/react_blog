import { Link } from 'react-router-dom';
import styled from "styled-components";

export default function TopBar() {
    const user = true;
  return (
    <StyledTop>
        <StyledTopLeft>
            <StyledTopIcon className="fa-brands fa-square-facebook"></StyledTopIcon>
            <StyledTopIcon className="fa-brands fa-square-twitter"></StyledTopIcon>
            <StyledTopIcon className="fa-brands fa-square-instagram"></StyledTopIcon>
        </StyledTopLeft>
        <StyledTopCenter>
            <StyledTopList>
                <StyledTopListItem>
                    <Link className="link" to="/">HOME</Link>
                </StyledTopListItem>
                <StyledTopListItem>
                    <Link className="link" to="/about">ABOUT</Link>
                </StyledTopListItem>
                <StyledTopListItem>
                    <Link className="link" to="/contact">CONTACT</Link>
                </StyledTopListItem>
                <StyledTopListItem>
                    <Link className="link" to="/write">WRITE</Link>
                </StyledTopListItem>
                <StyledTopListItem>
                    <Link className="link" to="/logout">LOGOUT</Link>
                </StyledTopListItem>
            </StyledTopList>
        </StyledTopCenter>
        <StyledTopRight>
            {
                user ? (
                    <StyledTopImg src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Monsieur_Sarazin.jpg/800px-Monsieur_Sarazin.jpg" alt="profile pic" />
                ) : (
                    <StyledTopList>
                        <StyledTopListItem>
                            <Link className="link" to="/login">LOGIN</Link>
                        </StyledTopListItem>
                        <StyledTopListItem>
                            <Link className="link" to="/register">REGISTER</Link>
                        </StyledTopListItem>
                    </StyledTopList>
                )
            }
            <StyledTopSearchIcon className="fa-solid fa-magnifying-glass"></StyledTopSearchIcon>
        </StyledTopRight>
    </StyledTop>
  )
}

const StyledTop = styled.div`
    width: 100%;
    height: 50px;
    background-color: white;
    position: sticky;
    top: 0;
    display: flex;
    align-items: center;
    font-family: 'Josefin Sans', sans-serif;
    z-index: 999;
`

const StyledTopLeft = styled.div`
    flex: 3;
    display: flex;
    align-items: center;
    justify-content: center;
`

const StyledTopRight = styled.div`
    flex: 3;
    display: flex;
    align-items: center;
    justify-content: center;
`

const StyledTopCenter = styled.div`
    flex: 6;
`

const StyledTopIcon = styled.i`
    font-size: 20px;
    margin-right: 10px;
    color: #444;
    cursor: pointer;
`

const StyledTopImg = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
`

const StyledTopList = styled.ul`
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0;
    list-style: none;
`

const StyledTopListItem = styled.li`
    margin-right: 20px;
    font-size: 18px;
    font-weight: 300;
    cursor: pointer;
`

const StyledTopSearchIcon = styled.i`
    font-size: 18px;
    color: #666;
    cursor: pointer;
    margin-left: 15px;
`