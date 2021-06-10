import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import NavBar from './Navbar'

class GoldMine extends React.Component {
    state = {
        coins: localStorage.getItem('coins')
    } 

    handleClicked = (e) => {
        e.preventDefault()
        axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${localStorage.getItem('token')}`
        }
        
        axios.post('http://localhost:8000/accounts/gold_inc/',
            {isAuthenticated: true})
                .then((res) => {
                    this.setState({coins: res.data.gold})
                    localStorage.setItem('coins', res.data.gold)
            })
            .catch((error) => {
                console.error(error)
            })
    }

    getCoins = () => {
        axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${localStorage.getItem('token')}`
        }
        axios.get('http://localhost:8000/accounts/gold_get/', 
        {isAuthenticated: true})
            .then((res) => {
                localStorage.setItem('coins', res.data.gold)
            })
            .catch((error) => {
                console.error(error)
            })
    }

    render() {
        return (
            <Container>
                <NavBar path_to='/dashboard' inOrOut="/" link="/notifications"/>    
                <Title>Gold Mine</Title>
                <Content>
                    <div>
                        <Title>{this.state.coins}</Title>
                    </div>
                    <Mine onClick={(e) => this.handleClicked(e)}>Mine +100</Mine>
                </Content>
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

const Content = styled.div`
    margin: 15%;
    margin-top: 10%;
    text-align: center;
    padding: 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.6);
    background-color: rgba(255, 255, 255, 0.06);
    backdrop-filter: blur(20px);
    border-radius: 2%;
    padding: 5%;
`

const Mine = styled.button`
    margin-top: 10%;
    padding: 3%;
    background-color: rgb(72, 0, 72, 0.7);
    border-radius: 8px;
    color: #C04848;
    width: 50%;
    &:hover{
        background-color: rgb(72, 0, 72);
        color: white;
    }
`

export default GoldMine