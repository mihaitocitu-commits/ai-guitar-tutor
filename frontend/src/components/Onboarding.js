import { useState } from 'react';

function Onboarding({ onComplete }) {
  const [step, setStep] = useState(1);
  const [selections, setSelections] = useState({
    language: '',
    guitarType: '',
    level: ''
  });

  const handleSelect = (key, value) => {
    const updated = { ...selections, [key]: value };
    setSelections(updated);
    if (step < 3) {
      setStep(step + 1);
    } else {
      onComplete(updated);
    }
  };

  return (
    <div>
      {step === 1 && (
        <div>
          <h2>Choose your language</h2>
          {['English', 'Spanish', 'French'].map(lang => (
            <button key={lang} onClick={() => handleSelect('language', lang)}>
              {lang}
            </button>
          ))}
        </div>
      )}
      {step === 2 && (
        <div>
          <h2>Choose your guitar type</h2>
          {['Acoustic', 'Electric', 'Classical'].map(type => (
            <button key={type} onClick={() => handleSelect('guitarType', type)}>
              {type}
            </button>
          ))}
        </div>
      )}
      {step === 3 && (
        <div>
          <h2>Choose your level</h2>
          {['Beginner', 'Intermediate', 'Expert'].map(level => (
            <button key={level} onClick={() => handleSelect('level', level)}>
              {level}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default Onboarding;