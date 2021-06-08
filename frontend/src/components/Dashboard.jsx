import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import axios from 'axios'
import NavBar from './Navbar'
import Card from './Card'

const Dashboard = (props) => {
    return (
        <Container>
            <NavBar path_to="/dashboard" link="/profile"/>
            <Card name="Barracks" path="/barracks" quote="Train Some Soldiers..." src="/img/barracks.png"/>
            <Card name="Gold Mine" path="/gold-mine" quote="See How Much Golds You've Got" src="/img/gold-mine.png"/>
            <Card name="Notifications" path="/notifications" quote="What's Up" src="/img/notification.png"/>
        </Container>
    )
}

const Container = styled.div`
    background: #0F2027;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #2C5364, #203A43, #0F2027);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #2C5364, #203A43, #0F2027); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`

export default Dashboard