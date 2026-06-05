export default function FloatingBlobs() {
  return (
    <div className="blob-container">
      {/* Top Left - Violet Blob */}
      <div 
        className="floating-blob" 
        style={{
          width: '500px',
          height: '500px',
          backgroundColor: '#A855F7',
          top: '-100px',
          left: '-150px',
          animation: 'float-slow 25s ease-in-out infinite',
        }}
      />
      
      {/* Mid Right - Teal Blob */}
      <div 
        className="floating-blob" 
        style={{
          width: '600px',
          height: '600px',
          backgroundColor: '#2DD4BF',
          top: '30%',
          right: '-200px',
          animation: 'float-slow 30s ease-in-out infinite 3s',
        }}
      />

      {/* Bottom Left - Plum Blob */}
      <div 
        className="floating-blob" 
        style={{
          width: '450px',
          height: '450px',
          backgroundColor: '#1B1425',
          bottom: '10%',
          left: '10%',
          animation: 'float-slow 20s ease-in-out infinite 6s',
          border: '1px solid rgba(168, 85, 247, 0.2)'
        }}
      />
      
      {/* Center Deep - Violet Glow */}
      <div 
        className="floating-blob" 
        style={{
          width: '550px',
          height: '550px',
          backgroundColor: '#8B5CF6',
          top: '60%',
          left: '40%',
          opacity: 0.12,
          animation: 'float-slow 35s ease-in-out infinite 9s',
        }}
      />
    </div>
  );
}
