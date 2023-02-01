import styled from "styled-components";

export default function SinglePost() {
  return (
    <StyledSinglePost>
        <StyledSinglePostWrapper>
            <StyledSinglePostImg src="https://cdn.britannica.com/60/8160-050-08CCEABC/German-shepherd.jpg" alt="dog" />
            <StyledSinglePostTitle>Lorem ipsum dolor sit amet.
                <StyledSinglePostEdit>
                    <StyledSinglePostIconFirst className="fa-regular fa-pen-to-square"></StyledSinglePostIconFirst>
                    <StyledSinglePostIconLast className="fa-regular fa-trash-can"></StyledSinglePostIconLast>
                </StyledSinglePostEdit>
            </StyledSinglePostTitle>
            <StyledSinglePostInfo>
                <span className="singlePostAuthor">Author: <b>Nathan</b></span>
                <span className="singlePostDate">1 hour ago</span>
            </StyledSinglePostInfo>
            <StyledSinglePostDesc>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio maxime ipsa ad rem quidem ea voluptatum animi ut. Maxime ipsam maiores illo atque? Accusantium earum est maxime iste et ex! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio maxime ipsa ad rem quidem ea voluptatum animi ut. Maxime ipsam maiores illo atque? Accusantium earum est maxime iste et ex! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio maxime ipsa ad rem quidem ea voluptatum animi ut. Maxime ipsam maiores illo atque? Accusantium earum est maxime iste et ex! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio maxime ipsa ad rem quidem ea voluptatum animi ut. Maxime ipsam maiores illo atque? Accusantium earum est maxime iste et ex! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio maxime ipsa ad rem quidem ea voluptatum animi ut. Maxime ipsam maiores illo atque? Accusantium earum est maxime iste et ex!</StyledSinglePostDesc>
        </StyledSinglePostWrapper>
    </StyledSinglePost>
  )
}

const StyledSinglePost = styled.div`
    flex: 9;
`

const StyledSinglePostWrapper = styled.div`
    padding: 20px;
    padding-right: 0;
`

const StyledSinglePostImg = styled.img`
    width: 100%;
    height: 300px;
    border-radius: 5px;
    object-fit: cover;
`

const StyledSinglePostTitle = styled.h1`
    text-align: center;
    margin: 10px;
    font-family: 'Lora', serif;
    font-size: 20px;
`

const StyledSinglePostEdit = styled.div`
    float: right;
    font-size: 16px;
`

const StyledSinglePostIconFirst = styled.i`
    margin-left: 10px;
    cursor: pointer;
    color: teal;
`

const StyledSinglePostIconLast = styled.i`
    margin-left: 10px;
    cursor: pointer;
    color: tomato;
`
const StyledSinglePostInfo = styled.div`
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    color: #ba9656;
    font-family: 'Varela Round', sans-serif;
`

const StyledSinglePostDesc = styled.p`
    color: #666;
    font-size: 18px;
    line-height: 25px;
`