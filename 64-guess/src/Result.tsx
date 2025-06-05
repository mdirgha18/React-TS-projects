import React from "react";

type ResultProps = {
  term: string;
  secretNum: number;
};

const Result: React.FC<ResultProps> = ({ term, secretNum }) => {
  let result: string | undefined;

  if (term) {
    const guess = Number(term);

    if (isNaN(guess)) {
      result = "Enter a valid number";
    } else if (secretNum > guess) {
      result = "Higher";
    } else if (secretNum < guess) {
      result = "Lower";
    } else if (secretNum === guess) {
      result = "Yippee, correct!";
    }
  }

  return <h3>You guessed: {result}</h3>;
};

export default Result;
