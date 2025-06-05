import React, { Component } from "react";
import Coin from "./Coin";

type CoinType = {
  side: string;
  imgSrc: string;
};

type FlipCoinProps = {
  coins: CoinType[];
};

type FlipCoinState = {
  currFace: CoinType | null;
  totalFlips: number;
  heads: number;
};

class FlipCoin extends Component<FlipCoinProps, FlipCoinState> {
  static defaultProps: FlipCoinProps = {
    coins: [
      {
        side: "head",
        imgSrc:
          "https://media.geeksforgeeks.org/wp-content/uploads/20200916123059/SHalfDollarObverse2016head-300x300.jpg",
      },
      {
        side: "tail",
        imgSrc:
          "https://media.geeksforgeeks.org/wp-content/uploads/20200916123125/tails-200x200.jpg",
      },
    ],
  };

  constructor(props: FlipCoinProps) {
    super(props);
    this.state = {
      currFace: null,
      totalFlips: 0,
      heads: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  choice(arr: CoinType[]): CoinType {
    const randomIdx = Math.floor(Math.random() * arr.length);
    return arr[randomIdx];
  }

  flipCoin() {
    const newFace = this.choice(this.props.coins);
    this.setState((curState) => {
      const heads = curState.heads + (newFace.side === "head" ? 1 : 0);
      return {
        currFace: newFace,
        totalFlips: curState.totalFlips + 1,
        heads: heads,
      };
    });
  }

  handleClick() {
    this.flipCoin();
  }

  render() {
    const { currFace, totalFlips, heads } = this.state;

    return (
      <div>
        <h2>Let us flip a coin</h2>
        {currFace && <Coin info={currFace} />}
        <button onClick={this.handleClick}>Flip Me!!</button>
        <p>
          Out of {totalFlips} flips, there have been {heads} heads and{" "}
          {totalFlips - heads} tails.
        </p>
      </div>
    );
  }
}

export default FlipCoin;
