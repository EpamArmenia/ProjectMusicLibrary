import React, { Component } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import Music from '../components/MusicComponent'
import { LinkContainer } from 'react-router-bootstrap'
import { MusicItem } from '../models/MusicItem'

export default class HomeComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }
    
    render() {
        // let music = {Artist: 'Eminem', SongName: 'Guts Over Fear'};
        let music = new MusicItem();
        music.Artist = 'Eminem';
        music.SongName = 'Guts Over Fear';

        return (
            <div className="text-center">
                <h1><span className='label label-primary'> Welcome to Project Music Library </span></h1>

                <p> You can <a href='/signin' > sign in </a>
                             to create your very own special playlist for free </p>
                <hr/>
                <div className='container' >
                    <Row>
                        <Col sm={4}>
                            <Music Music={music}/>
                        </Col>
                        <Col sm={4}>
                            <Music Music={music}/>
                        </Col>
                        <Col sm={4}>
                            <Music Music={music}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={4}></Col><Col sm={4}></Col><Col sm={4}></Col>
                    </Row>
                    <Row>
                        <Col sm={4}></Col><Col sm={4}></Col><Col sm={4}></Col>
                    </Row>
                </div>
            </div>
        );
    }
}