import styled from "styled-components";

export default function Header() {
  return (
    <StyledHeader>
        <StyledHeaderTitles>
            <StyledHeaderTitleSm>React & Node</StyledHeaderTitleSm>
            <StyledHeaderTitleLg>Blog</StyledHeaderTitleLg>
        </StyledHeaderTitles>
        <StyledHeaderImg src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/440px-Image_created_with_a_mobile_phone.png" alt="phone pic" />
    </StyledHeader>
  )
}

const StyledHeader = styled.div`
    margin-top: 60px;
`

const StyledHeaderTitles = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Lora', serif;
    color: #444;
`

const StyledHeaderTitleSm = styled.span`
    position: absolute;
    top: 18%;
    font-size: 20px;
`

const StyledHeaderTitleLg = styled.span`
    position: absolute;
    top: 20%;
    font-size: 100px;
`

const StyledHeaderImg = styled.img`
    width: 100%;
    height: 450px;
    margin-top: 80px;
    object-fit: cover;
`