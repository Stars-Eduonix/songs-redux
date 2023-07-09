import React from "react"
import { selectedSong } from "../redux/actions/songActions"
import { useDispatch, useSelector } from "react-redux"




const SongList = () => {

     const data =  useSelector(state=>state.data)
     console.log(data)

    let dispatch = useDispatch()
    return(
        <div>
            <h1>Song List</h1> 
            <table>
                <tbody>
                {
                    data &&
                    data.map((song, index) => (
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