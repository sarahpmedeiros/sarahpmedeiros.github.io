import React, {Component} from 'react';
import {Container, Header, Icon} from 'semantic-ui-react'

class About extends Component {


    render() {
        return (
            <div>
                    <Container text>
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
                        send me an email
                        Feel free to reach out to me on LinkedIn or via email.
                    </Container>
                    <Container textAlign={'center'}>
                            <a href={'https://linkedin.com/in/sarah-medeiros-0978b1112/'} target="_blank">
                                <Icon color={'black'} name={'linkedin'}/>
                            </a>
                            <a href={'mailto:sarahpmedeiros@gmail.com'} target="_blank">
                                <Icon color={'black'} name={'mail'}/>
                            </a>
                            <a href={'https://github.com/sarahpmedeiros'} target="_blank">
                                <Icon color={'black'} name={'github'}/>
                            </a>
                    </Container>
            </div>)
    }
}

export default About