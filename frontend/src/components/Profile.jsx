import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import axios from 'axios'
import NavBar from './Navbar'

class Profile extends React.Component {

    render() {
        return (
            <div>
                <NavBar />    
                Profile
            </div>
        )
    }
}

export default Profile