import React, { Component } from "react";
import axios from "axios";
import classnames from "classnames";

export default class Register extends Component {
  // state :
  // hwo to get the state?
  // we have to use the constructor.
  //
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {},
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  registerSubmit = (e) => {
    const api = "/api/users";
    e.preventDefault();
    console.log("hello from registersubmit");
    console.log(JSON.stringify(this.state));
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    };
    axios
      .post(api, newUser)
      .then((res) => {
        console.log(JSON.stringify(res));
      })
      .catch((err) => {
        console.log(JSON.stringify(err.response.data));

        // key : value
        // name of the field : error value == json object
        // this json object should be added into ur errors

        const errObject = {};
        for (const e of err.response.data.errors) {
          if (e.param === "name") errObject.name = e.msg;
          if (e.param === "email") errObject.email = e.msg;
          if (e.param === "password") errObject.password = e.msg;
          //  console.log(e);
        }
        console.log(JSON.stringify(errObject));
        this.setState({ errors: errObject });
        //  console.log(this.state.errors);
      });
  };
  render() {
    const { errors } = this.state;
    // errors = this.state.errors

    return (
      <div class="register">
        <div class="container">
          <div class="row">
            <div class="col-md-8 m-auto">
              <h1 class="display-4 text-center">Sign Up</h1>
              <p class="lead text-center">Create your DevConnector account</p>
              <form onSubmit={this.registerSubmit}>
                <div class="form-group">
                  <input
                    type="text"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.name,
                    })}
                    placeholder="Name"
                    name="name"
                    value={this.state.name}
                    onChange={this.onChange}
                  />

                  <div className="d-block invalid-feedback">{errors.name}</div>
                </div>
                <div class="form-group">
                  <input
                    type="email"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.email,
                    })}
                    placeholder="Email Address"
                    name="email"
                    onChange={this.onChange}
                  />
                  <small className="form-text text-muted">
                    This site uses Gravatar so if you want a profile image, use
                    a Gravatar email
                  </small>
                  <div className="d-block invalid-feedback">{errors.email}</div>
                </div>
                <div class="form-group">
                  <input
                    type="password"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.password,
                    })}
                    placeholder="Password"
                    name="password"
                    onChange={this.onChange}
                  />
                  <div className="d-block invalid-feedback">
                    {errors.password}
                  </div>
                </div>
                <div class="form-group">
                  <input
                    type="password"
                    class="form-control form-control-lg"
                    placeholder="Confirm Password"
                    name="password2"
                    onChange={this.onChange}
                  />
                </div>
                <input type="submit" class="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
