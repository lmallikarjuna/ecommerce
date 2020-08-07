import React from "react";

import "./sign-in.style.scss";
import FormInput from "../form-input/form-input.component";

class SignIn extends React.Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({ email: "", password: "" });
  };

  handleChange = (e) => {
    console.log(e.target.value);
    const { value, name } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <label  htmlFor="email">Email</label>
          <FormInput
            name="email"
            handleChange={this.handleChange}
            type="email"
            id="email"
            value={this.state.email}
            required
          />
          <label  htmlFor="password">Password</label>
          <FormInput
            handleChange={this.handleChange}
            id="password"
            type="password"
            name="password"
            value={this.state.password}
            required
          />

          <FormInput type="submit" value="submit form" />
        </form>
      </div>
    );
  }
}

export default SignIn;
