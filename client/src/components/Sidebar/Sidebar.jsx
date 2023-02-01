import styled from "styled-components";

export default function Sidebar() {
  return (
    <StyledSidebar>
        <StyledSidebarItem>
            <StyledSidebarTitle>ABOUT ME</StyledSidebarTitle>
            <StyledSidebarImg src="https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2022/03/what-is-a-blog.png" alt="blog pic" />
            <StyledSidebarP>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ipsum delectus assumenda at earum!</StyledSidebarP>
        </StyledSidebarItem>
        <StyledSidebarItem>
            <StyledSidebarTitle>CATEGORIES</StyledSidebarTitle>
            <StyledSidebarList>
                <StyledSidebarListItem className="sidebarListItem">Life</StyledSidebarListItem>
                <StyledSidebarListItem className="sidebarListItem">Music</StyledSidebarListItem>
                <StyledSidebarListItem className="sidebarListItem">Style</StyledSidebarListItem>
                <StyledSidebarListItem className="sidebarListItem">Sport</StyledSidebarListItem>
                <StyledSidebarListItem className="sidebarListItem">Cinema</StyledSidebarListItem>
                <StyledSidebarListItem className="sidebarListItem">Tech</StyledSidebarListItem>
            </StyledSidebarList>
        </StyledSidebarItem>
        <StyledSidebarItem>
            <StyledSidebarTitle>FOLLOW US</StyledSidebarTitle>
            <StyledSidebarSocial>
                <StyledSidebarIcon className="fa-brands fa-square-facebook"></StyledSidebarIcon>
            <StyledSidebarIcon className="fa-brands fa-square-twitter"></StyledSidebarIcon>
            <StyledSidebarIcon className="fa-brands fa-square-instagram"></StyledSidebarIcon>
            </StyledSidebarSocial>
        </StyledSidebarItem>
    </StyledSidebar>
  )
}

const StyledSidebar = styled.div`
    flex: 3;
    margin: 20px;
    padding-bottom: 30px;
    background-color: #fdfbfb;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const StyledSidebarItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const StyledSidebarTitle = styled.span`
    margin: 10px;
    padding: 5px;
    width: 80%;
    border-top: 1px solid #a7a4a4;
    border-bottom: 1px solid #a7a4a4;
    font-family: 'Varela Round', sans-serif;
    font-style: 12px;
    color: #222;
    font-weight: 600;
    line-height: 20px;
    text-align: center;
`
const StyledSidebarImg = styled.img`
    margin-top: 15px;
    width: 400px;
`

const StyledSidebarP = styled.p`
    padding: 30px;
`

const StyledSidebarList = styled.ul`
    list-style: none;
    margin-bottom: 30px;
`

const StyledSidebarListItem = styled.li`
    display: inline-block;
    width: 50%;
    margin-top: 15px;
    cursor: pointer;
`

const StyledSidebarSocial = styled.div`
    margin-top: 15px;
    width: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const StyledSidebarIcon = styled.i`
    font-size: 16px;
    margin-left: 10px;
    cursor: pointer;
`