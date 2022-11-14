import React from "react";
import { Markup } from "interweave";

const Game = (props) => {
  console.log(props);

  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }
  return (
    <>
      {props.questions.map((el) => {
        return (
          <>
            {/* <h1>
              <Markup content={el.question} />;
            </h1>
            <p>{el.correct_answer}</p>
            {el.incorrect_answers.map((ans) => {
              return <p>{ans}</p>;
            })} */}

            <Answers /> 
          </>
        );
      })}
    </>
  );
};

export default Game;
