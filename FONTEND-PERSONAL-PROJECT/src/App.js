import React from "react";
import "./App.css";
import { Switch} from "react-router-dom";
import { Layout } from "antd";
import { connect } from "react-redux";
import PrivateRoute from './component/routes/PrivateRoute';
import MenuBar from "./component/menubar/MenuBar";
import FooterPage from "./pages/FooterPage";
import {TOKEN} from "./config/constants"
import JwtDecode from "jwt-decode";

const { Footer, Content, Header } = Layout;

class App extends React.Component {
  render() {

    // const role = "owner"
    // console.log(role);

    let role = "guest"
    const token = localStorage.getItem(TOKEN);
    // console.log(token)
    if (token) {
      let userInfo = JwtDecode(token)
      role = userInfo.role
    }

    return (
      <Layout style={{ backgroundColor: "white", minHeight: "100vh" }}>
        <Header id="header">
          <MenuBar />
        </Header>
        <Content style={{ backgroundColor: "#F7F3F6", minHeight: "100vh" }}>
          <Switch>
            <PrivateRoute  role={role} />
          </Switch>
        </Content>
        <Footer style={{ backgroundColor: "#3b3a3e" }}>
          <FooterPage />
        </Footer>
      </Layout>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps, null)(App);
