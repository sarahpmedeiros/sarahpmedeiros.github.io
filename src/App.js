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
import {Menu, Segment, Grid, Icon, Image} from 'semantic-ui-react'
import mac from './mac_pic.jpg'
class App extends Component {

    state = {
        activeItem: 'home'
    }
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <div className='Site'>
                <Router>
                    <div style={{flex: 1}}>
                        <Segment secondary={true} style={{marginBottom:'0px'}}>
                            <Grid columns={2}>
                                <Grid.Row centered={true} verticalAlign={'middle'}>
                                    <Grid.Column textAlign={'left'}>
                                        <Header style={{fontFamily: 'Oswald, sans-serif', color:'#333'}}>
                                            SARAH P. MEDEIROS
                                        </Header>
                                    </Grid.Column>
                                    <Grid.Column textAlign={'right'}>
                                        <Menu style={{border: 'none'}} secondary={true}>
                                            <Menu.Menu position={'right'}>
                                                <Menu.Item as={Link} to={'home'} active={activeItem === 'home'} onClick={this.handleItemClick} name='home'>Home</Menu.Item>
                                                <Menu.Item as={Link} to={'resume'} active={activeItem === 'resume'} onClick={this.handleItemClick} name='resume'>Resume</Menu.Item>
                                                <Menu.Item as={Link} to={'about'} active={activeItem === 'about'} onClick={this.handleItemClick} name='about'>About</Menu.Item>
                                            </Menu.Menu>
                                        </Menu>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Segment>

                        <Image src={mac}/>

                        <Switch>
                            <Route exact path="/" component={About}/>
                            <Route path="/home" component={About}/>
                            <Route path="/about" component={About}/>
                            <Route path="/resume" component={About}/>
                        </Switch>
                    </div>
                </Router>
                <Segment attached='bottom' secondary={true}>
                    <Grid columns={2}>
                        <Grid.Row>
                            <Grid.Column textAlign={'center'}>
                                <Icon name={'copyright'}/>
                                2017 Sarah Medeiros
                            </Grid.Column>
                            <Grid.Column textAlign={'center'}>
                                <a href={'https://linkedin.com/in/sarah-medeiros-0978b1112/'} target="_blank">
                                    <Icon color={'black'} name={'linkedin'}/>
                                </a>
                                <a href={'mailto:sarahpmedeiros@gmail.com'} target="_blank">
                                    <Icon color={'black'} name={'mail'}/>
                                </a>
                                <a href={'https://github.com/sarahpmedeiros'} target="_blank">
                                    <Icon color={'black'} name={'github'}/>
                                </a>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
            </div>
        )
    }
}

export default App;
