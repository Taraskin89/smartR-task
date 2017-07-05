import React from 'react';
import $ from 'jquery';

import './content.css';

export default class Content extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            content: item,
            input:''
        }
    }

    componentDidMount(){
        this.setRating();
    }

    setRating(){
        let rating;
        let x;
        const productRate = $(".productRate");

        productRate.hover(
            function () { /* при наведении мыши на блок с рейтингом, динамически добавляем блок с подсветкой выбранной оценки */
                $(this).append("<span></span>");
            },
            function () { /* при уходе с рейтинга, удаляем блок с подсветкой */
                $(this).find("span").remove();
            });

        productRate.mousemove(

            function(e){
                if (!e) e =
                    window.event;
                if (e.pageX){
                    x = e.pageX;
                } else if (e.clientX){
                    x = e.clientX + (document.documentElement.scrollLeft || document.body.scrollLeft) - document.documentElement.clientLeft;
                }
                let posLeft = 0;
                let obj = this;
                while (obj.offsetParent) {
                    posLeft += obj.offsetLeft;
                    obj = obj.offsetParent;
                }
                let offsetX = x-posLeft,
                    modOffsetX = 5* offsetX % this.offsetWidth;
                rating = parseInt(5 * offsetX / this.offsetWidth);

                if (modOffsetX > 0) rating += 1;

                $(this).find("span").eq(0).css("width", rating * 15 + "px");

            });


        productRate.click(function () {
            console.log("Я ставлю " + rating);
            if(rating >= 4) $(this).parent().parent().children().children('.best').removeClass('unvisible');
            else $(this).parent().parent().children().children('.best').addClass('unvisible');
            return true;
        });
    }

    handleInputChange(e){
        this.setState({
            input: e.target.value,
        });
    }

    render(){
        const { content } = this.state;
        const choice = 'servers';
        return(
            <div id='content'>
                <article className="content-bloc">
                    {
                        content.map((data, index)=>{
                            return<div className='item' key={ index }>
                                <div className='best-choise-seller'>
                                <img src={ data.img } className="item-img" alt={data.title}/>
                                    <div className='best unvisible'>
                                        BEST { data.tag.indexOf(choice) != -1 ? 'CHOICE' : 'SELLER' }
                                    </div>
                                </div>
                                <div className="item-content">
                                    <div>
                                        <b>
                                            <span ><p className='item-title'>{ data.title }</p></span>
                                        </b>
                                    </div>
                                    <div className="productRate">
                                        <div style={{width: '55%'}}></div>
                                        <div className="rat-list"></div>
                                    </div>
                                    <div className='item-authors'>
                                        by<span className='item-auth'> { data.author }</span>
                                        <span className='item-date'>- { data.date }</span>
                                    </div>
                                    <p className='item-text'>{data.text}</p>
                                    <div className='item-tags'>
                                        <p><ins>{data.tag}</ins></p>
                                    </div>
                                    <div className='horizontal-line'>
                                        <span> </span>
                                    </div>
                                    <a href="#" className='item-read-review'>READ REVIEW</a>
                                </div>
                            </div>

                        })
                    }
                </article>
                <div className="btn-more">
                    <div id="read-more">
                        <a href="#">LOAD MORE</a>
                    </div>
                </div>

            </div>
        );
    }
}

