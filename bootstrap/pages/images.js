import React, { Component } from 'react';
import Head from 'next/head';
import ProfileImage from '../components/ProfileImage';

class Images extends Component {
    render() {
        return(
            <div>
                <Head>
                    <title>Profile Images</title>
                </Head>
                <h1>Profile Images</h1>
                <div>
                    <ProfileImage/>
                    <ProfileImage url="https://placeimg.com/300/300/animals"/>
                    <ProfileImage url="https://placeimg.com/400/400/animals"/>
                </div>
                <div>
                    <ProfileImage size={ 150 }/>
                    <ProfileImage size={ 150 } url="https://placeimg.com/300/300/animals"/>
                    <ProfileImage size={ 150 } url="https://placeimg.com/400/400/animals"/>
                </div>
                <div>
                    <ProfileImage size={ 100 }/>
                    <ProfileImage size={ 100 } url="https://placeimg.com/300/300/animals"/>
                    <ProfileImage size={ 100 } url="https://placeimg.com/400/400/animals"/>
                </div>
            </div>
        );
    }
}

export default Images;