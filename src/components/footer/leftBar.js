import React from 'react';

import Logo from '../header/logo';

export default class LeftBar extends React.Component{

    render(){
        return(
            <article id='left-bar'>
                <div className='logo'>
                    <div>
                        <pre className='smart'><p ><b>S M A R T</b></p></pre>
                        <pre className='reviewer'><p>R E V I E W E R</p></pre>
                    </div>
                </div>
                    <p className="footer-p">About</p>
                    <span id="footer-about-span">SmartReviewer tracks all the latest consumer technology breakthroughs and shows you what's new, what matters, and how technology can enrich your life. We give you the information, tools, and advice that will help you decide what to buy and how to get the most out of the tech in your life. We give you the information, tools, and advice that will help you decide what to buy.</span>
                    <p className="footer-p">Popular tags</p>
                    <span className='popular-tags'>
                       <pre  id="pop-tags">
                           <a href="#">music</a><a href="#">beats</a><a href="#">headphones</a>
                           <a href="#">beats solo</a><a href="#">apple</a><a href="#">streets</a>
                           <a href="#">lifestyle</a><a href="#">news</a><a href="#">service</a><br/>
                           <a href="#">cloud</a><a href="#">touch</a><a href="#">samsung</a>
                           <a href="#">mobile</a><a href="#">xbox</a>
                        </pre>
                    </span>
            </article>
        );
    }
}
