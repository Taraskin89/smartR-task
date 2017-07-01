import React from 'react';

export default class Content extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            content: item,
            input:'',
            stars: ''
        }
    }

    componentDidUpdate(prevProps, prevState){
        this.setState({
            stars: document.querySelectorAll('.full').length
        });
        const stars = this.state.stars;
        console.log(stars);
    }

    handleInputChange(e){
        this.setState({
            input: e.target.value,
        });
    }

    render(){
        const { content } = this.state;
        const stars = this.state.stars;
        const choise = 'servers';
        return(
            <div id='content'>
                <article className="content-bloc">
                    {
                        content.map((data, index)=>{
                            return<div className='item' key={ index }>
                                <div className={'best-choise-seller' + '' }>
                                <img src={ data.img } alt={data.title}/>
                                    <p className={"best"+ stars >=4 ? '' : 'unvisible'}>
                                        BEST { data.tag.indexOf(choise) != -1 ? 'CHOISE' : 'SELLER' }
                                    </p>
                                </div>
                                <div className="item-content">
                                    <div>
                                        <b>
                                            <span ><p className='item-title'>{ data.title }</p></span>
                                        </b>
                                    </div>
                                    <div className="rat">
                                        <input
                                            type="text"
                                            className="rating rating5"
                                            onChange={::this.handleInputChange}
                                            value={4}/>
                                    </div>
                                    <div className='item-authors'>
                                        by<span className='item-auth'> { data.author }</span>
                                        <span className='item-date'>- { data.date }</span>
                                    </div>
                                    <p className='item-text'>{data.text}</p>
                                    <div className='item-tags'>
                                        <p >{ data.tag }</p>
                                    </div>
                                    <div className='horizontal-line'></div>
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
        tag: 'mobile apple touch news'
    },
    {
        id: 2,
        img: './img/item3.png',
        title: 'Beats Solo 2 Review.',
        author: 'David Carnoy',
        date: 'Oct 14, 2015',
        text: 'Like the new Studio, the Solo 2, which weighs in at 7.2 ounces (205 grams), is built more sturdily and has no visible screws.',
        tag: 'music beats headphones beats solo streets lifestyle'
    },
    {
        id: 3,
        img: './img/item4.png',
        title: 'DigitalOcean. Simple CloudHosting, Built for Developers.',
        author: 'Helen Fiesko',
        date: 'Oct 22, 2015',
        text: "The services they provide are quite basic - you get VPS's in the cloud and DNS management, that's all. No fancy load balancing, hosted databases, hadoop clusters, etc...",
        tag: 'servers service hosting cheap best cloud popular'
    },
    {
        id: 4,
        img: './img/item2.png',
        title: 'Why Halo 5: Guardians Record Breaking Sales.',
        author: 'Jeffrey Wallens',
        date: 'Oct 22, 2015',
        text: 'As a whole the Xbox community has always been more interactive because of the Halo series. The PS4 following is still great but falls short. The fantastic sales records broken by Halo 5: Guardians shows...',
        tag: 'game actions xbox pc ps4'
    },
    {
        id: 5,
        img: './img/item4.png',
        title: 'DigitalOcean. Simple CloudHosting, Built for Developers.',
        author: 'Helen Fiesko',
        date: 'Oct 22, 2015',
        text: "The services they provide are quite basic - you get VPS's in the cloud and DNS management, that's all. No fancy load balancing, hosted databases, hadoop clusters, etc...",
        tag: 'servers service hosting cheap best cloud popular'
    },
    {
        id: 6,
        img: './img/item1.png',
        title: 'Apple iPhone 6s Review.',
        author: 'John Mayer',
        date: 'Nov 2, 2015',
        text: 'Improved speed everywhere (new processor, faster wireless, quicker Touch ID sensor); a sturdier body; better front and rear cameras; a bold new 3D Touch pressure-sensitive display that could ...',
        tag: 'mobile apple touch news'
    },
    {
        id: 7,
        img: './img/item3.png',
        title: 'Beats Solo 2 Review.',
        author: 'David Carnoy',
        date: 'Oct 14, 2015',
        text: 'Like the new Studio, the Solo 2, which weighs in at 7.2 ounces (205 grams), is built more sturdily and has no visible screws.',
        tag: 'music beats headphones beats solo streets lifestyle'
    },
    {
        id: 8,
        img: './img/item1.png',
        title: 'Apple iPhone 6s Review.',
        author: 'John Mayer',
        date: 'Nov 2, 2015',
        text: 'Improved speed everywhere (new processor, faster wireless, quicker Touch ID sensor); a sturdier body; better front and rear cameras; a bold new 3D Touch pressure-sensitive display that could ...',
        tag: 'mobile apple touch news'
    },
    {
        id: 9,
        img: './img/item2.png',
        title: 'Why Halo 5: Guardians Record Breaking Sales.',
        author: 'Jeffrey Wallens',
        date: 'Oct 22, 2015',
        text: 'As a whole the Xbox community has always been more interactive because of the Halo series. The PS4 following is still great but falls short. The fantastic sales records broken by Halo 5: Guardians shows...',
        tag: 'game actions xbox pc ps4'

    },
    {
        id: 10,
        img: './img/item4.png',
        title: 'DigitalOcean. Simple CloudHosting, Built for Developers.',
        author: 'Helen Fiesko',
        date: 'Oct 22, 2015',
        text: "The services they provide are quite basic - you get VPS's in the cloud and DNS management, that's all. No fancy load balancing, hosted databases, hadoop clusters, etc...",
        tag: 'servers service hosting cheap best cloud popular'

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
