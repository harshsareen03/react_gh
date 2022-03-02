import React from "react";

export default function Signup() {
  return (
    <>
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#examplesModal"
      >
        Launch demo modal
      </button>

      <div
        class="modal fade"
        id="examplesModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form>
                <div className="mb-3">
                  <label for="exampleusername" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleusername"
                    aria-describedby="emailHelp"
                  />
                 
                </div>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">
                    Phone number
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                
                </div>
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
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">
                    confirm Password
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
                  <span
                    className="fa fa-linkedin me-2"
                    aria-hidden="true"
                  ></span>
                  Signup with Linkedin
                </button>
                <button type="button" className="btn btn-primary w-100 mb-4">
                  <span
                    className="fa fa-facebook me-2"
                    aria-hidden="true"
                  ></span>{" "}
                  Signup with Facebook
                </button>
                <button type="button" className="btn btn-primary w-100 mb-4">
                  <span className="fa fa-google me-2" aria-hidden="true"></span>{" "}
                  Signup with Gmail
                </button>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button"data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-primary">
               SignIn
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
