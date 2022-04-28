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
          <div class="container-fluid">
            <button
              onClick={this.handleCreate}
              class="btn btn-primary w-100 mt-3"
              type="button"
            >
              Add user
            </button>
            <div class="  row justify-content-center ">
              {this.state.isLoading ? (
                <LoadingUsers
                  countofpersons={this.state.users.length}
                ></LoadingUsers>
              ) : (
                this.state.users.map((user) => {
                  return (
                    <div class="col-lg-2 col-md-3 col-sm-4 col-12 mt-3 card-group border-0 ">
                      <div class="card">
                        <img
                          class="card-img-top rounded-circle"
                          src={user.avatar}
                          alt="Card image cap"
                        />
                        <div class="card-body">
                          <Link to={`/users/${user.id}`}>
                            {" "}
                            <h4 class="">
                              {user.first_name} {user.last_name}
                            </h4>
                          </Link>

                          <small>{user.email}</small>
                        </div>
                        <div class="card-footer d-flex justify-content-around p-1">
                          <button
                            onClick={this.handleUpdate}
                            type="button"
                            class="btn btn-info "
                          >
                            Edit
                          </button>
                          <button
                            onClick={this.handleDelete}
                            type="button"
                            class="btn btn-danger "
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
