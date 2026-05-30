import { useState, useEffect } from 'react';

function App() {
  const [status, setStatus] = useState('Connecting...');

  useEffect(() => {
    fetch('http://localhost:3001')
      .then(res => res.json())
      .then(data => setStatus(data.message))
      .catch(() => setStatus('Could not connect to backend'));
  }, []);

  return (
    <div>
      <h1>AI Guitar Tutor</h1>
      <p>Backend status: {status}</p>
    </div>
  );
}

export default App;