import React from "react"
import { selectedSong } from "../redux/actions/songActions"
import { useDispatch } from "react-redux"

const songsData = [
    {
        name: "Dil Bechara", author: "A.R. Rahman", duration: "4:02", genere: "Bollywood", album: "Dil Bechara"
    },
    {
        name: "Tum Hi Ho", author: "Arijit Singh", duration: "4:22", genere: "Bollywood", album: "Aashiqui 2"
    },
    {
        name: "Do Pal" , author: "Lata Mangeshkar, Sonu Nigam", duration: "4:06", genere: "Bollywood", album: "Veer-Zaara"
    },
    {
        name: "Tum Se Hi", author: "Mohit Chauhan", duration: "5:07", genere: "Bollywood", album: "Jab We Met"
    },
    {
        name: "Tum Mile", author: "Neeraj Shridhar", duration: "5:41", genere: "Bollywood", album: "Tum Mile"
    },
    {
        name: "One Love", author: "Blue", duration: "4:01", genere: "Pop", album: "One Love"
    }
]


const SongList = () => {


    let dispatch = useDispatch()
    return(
        <div>
            <h1>Song List</h1> 
            <table>
                <tbody>
                {
                    songsData.map((song, index) => (
                        <tr key={index} onClick={()=>dispatch(selectedSong(song))}> 
                            <td>{song.name}</td>
                        </tr>
                    ))
                }
                </tbody>

            </table>
        </div>
    )
}

export default SongList