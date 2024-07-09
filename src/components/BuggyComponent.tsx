import React, { useState } from 'react';

const BuggyCounter: React.FC = () => {
  const [error, setError] = useState<boolean>(false);

  const handleClick = () => {
    setError(true);
  };

  if (error) {
    throw new Error('Thank you mario! But our princess is in another castle!');
  }

  return <button onClick={handleClick}>Find Princess</button>;
};

export default BuggyCounter;
