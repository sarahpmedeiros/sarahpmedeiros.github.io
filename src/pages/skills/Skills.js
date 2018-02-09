import React, {Component} from 'react';

// import css from '../../photos/logos/css3.png'
// import html from '../../photos/logos/html5.png'
import react from '../../photos/logos/icon-reactjs.svg'
import spring from '../../photos/logos/icon-spring-cloud.svg'
import js from '../../photos/logos/JavaScript-logo.png'
import kotlin from '../../photos/logos/Kotlin-logo.png'
import python from '../../photos/logos/python.png'
import {Image, Grid, Progress,Header} from 'semantic-ui-react';

class Skills extends Component {

    render() {
        return <div id='skills'>
            <Header content='Skills'/>
            <Grid>
                <Grid.Row>
                    <Grid.Column>

                        <Progress percent={100}/>
                    </Grid.Column>
                    <Grid.Column>
                        <Progress percent={100}/>
                    </Grid.Column>
                    <Grid.Column>
                        <Progress percent={100}/>

                    </Grid.Column>
                    <Grid.Column>
                        <Image src={react}/>
                        <Progress percent={100}/>

                    </Grid.Column>
                    <Grid.Column>
                        <Image src={spring}/>
                        <Progress percent={100}/>
                    </Grid.Column>
                    <Grid.Column>
                        <Image src={js}/>
                        <Progress percent={100}/>
                    </Grid.Column>
                    <Grid.Column>
                        <Image src={kotlin}/>
                        <Progress percent={100}/>
                    </Grid.Column>
                    <Grid.Column>
                        <Image src={python}/>
                        <Progress percent={100}/>

                    </Grid.Column>
                </Grid.Row>
            </Grid>


        </div>
    }
}

export default Skills