import {SELECTED_SONGS} from './actionTypes';


export const selectedSong = (song) => {
    return {
        type: SELECTED_SONGS,
        payload: song
    }
}