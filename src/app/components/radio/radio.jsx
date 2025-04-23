
import { useEffect, useRef } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import '../../css/radio-player-global.css';
import styles from '../../css/radio.module.css';

export default function Radio() {
  const playerRef = useRef();






  useEffect(() => {
    const handleKeyDown = (e) => {
      // Evita que las flechas controlen el volumen si lo deseas
      if (["ArrowUp", "ArrowDown"].includes(e.key)) {
        e.preventDefault();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className={styles.radioContainer}>
      <h2>Radio en Vivo</h2>
      <AudioPlayer
        ref={playerRef}
        src="http://stream.zeno.fm/mn4trc66gv8uv"
    
   


        showFilledVolume={true}
        showFilledProgress={true}
        customVolumeControls={["VOLUME"]}
        listenInterval={10000}
        volume={0.5}
     
        showJumpControls={false}
       
      />



</div>
);
}