import * as React from 'react';
import { Component } from 'react';
import { MusicItem } from '../models/MusicItem';

export default class MusicComponent extends Component<any, any> {
    constructor(props: any) {
        super(props);

        this.CurrentMusic = this.props.Music;
    }

    CurrentMusic: MusicItem;

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