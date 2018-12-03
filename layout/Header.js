import React, { Component } from 'react';
import Link from "next/link";
import store from './common/store';

class Header extends Component {
    render() {
        return(
            <div className="navbar navbar-expand navbar-dark bg-dark">
                <Link href={'/'}>
                    <a className="navbar-brand">Layout Demo</a>
                </Link>

                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link href={'/settings'}>
                            <a className="nav-link">{ store.userName }님 반갑습니다!</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href={'/'}>
                            <a className="nav-link">Home</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href={'/tabs'}>
                            <a className="nav-link">Tabs</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href={'/page'}>
                            <a className="nav-link">Page</a>
                        </Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Header;