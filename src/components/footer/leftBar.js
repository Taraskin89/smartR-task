import React from 'react';

import Logo from '../header/logo';

export default class LeftBar extends React.Component{

    render(){
        const tags = ['music','beats','headphones','beats solo','apple','streets','lifestyle','news','service','cloud','touch','samsung','mobile','xbox'];
        return(
            <article id='left-bar'>
                <div id="footer-logo">
                    <span>
                        <pre className='smart-foo'><p><b>S M A R T</b></p></pre>
                        <pre className='reviewer-foo'><p>R E V I E W E R</p></pre>
                    </span>
                </div>
                    <p className="footer-p">About</p>
                    <span id="footer-about-span">SmartReviewer tracks all the latest consumer technology breakthroughs and shows you what's new, what matters, and how technology can enrich your life. We give you the information, tools, and advice that will help you decide what to buy and how to get the most out of the tech in your life. We give you the information, tools, and advice that will help you decide what to buy.</span>
                    <p className="footer-p">Popular tags</p>
                    <span className='popular-tags'>
                       <pre  id="pop-tags">
                           <span>
                               {
                                   tags.map((item,index)=>{
                                       return <a key={ index } href="#"><ins>{ item }</ins>    </a>

                                   })
                               }
                           </span>

                        </pre>
                    </span>
            </article>
        );
    }
}
