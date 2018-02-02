import React, {Component} from 'react';
import './App.css';
import {Header} from 'semantic-ui-react'
import About from './pages/about/About'
import Resume from './pages/resume/Resume'
import {Menu, Segment, Grid, Icon, Container, Visibility, Responsive, Image} from 'semantic-ui-react'
import desk from '../src/desk.jpg'
const FixedMenu = () => (
    <Menu fixed='top' size='large' pointing>
        <Header style={{
            fontFamily: 'Oswald, sans-serif',
            color: '#333',
            position: 'absolute',
            top: '8px',
            left: '16px',
            textAlign: 'center'
        }}>
            Sarah P. Medeiros

        </Header>
        <Container>
            <Menu.Menu position='right' style={{
                fontFamily: 'Oswald, sans-serif'}}>
                <Menu.Item href='#about' name='about'>About</Menu.Item>
                <Menu.Item href='#resume' name='resume'>Resume</Menu.Item>
                <Menu.Item href='#contact' name='contact'>Contact</Menu.Item>
            </Menu.Menu>
        </Container>
    </Menu>
)

class App extends Component {

    state = {
        activeItem: 'home',
        visible: false
    }
    handleItemClick = (e, {name}) =>
        {
            this.setState({activeItem: name})
        }
    hideFixedMenu = () => this.setState({visible: false})
    showFixedMenu = () => this.setState({visible: true})


    render() {
        const visible = this.state.visible

        return (
            <div className='Site'>
                <div style={{flex: 1}}>
                    {visible ? <FixedMenu/> : null}
                    <Visibility
                        onBottomPassed={this.showFixedMenu}
                        onBottomVisible={this.hideFixedMenu}
                        once={false}>
                        <Responsive minWidth={768}>

                        <div style={{position:"relative", display:"block"}}>
                            <Image src={desk} fluid={true} />
                                    <Header style={{
                                        position: "absolute",
                                        color: "white",
                                        top:"50%",
                                        left:"50%",
                                        transform: "translate(-50%, -50%)",
                                        textAlign: "center"
                                    }}>
                                        <h1 style={{
                                            fontSize: "8vw",
                                            whiteSpace: "nowrap",
                                            fontFamily: 'Oswald, sans-serif'}}>
                                            Sarah Medeiros
                                        </h1>

                                        <h1 style={{textTransform: "uppercase",
                                            fontSize: "4vw",
                                            whiteSpace: "nowrap",
                                            fontFamily: 'Oswald, sans-serif'}}>
                                            web developer
                                        </h1>
                                    </Header>
                                    <Menu secondary size='massive' inverted style={{
                                        fontFamily: 'Oswald, sans-serif',
                                        position: 'absolute',
                                        top: '8px',
                                        right: '16px',
                                        textAlign: 'center'
                                    }}>
                                        <Menu.Menu position={'right'} >
                                            <Menu.Item href='#about' name='about' onClick={this.handleItemClick}>About</Menu.Item>
                                            <Menu.Item onClick={this.handleItemClick} name='resume'>Resume</Menu.Item>
                                            <Menu.Item onClick={this.handleItemClick} name='contact'>Contact</Menu.Item>
                                        </Menu.Menu>
                                    </Menu>

                            </div>
                        </Responsive>
                    </Visibility>
                    <About/>
                    <Resume/>
                </div>
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
