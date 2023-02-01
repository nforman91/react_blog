import Post from "../Post/Post"
import styled from "styled-components";

export default function Posts({posts}) {
  return (
    <StyledPosts>
      {posts.map(p => (
        <Post/>
      ))}
    </StyledPosts>
  )
}

const StyledPosts = styled.div`
    flex: 9;
    display: flex;
    flex-wrap: wrap;
    margin: 20px;
`