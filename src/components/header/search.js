import React from 'react';

export default class SearchBar extends React.Component{

    render(){
        return(
            <form action='//google.com/search' target='_blank' className='search'>
                <input type='search' name='q'  className='input' placeholder='Find a review'/>
                <input type='submit' className='submit' value=''/>
            </form>
        );
    }
}
