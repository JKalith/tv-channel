'use client';

import dynamic from 'next/dynamic'; // ✅ ESTA LÍNEA ES NECESARIA

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

export default function LiveTVPlayer({ streamUrl }) {
  return (
    <div style={{  position: 'relative'}}>
      <ReactPlayer
        url={streamUrl}
        playing={true}
        controls={true}
    
            
     
        config={{
          file: {
            attributes: {
              controlsList: 'nodownload',
              crossOrigin: 'anonymous',
            }
          }
        }}
      />
    </div>
  );
}
