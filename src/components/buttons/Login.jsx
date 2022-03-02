import React from "react";

export default function Login() {
  return (
    <>
      {/* Button trigger modal  */}
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <span className="fa fa-sign-in" aria-hidden="true"></span>Signin
      </button>

      {/* Modal  */}
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Signin
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" for="exampleCheck1">
                    Check me out
                  </label>
                </div>
                <button type="submit" className="btn btn-primary mb-4">
                  Submit
                </button>
                <button type="button" className="btn btn-primary w-100 mb-4">
                <span className="fa fa-linkedin me-2" aria-hidden="true"></span>Signup with Linkedin
                </button>
                <button type="button" className="btn btn-primary w-100 mb-4">
                 <span className="fa fa-facebook me-2" aria-hidden="true"></span> Signup with Facebook
                </button>
                <button type="button" className="btn btn-primary w-100 mb-4">
                 <span className="fa fa-google me-2" aria-hidden="true"></span> Signup with Gmail
                </button>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button"data-bs-toggle="modal" data-bs-target="#examplesModal"className="btn btn-primary">
                Signup
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
