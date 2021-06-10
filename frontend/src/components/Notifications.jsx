import React from 'react'
import styled from 'styled-components'
// import axios from 'axios'
import NavBar from './Navbar'

class Notification extends React.Component {

    showItems = () => {
        let list = JSON.parse(localStorage.getItem('notifs'))
        let html = ''
        for(let i = 0; i < list.length; i++){
            html += `<h1>${list[i]}</h1></br>`
        }
        document.getElementById('notifications').innerHTML = html
        document.getElementById('notifications').style =  'color: #c8c2bc;'+
                                                          "font-family: 'Podkova', serif;"+
                                                          'padding: 5%;'+
                                                          'text-align: center;'+
                                                          'border: 1px rgba(255, 255, 255, 0.06) solid;'+
                                                          'margin: 5%;'+
                                                          'background: rgba(0, 0, 0, 0.2);'
        document.getElementById('notif-show').style = 'visibility: hidden;'
    }

    render() {
        return (
            <Container>
                <NavBar path_to='/dashboard' inOrOut="/" link="/barracks" link2="/gold-mine"/>    
                <Title>Notification</Title>
                <div id="notifications" sty></div>
                <center><CustomBtn id='notif-show' onClick={() => this.showItems()}>Show Notifications</CustomBtn></center>
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

const CustomBtn = styled.button`
    margin: 30px;
    text-align: center;
    color: #c8c2bc;
    font-family: 'Podkova', serif;
    padding: 1%;
    transition: background 0.2s ease-in-out;
    &:hover{
        border: 1px rgba(255, 255, 255, 0.06) solid;
        background: rgba(255, 255, 255, 0.2);
        transition: background 0.2s ease-in-out;
    }
`

export default Notification