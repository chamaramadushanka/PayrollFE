import React, { Component } from 'react';
import '../../src/css/Admin.css';
import Main from '../Components/Main';
import DashboardIcon from '@material-ui/icons/Dashboard';
import MenuIcon from '@material-ui/icons/Menu';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import EmailIcon from '@material-ui/icons/Email';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SearchIcon from '@material-ui/icons/Search';
import StreetviewIcon from '@material-ui/icons/Streetview';
import AddBoxIcon from '@material-ui/icons/AddBox';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import DateRangeIcon from '@material-ui/icons/DateRange';
import PlayForWorkIcon from '@material-ui/icons/PlayForWork';
import Navbar from 'react-bootstrap/Navbar'
import { Redirect } from 'react-router-dom';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import PaymentIcon from '@material-ui/icons/Payment';
import LoginForm from './Loginform';


import { useAuth0 } from "../react-auth0-spa";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";




const Layout = () => {

    return (
      <div className="Layout">
        <Dashboardnavbar />
        <Wrapper />
      </div>
    )
  }

const Dashboardnavbar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    return (
      <div>
        <nav class="navbar navbar-expand navbar-dark bg-dark  navbar-fixed-top">
          <a class="navbar-brand mr-1" href="index.html">PMS - EcoBiz </a>
          <button class="btn btn-link btn-sm text-white order-1 order-sm-0" id="sidebarToggle" href="#">
            <MenuIcon className="ml-5" />
          </button>
          <form class="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
            <div class="input-group">
              <div style={{
                display: 'flex',
                alignItems: 'center'
              }}>
                <input type="text" class="form-control" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
                <div class="input-group-append srchbtn">
                  <button class="btn btn-primary btn-xs" type="button">
                    <SearchIcon />
                  </button></div>
              </div>
            </div>
          </form>

          <ul class="navbar-nav ml-auto ml-md-0">
            <li class="nav-item dropdown no-arrow mx-1">
              <a class="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <NotificationsActiveIcon />
                <span class="badge badge-danger">9+</span>
              </a>
              <div class="dropdown-menu dropdown-menu-right" aria-labelledby="alertsDropdown">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
            <li class="nav-item dropdown no-arrow mx-1">
              <a class="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <EmailIcon />
                <span class="badge badge-danger">7</span>
              </a>
              <div class="dropdown-menu dropdown-menu-right" aria-labelledby="messagesDropdown">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
            <li class="nav-item dropdown no-arrow">
              <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <AccountCircleIcon />
              </a>
              <div class="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                <a class="dropdown-item" href="#">Settings</a>
                <a class="dropdown-item" href="#">Activity Log</a>
                <div class="dropdown-divider"></div>
                
                <Link class="dropdown-item" to ="/loginform" onClick={() => logout()}>Logout</Link>
                
              </div>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
// }


function Wrapper() {
  return (
    <div>

      <div id="wrapper">

        {/* <!-- Sidebar --> */}
        <ul class="sidebar navbar-nav">
          <li class="nav-item active">
            <span><Link class="nav-link" to="/Dashboard" style={{ textDecoration: 'none', color: 'white' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center'
              }}><DashboardIcon style={{ fontSize: 18 }, { padding: 2 }} />Dashboard</div></Link>
            </span>
          </li>
          <li class="nav-item dropdown" >
            <a class="nav-link dropdown-toggle" href="#" id="pagesDropdown"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

              <span><StreetviewIcon style={{ fontSize: 25 }, { padding: 1 }} />Employee </span>
            </a>
            <div class="dropdown-menu">
              <Link className="dropdown-item" to="/EmployeeDetails">EmployeeDetails</Link>
              <Link className="dropdown-item" to="/OvertimeDetails">Overtime</Link>
            </div>
            <span><Link class="nav-link" to="/Attendencedetails" style={{ textDecoration: 'none'}}>
              <div style={{
                display: 'flex',
                alignItems: 'center'
              }}><DateRangeIcon style={{ fontSize: 18 }, { padding: 2 }} />Attendence</div></Link>
            </span>
          </li>

          

          <li class="nav-item">
            <span><Link class="nav-link" to="/Positions" style={{ textDecoration: 'none' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center'
              }}><PersonPinIcon style={{ fontSize: 25 }, { padding: 1 }} />Positions</div></Link>
            </span>
          </li>
          <li class="nav-item">
            <span><Link class="nav-link" to="/PaymentDetails" style={{ textDecoration: 'none' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center'
              }}><MonetizationOnIcon style={{ fontSize: 25 }, { padding: 1 }} />Payments</div></Link>
            </span>
          </li>
          <li class="nav-item">
            <span><Link class="nav-link" to="/PaymentDetails" style={{ textDecoration: 'none' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center'
              }}><PaymentIcon style={{ fontSize: 25 }, { padding: 1 }} />Salaries</div></Link>
            </span>
          </li>
        </ul>
        <Main />
      </div>

    </div>
  )
}
export default Layout;
