import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import ListGroup from "react-bootstrap/ListGroup";

interface TodoItem {
  id: number;
  value: string;
}

interface AppState {
  userInput: string;
  list: TodoItem[];
}

class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      userInput: "",
      list: [],
    };
  }

  updateInput = (value: string) => {
    this.setState({ userInput: value });
  };

  addItem = () => {
    const { userInput, list } = this.state;
    if (userInput.trim() !== "") {
      const newItem: TodoItem = {
        id: Date.now(),
        value: userInput,
      };
      this.setState({
        list: [...list, newItem],
        userInput: "",
      });
    }
  };

  deleteItem = (id: number) => {
    const updatedList = this.state.list.filter((item) => item.id !== id);
    this.setState({ list: updatedList });
  };

  editItem = (index: number) => {
    const editedTodo = prompt("Edit the todo:");
    if (editedTodo && editedTodo.trim() !== "") {
      const updatedList = [...this.state.list];
      updatedList[index].value = editedTodo;
      this.setState({ list: updatedList });
    }
  };

  render() {
    const { userInput, list } = this.state;

    return (
      <Container>
        <Row className="text-center mt-4">
          <h1 style={{ fontSize: "3rem", fontWeight: "bolder" }}>TODO LIST</h1>
        </Row>
        <hr />
        <Row>
          <Col md={{ span: 5, offset: 4 }}>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Add item..."
                size="lg"
                value={userInput}
                onChange={(e) => this.updateInput(e.target.value)}
              />
              <Button variant="dark" onClick={this.addItem}>
                ADD
              </Button>
            </InputGroup>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 5, offset: 4 }}>
            <ListGroup>
              {list.map((item, index) => (
                <ListGroup.Item
                  key={item.id}
                  variant="dark"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  {item.value}
                  <span>
                    <Button
                      size="sm"
                      variant="outline-danger"
                      onClick={() => this.deleteItem(item.id)}
                      className="me-2"
                    >
                      Delete
                    </Button>
                    <Button
                      size="sm"
                      variant="outline-secondary"
                      onClick={() => this.editItem(index)}
                    >
                      Edit
                    </Button>
                  </span>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
