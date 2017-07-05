import React from 'react';
import $ from 'jquery';

export default class RightBar extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            products:products,
            reviews:reviews,
            input: ''
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
                                        <div className="productRate">
                                            <div style={{width: '75%'}}></div>
                                        </div>
                                        <br/>
                                        <div className='author-line'>
                                            <pre>by <span className='item-auth-foo'>{ item.author }</span> <span className="item-date-foo"> -{ item.date }</span></pre>
                                        </div>
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
                            return <div className='item-popular-prod' key={index}>
                                <div className="fooo-item">
                                    <img src={ item.img } className='foo-img' alt={ item.title }/>
                                    <div className="items-info-foo">
                                        <span className='item-title-foo'>{ item.title }</span><br/>
                                        <div className="productRate">
                                            <div style={{width: '85%'}}></div>
                                        </div><br/>
                                        <div className='author-line'>
                                            <pre>by <span className='item-auth-foo'>{ item.author }</span> <span className="item-date-foo"> -{ item.date }</span></pre>
                                        </div>
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
