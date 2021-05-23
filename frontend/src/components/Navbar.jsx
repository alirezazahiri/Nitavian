import { NavLink, Link } from 'react-router-dom'
import styled from 'styled-components'

const NavBar = (props) => {

    const fillName = () => {
        if(props.path_to === "/dashboard") {
            return "Dashboard"
        }
        return "Home"
    }

    return(
        <Container className="sticky top-0">
            <Nav className="sticky top-0">
                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="relative flex items-center justify-between h-16">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    </div>
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex-shrink-0 flex items-center">
                        <Link to="/">
                            <img className="block lg:hidden h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow"/>
                            <img className="hidden lg:block h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow"/>
                        </Link>
                    </div>
                        <div className="hidden sm:block sm:ml-6">
                                <div className="flex space-x-4">
                                    <NavLink to={props.path_to} className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">{fillName()}</NavLink>
                                    <NavLink to="/register" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Register</NavLink>
                                    <NavLink to="/login" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Login</NavLink>
                                </div>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="sm:hidden" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        <NavLink to={props.path_to} className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">{props.path_to}</NavLink>
                        <NavLink to="/register" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Register</NavLink>
                        <NavLink to="/login" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">login</NavLink>
                    </div>
                </div>
            </Nav>
        </Container>
    )
}

const Nav = styled.nav`
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.6);
    background-color: rgba(255, 255, 255, 0.06);
    backdrop-filter: blur(20px);
    a{
        &:hover {
            transition: all 0.5s ease;
        }
    }
`

const Container = styled.div`
    background-color: rgba(19, 44, 51, 0.9);
`

export default NavBar