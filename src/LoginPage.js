import "./LoginPage.css";
import { useState } from "react";
import { LoginApi } from "./Api";
import { storeUserData } from "./Storage";
import { isAuthenticated } from "./Auth";
import { Link, useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();
  const initialStateErrors = {
    email: { required: false },
    password: { required: false },
    custom_error: null,
  };
  const [errors, setErrors] = useState(initialStateErrors);

  const [loading, setLoading] = useState(false);

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const handleInput = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    console.log(inputs);
    event.preventDefault();
    let errors = initialStateErrors;
    let hasError = false;

    if (inputs.email == "") {
      errors.email.required = true;
      hasError = true;
    }
    if (inputs.password == "") {
      errors.password.required = true;
      hasError = true;
    }

    if (!hasError) {
      setLoading(true);
      //sending login api request
      LoginApi(inputs)
        .then((response) => {
          storeUserData(response.data.idToken);
          localStorage.setItem("userEmail", inputs.email);
          if (isAuthenticated()) {
            //redirect user to home
            navigate("/home");
          }
        })
        .catch((err) => {
          if ((err.code = "ERR_BAD_REQUEST")) {
            setErrors({ ...errors, custom_error: "Invalid Credentials." });
          }
        })
        .finally(() => {
          setLoading(false);
        });
    }
    setErrors({ ...errors });
  };

  return (
    <div>
     
      <section className="login-block">
        <div className="container">
          <div className="row ">
            <div className="col login-sec">
              <h2 className="text-center">Login Now</h2>
              <form onSubmit={handleSubmit} className="login-form" action="">
                <div className="form-group">
                  <div>
                    <label
                      htmlFor="exampleInputEmail1"
                      className="text-uppercase"
                    >
                      Email
                    </label>
                  </div>
                  <div>
                    <input
                      type="email"
                      className="form-control"
                      onChange={handleInput}
                      name="email"
                      placeholder="email"
                    />
                  </div>
                  {errors.email.required ? (
                    <span className="text-danger">Email is required.</span>
                  ) : null}
                </div>
                <div className="form-group">
                  <div>
                    <label
                      htmlFor="exampleInputPassword1"
                      className="text-uppercase"
                    >
                      Password
                    </label>
                  </div>
                  <div>
                    <input
                      className="form-control"
                      type="password"
                      onChange={handleInput}
                      name="password"
                      placeholder="password"
                      id=""
                    />
                  </div>
                  {errors.password.required ? (
                    <span className="text-danger">Password is required.</span>
                  ) : null}
                </div>
                <div className="form-group">
                  {loading ? (
                    <div className="text-center">
                      <div
                        className="spinner-border text-primary "
                        role="status"
                      >
                        <span className="sr-only">Loading...</span>
                      </div>
                    </div>
                  ) : null}
                  <span className="text-danger">
                    {errors.custom_error ? <p>{errors.custom_error}</p> : null}
                  </span>
                  <div>
                    <input
                      type="submit"
                      className="btn btn-login float-right"
                      disabled={loading}
                      value="Login"
                    />
                  </div>
                </div>
                <div className="clearfix"></div>
                <div className="form-group">
                  <div>Don't have an account ?</div>{" "}
                  <div>
                    Please <Link to="/register">Register!</Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
