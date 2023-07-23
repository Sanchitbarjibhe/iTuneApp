import React, { useState } from 'react';

export default function SongTable(props) {
    const { songs } = props;

    console.log(songs)
    return (
        <>
            <table id="tablestyle">
                <thead>
                    <tr>
                        <th>Sr.no</th>
                        <th>Title</th>
                        <th>Artist</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {songs.map((song, index) => (
                        <tr onClick={href={song['link'][0]['attributes']['href']}} key={song.id.attributes['im:id']}>
                            <td>{index + 1}. </td>
                            <td>{song['im:name']['label']}</td>
                            <td>{song['im:artist']['label']}</td>
                            <td><a href={song['link'][0]['attributes']['href']}>Play / Details</a></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}





// export default function Topsongs() {
//     //   const [songs, setSongs] = useState([]);

//     //   useEffect(() => {
//     //     const fetchData = async () => {
//     //       const response = await axios.get('https://itunes.apple.com/search?term=jack+johnson');
//     //       setSongs(response.data.results);
//     //     };
//     //     fetchData();
//     //   }, []);
//     useEffect(() => {
//         const getSongs = async () => {
//             const response = await axios.get('https://itunes.apple.com/search?term=jack+johnson');
//             return response.data.results;
//         };
//         getSongs();
//     }, []);

//     return (
//         <ul>
//             sanchit
//             {/* {songs.map((song) => (
//             <li key={song.trackId}>{song.trackName}</li>
//           ))} */}
//         </ul>
//     );
// };

