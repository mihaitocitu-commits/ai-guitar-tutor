import { useState } from 'react';
import Onboarding from './components/Onboarding';

function App() {
  const [user, setUser] = useState(null);

  const handleOnboardingComplete = (selections) => {
    setUser(selections);
  };

  if (!user) {
    return <Onboarding onComplete={handleOnboardingComplete} />;
  }

  return (
    <div>
      <h1>AI Guitar Tutor</h1>
      <p>Language: {user.language}</p>
      <p>Guitar: {user.guitarType}</p>
      <p>Level: {user.level}</p>
    </div>
  );
}

export default App;