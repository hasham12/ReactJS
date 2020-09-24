import React, {Component} from 'react';
import './Dashboard.component.css';
import DataTable from './Datatable.component';
import Header from './Header.component';
import SideMenu from './SideMenu.component';

export default class Dashboard extends Component{
    render(){
        return(
            <div className="body-div" >

<Header/>

  

<div className="container-fluid">
  <div className="row">
    <SideMenu/>

    <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Dashboard</h1>
        <div className="btn-toolbar mb-2 mb-md-0">
          <div className="btn-group mr-2">
            <button type="button" className="btn btn-sm btn-outline-secondary">Share</button>
            <button type="button" className="btn btn-sm btn-outline-secondary">Export</button>
          </div>
          <button type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle">
            <span data-feather="calendar"></span>
            This week
          </button>
        </div>
      </div>

      <canvas className="my-4 w-100" id="myChart" width="900" height="380"></canvas>

      <h2>Section title</h2>
      <DataTable/>
    </main>
  </div>
</div>





        </div>

        )
    }
}