import React from 'react';

export default class Navigations extends React.Component{

    render(){
        return(
            <nav className='nav'>
                <ul id="menu">
                    <li><a href="#">Electronics</a></li>
                    <li>
                        <a href="#">Computers</a>
                        <ul className='drop-menu1'>
                            <li><a href="#">Laptops</a></li>
                            <li><a href="#">Tablets</a></li>
                            <li><a href="#">TV's</a></li>
                            <li className='down-2'>
                                <a href="#">Cell Phones & Services</a>
                                <ul className='drop-menu2'>
                                    <li><a href="#">Laptops</a></li>
                                    <li><a href="#">Tablets</a></li>
                                    <li><a href="#">TV's</a></li>
                                    <li><a href="#">Printers</a></li>
                                    <li><a href="#">Keyboard</a></li>
                                    <li><a href="#">Mouses</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Printers</a></li>
                            <li><a href="#">Keyboard</a></li>
                            <li><a href="#">Mouses</a></li>
                            <li><a href="#">WebCams</a></li>
                        </ul>
                    </li>
                    <li className='left'>
                        <a href="#">Games</a>
                    </li>
                    <li className='left'>
                        <a href="#">Music</a>
                    </li>
                    <li className='center'>
                        <a href="#">Appliances</a>
                    </li>
                    <li className='right'>
                        <a href="#">Home and Garden</a>
                    </li>
                    <li className='right'>
                        <a href="#">Sport</a>
                    </li>
                    <li className='last'>
                        <a href="#">Cars</a>
                    </li>
                    <li className='right'>
                        <a href="#">Services</a>
                    </li>
                    <li className='last'>
                        <a href="#" >More</a>
                    </li>
                </ul>
            </nav>
        );
    }
}
