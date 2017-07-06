import React from 'react';

import SearchBar from './search';
import Navigation from './navigation';
// import './header.css';


export default class Header extends React.Component{

    render(){
        return(
            <header id='header'>
                <div>
                    <ul className='about-link'>
                        <li>
                            <a href='#'>About us</a>
                        </li>
                        <li>
                            <a href='#'>Contacts</a>
                        </li>
                    </ul>
                </div>
                <a href='#' className='logo'>
                    <img src='./img/logo.png' />
                 </a>
                <div className='title'>
                    <div className='title-1'>
                        Only true and best reviews from the industry professionals
                    </div>
                    <div className='title-2'>
                        Over 1000+ truthful reviews of different products and services
                    </div>
                </div>
                <SearchBar/>
                <Navigation/>
            </header>
        );
    }
}
