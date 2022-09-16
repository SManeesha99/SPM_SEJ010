import React, { Component } from "react";
import Header from "../Header/Header";


class AdminDashboard extends Component {

  render() {
    return (
      <>
        <div>
            <Header/>
        
          <div className="allcoursesviewArea">
            <div className="page-content">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="page-title-box">
                      <div className="row">
                        <div className="col">
                          <h4 className="page-title">Profile</h4>
                          <ol className="breadcrumb">
                            <li className="breadcrumb-item active">Admin</li>
                          </ol>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row gutters-sm mt-3">
                  <div className="col-md-4 mb-3">
                    <div className="card" style={{ width: "450px", marginTop: "100px" }}>
                      <div className="card-body">
                        <div className="d-flex flex-column align-items-center text-center">
                          <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width={150} />
                          <div className="mt-3">
                            <h4>Maneesha Fernando</h4>
                            <p className="text-secondary mb-1">Web Admin</p>
                            <p className="text-muted font-size-sm">Manage Profiles</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card mt-3">

                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="card mb-3" style={{ marginLeft: "100px", width: "700px", marginTop: "60px" }}>
                      <div className="card-body" >
                        <div className="row">
                          <div className="col-sm-3">
                            <h6 className="mb-0">Full Name</h6>
                          </div>
                          <div className="col-sm-9 text-secondary">
                           Maneesha Fernando
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-sm-3">
                            <h6 className="mb-0">Email</h6>
                          </div>
                          <div className="col-sm-9 text-secondary">
                            admin1@gmail.com
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-sm-3">
                            <h6 className="mb-0">Trust</h6>
                          </div>
                          <div className="col-sm-9 text-secondary">
                            <div className="star-ratings">
                              <div className="fill-ratings" style={{ width: '75%' }}>
                                <span>🟊🟊🟊🟊🟊</span>
                              </div>
                              <div className="empty-ratings">
                                <span>🟊🟊🟊🟊🟊</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-sm-3">
                            <h6 className="mb-0">Discription</h6>
                          </div>
                          <div className="col-sm-9 text-secondary">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    
                              </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-sm-3">
                            <h6 className="mb-0">Project List</h6>
                          </div>
                          <div className="col-sm-9 text-secondary">
                            Software Development
                          </div>
                        </div>
                        <hr />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <footer className="footer text-center text-sm-left">
                © 2022 MULD
              </footer>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default AdminDashboard;