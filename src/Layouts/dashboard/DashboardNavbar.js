import { Link } from 'react-router-dom';




export default function DashboardNavbar() {


  return (
    <header className="navbar possap-header navbar-expand-lg navbar-light">
    <div className="m-header">
        <a className="mobile-menu" id="mobile-collapse1" href="javascript:"><span></span></a>
        <a href="/possap.html" className="b-brand">
               <div className="b-bg">
                   <i className="feather icon-trending-up"></i>
               </div>
               <span className="b-title">Possap</span>
           </a>
    </div>
    <a className="mobile-menu" id="mobile-header" href="javascript:">
        <i className="feather icon-more-horizontal"></i>
    </a>
    <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
            <li><a href="javascript:" className="full-screen" onclick="javascript:toggleFullScreen()"><i className="feather icon-maximize"></i></a></li>
            <li className="nav-item">
                <div className="main-search">
                    <div className="input-group">
                        <input type="text" id="m-search" className="form-control" placeholder="Search . . ."/>
                        <a href="javascript:" className="input-group-append search-close">
                            <i className="feather icon-x input-group-text"></i>
                        </a>
                        <span className="input-group-append search-btn btn btn-primary">
                            <i className="feather icon-search input-group-text"></i>
                        </span>
                    </div>
                </div>
            </li>
        </ul>
        <ul className="navbar-nav ml-auto">
            <li>
                <div className="dropdown">
                    <a className="dropdown-toggle" href="javascript:" data-toggle="dropdown"><i className="icon feather icon-bell"></i></a>
                    <div className="dropdown-menu dropdown-menu-right notification">
                        <div className="noti-head">
                            <h6 className="d-inline-block m-b-0">Notifications</h6>
                            <div className="float-right">
                                <a href="javascript:" className="m-r-10">mark as read</a>
                                <a href="javascript:">clear all</a>
                            </div>
                        </div>
                        <ul className="noti-body">
                            <li className="n-title">
                                <p className="m-b-0">NEW</p>
                            </li>
                            <li className="notification">
                                <div className="media">
                                    <img className="img-radius" src="assets/images/user/avatar-1.jpg" alt="Generic placeholder image" />
                                    <div className="media-body">
                                        <p><strong>Sir Abubakar</strong><span className="n-time text-muted"><i className="icon feather icon-clock m-r-10"></i>30 min</span></p>
                                        <p>30 Request Awaiting Approval</p>
                                    </div>
                                </div>
                            </li>
                            <li className="n-title">
                                <p className="m-b-0">EARLIER</p>
                            </li>
                            <li className="notification">
                                <div className="media">
                                    <img className="img-radius" src="assets/images/user/avatar-2.jpg" alt="Generic placeholder image" />
                                    <div className="media-body">
                                        <p><strong>Ahmad</strong><span className="n-time text-muted"><i className="icon feather icon-clock m-r-10"></i>30 min</span></p>
                                        <p>deployed to Enugu</p>
                                    </div>
                                </div>
                            </li>
                            <li className="notification">
                                <div className="media">
                                    <img className="img-radius" src="assets/images/user/avatar-3.jpg" alt="Generic placeholder image" />
                                    <div className="media-body">
                                        <p><strong>Margaret Iman</strong><span className="n-time text-muted"><i className="icon feather icon-clock m-r-10"></i>30 min</span></p>
                                        <p>Deployment Approved</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <div className="noti-footer">
                            <a href="javascript:">show all</a>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div className="dropdown drp-user">
                    <a href="javascript:" className="dropdown-toggle" data-toggle="dropdown">
                        <i className="icon feather icon-settings"></i>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right profile-notification">
                        <div className="pro-head">
                            <img src="assets/images/user/avatar-1.jpg" className="img-radius" alt="User-Profile-Image" />
                            <span>Miss Iman</span>
                            <a href="/possap.html" className="dud-logout" title="Logout">
                                <i className="feather icon-log-out"></i>
                            </a>
                        </div>
                        <ul className="pro-body">
                            <li><a href="javascript:" className="dropdown-item"><i className="feather icon-settings"></i> Settings</a></li>
                            <li><Link to="javascript:" className="dropdown-item"><i className="feather icon-user"></i> Profile</Link></li>
                            <li><Link to="/possap.html" className="dropdown-item"><i className="feather icon-mail"></i> My Messages</Link></li>
                            <li><Link to="/possap.html" className="dropdown-item"><i className="feather icon-lock"></i> Lock Screen</Link></li>
                        </ul>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</header>
  );
}
