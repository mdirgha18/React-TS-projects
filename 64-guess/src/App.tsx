import React, { Component, ChangeEvent } from "react";
import Result from "./Result";
import "./styles.css";

type AppProps = {
  secret?: number;
};

type AppState = {
  term: string;
};

class App extends Component<AppProps, AppState> {
  static defaultProps: AppProps = {
    secret: Math.floor(Math.random() * 20) + 1,
  };

  constructor(props: AppProps) {
    super(props);
    this.state = {
      term: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    this.setState({ [name]: value } as Pick<AppState, keyof AppState>);
  }

  render() {
    return (
      <div className="container">
        <div className="head">
          <label htmlFor="term">Guess the number between 1 to 20</label>
        </div>

        <input
          id="term"
          type="text"
          name="term"
          value={this.state.term}
          onChange={this.handleChange}
        />

        <Result term={this.state.term} secretNum={this.props.secret!} />
      </div>
    );
  }
}

export default App;
