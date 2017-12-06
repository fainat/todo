import React, {Component} from 'react';
import './navigation.scss';
import {NavLink} from './NavLink';

export class Navigation extends Component {
    render() {
        return (
            <nav className={this.props.scope || `main-nav`}>
                <ul>
                    {this.props.navlinks.map(navlink =>                     
                        <li key={ Math.floor(Math.random() * 100) } >
                            <NavLink href={`/${navlink}`} title={`${navlink}`}/>
                        </li>
                    )}
                </ul>
            </nav>
        );

    };
}