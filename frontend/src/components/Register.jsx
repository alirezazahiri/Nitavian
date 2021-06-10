import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import axios from 'axios'
import NavBar from './Navbar'

class Register extends React.Component {

    state = {
        fields: {
            username: '',
            email: '',
            password1: '',
            password2: '',
        }
    }

    handleCreateAccount(e) {
        localStorage.clear()
        e.preventDefault()
        const pass1 = this.state.fields.password1
        const pass2 = this.state.fields.password2

        if(pass1 === pass2 && pass1.length >= 6) {
            document.getElementById('password1').style.border = '1px solid rgba(0, 255, 0, 0.5)'
            document.getElementById('password2').style.border = '1px solid rgba(0, 255, 0, 0.5)'
            
            axios.defaults.headers = {
                "Content-Type": "application/json",
                Authorization: ''
            }

            axios.post('http://localhost:8000/accounts/register/', {
                username: this.state.fields.username,
                password: pass1,
                email: this.state.fields.email
            })
            .then((response) => {
                console.log(response)
                axios.post('http://localhost:8000/accounts/login/', {
                    username: this.state.fields.username,
                    password: pass1
                })
                .then((response) => {
                    console.log(response)
                    localStorage.setItem('token', response.data.token)
                    localStorage.setItem('notifs', JSON.stringify([]))
                    let list = JSON.parse(localStorage.getItem('notifs'))
                    list.push('User Registered Successfully!')
                    localStorage.setItem('notifs', JSON.stringify(list))
                    this.props.history.push('/dashboard')
                    axios.defaults.headers = {
                        "Content-Type": "application/json",
                        Authorization: `Token ${localStorage.getItem('token')}`
                    }
                    axios.get('http://localhost:8000/accounts/get-info/')
                    .then((response) => {
                        console.log(response)
                        localStorage.setItem('coins', response.data.gold)
                        localStorage.setItem('swordmen', response.data.swordmen)
                    })

                    
                })
                .catch((error) => {
                    console.error(error)
                })
            })
            .catch((error) => {
                console.error(error)
            })
        }else {
            document.getElementById('password1').style.border = '1px solid rgba(255, 0, 0, 0.5)'
            document.getElementById('password2').style.border = '1px solid rgba(255, 0, 0, 0.5)'
        }
    }

    handleChange(e) {
        e.preventDefault()
        const name = e.target.name
        const changeFields = this.state.fields
        changeFields[name] = e.target.value
        this.setState({ fields: changeFields })
    }

    path_to() {
        if(this.state.isLoggedIn) {
            return "/dashboard"
        }
        return "/"
    }

    render(){
        return(
            <Container className="bg-grey-lighter min-h-screen flex flex-col">
                <NavBar path_to={this.path_to()} inOrOut="/login"/>
                <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <div  id="signup" className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                        <h1 className="mb-8 text-3xl text-center text-blue-600">Sign up</h1>
                        <form>
                        <input 
                            id="username"
                            type="text"
                            className="block w-full text-white p-3 rounded mb-4"
                            name="username"
                            placeholder="Username" 
                            onChange={(event) => this.handleChange(event)}
                        />

                        <input 
                            id="email"
                            type="email"
                            className="block w-full text-white rounded p-3 mb-4"
                            name="email"
                            placeholder="Email" 
                            onChange={(event) => this.handleChange(event)}
                            />

                        <input 
                            id="password1"
                            type="password"
                            className="block w-full text-white rounded p-3 mb-4"
                            name="password1"
                            placeholder="Password"
                            onChange={(event) => this.handleChange(event)}
                            />
                        <input 
                            id="password2"
                            type="password"
                            className="block w-full text-white rounded p-3 mb-4"
                            name="password2"
                            placeholder="Confirm Password"
                            onChange={(event) => this.handleChange(event)}
                            />
                        <button
                            type="submit"
                            className="w-full text-center py-3 rounded bg-blue-800 text-white hover:bg-blue-600 focus:outline-none my-1"
                            id="create-account"
                            onClick={(e) => this.handleCreateAccount(e)}
                        >Create Account</button>
                        </form>
                        <div id="terms-privacy" className="text-center text-sm text-grey-dark mt-4">
                            By signing up, you agree to the 
                            <a className="border-b border-gray-600 text-gray-800 hover:text-gray-500" href="#">
                                Terms of Service
                            </a> and 
                            <a className="border-b border-gray-600 text-gray-800 hover:text-gray-500" href="#">
                                Privacy Policy
                            </a>
                        </div>
                    </div>

                    <div id="suggest" className="text-grey-dark mt-6 animate-bounce">
                        Already have an account? 
                        <Link className="no-underline border-b border-blue text-gray-100 hover:text-blue-300" to="/login">
                            Log in
                        </Link>.
                    </div>
                </div>
            </Container>
        )
    }
}

const Container = styled.div`
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('/img/signup-bg.jpg');
    background-size: cover;
    background-position: center;
    height: 100%;
    margin: 0;
    h1{
        font-family: 'Work Sans', sans-serif;
        font-weight: 500;
    }

    #signup{
        box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.6);
        background-color: rgba(255, 255, 255, 0.06);
        backdrop-filter: blur(20px);
        border-radius: 2%;
        padding: 5%;
    }

    #create-account{
        transition: all 0.5s ease;
    }

    #suggest{
        color: rgba(255, 255, 255, 0.6);
        background: rgba(0, 0, 0, 0.2);
        padding: 2%;
        a{
            transition: all 0.5s ease;
        }
    }

    #terms-privacy{
        font-family: 'Work Sans', sans-serif;
        font-weight: 300;
        color: rgb(200, 200, 200);
        a{
            transition: all 0.5s ease;
        }
    }

    input{
        background: rgba(0, 0, 0, 0.5);
    }
    input:focus{
        background: rgba(0, 0, 0, 0.5);
        outline: none;
        border: 1px solid rgba(100, 100, 100, 0.5);
    }
`

export default Register
