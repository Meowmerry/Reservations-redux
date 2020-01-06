import React, { Component } from "react";
import { Row, Col,Icon } from "antd";

export default class FooterPage extends Component {
  render() {
    return (
      <Row style={{ color: " White" }} type='flex' justify="center">
        <Col xs="12"  lg="24" style={{ fontSize: "15px" , marginLeft: "20px", marginRight: "20px"}}>
          DISCOVER
          <Col style={{ fontSize: "12px", color: "#aaadb0" }}>
            <Row>Dining Rewards</Row>
            <Row>Private Dining</Row>
            <Row>Top 100 Restaurants</Row>
            <Row>Reserve </Row>
            <Row>Cuisines </Row>
          </Col>
        </Col>

        <Col  xs="12"  lg="24" style={{ fontSize: "15px" ,marginLeft: "20px", marginRight: "20px"}}>
          OPENTABLE
          <Col style={{ fontSize: "12px", color: "#aaadb0" }}>
            <Row>About us</Row>
            <Row>Blog</Row>
            <Row>Careers</Row>
          </Col>
        </Col>
        <Col  xs="12"  lg="24" style={{ fontSize: "15px" ,marginLeft: "20px", marginRight: "20px"}}>
          MORE
          <Col style={{ fontSize: "12px", color: "#aaadb0" }}>
            <Row>Affiliate</Row>
            <Row>Program</Row>
            <Row>Contact Us</Row>
          </Col>
        </Col>

        <Col  xs="12"  lg="24" style={{ fontSize: "15px" , marginLeft: "20px", marginRight: "20px"}}>
          OUR SITES
          <Col style={{ fontSize: "12px", color: "#aaadb0" }}>
            <Row>OpenTable.jp</Row>
            <Row>OpenTable.es</Row>
            <Row>OpenTable.ca</Row>
            <Row>OpenTable.uy</Row>
            <Row>OpenTable.th</Row>
          </Col>
        </Col>
        <Col  xs="12" lg="24" style={{ fontSize: "15px" , marginLeft: "20px", marginRight: "20px"}}>
          <Row>
          <Row>JOIN US ON</Row>
          <Col style={{ fontSize: "25px", color: "#aaadb0" }}>
            <Col span={6}><Icon type="twitter" /> </Col>
            <Col span={6}><Icon type="instagram" theme="filled"/></Col>
            <Col span={6}><Icon type="facebook" theme="filled" /></Col>
            <Col span={6}><Icon type="github" /></Col></Col>
          </Row>
        </Col>
      </Row>
    );
  }
}
