import React from 'react'
import './Sidebar.css';
// import './debug.css';
// import './all.min.css'

export default class Sidebar extends React.Component{
    constructor(props) {
        super();
        this.state = {
          toggled: false
        };
    
        this.toggleMenu = this.toggleMenu.bind(this);
      }

      toggleMenu() {
        let isToggled = this.state.toggled;
        this.setState({ toggled: !isToggled});
      }

    render(){
        let buttonclassName = (this.state.isToggled) ? 'toggled' : '';
        return(
            <div>

    <input type="checkbox" id="check"/>
    {/* <!--header area start--> */}
    <header>
      <label htmlFor="check">
        <i className="fas fa-bars" id="sidebar_btn"></i>
      </label>
      <div className="left_area">
        <h3>Task <span>Management</span></h3>
      </div>
      <div className="right_area">
        <a href="#" className="logout_btn">Logout</a>
      </div>
    </header>
    {/* <!--header area end-->
    <!--mobile navigation bar start--> */}
    <div className="mobile_nav">
      <div className="nav_bar">
        <img src="1.png" className="mobile_profile_image" alt=""/>
        <i className="fa fa-bars nav_btn" onClick={this.toggleMenu}></i>
      </div>
      <div className="mobile_nav_items">
        <a href="#"><i className="fas fa-desktop"></i><span>Dashboard</span></a>
        <a href="#"><i className="fas fa-cogs"></i><span>Components</span></a>
        <a href="#"><i className="fas fa-table"></i><span>Tables</span></a>
        <a href="#"><i className="fas fa-th"></i><span>Forms</span></a>
        <a href="#"><i className="fas fa-info-circle"></i><span>About</span></a>
        <a href="#"><i className="fas fa-sliders-h"></i><span>Settings</span></a>
      </div>
    </div>
    {/* <!--mobile navigation bar end-->
    <!--sidebar start--> */}
    <div className="sidebar">
      <div className="profile_info">
        <img src="1.png" className="profile_image" alt=""/>
        <h4>Jessica</h4>
      </div>
      <a href="#"><i className="fas fa-desktop"></i><span>Dashboard</span></a>
      <a href="#"><i className="fas fa-cogs"></i><span>Components</span></a>
      <a href="#"><i className="fas fa-table"></i><span>Tables</span></a>
      <a href="#"><i className="fas fa-th"></i><span>Forms</span></a>
      <a href="#"><i className="fas fa-info-circle"></i><span>About</span></a>
      <a href="#"><i className="fas fa-sliders-h"></i><span>Settings</span></a>
    </div>
    {/* <!--sidebar end--> */}

    <div className="content">
      <div className="card">
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
      </div>
      <div className="card">
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
      </div>
      <div className="card">
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
      </div>
    </div>

    {/* <script type="text/javascript">
    $(document).ready(function(){
      $('.nav_btn').click(function(){
        $('.mobile_nav_items').toggleclassName('active');
      });
    });
    </script> */}

  </div>

        );
    }
}