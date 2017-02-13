import React, { Component } from 'react'

export default class MusicComponent extends Component {
    constructor(props) {
        super(props);

        this.CurrentMusic = this.props.Music;
    }

    CurrentMusic: Music;

    render() {
        return (
            <div className='music-wrapper'>
                <img src='/images/recovery.png' className='img' width='200' />
                <div className='music-info'>
                    <span> <strong>Artist:</strong> {this.CurrentMusic.Artist} </span>
                    <br/>
                    <span> <strong>Song:</strong> {this.CurrentMusic.SongName} </span>
                </div>
            </div>
        );
    }
}