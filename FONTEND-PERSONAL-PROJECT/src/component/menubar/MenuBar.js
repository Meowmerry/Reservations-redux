import React, { Component } from "react";
import { Row, Col } from "antd";
import "./MenuBar.css";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../redux/actions/actions";
import { Menu, Icon } from "antd";

class MenuBar extends Component {
  handleLogout = () => {
    this.props.logout();
    this.props.history.push("/login");
    window.location.reload(true);
  };

  state = {
    current: "mail"
  };

  handleClick = e => {
    console.log("click ", e);
    this.setState({
      current: e.key
    });
  };

  render() {
    return (
      <Row>
        <Col xs={24} lg={12}>
          <Row style={{ display: "flex", justifyItems: "center" }}>
            <Col xs={12} lg={3}>
              <Link to="/" title="logo">
                <img
                  src="https://willrice.rice.edu/resources/icons/space-reservation.svg"
                  alt="logo"
                  style={{ width: "80px", height: "80px" }}
                />
              </Link>
            </Col>

            <Col xs={12} lg={6} style={{ marginTop: "20px" }}>
              <Link to="/" title="brand">
                <h1 id="logo-brand">OpenUpYourTable</h1>
              </Link>
            </Col>
          </Row>
        </Col>
        <Col xs={24} lg={12}>
          <Row type="flex" justify="end">
            <Col xs={0} lg={14}>
              <Menu
                onClick={this.handleClick}
                selectedKeys={[this.state.current]}
                mode="horizontal"
              >
                {this.props.user.role === "guest" && (
                  <Menu.Item key="signup">
                    <Link to="/signup" title="signup">
                      <Icon
                        type="user-add"
                        style={{ fontSize: 20, color: "#040000" }}
                      />
                      SignUp
                    </Link>
                  </Menu.Item>
                )}
                {this.props.user.role === "guest" && (
                  <Menu.Item key="login">
                    <Link to="/login" title="login">
                      <Icon
                        type="user"
                        style={{ fontSize: 20, color: "#040000" }}
                      />
                      LogIn
                    </Link>
                  </Menu.Item>
                )}
                {this.props.user.role !== "guest" && (
                  <Menu.Item key="logout">
                    <Link onClick={() => this.handleLogout()} to="#">
                      <Icon
                        type="logout"
                        style={{ fontSize: 20, color: "#040000" }}
                      />
                      LogOut
                    </Link>
                  </Menu.Item>
                )}
                {this.props.user.role === "guest" && (
                  <Menu.Item key="restaurant">
                    <Link to="/resgister" title="register">
                      <Icon
                        type="team"
                        style={{ fontSize: 20, color: "#040000" }}
                      />
                      Restaurant
                    </Link>
                  </Menu.Item>
                )}
              </Menu>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

const mapDispatchToProps = {
  logout: logout
};

const mapStateToProps = state => ({
  user: state.user
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(MenuBar)
);
