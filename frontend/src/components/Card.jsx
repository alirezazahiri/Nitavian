import React from 'react'
import { Link } from 'react-router-dom'

class Card extends React.Component {

    render() {
        return(
            <div className="content">
            <div>
                <div className="flex flex-col">
                    <div className="bg-gray-400 shadow-lg m-3 rounded-3xl p-4">
                        <div className="flex-none lg:flex">
                            <div className=" h-full w-full lg:h-48 lg:w-48   lg:mb-0 mb-3">
                                <img src={this.props.src}
                                    alt="icon" className=" w-full  object-scale-down lg:object-cover  lg:h-48 rounded-2xl"/>
                            </div>
                            <div className="flex-auto ml-3 justify-evenly py-2">
                                <div className="flex flex-wrap ">
                                    <div className="w-full flex-none text-xs text-blue-700 font-medium ">
                                        Nitavian
                                    </div>
                                    <h2 className="flex-auto text-lg font-medium">{this.props.name}</h2>
                                </div>
                                <p className="mt-3"></p>
                                <div className="flex py-4  text-sm text-gray-200 bold">
                                    {this.props.quote}
                                </div>
                                <div className="flex p-4 pb-2 border-t border-gray-200 "></div>
                                <div className="flex space-x-3 text-sm font-medium">
                                    <Link to={this.props.path} pathname={this.props.path}
                                        className="mb-2 md:mb-0 bg-gray-900 px-5 py-2 shadow-sm tracking-wider text-white rounded-full hover:bg-gray-800"
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