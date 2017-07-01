import React from 'react';

export default class SearchBar extends React.Component{

    render(){
        return(
                <form action="//google.com/search" target="_blank">
                    <input name="q"  placeholder="Find a review"/>
                    <input type="image" src="./img/search.png" />
                </form>
        );
    }
}
