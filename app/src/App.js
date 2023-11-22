import React, { useState } from 'react';
import { Wheel } from 'react-custom-roulette';
import './index.css';

const data = [
  { option: '1', style: { backgroundColor: '#04499a', textColor: 'black' }, phrase: "Awesome Hack: You can take a route already used by an opponent and you appropriate it." },
  { option: '2', style: { backgroundColor: '#791144', textColor: 'black' }, phrase: "Fast Fiber: Double the number of cables you can lay on your next turn." },
  { option: '3', style: { backgroundColor: '#dd3d1a', textColor: 'black' }, phrase: "Electromagnetic Storm: All players lose a cable. Remove one from their randomly selected cable." },
  { option: '4', style: { backgroundColor: '#f08fa5', textColor: 'black' }, phrase: "Enhanced Security: No roads can be taken this turn." },
  { option: '5', style: { backgroundColor: '#00985b', textColor: 'black' }, phrase: "Connection Node: Add a free link to one of your lines." },
  { option: '6', style: { backgroundColor: '#8d4d26', textColor: 'black' }, phrase: "Strategic Hack: Swap a line color with an opponent." },
  { option: '7', style: { backgroundColor: '#f1d707', textColor: 'black' }, phrase: "Unlimited Flow: Play two rounds in the next round." },
  { option: '8', style: { backgroundColor: '#95969a', textColor: 'black' }, phrase: "Bot Attack: Remove a binding from an opponent. " },
  { option: '9', style: { backgroundColor: '#c18c75', textColor: 'black' }, phrase: "Signal Amplifier: Increase the value of an existing link from any 2-cable player." },
  { option: '10', style: { backgroundColor: '#0299d8', textColor: 'black' }, phrase: "Quick Fix: If you are removed a cable during the game you can retrieve it and place it after one of your line." },
  { option: '11', style: { backgroundColor: '#fcab00', textColor: 'black' }, phrase: "Antivirus Effective: Immunity from negative effects of event maps for 3 rounds." },
  { option: '12', style: { backgroundColor: '#ffffff', textColor: 'black' }, phrase: "Virtual Obstacle: You can hack your opponent, preventing them from binding on their next turn."},
  { option: '13', style: { backgroundColor: '#c7ebfc', textColor: 'black' }, phrase: "Power Failure: No cables can be installed during the next turn." },
  { option: '14', style: { backgroundColor: '#4878b0', textColor: 'black' }, phrase: "Computer Intrusion: Swap two cables belonging to different opponents." },
  { option: '15', style: { backgroundColor: '#61b397', textColor: 'black' }, phrase: "Instant Recovery: you are no longer affected by an event." },
  { option: '16', style: { backgroundColor: '#27c9b0', textColor: 'black' }, phrase: "Global Expansion: Get a city from a line other than yours belonging to any player." },
  { option: '17', style: { backgroundColor: '#064a1e', textColor: 'black' }, phrase: "Increased Bandwidth: You can play two additional cable cards this turn." },
  { option: '18', style: { backgroundColor: '#69ac1b', textColor: 'black' }, phrase: "Data Saturation: No event card can be played by other players during two rounds." }
];

function App() {

  const [mustStartSpinning, setMustStartSpinning] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [displayPhrase, setDisplayPhrase] = useState(false);

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * data.length);
    setPrizeNumber(newPrizeNumber);
    setMustStartSpinning(true);
    setDisplayPhrase(false); // Masquer le texte lors du démarrage de la roue
  };

  return (
    <div className="App">
      <Wheel 
        className="Wheel"
        mustStartSpinning={mustStartSpinning}
        prizeNumber={prizeNumber}
        data={data}
        backgroundColors={['#3e3e3e', '#df3428']}
        textColors={['#ffffff']}
        spinDuration='0.4'
        onStopSpinning={() => {
          setMustStartSpinning(false);
          setDisplayPhrase(true); // Afficher le texte une fois que la roue s'est arrêtée
        }}
      />
      <button onClick={handleSpinClick}>Spin</button>
      {displayPhrase && <p>{data[prizeNumber].phrase}</p>}
    </div>
  );
}

export default App;
