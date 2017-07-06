import React from 'react';

export default class LeftBar extends React.Component{

    render(){
        return(
            <article id='left-bar'>
                <a href='#' className='logo'>
                    <img src='./img/logo.png' />
                 </a>
                    <span className="footer-p">About</span>
                    <p id="footer-about-p">SmartReviewer tracks all the latest consumer technology breakthroughs and shows you what's new, what matters, and how technology can enrich your life. We give you the information, tools, and advice that will help you decide what to buy and how to get the most out of the tech in your life. We give you the information, tools, and advice that will help you decide what to buy.</p>
                    <span className="footer-p">Popular tags</span>
                    <p className='popular-tags'>
                       <a href="#">music</a><a href="#">beats</a><a href="#">headphones</a>
                       <a href="#">beats solo</a><a href="#">apple</a><a href="#">streets</a>
                       <a href="#">lifestyle</a><a href="#">news</a><a href="#">service</a><br/>
                       <a href="#">cloud</a><a href="#">touch</a><a href="#">samsung</a>
                       <a href="#">mobile</a><a href="#">xbox</a>
                    </p>
            </article>
        );
    }
}
