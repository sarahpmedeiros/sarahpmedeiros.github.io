import React, {Component} from 'react';

import {Segment, Container, Header, Icon, Grid, Button} from 'semantic-ui-react'
import './Contact.css'
class Contact extends Component {

    render() {
        return <div id={'contact'}>
            <Segment className={'segmentBackground'}>
                <Container text textAlign={'center'} >
                    <Header size={'large'}>
                        <Header.Content content={'Contact Me'}/>
                    </Header>
                    Feel free to reach out to me to say hi or if you want to work together!
                </Container>
                <Container textAlign={'center'} >
                    <Grid columns={2}>
                        <Grid.Column>
                            <Button className={'ui color button'} size={'large'}>
                                <Icon name={'mail'} size={'big'}/>
                                Email Sarah
                            </Button>
                        </Grid.Column>
                        <Grid.Column>
                            <Button className={'ui color button'} size={'large'}>
                                <Icon name={'linkedin square'} size={'big'}/>
                                Message Sarah on LinkedIn
                            </Button>
                        </Grid.Column>
                    </Grid>
                </Container>
            </Segment>
        </div>
    }
}

export default Contact