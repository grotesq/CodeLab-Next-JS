import React, { Component } from 'react';
import Link from 'next/link';

class Index extends Component {
    render() {
        return (
            <div>
                <h1>Bootstrap Demo</h1>

                <Link href='/images'>
                    <a className="btn btn-primary">Profile Images</a>
                </Link>
            </div>
        );
    }
}

export default Index;