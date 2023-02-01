import Sidebar from "../../components/Sidebar/Sidebar";
import SinglePost from "../../components/SinglePost/SinglePost";
import styled from "styled-components";

export default function Single() {
  return (
    <StyledSingle>
        <SinglePost/>
        <Sidebar/>
    </StyledSingle>
  )
}

const StyledSingle = styled.div`
    display: flex;
`