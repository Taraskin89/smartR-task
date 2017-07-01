import React from 'react';

export default class RightBar extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            products:products,
            reviews:reviews,
            input: ''
        }
    }

    handleInputChange(e){
        this.setState({
            input: e.target.value,
            stars: document.querySelectorAll('.full').length
        });
    }

    render(){
        const { products, reviews } = this.state;
        return(
            <article id="right-bar">
                <p className="rightBar-title">Best Rates Products</p>
                <div id="best-products">
                    {
                        products.map((item,index)=>{
                            return <div className='item-popular-prod' key={index}>
                                <div className="fooo-item">
                                    <img src={ item.img } className='foo-img' alt={ item.title }/>
                                    <div className="items-info-foo">
                                        <span className='item-title-foo'>{ item.title }</span><br/>
                                        <span>
                                            <input
                                            type="text"
                                            className="rating rating5"
                                            onChange={::this.handleInputChange}
                                            value={5}/>
                                        </span>
                                        <pre>by <span className='item-auth-foo'>{ item.author }</span><span className="item-date-foo"> -{ item.date }</span></pre>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
                <p className="footer-p">Best Latest Reviews</p>
                <div id="best-reviews">
                    {
                        reviews.map((item,index)=>{
                            return <div className='item-popular-reviews' key={index}>
                                <div className="fooo-item">
                                    <img src={ item.img } className='foo-img' alt={ item.title }/>
                                    <div className="items-info-foo">
                                        <span className='item-title-foo'>{ item.title }</span><br/>
                                        <span>
                                            <input
                                            type="text"
                                            className="rating rating5"
                                            onChange={::this.handleInputChange}
                                            value={4}/>
                                        </span>
                                        <pre>by <span className='item-auth-foo'>{ item.author }</span><span className="item-date-foo"> -{ item.date }</span></pre>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
            </article>
        );
    }
}
const products = [
    {
        id:1,
        title:'iPhone 6S review',
        img:'./img/prod1.png',
        author:'John Mayer',
        date:'Nov 2, 2015'

    },
    {
        id:2,
        title:'Assassins Creed Syndicate review',
        img:'./img/prod2.png',
        author:'David Carnoy',
        date:'Oct 12, 2015'
    },
    {
        id:3,
        title:'Nicon D750 review',
        img:'./img/prod3.png',
        author:'John Mayer',
        date:'Nov 2, 2015'
    }
];
const reviews =[
    {
        id:1,
        title:'Samsung UNH6350 series review',
        img:'./img/rat1.png',
        author:'John Mayer',
        date:'Nov 2, 2015'
    },
    {
        id:2,
        title:'Beats Solo 2. Why is it so popular?',
        img:'./img/rat2.png',
        author:'David Carnoy',
        date:'Oct 12, 2015'
    },
    {
        id:3,
        title:'Samsung Galaxy S6',
        img:'./img/rat3.png',
        author:'John Mayer',
        date:'Nov 2, 2015'
    }
];
