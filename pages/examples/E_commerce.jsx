import React from 'react'
import { Link } from 'react-router-dom'
import RefreshPage from '../../src/RefreshPage'

export default function E_commerce() {

  $(document).ready(function () {
    $('.product-image-thumb').on('click', function () {
      var $image_element = $(this).find('img')
      $('.product-image').prop('src', $image_element.attr('src'))
      $('.product-image-thumb.active').removeClass('active')
      $(this).addClass('active')
    })
  })

  return (
    <body class="hold-transition sidebar-mini">
      {/* <!-- Site wrapper --> */}
      <div class="wrapper">
        {/* <!-- Navbar --> */}
        <nav class="main-header navbar navbar-expand navbar-white navbar-light">
          {/* <!-- Left navbar links --> */}
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
            </li>
            <li class="nav-item d-none d-sm-inline-block">
              <Link to={'/'} onClick={RefreshPage}  class="nav-link">Home</Link>
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
          <Link to={'/'} onClick={RefreshPage}  class="brand-link">
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
                    <li class="nav-item">
                      <a href="../../index.html" class="nav-link">
                        <i class="far fa-circle nav-icon"></i>
                        <p>Dashboard v1</p>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a href="../../index2.html" class="nav-link">
                        <i class="far fa-circle nav-icon"></i>
                        <p>Dashboard v2</p>
                      </a>
                    </li>
                    <li class="nav-item">
                      <Link to={'/'} onClick={RefreshPage}  class="nav-link">
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
                      <Link to={'/ui/sliders'}  class="nav-link">
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
                      <Link to={'/example/profile'} class="nav-link">
                        <i class="far fa-circle nav-icon"></i>
                        <p>Profile</p>
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link to={'/example/ecommerce'} class="nav-link active">
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
                  <h1>E-commerce</h1>
                </div>
                <div class="col-sm-6">
                  <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                    <li class="breadcrumb-item active">E-commerce</li>
                  </ol>
                </div>
              </div>
            </div>
          </section>

          {/* <!-- Main content --> */}
          <section class="content">

            {/* <!-- Default box --> */}
            <div class="card card-solid">
              <div class="card-body">
                <div class="row">
                  <div class="col-12 col-sm-6">
                    <h3 class="d-inline-block d-sm-none">LOWA Men’s Renegade GTX Mid Hiking Boots Review</h3>
                    <div class="col-12">
                      <img src="../../dist/img/prod-1.jpg" class="product-image" alt="Product Image" />
                    </div>
                    <div class="col-12 product-image-thumbs">
                      <div class="product-image-thumb active"><img src="../../dist/img/prod-1.jpg" alt="Product Image" /></div>
                      <div class="product-image-thumb" ><img src="../../dist/img/prod-2.jpg" alt="Product Image" /></div>
                      <div class="product-image-thumb" ><img src="../../dist/img/prod-3.jpg" alt="Product Image" /></div>
                      <div class="product-image-thumb" ><img src="../../dist/img/prod-4.jpg" alt="Product Image" /></div>
                      <div class="product-image-thumb" ><img src="../../dist/img/prod-5.jpg" alt="Product Image" /></div>
                    </div>
                  </div>
                  <div class="col-12 col-sm-6">
                    <h3 class="my-3">LOWA Men’s Renegade GTX Mid Hiking Boots Review</h3>
                    <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terr.</p>

                    <hr />
                    <h4>Available Colors</h4>
                    <div class="btn-group btn-group-toggle" data-toggle="buttons">
                      <label class="btn btn-default text-center active">
                        <input type="radio" name="color_option" id="color_option_a1" autocomplete="off" checked />
                        Green
                        <br />
                        <i class="fas fa-circle fa-2x text-green"></i>
                      </label>
                      <label class="btn btn-default text-center">
                        <input type="radio" name="color_option" id="color_option_a2" autocomplete="off" />
                        Blue
                        <br />
                        <i class="fas fa-circle fa-2x text-blue"></i>
                      </label>
                      <label class="btn btn-default text-center">
                        <input type="radio" name="color_option" id="color_option_a3" autocomplete="off" />
                        Purple
                        <br />
                        <i class="fas fa-circle fa-2x text-purple"></i>
                      </label>
                      <label class="btn btn-default text-center">
                        <input type="radio" name="color_option" id="color_option_a4" autocomplete="off" />
                        Red
                        <br />
                        <i class="fas fa-circle fa-2x text-red"></i>
                      </label>
                      <label class="btn btn-default text-center">
                        <input type="radio" name="color_option" id="color_option_a5" autocomplete="off" />
                        Orange
                        <br />
                        <i class="fas fa-circle fa-2x text-orange"></i>
                      </label>
                    </div>

                    <h4 class="mt-3">Size <small>Please select one</small></h4>
                    <div class="btn-group btn-group-toggle" data-toggle="buttons">
                      <label class="btn btn-default text-center">
                        <input type="radio" name="color_option" id="color_option_b1" autocomplete="off" />
                        <span class="text-xl">S</span>
                        <br />
                        Small
                      </label>
                      <label class="btn btn-default text-center">
                        <input type="radio" name="color_option" id="color_option_b2" autocomplete="off" />
                        <span class="text-xl">M</span>
                        <br />
                        Medium
                      </label>
                      <label class="btn btn-default text-center">
                        <input type="radio" name="color_option" id="color_option_b3" autocomplete="off" />
                        <span class="text-xl">L</span>
                        <br />
                        Large
                      </label>
                      <label class="btn btn-default text-center">
                        <input type="radio" name="color_option" id="color_option_b4" autocomplete="off" />
                        <span class="text-xl">XL</span>
                        <br />
                        Xtra-Large
                      </label>
                    </div>

                    <div class="bg-gray py-2 px-3 mt-4">
                      <h2 class="mb-0">
                        $80.00
                      </h2>
                      <h4 class="mt-0">
                        <small>Ex Tax: $80.00 </small>
                      </h4>
                    </div>

                    <div class="mt-4">
                      <div class="btn btn-primary btn-lg btn-flat">
                        <i class="fas fa-cart-plus fa-lg mr-2"></i>
                        Add to Cart
                      </div>

                      <div class="btn btn-default btn-lg btn-flat">
                        <i class="fas fa-heart fa-lg mr-2"></i>
                        Add to Wishlist
                      </div>
                    </div>

                    <div class="mt-4 product-share">
                      <a href="#" class="text-gray">
                        <i class="fab fa-facebook-square fa-2x"></i>
                      </a>
                      <a href="#" class="text-gray">
                        <i class="fab fa-twitter-square fa-2x"></i>
                      </a>
                      <a href="#" class="text-gray">
                        <i class="fas fa-envelope-square fa-2x"></i>
                      </a>
                      <a href="#" class="text-gray">
                        <i class="fas fa-rss-square fa-2x"></i>
                      </a>
                    </div>

                  </div>
                </div>
                <div class="row mt-4">
                  <nav class="w-100">
                    <div class="nav nav-tabs" id="product-tab" role="tablist">
                      <a class="nav-item nav-link active" id="product-desc-tab" data-toggle="tab" href="#product-desc" role="tab" aria-controls="product-desc" aria-selected="true">Description</a>
                      <a class="nav-item nav-link" id="product-comments-tab" data-toggle="tab" href="#product-comments" role="tab" aria-controls="product-comments" aria-selected="false">Comments</a>
                      <a class="nav-item nav-link" id="product-rating-tab" data-toggle="tab" href="#product-rating" role="tab" aria-controls="product-rating" aria-selected="false">Rating</a>
                    </div>
                  </nav>
                  <div class="tab-content p-3" id="nav-tabContent">
                    <div class="tab-pane fade show active" id="product-desc" role="tabpanel" aria-labelledby="product-desc-tab"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae condimentum erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed posuere, purus at efficitur hendrerit, augue elit lacinia arcu, a eleifend sem elit et nunc. Sed rutrum vestibulum est, sit amet cursus dolor fermentum vel. Suspendisse mi nibh, congue et ante et, commodo mattis lacus. Duis varius finibus purus sed venenatis. Vivamus varius metus quam, id dapibus velit mattis eu. Praesent et semper risus. Vestibulum erat erat, condimentum at elit at, bibendum placerat orci. Nullam gravida velit mauris, in pellentesque urna pellentesque viverra. Nullam non pellentesque justo, et ultricies neque. Praesent vel metus rutrum, tempus erat a, rutrum ante. Quisque interdum efficitur nunc vitae consectetur. Suspendisse venenatis, tortor non convallis interdum, urna mi molestie eros, vel tempor justo lacus ac justo. Fusce id enim a erat fringilla sollicitudin ultrices vel metus. </div>
                    <div class="tab-pane fade" id="product-comments" role="tabpanel" aria-labelledby="product-comments-tab"> Vivamus rhoncus nisl sed venenatis luctus. Sed condimentum risus ut tortor feugiat laoreet. Suspendisse potenti. Donec et finibus sem, ut commodo lectus. Cras eget neque dignissim, placerat orci interdum, venenatis odio. Nulla turpis elit, consequat eu eros ac, consectetur fringilla urna. Duis gravida ex pulvinar mauris ornare, eget porttitor enim vulputate. Mauris hendrerit, massa nec aliquam cursus, ex elit euismod lorem, vehicula rhoncus nisl dui sit amet eros. Nulla turpis lorem, dignissim a sapien eget, ultrices venenatis dolor. Curabitur vel turpis at magna elementum hendrerit vel id dui. Curabitur a ex ullamcorper, ornare velit vel, tincidunt ipsum. </div>
                    <div class="tab-pane fade" id="product-rating" role="tabpanel" aria-labelledby="product-rating-tab"> Cras ut ipsum ornare, aliquam ipsum non, posuere elit. In hac habitasse platea dictumst. Aenean elementum leo augue, id fermentum risus efficitur vel. Nulla iaculis malesuada scelerisque. Praesent vel ipsum felis. Ut molestie, purus aliquam placerat sollicitudin, mi ligula euismod neque, non bibendum nibh neque et erat. Etiam dignissim aliquam ligula, aliquet feugiat nibh rhoncus ut. Aliquam efficitur lacinia lacinia. Morbi ac molestie lectus, vitae hendrerit nisl. Nullam metus odio, malesuada in vehicula at, consectetur nec justo. Quisque suscipit odio velit, at accumsan urna vestibulum a. Proin dictum, urna ut varius consectetur, sapien justo porta lectus, at mollis nisi orci et nulla. Donec pellentesque tortor vel nisl commodo ullamcorper. Donec varius massa at semper posuere. Integer finibus orci vitae vehicula placerat. </div>
                  </div>
                </div>
              </div>
              {/* <!-- /.card-body --> */}
            </div>
            {/* <!-- /.card --> */}

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
