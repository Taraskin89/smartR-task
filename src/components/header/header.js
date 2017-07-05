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
                <div className='logo'>
                    <div>
                        <pre className='smart'><p ><b>S M A R T</b></p></pre>
                        <pre className='reviewer'><p>R E V I E W E R</p></pre>
                    </div>
                </div>

                <div className='title'>
                    <div className='title-1'>
                        <p>Only true and best reviews from the industry professionals</p>
                    </div>
                    <div className='title-2'>
                        <p>Over 1000+ truthful reviews of different products and services </p>
                    </div>
                </div>

                <SearchBar/>
                <Navigation/>
            </header>
        );
    }
}
