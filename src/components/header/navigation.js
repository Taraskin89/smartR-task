import React from 'react';

export default class Navigations extends React.Component{

    render(){
        return(
            <nav className='nav'>
                <ul id="menu">
                    <li><a href="#">Electronics</a></li>
                    <li>
                        <a href="#">Computers</a>
                        <ul className='drop-menu'>
                            <li><a href="#"><span>Laptops</span></a></li>
                            <li><a href="#"><span>Tablets</span></a></li>
                            <li><a href="#"><span>TV's</span></a></li>
                            <li className='down-2'>
                                <a href="#">Cell Phones & Services</a>
                                <ul className='drop-menu'>
                                    <li><a href="#"><span>Laptops</span></a></li>
                                    <li><a href="#"><span>Tablets</span></a></li>
                                    <li><a href="#"><span>TV's</span></a></li>
                                    <li><a href="#"><span>Printers</span></a></li>
                                    <li><a href="#"><span>Keyboard</span></a></li>
                                    <li><a href="#"><span>Mouses</span></a></li>
                                </ul>
                            </li>
                            <li><a href="#"><span>Printers</span></a></li>
                            <li><a href="#"><span>Keyboard</span></a></li>
                            <li><a href="#"><span>Mouses</span></a></li>
                            <li><a href="#"><span>WebCams</span></a></li>
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
