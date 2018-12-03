import React, { Component } from 'react';
import { observer } from 'mobx-react';
import store from "../common/store";
import Layout from "../Layout";

@observer
class Settings extends Component {
    update = event => {
        store.userName = event.currentTarget.value;
    };
    render() {
        return (
            <Layout>
                <input type="text"
                       className="form-control mb-2"
                       onChange={ this.update }
                       // onChange={ event => store.userName = event.target.value }
                       value={ store.userName }/>
            </Layout>
        );
    }
}

document.addEventListener( 'DOMContentLoaded', function() {
    // 익명 함수
} );
document.addEventListener( 'DOMContentLoaded', () => {
    // 화살표 익명함수
} );
document.addEventListener( 'DOMContentLoaded', () => console.log() );

export default Settings;