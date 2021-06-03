import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import axios from 'axios'
import NavBar from './Navbar'

class Card extends React.Component {

    render() {
        return(
            <div class="content">
            <div>
                <div class="flex flex-col">
                    <div class="bg-gray-400 shadow-lg m-2 rounded-3xl p-4">
                        <div class="flex-none lg:flex">
                            <div class=" h-full w-full lg:h-48 lg:w-48   lg:mb-0 mb-3">
                                <img src={this.props.src}
                                    alt="icon" class=" w-full  object-scale-down lg:object-cover  lg:h-48 rounded-2xl"/>
                            </div>
                            <div class="flex-auto ml-3 justify-evenly py-2">
                                <div class="flex flex-wrap ">
                                    <div class="w-full flex-none text-xs text-blue-700 font-medium ">
                                        Nitavian
                                    </div>
                                    <h2 class="flex-auto text-lg font-medium">{this.props.name}</h2>
                                </div>
                                <p class="mt-3"></p>
                                <div class="flex py-4  text-sm text-gray-200 bold">
                                    {this.props.quote}
                                </div>
                                <div class="flex p-4 pb-2 border-t border-gray-200 "></div>
                                <div class="flex space-x-3 text-sm font-medium">
                                    <Link to={this.props.path}
                                        class="mb-2 md:mb-0 bg-gray-900 px-5 py-2 shadow-sm tracking-wider text-white rounded-full hover:bg-gray-800"
                                        aria-label="like">Go to {this.props.name}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Card