import React from 'react'
import './bulma.css';
import logo from './bulma.png';

export default class bulma extends React.Component{
    constructor(){
        super();

    }

    render(){
        return(
        	<section class="hero has-background-black">
			<div class="hero-body">
				<div class="container">
					<figure class="image center">
                    <img src={logo}  style={{maxWidth: "256px"}}/>
					</figure>
				</div>
			</div>
		</section>
        );
    }
}