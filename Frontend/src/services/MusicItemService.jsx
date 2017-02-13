import { MusicItem } from '../models/MusicItem'

export class MusicItemService {
    constructor(props) {
        super(props);

    }

    getNewMusicItems()  {
        fetch('http://localhost:5000/MusicItems/New', {
            method: 'POST',
            body: new FormData(data)
        })
            .then(response => {
                debugger;
                return response.json()
            })
            .then(data => {
                debugger;
                console.log(data)
            })
            .catch(data => {
                debugger;
            });
    }
}