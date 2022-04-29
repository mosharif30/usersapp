import React, { Component } from "react";
import axios from "axios";
import LoadingUsers from "./loading/loadingUsers";
import Layout from "./layout/layout";
import { Link } from "react-router-dom";
class Users extends Component {
  state = {
    users: [],
    isLoading: true,
  };
  async componentDidMount() {
    const response1 = await axios.get("https://reqres.in/api/users?page=1");
    const response2 = await axios.get("https://reqres.in/api/users?page=2");
    const response = [...response1.data.data, ...response2.data.data];
    this.setState({ users: response, isLoading: false });
  }

  render() {
    return (
      <>
        <Layout>
          {" "}
          <div className="container-fluid">
            <button
              onClick={this.handleCreate}
              className="btn btn-primary w-100 mt-3"
              type="button"
            >
              Add user
            </button>
            <div className="  row justify-content-center ">
              {this.state.isLoading ? (
                <LoadingUsers
                  countofpersons={this.state.users.length}
                ></LoadingUsers>
              ) : (
                this.state.users.map((user, i) => {
                  return (
                    <div
                      key={i}
                      className="col-lg-2 col-md-3 col-sm-4 col-12 mt-3 card-group border-0 "
                    >
                      <div className="card">
                        <img
                          className="card-img-top rounded-circle"
                          src={user.avatar}
                          alt="Card image cap"
                        />
                        <div className="card-body">
                          <Link to={`/users/${user.id}`}>
                            {" "}
                            <h4 className="">
                              {user.first_name} {user.last_name}
                            </h4>
                          </Link>

                          <small>{user.email}</small>
                        </div>
                        <div className="card-footer d-flex justify-content-around p-1">
                          <button
                            onClick={this.handleUpdate}
                            type="button"
                            className="btn btn-info "
                          >
                            Edit
                          </button>
                          <button
                            onClick={this.handleDelete}
                            type="button"
                            className="btn btn-danger "
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </Layout>
      </>
    );
  }
  handleCreate = () => {};
  handleUpdate = (user) => {};
  handleDelete = (user) => {};
}

export default Users;
