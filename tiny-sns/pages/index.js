import React from 'react';
import Layout from "../components/Layout";
import {observer} from "mobx-react";

@observer class Index extends React.Component {
    render() {
        return(
            <Layout>
                Index
            </Layout>
        );
    }
}

export default Index;