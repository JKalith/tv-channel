'use client';

import { useState } from 'react';
import LiveTVPlayer from '@/app/components/videoChannel/LiveTVPlayer';
import styles from '@/app/css/videoChannel.module.css'
const channels = {
  'Canal 13 - SINART': 'http://stream01.cyberfuel.com/SinartCanal13/livestream/playlist.m3u8',
  'SMO TV': 'http://199.217.118.90:1935/smotv/stream/playlist.m3u8',
  'San Vito TV': 'https://acceso.radiosportstv.online:3150/hybrid/play.m3u8',
  'TV UNO': 'http://k3.usastreams.com:1935/tvuno1/tvuno1/playlist.m3u8',
  'Extra TV Canal 42': 'http://k3.usastreams.com:1935/canal42/canal42/playlist.m3u8',
};

export default function LiveTVPage() {
  const [currentChannel, setCurrentChannel] = useState(Object.keys(channels)[0]);

  return (
    <div className={styles.containerTv} style={{ padding: '2rem' }}>
      <p>Canal en vivo: {currentChannel}</p>
      <div style={{ marginBottom: '1rem' }}>
        {Object.keys(channels).map((name) => (
          <button
            key={name}
            onClick={() => setCurrentChannel(name)}
            style={{
              marginRight: '0.5rem',
              padding: '0.5rem 1rem',
              background: name === currentChannel ? '#0070f3' : '#ccc',
              color: '#222',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            {name}
          </button>
        ))}
      </div>

      <LiveTVPlayer streamUrl={channels[currentChannel]} />
    </div>
  );
}
