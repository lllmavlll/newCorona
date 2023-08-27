import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Collapse, Dropdown } from 'react-bootstrap';
import { Trans } from 'react-i18next';

class Sidebar extends Component {

  state = {};

  toggleMenuState(menuState) {
    if (this.state[menuState]) {
      this.setState({[menuState] : false});
    } else if(Object.keys(this.state).length === 0) {
      this.setState({[menuState] : true});
    } else {
      Object.keys(this.state).forEach(i => {
        this.setState({[i]: false});
      });
      this.setState({[menuState] : true}); 
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }

  onRouteChanged() {
    document.querySelector('#sidebar').classList.remove('active');
    Object.keys(this.state).forEach(i => {
      this.setState({[i]: false});
    });

    const dropdownPaths = [
      {path:'/apps', state: 'appsMenuOpen'},
      {path:'/basic-ui', state: 'basicUiMenuOpen'},
      {path:'/form-elements', state: 'formElementsMenuOpen'},
      {path:'/customer-order-form', state: 'custOrderFromMenuOpen'},
      {path:'/gold-smith', state: 'goldSmithMenuOpen'},
      {path:'/box-framing', state: 'boxFraminigMenuOpen'},
      {path:'/tables', state: 'tablesMenuOpen'},
      {path:'/icons', state: 'iconsMenuOpen'},
      {path:'/charts', state: 'chartsMenuOpen'},
      {path:'/user-pages', state: 'userPagesMenuOpen'},
      {path:'/stock-transfer', state: 'stockTransferOpen'},
      {path:'/slaes', state: 'salesMenuOpen'},
      {path:'/customer-ledger', state: 'customerLedgerMenuOpen'},
      {path:'/configuration', state: 'configurationMenuOpen'},
      {path:'/view', state: 'viewMenuOpen'},
      {path:'/error-pages', state: 'errorPagesMenuOpen'},
    ];

    dropdownPaths.forEach((obj => {
      if (this.isPathActive(obj.path)) {
        this.setState({[obj.state] : true})
      }
    }));
 
  }

  render () {
    return (
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <div className="sidebar-brand-wrapper d-none d-lg-flex align-items-center justify-content-center fixed-top">
          {/* <a className="sidebar-brand brand-logo" href="index.html"><img src={require('../../assets/images/logo.svg')} alt="logo" /></a> */}
          <a className="sidebar-brand brand-logo" href="index.html"><h3>Muthu Krishna</h3></a>
          <a className="sidebar-brand brand-logo-mini" href="index.html"><img src={require('../../assets/images/logo-mini.svg')} alt="logo" /></a>
        </div>
        <ul className="nav">
          <li className="nav-item profile">
            <div className="profile-desc">
              <div className="profile-pic">
                <div className="count-indicator">
                  <img className="img-xs rounded-circle " src={require('../../assets/images/faces/face15.jpg')} alt="profile" />
                  <span className="count bg-success"></span>
                </div>
                <div className="profile-name">
                  <h5 className="mb-0 font-weight-normal"><Trans>Admin</Trans></h5>
                  <span><Trans>Gold Member</Trans></span>
                </div>
              </div>
              <Dropdown alignRight>
                <Dropdown.Toggle as="a" className="cursor-pointer no-caret">
                  <i className="mdi mdi-dots-vertical"></i>
                </Dropdown.Toggle>
                <Dropdown.Menu className="sidebar-dropdown preview-list">
                  <a href="!#" className="dropdown-item preview-item" onClick={evt =>evt.preventDefault()}>
                    <div className="preview-thumbnail">
                      <div className="preview-icon bg-dark rounded-circle">
                        <i className="mdi mdi-settings text-primary"></i>
                      </div>
                    </div>
                    <div className="preview-item-content">
                      <p className="preview-subject ellipsis mb-1 text-small"><Trans>Account settings</Trans></p>
                    </div>
                  </a>
                  <div className="dropdown-divider"></div>
                  <a href="!#" className="dropdown-item preview-item" onClick={evt =>evt.preventDefault()}>
                    <div className="preview-thumbnail">
                      <div className="preview-icon bg-dark rounded-circle">
                        <i className="mdi mdi-onepassword  text-info"></i>
                      </div>
                    </div>
                    <div className="preview-item-content">
                      <p className="preview-subject ellipsis mb-1 text-small"><Trans>Change Password</Trans></p>
                    </div>
                  </a>
                  <div className="dropdown-divider"></div>
                  <a href="!#" className="dropdown-item preview-item" onClick={evt =>evt.preventDefault()}>
                    <div className="preview-thumbnail">
                      <div className="preview-icon bg-dark rounded-circle">
                        <i className="mdi mdi-calendar-today text-success"></i>
                      </div>
                    </div>
                    <div className="preview-item-content">
                      <p className="preview-subject ellipsis mb-1 text-small"><Trans>To-do list</Trans></p>
                    </div>
                  </a>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </li>
          <li className="nav-item nav-category">
            <span className="nav-link"><Trans>Navigation</Trans></span>
          </li>
          <li className={ this.isPathActive('/product') ? 'nav-item menu-items active' : 'nav-item menu-items' }>
            <Link className="nav-link" to="/product">
              <span className="menu-icon"><i className="mdi mdi-speedometer"></i></span>
              <span className="menu-title"><Trans>Product</Trans></span>
            </Link>
          </li>
        
          <li className={ this.isPathActive('/customer-order-form') ? 'nav-item menu-items active' : 'nav-item menu-items' }>
            <div className={ this.state.custOrderFromMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('custOrderFromMenuOpen') } data-toggle="collapse">
              <span className="menu-icon">
                <i className="mdi mdi-playlist-play"></i>
              </span>
              <span className="menu-title"><Trans>Cust Order Form</Trans></span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={ this.state.custOrderFromMenuOpen }>
              <div>
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item"> <Link className={ this.isPathActive('/customer-order-form/order-form') ? 'nav-link active' : 'nav-link' } to="/customer-order-form/order-form"><Trans>Order Form</Trans></Link></li>
                  <li className="nav-item"> <Link className={ this.isPathActive('/customer-order-form/order-form-view') ? 'nav-link active' : 'nav-link' } to="/customer-order-form/order-form-view"><Trans>Order Form View</Trans></Link></li>

                  {/* <li className="nav-item"> <Link className={ this.isPathActive('/customer-order-form/sub-order-form') ? 'nav-link active' : 'nav-link' } to="/customer-order-form/sub-order-form"><Trans>Sub Order form</Trans></Link></li> */}
                  {/* <li className="nav-item"> <Link className={ this.isPathActive('/form-elements/orderItems') ? 'nav-link active' : 'nav-link' } to="/form-elements/orderItems"><Trans>Order items</Trans></Link></li> */}
                </ul>
              </div>
            </Collapse>
          </li>

            <li className={ this.isPathActive('/gold-smith') ? 'nav-item menu-items active' : 'nav-item menu-items' }>
            <div className={ this.state.goldSmithMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('goldSmithMenuOpen') } data-toggle="collapse">
              <span className="menu-icon">
                <i className="mdi mdi-laptop"></i>
              </span>
              <span className="menu-title"><Trans>Gold Smith </Trans></span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={ this.state.goldSmithMenuOpen }>
              <div>
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item"> <Link className={ this.isPathActive('/gold-smith/order') ? 'nav-link active' : 'nav-link' } to="/gold-smith/order"><Trans>GS Order</Trans></Link></li>
                  <li className="nav-item"> <Link className={ this.isPathActive('/gold-smith/GSOrder-view') ? 'nav-link active' : 'nav-link' } to="/gold-smith/GSOrder-view"><Trans>GS Order View</Trans></Link></li>
                  <li className="nav-item"> <Link className={ this.isPathActive('/gold-smith/issuance') ? 'nav-link active' : 'nav-link' } to="/gold-smith/issuance"><Trans>GS Issuance</Trans></Link></li>
                  <li className="nav-item"> <Link className={ this.isPathActive('/gold-smith/issuance-view') ? 'nav-link active' : 'nav-link' } to="/gold-smith/issuance-view"><Trans>GS Issuance view</Trans></Link></li>
                  <li className="nav-item"> <Link className={ this.isPathActive('/gold-smith/receive') ? 'nav-link active' : 'nav-link' } to="/gold-smith/receive"><Trans>GS Receive</Trans></Link></li>
                  <li className="nav-item"> <Link className={ this.isPathActive('/gold-smith/testing') ? 'nav-link active' : 'nav-link' } to="/gold-smith/testing"><Trans>Testing</Trans></Link></li>
                </ul>
              </div>
            </Collapse>
          </li> 

            <li className={ this.isPathActive('/views') ? 'nav-item menu-items active' : 'nav-item menu-items' }>
            <div className={ this.state.viewMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('viewMenuOpen') } data-toggle="collapse">
              <span className="menu-icon">
                <i className="mdi mdi-table"></i>
              </span>
              <span className="menu-title"><Trans>Views </Trans></span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={ this.state.viewMenuOpen }>
              <div>
                <ul className="nav flex-column sub-menu">
                  {/* <li className="nav-item"> <Link className={ this.isPathActive('/views/order-form-view') ? 'nav-link active' : 'nav-link' } to="/views/order-form-view"><Trans>Order Form View</Trans></Link></li>
                  <li className="nav-item"> <Link className={ this.isPathActive('/views/GSOrder-view') ? 'nav-link active' : 'nav-link' } to="/views/GSOrder-view"><Trans>GS Order View</Trans></Link></li> */}
                </ul>
              </div>
            </Collapse>
          </li> 

           
          <li className={ this.isPathActive('/charts') ? 'nav-item menu-items active' : 'nav-item menu-items' }>
            <div className={ this.state.chartsMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('chartsMenuOpen') } data-toggle="collapse">
              <span className="menu-icon">
                <i className="mdi mdi-cards"></i>
              </span>
              <span className="menu-title"><Trans>Card Fitting </Trans></span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={ this.state.chartsMenuOpen }>
              <div>
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item"> <Link className={ this.isPathActive('/charts/chart-js') ? 'nav-link active' : 'nav-link' } to="/charts/chart-js"><Trans>issuance</Trans></Link></li>
                  <li className="nav-item"> <Link className={ this.isPathActive('/charts/chart-js') ? 'nav-link active' : 'nav-link' } to="/charts/chart-js"><Trans>receive</Trans></Link></li>
                </ul>
              </div>
            </Collapse>
          </li>

          <li className={ this.isPathActive('/box-framing') ? 'nav-item menu-items active' : 'nav-item menu-items' }>
            <div className={ this.state.boxFraminigMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('boxFraminigMenuOpen') } data-toggle="collapse">
              <span className="menu-icon">
                <i className="mdi mdi-table-large"></i>
              </span>
              <span className="menu-title"><Trans>Box Framing</Trans></span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={ this.state.boxFraminigMenuOpen }>
              <div>
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item"> <Link className={ this.isPathActive('/box-framing') ? 'nav-link active' : 'nav-link' } to="/box-framing"><Trans>Box Framing</Trans></Link></li>
                </ul>
              </div>
            </Collapse>
          </li>

          <li className={ this.isPathActive('/stock-transfer') ? 'nav-item menu-items active' : 'nav-item menu-items' }>
            <div className={ this.state.stockTransferOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('stockTransferOpen') } data-toggle="collapse">
              <span className="menu-icon">
                <i className="mdi mdi-security"></i>
              </span>
              <span className="menu-title"><Trans> Stock Transfer</Trans></span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={ this.state.stockTransferOpen }>
              <div>
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item"> <Link className={ this.isPathActive('/stock-transfer') ? 'nav-link active' : 'nav-link' } to="/stock-transfer"><Trans>Login</Trans></Link></li>
                  <li className="nav-item"> <Link className={ this.isPathActive('/user-pages/register-1') ? 'nav-link active' : 'nav-link' } to="/user-pages/register-1"><Trans>Register</Trans></Link></li>
                </ul>
              </div>
            </Collapse>
          </li>
          <li className={ this.isPathActive('/sales') ? 'nav-item menu-items active' : 'nav-item menu-items' }>
            <div className={ this.state.salesMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('salesMenuOpen') } data-toggle="collapse">
              <span className="menu-icon">
                <i className="mdi mdi-sale"></i>
              </span>
              <span className="menu-title"><Trans>Sales</Trans></span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={ this.state.salesMenuOpen }>
              <div>
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item"> <Link className={ this.isPathActive('/user-pages/login-1') ? 'nav-link active' : 'nav-link' } to="/user-pages/login-1"><Trans>Login</Trans></Link></li>
                  <li className="nav-item"> <Link className={ this.isPathActive('/user-pages/register-1') ? 'nav-link active' : 'nav-link' } to="/user-pages/register-1"><Trans>Register</Trans></Link></li>
                </ul>
              </div>
            </Collapse>
          </li>
          <li className={ this.isPathActive('/customer-ledger') ? 'nav-item menu-items active' : 'nav-item menu-items' }>
            <div className={ this.state.customerLedgerMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('customerLedgerMenuOpen') } data-toggle="collapse">
              <span className="menu-icon">
                <i className="mdi mdi-security"></i>
              </span>
              <span className="menu-title"><Trans>Customer Ledger</Trans></span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={ this.state.customerLedgerMenuOpen }>
              <div>
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item"> <Link className={ this.isPathActive('/user-pages/login-1') ? 'nav-link active' : 'nav-link' } to="/user-pages/login-1"><Trans>Login</Trans></Link></li>
                  <li className="nav-item"> <Link className={ this.isPathActive('/user-pages/register-1') ? 'nav-link active' : 'nav-link' } to="/user-pages/register-1"><Trans>Register</Trans></Link></li>
                </ul>
              </div>
            </Collapse>
          </li>
          <li className={ this.isPathActive('/configuration') ? 'nav-item menu-items active' : 'nav-item menu-items' }>
            <div className={ this.state.configurationMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('configurationMenuOpen') } data-toggle="collapse">
              <span className="menu-icon">
                <i className="mdi mdi-security"></i>
              </span>
              <span className="menu-title"><Trans>Configuration</Trans></span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={ this.state.configurationMenuOpen }>
              <div>
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item"> <Link className={ this.isPathActive('/user-pages/login-1') ? 'nav-link active' : 'nav-link' } to="/user-pages/login-1"><Trans>Login</Trans></Link></li>
                  <li className="nav-item"> <Link className={ this.isPathActive('/user-pages/register-1') ? 'nav-link active' : 'nav-link' } to="/user-pages/register-1"><Trans>Register</Trans></Link></li>
                </ul>
              </div>
            </Collapse>
          </li> 
          {/* <li className="nav-item nav-category">
            <span className="nav-link"><Trans>more</Trans></span>
          </li>
          <li className={ this.isPathActive('/error-pages') ? 'nav-item menu-items active' : 'nav-item menu-items' }>
            <div className={ this.state.errorPagesMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('errorPagesMenuOpen') } data-toggle="collapse">
              <span className="menu-icon">
                <i className="mdi mdi-lock"></i>
              </span>
              <span className="menu-title"><Trans>Error Pages</Trans></span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={ this.state.errorPagesMenuOpen }>
              <div>
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item"> <Link className={ this.isPathActive('/error-pages/error-404') ? 'nav-link active' : 'nav-link' } to="/error-pages/error-404">404</Link></li>
                  <li className="nav-item"> <Link className={ this.isPathActive('/error-pages/error-500') ? 'nav-link active' : 'nav-link' } to="/error-pages/error-500">500</Link></li>
                </ul>
              </div>
            </Collapse>
          </li>  */}
          {/* <li className="nav-item menu-items">
            <a className="nav-link" href="http://bootstrapdash.com/demo/corona-react-free/documentation/documentation.html" rel="noopener noreferrer" target="_blank">
              <span className="menu-icon">
                <i className="mdi mdi-file-document-box"></i>
              </span>
              <span className="menu-title"><Trans>Documentation</Trans></span>
            </a>
          </li> */}
        </ul>
      </nav>
    );
  }

  isPathActive(path) {
    return this.props.location.pathname.startsWith(path);
  }

  componentDidMount() {
    this.onRouteChanged();
    // add class 'hover-open' to sidebar navitem while hover in sidebar-icon-only menu
    const body = document.querySelector('body');
    document.querySelectorAll('.sidebar .nav-item').forEach((el) => {
      
      el.addEventListener('mouseover', function() {
        if(body.classList.contains('sidebar-icon-only')) {
          el.classList.add('hover-open');
        }
      });
      el.addEventListener('mouseout', function() {
        if(body.classList.contains('sidebar-icon-only')) {
          el.classList.remove('hover-open');
        }
      });
    });
  }

}

export default withRouter(Sidebar);