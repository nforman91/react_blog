import styled from "styled-components";

export default function Post() {
  return (
    <StyledPost>
        <StyledPostImg src="https://cdn.britannica.com/60/8160-050-08CCEABC/German-shepherd.jpg" alt="dog" />
        <StyledPostInfo>
            <div className="postDogs">
                <StyledPostDog>Music</StyledPostDog>
                <StyledPostDog>Life</StyledPostDog>
            </div>
            <StyledPostTitle>Lorem ipsum, dolor sit amet</StyledPostTitle>
            <hr/>
            <StyledPostDate>1 hour ago</StyledPostDate>
        </StyledPostInfo>
        <StyledPostDesc>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam neque facere cum velit tempora, quam non doloremque odit expedita sed cupiditate numquam recusandae soluta magni dicta! Tempora enim nemo minus! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam neque facere cum velit tempora, quam non doloremque odit expedita sed cupiditate numquam recusandae soluta magni dicta! Tempora enim nemo minus! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam neque facere cum velit tempora, quam non doloremque odit expedita sed cupiditate numquam recusandae soluta magni dicta! Tempora enim nemo minus!</StyledPostDesc>
    </StyledPost>
  )
}

const StyledPost = styled.div`
    width: 385px;
    margin: 0 25px 40px 25px;
`

const StyledPostImg = styled.img`
    width: 100%;
    height: 280px;
    object-fit: cover;
    border-radius: 7px;
`

const StyledPostInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const StyledPostDog = styled.span`
    font-family: 'Varela Round', sans-serif;
    font-size: 11px;
    color: #b39656;
    line-height: 20px;
    margin-top: 15px;
    margin-right: 10px;
    cursor: pointer;
`

const StyledPostTitle = styled.span`
    font-family: 'Josefin Sans', sans-serif;
    font-size: 24px;
    font-weight: 700;
    margin-top: 15px;
    cursor: pointer;
`

const StyledPostDate = styled.span`
    font-family: 'Lora', serif;
    font-style: italic;
    font-size: 13px;
    color: #999;
    margin-top: 15px;
`

const StyledPostDesc = styled.p`
    font-family: 'Varela Round', sans-serif;
    font-size: 14px;
    color: #444;
    line-height: 24px;
    margin-top: 15px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
`