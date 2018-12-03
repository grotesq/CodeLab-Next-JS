import React, { Component } from 'react';
import Layout from "../Layout";
import { observable } from "mobx";
import { observer } from 'mobx-react';

class Data {
    @observable tab = 'tab1';
    @observable text = 'some text';
}

@observer
class Tabs extends Component {
    data = new Data();

    render() {
        return (
            <Layout>
                <h1>Tabs</h1>

                <div className="btn-group mb-4">
                    <button className="btn btn-light"
                            onClick={ () => this.data.tab = 'tab1'}
                    >Tab 1</button>
                    <button className="btn btn-light"
                            onClick={ () => this.data.tab = 'tab2'}
                    >Tab 2</button>
                </div>

                <div>
                    { this.data.tab === 'tab1' &&
                    <div>
                        <h2>Tab 1 Content</h2>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa cum et, harum id nulla rem? A accusantium, alias autem consequatur cum enim maiores sequi unde veniam. A possimus tempora voluptatem.
                    </div>
                    }
                    { this.data.tab === 'tab2' &&
                    <div>
                        <h2>Tab 2 Content</h2>
                        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi asperiores, autem
                            commodi ea eaque id incidunt ipsum labore magnam natus nihil numquam omnis perferendis quasi
                            quia quod similique ullam.
                        </div>
                        <div>Adipisci aliquid assumenda at commodi delectus dolore dolores, eligendi eos ex, expedita
                            explicabo facilis harum incidunt inventore ipsam molestiae nam odit provident quam quidem
                            recusandae sunt tempora unde velit voluptate.
                        </div>
                    </div>
                    }
                </div>

                <div className="mt-4">
                    <input type="text" className="form-control"
                           value={ this.data.text }
                           onChange={ event => this.data.text = event.currentTarget.value }/>
                </div>
            </Layout>

        );
    }
}

export default Tabs;