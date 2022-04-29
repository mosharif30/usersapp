import { useEffect, useState } from "react";
import { useParams, useSearchParams, useLocation } from "react-router-dom";
import Layout from "./layout/layout";
import axios from "axios";
import querystring from "query-string";
import { useNavigate } from "react-router-dom";
const User = () => {
  let params = useParams();
  const [user, setUser] = useState({});
  let navigate = useNavigate();
  const [searchParams] = useSearchParams();
  let location = useLocation();

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        `https://reqres.in/api/users/${params.id}`
      );
      setUser(response.data.data);
    })();
  }, []);
  const handleback = () => {
    navigate("/users", { replace: false });
  };
  return (
    <>
      <Layout>
        <div className="table-responsive ">
          <table className="table table-Light table-striped table-hover">
            <thead className="table-dark">
              <tr>
                <th scope="col">id</th>

                <th scope="col">picture</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">email</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">{user.id}</th>
                <td>
                  <img
                    className=" w-25"
                    src={user.avatar}
                    alt="Card image cap"
                  />
                </td>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.email}</td>
              </tr>
            </tbody>
          </table>
          <button className="btn btn-info btn-large m-5" onClick={handleback}>
            back to users page
          </button>
        </div>
      </Layout>
    </>
  );
};

export default User;
