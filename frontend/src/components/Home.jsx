import styled from 'styled-components'
import { Link } from 'react-router-dom'
import NavBar from './Navbar'

const Home = (props) => {
    return (
        <Container className="h-screen">
            <NavBar path_to="/"/>
            <Content>
                <Title>Welcome To Nitavian</Title>
                <Description>
                Play the free browser game Travian Kingdoms. Build up your village, train an army,
                 choose your tribe and play against thousands of other players.
                </Description>
                <Signup className="animate-bounce" to="/register">Sign Up</Signup>
            <BgImage />
        </Content>
        </Container>
    )
}

const Container = styled.main`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    text-align: center;
    
`

const Title = styled.h1`
    color: #c8c2bc;
    font-family: 'Podkova', serif;
    font-size: 40px;
    font-weight: 900;
`

const Content = styled.div`
    margin-bottom: 10vw;
    width: 100%;
    position: relative;
    min-height: 100vh;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 80px 40px;
    height: 100%;
`
const BgImage = styled.div`
    height: 100%;
    background-size: cover;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/img/home-bg.jpg");
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    right: 0;
    z-index: -1;
`

const Signup = styled(Link)`
    font-weight: bold;
    color: #f9f9f9;
    background-color: #0a1931;
    margin-bottom: 12px;
    width: 80%;
    font-family: 'Podkova', serif;
    letter-spacing: 1.5px;
    font-size: 18px;
    padding: 16.5px 0;
    border: 1px solid transparent;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.5s ease;
    &:hover {
        background-color: #005792;
        transition: background-color 0.5s ease;
    }
`

const Description = styled.p`
    font-family: 'Podkova', serif;
    color: hsla(0, 0%, 95.3%, 1);
    font-size: 11px;
    margin: 0 0 24px; 
    line-height: 1.5;
    letter-spacing: 1.5px;
`

export default Home
