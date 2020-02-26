import React, { Component } from 'react';
import Header from './Header';
import Movies from './Movie/Movies';
import AddCard from './Movie/AddCard';
import { BrowserRouter as Router, Route} from 'react-router-dom';

export default class App extends Component {

    constructor() {
        super();

        this.state = {
            title: 'React Movie Cards',
        };
    }

    render() {
        return (
            <Router>
                <div>
                    <Header title={this.state.title} />
                    <Route exact path="/" render={ () => (
                        <React.Fragment>
                            <div className="mt-5">
                                <Movies/>
                            </div>
                        </React.Fragment>
                    )}/>
                    <Route path="/addCard" component={AddCard}/>
                </div>
            </Router>
        );
    }
}