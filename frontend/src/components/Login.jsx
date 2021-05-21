import React from 'react'
import styled from 'styled-components'


class Login extends React.Component {

    handleLogin(e) {
        /* implement the axios... send JSON to http://localhost:8000/accounts/login */
        console.log("handleLogin fired!")
    }

    render() {
        return(
            <Container className="bg-grey-lighter min-h-screen flex flex-col">
                <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <div  id="signup" className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                        <h1 className="mb-8 text-3xl text-center text-blue-600">Sign in</h1>
                        <input 
                            type="text"
                            className="block w-full text-white p-3 rounded mb-4"
                            name="username"
                            placeholder="Username" 
                            />

                        <input 
                            type="password"
                            className="block w-full text-white p-3 rounded mb-4"
                            name="password"
                            placeholder="Password"
                        />

                        <button
                            type="submit"
                            className="w-full text-center py-3 rounded bg-blue-800 text-white hover:bg-blue-600 focus:outline-none my-1"
                            id="create-account"
                            onClick={this.handleLogin}
                        >Login</button>
                    </div>

                    <div id="suggest" className="text-grey-dark mt-6 animate-bounce">
                        Don't Have an Account?
                        <a className="no-underline border-b border-blue text-gray-100 hover:text-blue-300" href="/register">
                            Create One!
                        </a>.
                    </div>
                </div>
            </Container>
        )
    }
}

const Container = styled.div`
    background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('/img/signup-bg.jpg');
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
        font-weight: 500;
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

export default Login
