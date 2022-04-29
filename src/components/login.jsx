import React, { Component } from "react";
import Layout from "./layout/layout";
import axios from "axios";
import Input from "./input";
import * as yup from "yup";
import { Navigate } from "react-router-dom";
class Login extends Component {
  state = {
    account: {
      email: "",
      password: "",
    },
    errors: [],
    sending: false,
    logged: false,
  };
  schema = yup.object().shape({
    email: yup.string().email("فرمت ایمیل صحیح نیست").required("ایمیل الزامی"),
    password: yup
      .string()
      .min(4, "پسورد حداقل چهار کارکتر باشد")
      .required("پسورد الزامی"),
  });
  validate = async () => {
    try {
      const result = await this.schema.validate(this.state.account, {
        abortEarly: false,
      });
      this.setState({ errors: [] });
      return result;
    } catch (error) {
      this.setState({ errors: error.errors });
    }
  };
  handleSubmit = async (e) => {
    e.preventDefault();

    const result = await this.validate();

    if (result) {
      try {
        this.setState({ sending: true });
        const response = await axios.post(
          "https://reqres.in/api/login",
          result
        );
        localStorage.setItem("token", response.data.token);
        this.setState({ logged: true });
        this.setState({ sending: false });

        window.location = "/dashboard";
      } catch (error) {
        this.setState({ sending: false });

        this.setState({ errors: ["ایمیل یا پسورد غلط است"] });
      }
    }
  };
  handleChange = async (e) => {
    const input = e.currentTarget;
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };
  render() {
    const { email, password } = this.state.account;
    return (
      <>
        <Layout>
          {this.state.errors.length !== 0 ? (
            <ul>
              {this.state.errors.map((e) => (
                <div className="alert alert-danger d-flex justify-content-end">
                  {" "}
                  <li className="me-5 d-flex align-items-end">{e}</li>
                </div>
              ))}
            </ul>
          ) : (
            <></>
          )}
          <div className="container">
            <div className="row">
              <div className="col"></div>
              <div className="col-sm-12 col-lg-8">
                <form onSubmit={this.handleSubmit}>
                  <Input
                    name="email"
                    value={email}
                    label="email"
                    onChange={this.handleChange}
                    type="text"
                  ></Input>

                  <Input
                    name="password"
                    value={password}
                    label="password"
                    onChange={this.handleChange}
                    type="password"
                  ></Input>
                  {this.state.sending ? (
                    <div className="spinner-border text-primary" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  ) : (
                    <button className="btn btn-primary">Submit</button>
                  )}
                </form>
              </div>
              <div className="col"></div>
            </div>
          </div>
        </Layout>
      </>
    );
  }
}

export default Login;
