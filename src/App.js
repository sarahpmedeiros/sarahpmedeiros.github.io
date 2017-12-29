import React, {Component} from 'react';
import './App.css';
import {Header} from 'semantic-ui-react'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Resume from './pages/resume/Resume'
import {
    Route,
    HashRouter as Router,
    Switch,
    Link
} from 'react-router-dom'
import {Menu, Segment, Container, Icon} from 'semantic-ui-react'

class App extends Component {

    render() {
        return (
            <div className='Site'>
                <Router>
                    <div style={{flex: 1}}>
                        <Header>
                            <Menu style={{border: 'none'}} secondary borderless attached='top'>
                                <Menu.Menu position={'right'}>
                                    <Menu.Item as={Link} to={'home'}>Home</Menu.Item>
                                    <Menu.Item as={Link} to={'resume'}>Resume</Menu.Item>
                                    <Menu.Item as={Link} to={'about'}>About</Menu.Item>
                                </Menu.Menu>
                            </Menu>
                        </Header>
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route path="/home" component={Home}/>
                            <Route path="/about" component={About}/>
                            <Route path="/resume" component={Resume}/>
                        </Switch>
                    </div>
                </Router>
                <Segment vertical attached='bottom'>
                    <Container textAlign={'center'}>
                        <Icon name={'copyright'}/>
                        2017 Sarah Medeiros
                    </Container>
                </Segment>
            </div>
        )
    }
}

export default App;
