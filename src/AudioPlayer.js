import React, { useRef, useState } from 'react';
import myAudioThumbnail from '../src/assects/images/music.jpg';

const AudioPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <div style={styles.container}>
      <img src={myAudioThumbnail} alt="Audio Thumbnail" style={styles.image} />

      <div style={styles.controls}>
        <h2 style={styles.title}>React Music Player 🎶</h2>
        <audio ref={audioRef} src="/song.mp3" preload="auto" />
        <button onClick={togglePlayPause} style={styles.button}>
          {isPlaying ? 'Pause ⏸️' : 'Play ▶️'}
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    width: '100vw',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '40px',
    backgroundColor: '#f5f5f5',
    padding: '20px',
    boxSizing: 'border-box',
  },
  image: {
    width: '400px',
    height: '400px',
    borderRadius: '10px',
    objectFit: 'cover',
  },
  controls: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '40px',
  },
  title: {
    fontSize: '24px',
    marginBottom: '10px',
  },
  button: {
    padding: '12px 24px',
    fontSize: '18px',
    cursor: 'pointer',
    border: 'none',
    backgroundColor: '#6200ea',
    color: '#fff',
    borderRadius: '5px',
  },
};

export default AudioPlayer;
