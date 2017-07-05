import React from 'react';

export default class SearchBar extends React.Component{

    render(){
        return(
            <div id='search'>
                <form action="//google.com/search" target="_blank">
                    <input name="q"  placeholder="Find a review"/>
                    <input type="button"/>
                </form>
            </div>
        );
    }
}
