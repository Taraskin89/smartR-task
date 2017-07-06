import React from 'react';

export default class Content extends React.Component{
	render(){
		const choice = 'servers';
		const { content } = this.props;
		return(
			 	<article className="content-bloc row">
					{
						content.map((data, index)=>{
                            return<div className='item col-md-4' key={ index }>
                                <div className='best-choise-seller'>
                                    <img src={ data.img } className="item-img" alt={data.title}/>
                                    <div className='best unvisible'>
                                        BEST { data.tag.indexOf(choice) != -1 ? 'CHOICE' : 'SELLER' }
                                    </div>
                                </div>
                                <div className="item-content">
                                    <span className='item-title'>{ data.title }</span>
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
                                        <ins>{data.tag}</ins>
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
		);
	}
}