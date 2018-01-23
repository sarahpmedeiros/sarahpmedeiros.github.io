import React, {Component} from 'react';
import {Container, Header, Image,Segment} from 'semantic-ui-react'
import headShot from './sarah_pic.png'

class About extends Component {


    render() {
        return (
            <div>
                <Segment>
                    <Container text>
                        <Image src={headShot} size='medium' centered={true}/>
                        <Header textAlign={'center'} size={'large'}>
                            <Header.Content content={'About Me'}/>
                        </Header>
                    </Container>
                    <Container text textAlign={'center'} style={{padding: '30px'}}>
                        I'm Sarah Medeiros a software developer at Liberty Mutual.
                        I am currently in their entry level TechStart program.
                        I graduated from Boston University in 2017 with a BA in Computer
                        Science. I am interested in web development and security.
                        In my spare time I love to bake, read, and knit. But I also enjoy
                        learning new things. If you want to work together on a project just
                        send me an email.
                        Feel free to reach out to me on LinkedIn or via email.
                    </Container>
                </Segment>
            </div>)
    }
}

export default About