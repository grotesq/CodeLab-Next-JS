import React, {Component} from 'react';
import Layout from "../Layout";
import Head from "next/head";

class Index extends Component {
    state = {
        tab: 'tab1',
        text: 'some text',
    };
    changeTab = ( tabName ) => {
        this.setState( { tab: tabName } );
    };
    updateText = event => {
        this.setState( { text: event.currentTarget.value } );
    };
    render() {
        return (
            <Layout>
                <Head>
                    <title>Index Page</title>
                </Head>

                <div className="mb-4">
                    <div className="btn-group">
                        <button className="btn btn-light"
                                onClick={ () => this.changeTab( 'tab1' ) }
                        >Tab 1</button>
                        <button className="btn btn-light"
                                onClick={ () => this.changeTab( 'tab2' ) }
                        >Tab 2</button>
                    </div>
                </div>

                <div>
                    { this.state.tab === 'tab1' &&
                    <div>
                        <h2>Tab 1 Content</h2>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa cum et, harum id nulla rem? A accusantium, alias autem consequatur cum enim maiores sequi unde veniam. A possimus tempora voluptatem.
                    </div>
                    }
                    { this.state.tab === 'tab2' &&
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
                    <input className="form-control" type="text"
                           value={ this.state.text } onChange={ this.updateText }/>
                </div>
            </Layout>
        );
    }
}

export default Index;