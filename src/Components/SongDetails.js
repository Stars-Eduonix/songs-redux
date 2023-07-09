
import React from "react"
import { useSelector } from "react-redux"

const SongDetails = () => {

    const selectedSong = useSelector(state => state)
    console.log(selectedSong)


    return (
        <div>
            <h1>Details</h1>
            {
                selectedSong && (
                    <div>
                        <h3>{selectedSong.name}</h3>
                        <h4>{selectedSong.author}</h4>
                        <h4>{selectedSong.duration}</h4>
                        <h5>{selectedSong.genere}</h5>
                        <h6>{selectedSong.album}</h6>
                    </div>
                )
            }
        </div>
    )
}

export default SongDetails