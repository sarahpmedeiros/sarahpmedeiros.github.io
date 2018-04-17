import React, {Component} from 'react';
import {Header, Image, Segment, Grid} from 'semantic-ui-react'
import headShot from '../../photos/sarah-headshot.png'

class About extends Component {


    render() {
        return (
            <div id='about'>
                <Segment style={{ padding: '8em', backgroundColor: '#f9f9f9'}} vertical>
                    <Grid columns={2} container stackable verticalAlign='middle'>
                        <Grid.Row>
                            <Grid.Column floated='left' >
                                <Image
                                    size='medium'
                                    src={headShot}/>
                            </Grid.Column>
                            <Grid.Column>
                                <Header as='h1' style={{textTransform: "uppercase",
                                    fontSize: "4vw",
                                    whiteSpace: "nowrap",
                                    fontFamily: 'Oswald, sans-serif'}}>About Me</Header>
                                <p style={{ fontSize: '1.33em'}}>
                                    I'm Sarah Medeiros a software developer at Liberty Mutual.
                                    I am currently in their entry level TechStart program.
                                    I graduated from Boston University in 2017 with a BA in Computer
                                    Science. I am interested in web development and security.
                                    In my spare time I love to bake, read, and knit. But I also enjoy
                                    learning new things.
                                </p>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>

            </div>)
    }
}

export default About