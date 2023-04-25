import React, { useState } from 'react';
import './App.css';

function Fibonacci() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(1);
  const [z, setZ] = useState(2);
  const [divisor1, setDivisor1] = useState(3);
  const [divisor2, setDivisor2] = useState(5);
  const [word1, setWord1] = useState("Fizz");
  const [word2, setWord2] = useState("Buzz");
  const [sequence, setSequence] = useState([]);
  const [updatedSequence, setUpdatedSequence] = useState([]);

  function generateSequence() {
    const fib = [1, 1];
    for (let i = 2; i < x; i++) {
      const prevY = fib[i - y] || 1;
      const prevZ = fib[i - z] || 1;
      fib.push(prevY + prevZ);
    }
    setSequence(fib);

    const updatedSeq = fib.map((num) => {
      if (num % divisor1 === 0 && num % divisor2 === 0) {
        return word1 + word2;
      } else if (num % divisor1 === 0) {
        return word1;
      } else if (num % divisor2 === 0) {
        return word2;
      } else {
        return num;
      }
    });
    setUpdatedSequence(updatedSeq);
  }

  return (
    <div className="container">
      <h2>Fibonacci-FizzBuzz</h2>
      <label style={{ display: 'block', paddingRight: '5px' }}>
        X:
        <input type="number" value={x} onChange={(e) => setX(e.target.value)} />
      </label>
      <label style={{ display: 'block', paddingRight: '5px' }}>
        Y:
        <input type="number" value={y} onChange={(e) => setY(e.target.value)} />
      </label>
      <label style={{ display: 'block', paddingRight: '5px' }}>
        Z:
        <input type="number" value={z} onChange={(e) => setZ(e.target.value)} />
      </label>
      <label style={{ display: 'block', paddingRight: '55px' }}>
        Divisor 1:
        <input type="number" value={divisor1} onChange={(e) => setDivisor1(e.target.value)} />
      </label>
      <label style={{ display: 'block', paddingRight: '55px' }}>
        Divisor 2:
        <input type="number" value={divisor2} onChange={(e) => setDivisor2(e.target.value)} />
      </label>
      <label style={{ display: 'block', paddingRight: '45px' }}>
        Word 1:
        <input type="text" value={word1} onChange={(e) => setWord1(e.target.value)} />
      </label>
      <label style={{ display: 'block', paddingRight: '45px' }}>
        Word 2:
        <input type="text" value={word2} onChange={(e) => setWord2(e.target.value)} />
      </label>
      <button style={{ display: 'block', marginTop: '10px', margin: '0 auto' }} onClick={generateSequence}>
        Generate Sequence
      </button>
      <p style={{ whiteSpace: 'pre-wrap', textAlign: 'left' }}>Initial sequence: {sequence.join(', ')}</p>
      <p style={{ whiteSpace: 'pre-wrap', textAlign: 'left' }}>Updated sequence: {updatedSequence.join(', ')}</p>
    </div>
  );
}

export default Fibonacci;
