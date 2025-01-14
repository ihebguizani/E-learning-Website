import React from "react";
import "./CreateaccountStudint.css";
import { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/footer/Footer";

export default function CreateaccountStudint() {
  const [name, setName] = useState({
    lastname: "",
    firstname: "",
    phone: "",
    password: "",
    niveau: "",
    DateOfBirth: "",
    email: "",
  });

  return (
    <div>
      <div className="ss">
        <NavBar />
        <div className="scc">
          <div className="green">
            <div className="rowHfidh">
              <div className="col-md-3 border-right">
                <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                  <img
                    className="rounded-circle mt-5"
                    width="150px"
                    src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                  />
                  <span className="font-weight-bold">Edogaru</span>
                  <span className="text-black-50">edogaru@mail.com.my</span>
                  <span> </span>
                </div>
              </div>
              <div className="col-md-5 border-right">
                <div className="p-3 py-5">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h4 className="text-right">Profile Settings</h4>
                  </div>
                  <div className="rowHfidh mt-2">
                    <div className="col-md-6">
                      <label className="labels">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="first name"
                        onChange={(e) =>
                          setName({ ...name, firstname: e.target.value })
                        }
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="labels">last name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="lastname"
                        onChange={(e) =>
                          setName({ ...name, lastname: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div className="mt-3">
                    <div className="col-md-12">
                      <label className="labels">Mobile Number</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="enter phone number"
                        onChange={(e) =>
                          setName({ ...name, phone: e.target.value })
                        }
                      />
                    </div>
                    <div className="col-md-12">
                      <label className="labels">password</label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="enter your password"
                        onChange={(e) =>
                          setName({ ...name, password: e.target.value })
                        }
                      />
                    </div>
                    <div className="col-md-12">
                      <label className="labels">niveau</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="enter niveau "
                        onChange={(e) =>
                          setName({ ...name, niveau: e.target.value })
                        }
                      />
                    </div>

                    <div className="col-md-12">
                      <label className="labels">Date of Birth</label>
                      <input
                        type="Date"
                        className="form-control"
                        onChange={(e) =>
                          setName({ ...name, DateOfBirth: e.target.value })
                        }
                      />
                    </div>
                    <div className="col-md-12">
                      <label className="labels">Email </label>
                      <input
                        type="Email"
                        className="form-control"
                        placeholder="enter email "
                        onChange={(e) =>
                          setName({ ...name, email: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div className="mt-5 text-center">
                    <button
                      className="btn btn-primary profile-button"
                      type="button"
                      onClick={(event) => {
                        alert("A form was submitted: " + name);

                        fetch("http://localhost:3000/store-data", {
                          method: "POST",
                          // We convert the React state to JSON and send it as the POST body
                          body: JSON.stringify(name),
                        }).then(function (response) {
                          console.log(response);
                          return response.json();
                        });

                        event.preventDefault();
                      }}
                    >
                      Save Profile
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-4"></div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
