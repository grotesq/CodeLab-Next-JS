import React, {Component} from 'react';
import Layout from "../Layout";
import Head from 'next/head';
import TodoItemData from '../TodoItemData';

class Page extends Component {
    itemData = new TodoItemData();

    render() {
        return (
            <Layout>
                <Head>
                    <title>Page 1</title>
                </Head>

                <h1>Page 1</h1>
                <p>content</p>

                <div>
                    { this.itemData.subject }
                </div>
            </Layout>
        );
    }
}

export default Page;