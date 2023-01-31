import { useState, useEffect } from "react"
import Header from "../../components/Header/Header"
import Posts from "../../components/Posts/Posts"
import Sidebar from "../../components/Sidebar/Sidebar"
import axios from "axios"
import styled from "styled-components"

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts")
      setPosts(res.data)
    }
    fetchPosts()
  }, []);

  return (
    <>
        <Header/>
        <StyledHome>
            <Posts posts={posts}/>
            <Sidebar/>
        </StyledHome>
    </>
  )
}

const StyledHome = styled.div`
    display: flex;
`