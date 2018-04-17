import React, {Component} from 'react';

import {Segment, Header, Icon, Grid} from 'semantic-ui-react'
import './Contact.css'

class Contact extends Component {

    render() {
        return <div id={'contact'}>
            <Segment style={{padding: '8em'}}>
                <Grid centered columns={3}>
                    <Grid.Row>
                        <Grid.Column floated={'right'}>
                            <Header as='h1' style={{
                                textTransform: "uppercase",
                                fontSize: "4vw",
                                fontFamily: 'Oswald, sans-serif'
                            }}>Contact Me</Header>
                            <p style={{fontSize: '1.33em'}}>
                                Feel free to reach out to say hi or if you want to work together!
                            </p>

                        </Grid.Column>
                        <Grid.Column floated={'right'}>
                            <a href={'https://linkedin.com/in/sarah-medeiros-0978b1112/'} target="_blank">
                                <Icon name={'linkedin square'} size={'massive'} color={'blue'}/>
                            </a>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        </div>
    }
}

export default Contact