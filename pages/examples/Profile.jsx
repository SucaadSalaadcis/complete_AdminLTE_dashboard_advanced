import React from 'react'
import { Link } from 'react-router-dom'
import RefreshPage from '../../src/RefreshPage'
import { IoIosLogOut } from 'react-icons/io'
import Logout from './Logout'

export default function Profile() {
    return (
        <body class="hold-transition sidebar-mini">
            <div class="wrapper">
                {/* <!-- Navbar --> */}
                <nav class="main-header navbar navbar-expand navbar-white navbar-light">
                    {/* <!-- Left navbar links --> */}
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
                        </li>
                        <li class="nav-item d-none d-sm-inline-block">
                            <Link to={'/'} onClick={RefreshPage} class="nav-link">Home</Link>
                        </li>
                        <li class="nav-item d-none d-sm-inline-block">
                            <a href="#" class="nav-link">Contact</a>
                        </li>
                    </ul>

                    {/* <!-- Right navbar links --> */}
                    <ul class="navbar-nav ml-auto">
                        {/* <!-- Navbar Search --> */}
                        <li class="nav-item">
                            <a class="nav-link" data-widget="navbar-search" href="#" role="button">
                                <i class="fas fa-search"></i>
                            </a>
                            <div class="navbar-search-block">
                                <form class="form-inline">
                                    <div class="input-group input-group-sm">
                                        <input class="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
                                        <div class="input-group-append">
                                            <button class="btn btn-navbar" type="submit">
                                                <i class="fas fa-search"></i>
                                            </button>
                                            <button class="btn btn-navbar" type="button" data-widget="navbar-search">
                                                <i class="fas fa-times"></i>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </li>

                        {/* <!-- Messages Dropdown Menu --> */}
                        <li class="nav-item dropdown">
                            <a class="nav-link" data-toggle="dropdown" href="#">
                                <i class="far fa-comments"></i>
                                <span class="badge badge-danger navbar-badge">3</span>
                            </a>
                            <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                                <a href="#" class="dropdown-item">
                                    {/* <!-- Message Start --> */}
                                    <div class="media">
                                        <img src="../../dist/img/user1-128x128.jpg" alt="User Avatar" class="img-size-50 mr-3 img-circle" />
                                        <div class="media-body">
                                            <h3 class="dropdown-item-title">
                                                Brad Diesel
                                                <span class="float-right text-sm text-danger"><i class="fas fa-star"></i></span>
                                            </h3>
                                            <p class="text-sm">Call me whenever you can...</p>
                                            <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p>
                                        </div>
                                    </div>
                                    {/* <!-- Message End --> */}
                                </a>
                                <div class="dropdown-divider"></div>
                                <a href="#" class="dropdown-item">
                                    {/* <!-- Message Start --> */}
                                    <div class="media">
                                        <img src="../../dist/img/user8-128x128.jpg" alt="User Avatar" class="img-size-50 img-circle mr-3" />
                                        <div class="media-body">
                                            <h3 class="dropdown-item-title">
                                                John Pierce
                                                <span class="float-right text-sm text-muted"><i class="fas fa-star"></i></span>
                                            </h3>
                                            <p class="text-sm">I got your message bro</p>
                                            <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p>
                                        </div>
                                    </div>
                                    {/* <!-- Message End --> */}
                                </a>
                                <div class="dropdown-divider"></div>
                                <a href="#" class="dropdown-item">
                                    {/* <!-- Message Start --> */}
                                    <div class="media">
                                        <img src="../../dist/img/user3-128x128.jpg" alt="User Avatar" class="img-size-50 img-circle mr-3" />
                                        <div class="media-body">
                                            <h3 class="dropdown-item-title">
                                                Nora Silvester
                                                <span class="float-right text-sm text-warning"><i class="fas fa-star"></i></span>
                                            </h3>
                                            <p class="text-sm">The subject goes here</p>
                                            <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p>
                                        </div>
                                    </div>
                                    {/* <!-- Message End --> */}
                                </a>
                                <div class="dropdown-divider"></div>
                                <a href="#" class="dropdown-item dropdown-footer">See All Messages</a>
                            </div>
                        </li>
                        {/* <!-- Notifications Dropdown Menu --> */}
                        <li class="nav-item dropdown">
                            <a class="nav-link" data-toggle="dropdown" href="#">
                                <i class="far fa-bell"></i>
                                <span class="badge badge-warning navbar-badge">15</span>
                            </a>
                            <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                                <span class="dropdown-item dropdown-header">15 Notifications</span>
                                <div class="dropdown-divider"></div>
                                <a href="#" class="dropdown-item">
                                    <i class="fas fa-envelope mr-2"></i> 4 new messages
                                    <span class="float-right text-muted text-sm">3 mins</span>
                                </a>
                                <div class="dropdown-divider"></div>
                                <a href="#" class="dropdown-item">
                                    <i class="fas fa-users mr-2"></i> 8 friend requests
                                    <span class="float-right text-muted text-sm">12 hours</span>
                                </a>
                                <div class="dropdown-divider"></div>
                                <a href="#" class="dropdown-item">
                                    <i class="fas fa-file mr-2"></i> 3 new reports
                                    <span class="float-right text-muted text-sm">2 days</span>
                                </a>
                                <div class="dropdown-divider"></div>
                                <a href="#" class="dropdown-item dropdown-footer">See All Notifications</a>
                            </div>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-widget="fullscreen" href="#" role="button">
                                <i class="fas fa-expand-arrows-alt"></i>
                            </a>
                        </li>
                        {/* <li class="nav-item">
                            <a class="nav-link" data-widget="control-sidebar" data-slide="true" href="#" role="button">
                                <i class="fas fa-th-large"></i>
                            </a>
                        </li> */}
                    </ul>
                </nav>
                {/* <!-- /.navbar --> */}

                {/* <!-- Main Sidebar Container --> */}
                <aside class="main-sidebar sidebar-dark-primary elevation-4">
                    {/* <!-- Brand Logo --> */}
                    <Link to={'/'} onClick={RefreshPage} class="brand-link">
                        <img src="../../dist/img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style={{ opacity: ".8" }} />
                        <span class="brand-text font-weight-light">ADWAAR</span>
                    </Link>

                    {/* <!-- Sidebar --> */}
                    <div class="sidebar">
                        {/* <!-- Sidebar user (optional) --> */}
                        <div class="user-panel mt-3 pb-3 mb-3 d-flex">
                            <div class="image">
                                <img src="../../dist/img/user2-160x160.jpg" class="img-circle elevation-2" alt="User Image" />
                            </div>
                            <div class="info">
                                <a href="#" class="d-block">Alexander Pierce</a>
                            </div>
                        </div>

                        {/* <!-- SidebarSearch Form --> */}
                        <div class="form-inline">
                            <div class="input-group" data-widget="sidebar-search">
                                <input class="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
                                <div class="input-group-append">
                                    <button class="btn btn-sidebar">
                                        <i class="fas fa-search fa-fw"></i>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Sidebar Menu --> */}
                        <nav class="mt-2">
                            <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                                {/* <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library --> */}
                                <li class="nav-item">
                                    <a href="#" class="nav-link">
                                        <i class="nav-icon fas fa-tachometer-alt"></i>
                                        <p>
                                            Dashboard
                                            <i class="right fas fa-angle-left"></i>
                                        </p>
                                    </a>
                                    <ul class="nav nav-treeview">
                                        {/* <!--  --> */}
                                        <li class="nav-item">
                                            <Link to={'/'} onClick={RefreshPage} class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Dashboard v3</p>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <Link to={'/widgets'} class="nav-link">
                                        <i class="nav-icon fas fa-th"></i>
                                        <p>
                                            Widgets
                                            <span class="right badge badge-danger">New</span>
                                        </p>
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <a href="#" class="nav-link">
                                        <i class="nav-icon fas fa-copy"></i>
                                        <p>
                                            Layout Options
                                            <i class="fas fa-angle-left right"></i>
                                            <span class="badge badge-info right">6</span>
                                        </p>
                                    </a>
                                    <ul class="nav nav-treeview">
                                        <li class="nav-item">
                                            <Link to={'/layout/top_nav'} class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Top Navigation</p>
                                            </Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link to={'/layout/top_nav_sidebar'} class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Top Navigation + Sidebar</p>
                                            </Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link to={'/layout/boxed'} class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Boxed</p>
                                            </Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link to={'/layout/fixed_sidebar'} class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Fixed Sidebar</p>
                                            </Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link to={'/layout/fixed_sidebar_custom'} class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Fixed Sidebar <small>+ Custom Area</small></p>
                                            </Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link to={'/layout/fixed_top_nav'} class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Fixed Navbar</p>
                                            </Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link to={'/layout/fixed_footer'} class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Fixed Footer</p>
                                            </Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link to={'/layout/collapsed_sidebar'} class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Collapsed Sidebar</p>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <a href="#" class="nav-link">
                                        <i class="nav-icon fas fa-chart-pie"></i>
                                        <p>
                                            Charts
                                            <i class="right fas fa-angle-left"></i>
                                        </p>
                                    </a>
                                    <ul class="nav nav-treeview">
                                        <li class="nav-item">
                                            <Link to={'/chartjs'} class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>ChartJS</p>
                                            </Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link to={'/charts/flot'} class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Flot</p>
                                            </Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link to={'/charts/inline'} class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Inline</p>
                                            </Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link to={'/charts/uplot'} class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>uPlot</p>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <a href="#" class="nav-link">
                                        <i class="nav-icon fas fa-tree"></i>
                                        <p>
                                            UI Elements
                                            <i class="fas fa-angle-left right"></i>
                                        </p>
                                    </a>
                                    <ul class="nav nav-treeview">
                                        <li class="nav-item">
                                            <Link to={'/ui/general'} class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>General</p>
                                            </Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link to={'/ui/icon'} class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Icons</p>
                                            </Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link to={'/ui/buttons'} class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Buttons</p>
                                            </Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link to={'/ui/sliders'} class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Sliders</p>
                                            </Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link to={'/ui/modals'} class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Modals & Alerts</p>
                                            </Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link to={'/ui/navbar'} class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Navbar & Tabs</p>
                                            </Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link to={'/ui/timeline'} class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Timeline</p>
                                            </Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link to={'/ui/ribbons'} class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Ribbons</p>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <a href="#" class="nav-link">
                                        <i class="nav-icon fas fa-edit"></i>
                                        <p>
                                            Forms
                                            <i class="fas fa-angle-left right"></i>
                                        </p>
                                    </a>
                                    <ul class="nav nav-treeview">
                                        <li class="nav-item">
                                            <Link to={'/forms/general'} class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>General Elements</p>
                                            </Link>
                                        </li>
                                        {/* <li class="nav-item">
                                            <Link to={'/forms/advanced'} class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Advanced Elements</p>
                                            </Link>
                                        </li> */}
                                        <li class="nav-item">
                                            <Link to={'/forms/editors'} class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Editors</p>
                                            </Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link to={'/forms/validations'} class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Validation</p>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <a href="#" class="nav-link">
                                        <i class="nav-icon fas fa-table"></i>
                                        <p>
                                            Tables
                                            <i class="fas fa-angle-left right"></i>
                                        </p>
                                    </a>
                                    <ul class="nav nav-treeview">
                                        <li class="nav-item">
                                            <Link to={'/table/simple'} class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Simple Tables</p>
                                            </Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link to={'/table/data'} class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>DataTables</p>
                                            </Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link to={'/table/jsgrid'} class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>jsGrid</p>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li class="nav-header">EXAMPLES</li>
                                <li class="nav-item">
                                    <Link to={'/ui/calender'} class="nav-link">
                                        <i class="nav-icon fas fa-calendar-alt"></i>
                                        <p>
                                            Calendar
                                            <span class="badge badge-info right">2</span>
                                        </p>
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <Link to={'/ui/galery'} class="nav-link">
                                        <i class="nav-icon far fa-image"></i>
                                        <p>
                                            Gallery
                                        </p>
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <Link to={'/ui/kanban'} class="nav-link">
                                        <i class="nav-icon fas fa-columns"></i>
                                        <p>
                                            Kanban Board
                                        </p>
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <a href="#" class="nav-link">
                                        <i class="nav-icon far fa-envelope"></i>
                                        <p>
                                            Mailbox
                                            <i class="fas fa-angle-left right"></i>
                                        </p>
                                    </a>
                                    <ul class="nav nav-treeview">
                                        <li class="nav-item">
                                            <Link to={'/mailbox/mailbox'} class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Inbox</p>
                                            </Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link to={'/mailbox/compose'} class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Compose</p>
                                            </Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link to={'/mailbox/read_mail'} class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Read</p>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li class="nav-item menu-open">
                                    <a href="#" class="nav-link active">
                                        <i class="nav-icon fas fa-book"></i>
                                        <p>
                                            Pages
                                            <i class="fas fa-angle-left right"></i>
                                        </p>
                                    </a>
                                    <ul class="nav nav-treeview">
                                        <li class="nav-item">
                                            <Link to={'/example/invoice'} class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Invoice</p>
                                            </Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link to={'/example/profile'} class="nav-link active">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Profile</p>
                                            </Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link to={'/example/ecommerce'} class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>E-commerce</p>
                                            </Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link to={'/example/projects'} class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Projects</p>
                                            </Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link to={'/example/project_add'} class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Project Add</p>
                                            </Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link to={'/example/project_edit'} class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Project Edit</p>
                                            </Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link to={'/example/project_detail'} class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Project Detail</p>
                                            </Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link to={'/example/contacts'} class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Contacts</p>
                                            </Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link to={'/example/faq'} class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>FAQ</p>
                                            </Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link to={'/example/contact_us'} class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Contact us</p>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <a href="#" class="nav-link">
                                        <i class="nav-icon far fa-plus-square"></i>
                                        <p>
                                            Extras
                                            <i class="fas fa-angle-left right"></i>
                                        </p>
                                    </a>
                                    <ul class="nav nav-treeview">
                                        <li class="nav-item">
                                            <a href="#" class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>
                                                    Login & Register v1
                                                    <i class="fas fa-angle-left right"></i>
                                                </p>
                                            </a>
                                            <ul class="nav nav-treeview">
                                                <li class="nav-item">
                                                    <Link to={'/example/login'} class="nav-link">
                                                        <i class="far fa-circle nav-icon"></i>
                                                        <p>Login v1</p>
                                                    </Link>
                                                </li>
                                                <li class="nav-item">
                                                    <Link to={'/example/register'} class="nav-link">
                                                        <i class="far fa-circle nav-icon"></i>
                                                        <p>Register v1</p>
                                                    </Link>
                                                </li>
                                                <li class="nav-item">
                                                    <Link to={'/example/forgot_password'} class="nav-link">
                                                        <i class="far fa-circle nav-icon"></i>
                                                        <p>Forgot Password v1</p>
                                                    </Link>
                                                </li>
                                                <li class="nav-item">
                                                    <Link to={'/example/recover_password'} class="nav-link">
                                                        <i class="far fa-circle nav-icon"></i>
                                                        <p>Recover Password v1</p>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li class="nav-item">
                                            <a href="#" class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>
                                                    Login & Register v2
                                                    <i class="fas fa-angle-left right"></i>
                                                </p>
                                            </a>
                                            <ul class="nav nav-treeview">
                                                <li class="nav-item">
                                                    <Link to={'/example/login_v2'} class="nav-link">
                                                        <i class="far fa-circle nav-icon"></i>
                                                        <p>Login v2</p>
                                                    </Link>
                                                </li>
                                                <li class="nav-item">
                                                    <Link to={'/example/register_v2'} class="nav-link">
                                                        <i class="far fa-circle nav-icon"></i>
                                                        <p>Register v2</p>
                                                    </Link>
                                                </li>
                                                <li class="nav-item">
                                                    <Link to={'/example/forgot_password_v2'} class="nav-link">
                                                        <i class="far fa-circle nav-icon"></i>
                                                        <p>Forgot Password v2</p>
                                                    </Link>
                                                </li>
                                                <li class="nav-item">
                                                    <Link to={'/example/recover_password_v2'} class="nav-link">
                                                        <i class="far fa-circle nav-icon"></i>
                                                        <p>Recover Password v2</p>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li class="nav-item">
                                            <Link to={'/example/lockscreen'} class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Lockscreen</p>
                                            </Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link to={'/example/legacy_user_menu'} class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Legacy User Menu</p>
                                            </Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link to={'/example/language_menu'} class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Language Menu</p>
                                            </Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link to={'/example/404'} class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Error 404</p>
                                            </Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link to={'/example/500'} class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Error 500</p>
                                            </Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link to={'/example/pace'} class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Pace</p>
                                            </Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link to={'/example/blank'} class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Blank Page</p>
                                            </Link>
                                        </li>
                                        <li class="nav-item">
                                            <a href="../../starter.html" class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Starter Page</p>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <a href="#" class="nav-link">
                                        <i class="nav-icon fas fa-search"></i>
                                        <p>
                                            Search
                                            <i class="fas fa-angle-left right"></i>
                                        </p>
                                    </a>
                                    <ul class="nav nav-treeview">
                                        <li class="nav-item">
                                            <Link to={'/search/simple_search'} class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Simple Search</p>
                                            </Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link to={'/search/enhanced'} class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Enhanced</p>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li class="nav-header">MISCELLANEOUS</li>
                                <li class="nav-item">
                                    <Link to={'/iframe'} class="nav-link">
                                        <i class="nav-icon fas fa-ellipsis-h"></i>
                                        <p>Tabbed IFrame Plugin</p>
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <a href="https://adminlte.io/docs/3.1/" class="nav-link">
                                        <i class="nav-icon fas fa-file"></i>
                                        <p>Documentation</p>
                                    </a>
                                </li>
                                <li class="nav-header">MULTI LEVEL EXAMPLE</li>
                                <li class="nav-item">
                                    <a href="#" class="nav-link">
                                        <i class="fas fa-circle nav-icon"></i>
                                        <p>Level 1</p>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="#" class="nav-link">
                                        <i class="nav-icon fas fa-circle"></i>
                                        <p>
                                            Level 1
                                            <i class="right fas fa-angle-left"></i>
                                        </p>
                                    </a>
                                    <ul class="nav nav-treeview">
                                        <li class="nav-item">
                                            <a href="#" class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Level 2</p>
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="#" class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>
                                                    Level 2
                                                    <i class="right fas fa-angle-left"></i>
                                                </p>
                                            </a>
                                            <ul class="nav nav-treeview">
                                                <li class="nav-item">
                                                    <a href="#" class="nav-link">
                                                        <i class="far fa-dot-circle nav-icon"></i>
                                                        <p>Level 3</p>
                                                    </a>
                                                </li>
                                                <li class="nav-item">
                                                    <a href="#" class="nav-link">
                                                        <i class="far fa-dot-circle nav-icon"></i>
                                                        <p>Level 3</p>
                                                    </a>
                                                </li>
                                                <li class="nav-item">
                                                    <a href="#" class="nav-link">
                                                        <i class="far fa-dot-circle nav-icon"></i>
                                                        <p>Level 3</p>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li class="nav-item">
                                            <a href="#" class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Level 2</p>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <a href="#" class="nav-link">
                                        <i class="fas fa-circle nav-icon"></i>
                                        <p>Level 1</p>
                                    </a>
                                </li>
                                <li class="nav-header">LABELS</li>
                                <li class="nav-item">
                                    <a href="#" class="nav-link">
                                        <i class="nav-icon far fa-circle text-danger"></i>
                                        <p class="text">Important</p>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="#" class="nav-link">
                                        <i class="nav-icon far fa-circle text-warning"></i>
                                        <p>Warning</p>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="#" class="nav-link">
                                        <i class="nav-icon far fa-circle text-info"></i>
                                        <p>Informational</p>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link">
                                        <IoIosLogOut style={{ color: "white", fontSize: "20px", marginLeft: '5px' }} />
                                        <p style={{ marginLeft: '6px', cursor: 'pointer' }}><Logout /></p>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        {/* <!-- /.sidebar-menu --> */}
                    </div>
                    {/* <!-- /.sidebar --> */}
                </aside>

                {/* <!-- Content Wrapper. Contains page content --> */}
                <div class="content-wrapper">
                    {/* <!-- Content Header (Page header) --> */}
                    <section class="content-header">
                        <div class="container-fluid">
                            <div class="row mb-2">
                                <div class="col-sm-6">
                                    <h1>Profile</h1>
                                </div>
                                <div class="col-sm-6">
                                    <ol class="breadcrumb float-sm-right">
                                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                                        <li class="breadcrumb-item active">User Profile</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* <!-- Main content --> */}
                    <section class="content">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-md-3">

                                    {/* <!-- Profile Image --> */}
                                    <div class="card card-primary card-outline">
                                        <div class="card-body box-profile">
                                            <div class="text-center">
                                                <img class="profile-user-img img-fluid img-circle"
                                                    src="../../dist/img/user4-128x128.jpg"
                                                    alt="User profile picture" />
                                            </div>

                                            <h3 class="profile-username text-center">Nina Mcintire</h3>

                                            <p class="text-muted text-center">Software Engineer</p>

                                            <ul class="list-group list-group-unbordered mb-3">
                                                <li class="list-group-item">
                                                    <b>Followers</b> <a class="float-right">1,322</a>
                                                </li>
                                                <li class="list-group-item">
                                                    <b>Following</b> <a class="float-right">543</a>
                                                </li>
                                                <li class="list-group-item">
                                                    <b>Friends</b> <a class="float-right">13,287</a>
                                                </li>
                                            </ul>

                                            <a href="#" class="btn btn-primary btn-block"><b>Follow</b></a>
                                        </div>
                                        {/* <!-- /.card-body --> */}
                                    </div>
                                    {/* <!-- /.card --> */}

                                    {/* <!-- About Me Box --> */}
                                    <div class="card card-primary">
                                        <div class="card-header">
                                            <h3 class="card-title">About Me</h3>
                                        </div>
                                        {/* <!-- /.card-header --> */}
                                        <div class="card-body">
                                            <strong><i class="fas fa-book mr-1"></i> Education</strong>

                                            <p class="text-muted">
                                                B.S. in Computer Science from the University of Tennessee at Knoxville
                                            </p>

                                            <hr />

                                            <strong><i class="fas fa-map-marker-alt mr-1"></i> Location</strong>

                                            <p class="text-muted">Malibu, California</p>

                                            <hr />

                                            <strong><i class="fas fa-pencil-alt mr-1"></i> Skills</strong>

                                            <p class="text-muted">
                                                <span class="tag tag-danger">UI Design</span>
                                                <span class="tag tag-success">Coding</span>
                                                <span class="tag tag-info">Javascript</span>
                                                <span class="tag tag-warning">PHP</span>
                                                <span class="tag tag-primary">Node.js</span>
                                            </p>

                                            <hr />

                                            <strong><i class="far fa-file-alt mr-1"></i> Notes</strong>

                                            <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum enim neque.</p>
                                        </div>
                                        {/* <!-- /.card-body --> */}
                                    </div>
                                    {/* <!-- /.card --> */}
                                </div>
                                {/* <!-- /.col --> */}
                                <div class="col-md-9">
                                    <div class="card">
                                        <div class="card-header p-2">
                                            <ul class="nav nav-pills">
                                                <li class="nav-item"><a class="nav-link active" href="#activity" data-toggle="tab">Activity</a></li>
                                                <li class="nav-item"><a class="nav-link" href="#timeline" data-toggle="tab">Timeline</a></li>
                                                <li class="nav-item"><a class="nav-link" href="#settings" data-toggle="tab">Settings</a></li>
                                            </ul>
                                        </div>
                                        <div class="card-body">
                                            <div class="tab-content">
                                                <div class="active tab-pane" id="activity">
                                                    {/* <!-- Post --> */}
                                                    <div class="post">
                                                        <div class="user-block">
                                                            <img class="img-circle img-bordered-sm" src="../../dist/img/user1-128x128.jpg" alt="user image" />
                                                            <span class="username">
                                                                <a href="#">Jonathan Burke Jr.</a>
                                                                <a href="#" class="float-right btn-tool"><i class="fas fa-times"></i></a>
                                                            </span>
                                                            <span class="description">Shared publicly - 7:30 PM today</span>
                                                        </div>
                                                        {/* <!-- /.user-block --> */}
                                                        <p>
                                                            Lorem ipsum represents a long-held tradition for designers,
                                                            typographers and the like. Some people hate it and argue for
                                                            its demise, but others ignore the hate as they create awesome
                                                            tools to help create filler text for everyone from bacon lovers
                                                            to Charlie Sheen fans.
                                                        </p>

                                                        <p>
                                                            <a href="#" class="link-black text-sm mr-2"><i class="fas fa-share mr-1"></i> Share</a>
                                                            <a href="#" class="link-black text-sm"><i class="far fa-thumbs-up mr-1"></i> Like</a>
                                                            <span class="float-right">
                                                                <a href="#" class="link-black text-sm">
                                                                    <i class="far fa-comments mr-1"></i> Comments (5)
                                                                </a>
                                                            </span>
                                                        </p>

                                                        <input class="form-control form-control-sm" type="text" placeholder="Type a comment" />
                                                    </div>
                                                    {/* <!-- /.post --> */}

                                                    {/* <!-- Post --> */}
                                                    <div class="post clearfix">
                                                        <div class="user-block">
                                                            <img class="img-circle img-bordered-sm" src="../../dist/img/user7-128x128.jpg" alt="User Image" />
                                                            <span class="username">
                                                                <a href="#">Sarah Ross</a>
                                                                <a href="#" class="float-right btn-tool"><i class="fas fa-times"></i></a>
                                                            </span>
                                                            <span class="description">Sent you a message - 3 days ago</span>
                                                        </div>
                                                        {/* <!-- /.user-block --> */}
                                                        <p>
                                                            Lorem ipsum represents a long-held tradition for designers,
                                                            typographers and the like. Some people hate it and argue for
                                                            its demise, but others ignore the hate as they create awesome
                                                            tools to help create filler text for everyone from bacon lovers
                                                            to Charlie Sheen fans.
                                                        </p>

                                                        <form class="form-horizontal">
                                                            <div class="input-group input-group-sm mb-0">
                                                                <input class="form-control form-control-sm" placeholder="Response" />
                                                                <div class="input-group-append">
                                                                    <button type="submit" class="btn btn-danger">Send</button>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                    {/* <!-- /.post --> */}

                                                    {/* <!-- Post --> */}
                                                    <div class="post">
                                                        <div class="user-block">
                                                            <img class="img-circle img-bordered-sm" src="../../dist/img/user6-128x128.jpg" alt="User Image" />
                                                            <span class="username">
                                                                <a href="#">Adam Jones</a>
                                                                <a href="#" class="float-right btn-tool"><i class="fas fa-times"></i></a>
                                                            </span>
                                                            <span class="description">Posted 5 photos - 5 days ago</span>
                                                        </div>
                                                        {/* <!-- /.user-block --> */}
                                                        <div class="row mb-3">
                                                            <div class="col-sm-6">
                                                                <img class="img-fluid" src="../../dist/img/photo1.png" alt="Photo" />
                                                            </div>
                                                            {/* <!-- /.col --> */}
                                                            <div class="col-sm-6">
                                                                <div class="row">
                                                                    <div class="col-sm-6">
                                                                        <img class="img-fluid mb-3" src="../../dist/img/photo2.png" alt="Photo" />
                                                                        <img class="img-fluid" src="../../dist/img/photo3.jpg" alt="Photo" />
                                                                    </div>
                                                                    {/* <!-- /.col --> */}
                                                                    <div class="col-sm-6">
                                                                        <img class="img-fluid mb-3" src="../../dist/img/photo4.jpg" alt="Photo" />
                                                                        <img class="img-fluid" src="../../dist/img/photo1.png" alt="Photo" />
                                                                    </div>
                                                                    {/* <!-- /.col --> */}
                                                                </div>
                                                                {/* <!-- /.row --> */}
                                                            </div>
                                                            {/* <!-- /.col --> */}
                                                        </div>
                                                        {/* <!-- /.row --> */}

                                                        <p>
                                                            <a href="#" class="link-black text-sm mr-2"><i class="fas fa-share mr-1"></i> Share</a>
                                                            <a href="#" class="link-black text-sm"><i class="far fa-thumbs-up mr-1"></i> Like</a>
                                                            <span class="float-right">
                                                                <a href="#" class="link-black text-sm">
                                                                    <i class="far fa-comments mr-1"></i> Comments (5)
                                                                </a>
                                                            </span>
                                                        </p>

                                                        <input class="form-control form-control-sm" type="text" placeholder="Type a comment" />
                                                    </div>
                                                    {/* <!-- /.post --> */}
                                                </div>
                                                {/* <!-- /.tab-pane --> */}
                                                <div class="tab-pane" id="timeline">
                                                    {/* <!-- The timeline --> */}
                                                    <div class="timeline timeline-inverse">
                                                        {/* <!-- timeline time label --> */}
                                                        <div class="time-label">
                                                            <span class="bg-danger">
                                                                10 Feb. 2014
                                                            </span>
                                                        </div>
                                                        {/* <!-- /.timeline-label --> */}
                                                        {/* <!-- timeline item --> */}
                                                        <div>
                                                            <i class="fas fa-envelope bg-primary"></i>

                                                            <div class="timeline-item">
                                                                <span class="time"><i class="far fa-clock"></i> 12:05</span>

                                                                <h3 class="timeline-header"><a href="#">Support Team</a> sent you an email</h3>

                                                                <div class="timeline-body">
                                                                    Etsy doostang zoodles disqus groupon greplin oooj voxy zoodles,
                                                                    weebly ning heekya handango imeem plugg dopplr jibjab, movity
                                                                    jajah plickers sifteo edmodo ifttt zimbra. Babblely odeo kaboodle
                                                                    quora plaxo ideeli hulu weebly balihoo...
                                                                </div>
                                                                <div class="timeline-footer">
                                                                    <a href="#" class="btn btn-primary btn-sm">Read more</a>
                                                                    <a href="#" class="btn btn-danger btn-sm">Delete</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* <!-- END timeline item --> */}
                                                        {/* <!-- timeline item --> */}
                                                        <div>
                                                            <i class="fas fa-user bg-info"></i>

                                                            <div class="timeline-item">
                                                                <span class="time"><i class="far fa-clock"></i> 5 mins ago</span>

                                                                <h3 class="timeline-header border-0"><a href="#">Sarah Young</a> accepted your friend request
                                                                </h3>
                                                            </div>
                                                        </div>
                                                        {/* <!-- END timeline item --> */}
                                                        {/* <!-- timeline item --> */}
                                                        <div>
                                                            <i class="fas fa-comments bg-warning"></i>

                                                            <div class="timeline-item">
                                                                <span class="time"><i class="far fa-clock"></i> 27 mins ago</span>

                                                                <h3 class="timeline-header"><a href="#">Jay White</a> commented on your post</h3>

                                                                <div class="timeline-body">
                                                                    Take me to your leader!
                                                                    Switzerland is small and neutral!
                                                                    We are more like Germany, ambitious and misunderstood!
                                                                </div>
                                                                <div class="timeline-footer">
                                                                    <a href="#" class="btn btn-warning btn-flat btn-sm">View comment</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* <!-- END timeline item --> */}
                                                        {/* <!-- timeline time label --> */}
                                                        <div class="time-label">
                                                            <span class="bg-success">
                                                                3 Jan. 2014
                                                            </span>
                                                        </div>
                                                        {/* <!-- /.timeline-label --> */}
                                                        {/* <!-- timeline item --> */}
                                                        <div>
                                                            <i class="fas fa-camera bg-purple"></i>

                                                            <div class="timeline-item">
                                                                <span class="time"><i class="far fa-clock"></i> 2 days ago</span>

                                                                <h3 class="timeline-header"><a href="#">Mina Lee</a> uploaded new photos</h3>

                                                                <div class="timeline-body">
                                                                    <img src="https://placehold.it/150x100" alt="..." />
                                                                    <img src="https://placehold.it/150x100" alt="..." />
                                                                    <img src="https://placehold.it/150x100" alt="..." />
                                                                    <img src="https://placehold.it/150x100" alt="..." />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* <!-- END timeline item --> */}
                                                        <div>
                                                            <i class="far fa-clock bg-gray"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <!-- /.tab-pane --> */}

                                                <div class="tab-pane" id="settings">
                                                    <form class="form-horizontal">
                                                        <div class="form-group row">
                                                            <label for="inputName" class="col-sm-2 col-form-label">Name</label>
                                                            <div class="col-sm-10">
                                                                <input type="email" class="form-control" id="inputName" placeholder="Name" />
                                                            </div>
                                                        </div>
                                                        <div class="form-group row">
                                                            <label for="inputEmail" class="col-sm-2 col-form-label">Email</label>
                                                            <div class="col-sm-10">
                                                                <input type="email" class="form-control" id="inputEmail" placeholder="Email" />
                                                            </div>
                                                        </div>
                                                        <div class="form-group row">
                                                            <label for="inputName2" class="col-sm-2 col-form-label">Name</label>
                                                            <div class="col-sm-10">
                                                                <input type="text" class="form-control" id="inputName2" placeholder="Name" />
                                                            </div>
                                                        </div>
                                                        <div class="form-group row">
                                                            <label for="inputExperience" class="col-sm-2 col-form-label">Experience</label>
                                                            <div class="col-sm-10">
                                                                <textarea class="form-control" id="inputExperience" placeholder="Experience"></textarea>
                                                            </div>
                                                        </div>
                                                        <div class="form-group row">
                                                            <label for="inputSkills" class="col-sm-2 col-form-label">Skills</label>
                                                            <div class="col-sm-10">
                                                                <input type="text" class="form-control" id="inputSkills" placeholder="Skills" />
                                                            </div>
                                                        </div>
                                                        <div class="form-group row">
                                                            <div class="offset-sm-2 col-sm-10">
                                                                <div class="checkbox">
                                                                    <label>
                                                                        <input type="checkbox" /> I agree to the <a href="#">terms and conditions</a>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="form-group row">
                                                            <div class="offset-sm-2 col-sm-10">
                                                                <button type="submit" class="btn btn-danger">Submit</button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                                {/* <!-- /.tab-pane --> */}
                                            </div>
                                            {/* <!-- /.tab-content --> */}
                                        </div>
                                    </div>
                                    {/* <!-- /.card --> */}
                                </div>
                                {/* <!-- /.col --> */}
                            </div>
                            {/* <!-- /.row --> */}
                        </div>
                    </section>
                    {/* <!-- /.content --> */}
                </div>
                {/* <!-- /.content-wrapper --> */}
                <footer class="main-footer">
                    <div class="float-right d-none d-sm-block">
                        <b>Version</b> 3.2.0
                    </div>
                    <strong>Copyright &copy; 2014-2021 <a href="https://adminlte.io">AdminLTE.io</a>.</strong> All rights reserved.
                </footer>

                {/* <!-- Control Sidebar --> */}
                <aside class="control-sidebar control-sidebar-dark">
                    {/* <!-- Control sidebar content goes here --> */}
                </aside>
                {/* <!-- /.control-sidebar --> */}
            </div>
            {/* <!-- ./wrapper --> */}
        </body>
    )
}
