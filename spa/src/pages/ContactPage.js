import React from "react";
import "../styles/ContactPage.css";
import { Prompt } from "react-router-dom";

class ContactPage extends React.Component {
  state = {
    value: ""
  };
  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      value: ""
    });
  };
  handleChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  render() {
    return (
      <div className="contact">
        <form>
          <h3>Napisz do nas!:)</h3>
          <textarea
            placeholder="Wpisz wiadomość..."
            onChange={this.handleChange}
            value={this.state.value}
          />
          <button onClick={this.handleSubmit}>Wyślij</button>
        </form>
        <Prompt
          when={this.state.value}
          message="Masz niewypełniony formularz. Czy na pewno chcesz opuścić tę stronę?"
        />
      </div>
    );
  }
}

export default ContactPage;
