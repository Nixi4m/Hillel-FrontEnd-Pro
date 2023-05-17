import React, { useState } from 'react';

const SmileyList = () => {
  const [smileys, setSmileys] = useState([
    { id: 1, emoji: '😊', count: 0 },
    { id: 2, emoji: '😄', count: 0 },
    { id: 3, emoji: '😍', count: 0 },
  ]);

  const handleVote = (id) => {
    const updatedSmileys = smileys.map((smiley) => {
      if (smiley.id === id) {
        return { ...smiley, count: smiley.count + 1 };
      }
      return smiley;
    });
    setSmileys(updatedSmileys);
  };

  const showResults = () => {
    const winningSmiley = smileys.reduce((prev, current) => {
      return prev.count > current.count ? prev : current;
    });
    return winningSmiley.emoji;
  };

  return (
    <div>
      <h2>Emoji Vote</h2>
      {smileys.map((smiley) => (
        <div key={smiley.id}>
          <span>{smiley.emoji}</span>
          <button onClick={() => handleVote(smiley.id)}>Vote</button>
          <span>{smiley.count}</span>
        </div>
      ))}
      <button onClick={() => alert(showResults())}>Show Results</button>
    </div>
  );
};

export default SmileyList;
