"use client";
import { useState } from "react";

export default function DiceRoller() {
  const [numOfDice, setNumOfDice] = useState(1);
  const [diceResult, setDiceResult] = useState("");
  const [diceImages, setDiceImages] = useState<number[]>([]);

  const rollDice = () => {
    const values: number[] = [];
    const images: number[] = [];
    let total = 0;

    for (let i = 0; i < numOfDice; i++) {
      const value = Math.floor(Math.random() * 6) + 1;
      values.push(value);
      total += value;
      images.push(value);
    }

    setDiceResult(`Dice: ${values.join(", ")} | Total: ${total}`);
    setDiceImages(images);
  };

  return (
    <main>
      <div id="container">
        <h1>Dice Roller</h1>

        <label htmlFor="numOfDice"># of dice:</label>
        <input
          type="number"
          id="numOfDice"
          value={numOfDice}
          min="1"
          onChange={(e) => setNumOfDice(Number(e.target.value))}
        />

        <button onClick={rollDice}>Roll Dice</button>

        <div id="diceResult">{diceResult}</div>

        <div id="diceImages">
          {diceImages.map((value, index) => (
            <img
              key={index}
              src={`/dice_images/${value}.png`}
              alt={`Dice ${value}`}
            />
          ))}
        </div>
      </div>
    </main>
  );
}