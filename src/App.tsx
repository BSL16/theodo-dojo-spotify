import logo from './assets/logo.svg';
import './App.css';
import { useState } from 'react';
import { fetchTracks } from './lib/fetchTracks';
import { useQuery } from '@tanstack/react-query';



const App = () => {

  const [trackIndex, setTrackIndex] = useState(0)
  const goToNextTrack = () => {
    setTrackIndex(trackIndex + 1);
  }

  const { data: tracks } = useQuery({
		queryKey: ['tracks'],
		queryFn: fetchTracks
    
});
  console.log(tracks)
  var n = tracks?.length
  
  return (
    
    <div className="App">
      <p> il y a {n} nombres de musique dans ma playlist </p>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Bienvenue sur le blind test fait par Bamba</h1>
      </header>
      <div className="App-images">
        <img src={'https://fr.wikipedia.org/wiki/Ahmadou_Bamba#/media/Fichier:AhmaduBamba.jpg'} style={{width:200, height:200}}/>
      <p>{tracks[0]?.track.name}</p>
        <p>C'est parti!</p>
      </div>
      <div className="App-buttons"></div>
      
      <audio src={trackUrls[trackIndex]} autoPlay controls />
      <button onClick={goToNextTrack}>
          Next track
      </button>

    </div>
  );
};

export default App;

const trackUrls = [
  'https://p.scdn.co/mp3-preview/742294f35af9390e799dd96c633788410a332e52',
  'https://p.scdn.co/mp3-preview/5a12483aa3b51331aba663131dbac967ccb33d99',
  'https://p.scdn.co/mp3-preview/31f65b6a613010f22316c7be335b62226cf2f263',
  'https://p.scdn.co/mp3-preview/0f6b8a3524ec410020457da4cdd7717f9addce2f',
  'https://p.scdn.co/mp3-preview/ac28d1b0be285ed3bfd8e9fa5fad133776d7cf36',
];