const item = [
    {
        id: 1,
        img: './img/item1.png',
        title: 'Apple iPhone 6s Review.',
        author: 'John Mayer',
        date: 'Nov 2, 2015',
        text: 'Improved speed everywhere (new processor, faster wireless, quicker Touch ID sensor); a sturdier body; better front and rear cameras; a bold new 3D Touch pressure-sensitive display that could ...',
        tag: ['mobile',' apple',' touch',' news']
    },
    {
        id: 2,
        img: './img/item2.png',
        title: 'Why Halo 5: Guardians Record Breaking Sales.',
        author: 'Jeffrey Wallens',
        date: 'Oct 22, 2015',
        text: 'As a whole the Xbox community has always been more interactive because of the Halo series. The PS4 following is still great but falls short. The fantastic sales records broken by Halo 5: Guardians shows...',
        tag: 'game actions xbox pc ps4'

    },
    {
        id: 3,
        img: './img/item3.png',
        title: 'Beats Solo 2 Review.',
        author: 'David Carnoy',
        date: 'Oct 14, 2015',
        text: 'Like the new Studio, the Solo 2, which weighs in at 7.2 ounces (205 grams), is built more sturdily and has no visible screws.',
        tag: 'music beats headphones beats solo streets lifestyle'
    },
    {
        id: 4,
        img: './img/item4.png',
        title: 'DigitalOcean. Simple CloudHosting, Built for Developers.',
        author: 'Helen Fiesko',
        date: 'Oct 22, 2015',
        text: "The services they provide are quite basic - you get VPS's in the cloud and DNS management, that's all. No fancy load balancing, hosted databases, hadoop clusters, etc...",
        tag: 'servers service hosting cheap best cloud popular'
    },
    {
        id: 5,
        img: './img/item3.png',
        title: 'Beats Solo 2 Review.',
        author: 'David Carnoy',
        date: 'Oct 14, 2015',
        text: 'Like the new Studio, the Solo 2, which weighs in at 7.2 ounces (205 grams), is built more sturdily and has no visible screws.',
        tag: 'music beats headphones beats solo streets lifestyle'
    },
    {
        id: 6,
        img: './img/item4.png',
        title: 'DigitalOcean. Simple CloudHosting, Built for Developers.',
        author: 'Helen Fiesko',
        date: 'Oct 22, 2015',
        text: "The services they provide are quite basic - you get VPS's in the cloud and DNS management, that's all. No fancy load balancing, hosted databases, hadoop clusters, etc...",
        tag: 'servers service hosting cheap best cloud popular'
    },
    {
        id: 7,
        img: './img/item1.png',
        title: 'Apple iPhone 6s Review.',
        author: 'John Mayer',
        date: 'Nov 2, 2015',
        text: 'Improved speed everywhere (new processor, faster wireless, quicker Touch ID sensor); a sturdier body; better front and rear cameras; a bold new 3D Touch pressure-sensitive display that could ...',
        tag: 'mobile apple touch news'
    },
    {
        id: 8,
        img: './img/item2.png',
        title: 'Why Halo 5: Guardians Record Breaking Sales.',
        author: 'Jeffrey Wallens',
        date: 'Oct 22, 2015',
        text: 'As a whole the Xbox community has always been more interactive because of the Halo series. The PS4 following is still great but falls short. The fantastic sales records broken by Halo 5: Guardians shows...',
        tag: 'game actions xbox pc ps4'
    },
    {
        id: 9,
        img: './img/item4.png',
        title: 'DigitalOcean. Simple CloudHosting, Built for Developers.',
        author: 'Helen Fiesko',
        date: 'Oct 22, 2015',
        text: "The services they provide are quite basic - you get VPS's in the cloud and DNS management, that's all. No fancy load balancing, hosted databases, hadoop clusters, etc...",
        tag: 'servers service hosting cheap best cloud popular'

    },
    {
        id: 10,
        img: './img/item1.png',
        title: 'Apple iPhone 6s Review.',
        author: 'John Mayer',
        date: 'Nov 2, 2015',
        text: 'Improved speed everywhere (new processor, faster wireless, quicker Touch ID sensor); a sturdier body; better front and rear cameras; a bold new 3D Touch pressure-sensitive display that could ...',
        tag: 'mobile apple touch news'

    },
    {
        id: 11,
        img: './img/item2.png',
        title: 'Why Halo 5: Guardians Record Breaking Sales.',
        author: 'Jeffrey Wallens',
        date: 'Oct 22, 2015',
        text: 'As a whole the Xbox community has always been more interactive because of the Halo series. The PS4 following is still great but falls short. The fantastic sales records broken by Halo 5: Guardians shows...',
        tag: 'game actions xbox pc ps4'
    },
    {
        id: 12,
        img: './img/item3.png',
        title: 'Beats Solo 2 Review.',
        author: 'David Carnoy',
        date: 'Oct 14, 2015',
        text: 'Like the new Studio, the Solo 2, which weighs in at 7.2 ounces (205 grams), is built more sturdily and has no visible screws.',
        tag: 'music beats headphones beats solo streets lifestyle'

    }
];
