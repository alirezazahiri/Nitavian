import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import axios from 'axios'
import NavBar from './Navbar'

class GoldMine extends React.Component {

    render() {
        return (
            <Container>
                <NavBar path_to='/dashboard'/>    
                <Title>Gold Mine</Title>
            </Container>
        )
    }
}

const Container = styled.div`
    background: #c31432;  
    background: -webkit-linear-gradient(to right, #240b36, #c31432);  
    background: linear-gradient(to right, #240b36, #c31432); 
    min-height: 100vh;
`

const Title = styled.h1`
    margin-top: 20px;
    color: #c8c2bc;
    font-family: 'Podkova', serif;
    font-size: 40px;
    font-weight: 900;
    text-align: center;
`

export default GoldMine