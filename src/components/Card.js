import { useEffect, useState } from "react";
import Die from "./Die";

export default function Card() {
  const [diceNum, setDiceNum] = useState(newDicea());
  const [won, setWon] = useState(false);
  useEffect(() => {
    const isHeald = diceNum.every((x) => x.isHeald);
    const firstvalue = diceNum[0].value;
    const same = diceNum.every((x) => x.value === firstvalue);
    isHeald && same ? setWon(true) : setWon(false);
  }, [diceNum]);

  function newDicea() {
    const diceNum = [];
    for (let i = 0; i <= 9; i++) {
      diceNum.push({
        value: Math.ceil(Math.random() * 6),
        isHeald: false,
        id: i,
      });
    }
    return diceNum;
  }
  const Dice = diceNum.map((x) => {
    return (
      <Die
        value={x.value}
        freeze={freeze}
        key={x.id}
        id={x.id}
        isHeald={x.isHeald}
      />
    );
  });
  function freeze(id) {
    setDiceNum((oldDice) =>
      oldDice.map((x) => {
        return x.id === id ? { ...x, isHeald: !x.isHeald } : x;
      })
    );
  }
  function change() {

    won?setDiceNum(newDicea()):setDiceNum((oldDice) =>
      oldDice.map((x) => {
        return x.isHeald
          ? x
          : { value: Math.ceil(Math.random() * 6), isHeald: false, id: x.id };
      })
    );
  }
  return (
    <div className="bg-gray-200 lg:h-[70%] lg:w-[50%] h-[65%]  w-[90%] mt-[10%] lg:mt-[8%] rounded-md flex flex-col items-center shadow-2xl shadow-black    ">
      <div
        onClick={freeze}
        className="bg-green-500 h-[10%] w-[50%] rounded-lg mt-[5%] flex justify-center items-center text-white shadow-green-900 shadow-md font-bold "
      >
        Nasty Dice
      </div>
      <div className="h-[20%] flex  text-center justify-center items-center w-[100%]  font-medium">
        
        Roll to match all the dice
          <br /> You can freeze by clicking the dice
          
        
      </div>
      <div className="h-[30%] lg:w-[80%]  w-[100%]  flex flex-wrap justify-center items-center">
        {Dice}
      </div>
      <button
        onClick={change}
        className="bg-blue-600 h-[8%]   mt-[8%] lg:hover:bg-blue-800 shadow-md shadow-blue-900 lg:w-[15%] w-[30%] rounded-xl text-white font-bold flex justify-center items-center"
      >
        {won?"New Game":"Roll"}
      </button>
      
    </div>
  );
}
