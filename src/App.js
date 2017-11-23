import React, {Component} from 'react';
import './App.css';
import {Header} from 'semantic-ui-react'
import Home from './pages/home/Home'
import About from './pages/about/About'
import {
    Route,
    HashRouter as Router,
    Link
} from 'react-router-dom'
import {Menu} from 'semantic-ui-react'

class App extends Component {

    render() {
        return (
            <div>
                <Router>
                    <div>
                    <Header>
                        <Menu style={{border: 'none'}} secondary borderless attached='top'>
                            <Menu.Menu position={'right'}>
                                <Menu.Item as={Link} to={'/home'}>Home</Menu.Item>
                                <Menu.Item as={Link} to={'/about'}>About</Menu.Item>
                                <Menu.Item as={Link} to={'/resume'}>Resume</Menu.Item>
                                <Menu.Item as={Link} to={'/contact'}>Contact Me</Menu.Item>
                            </Menu.Menu>
                        </Menu>
                    </Header>
                    <main>
                        <Route exact path="/home" component={Home}/>
                        <Route path="/about" component={About}/>
                        <Route path="/resume" component={About}/>
                        <Route path="/contact" component={About}/>
                    </main>
                    </div>
                </Router>
            </div>
        )
    }
}

export default App;
