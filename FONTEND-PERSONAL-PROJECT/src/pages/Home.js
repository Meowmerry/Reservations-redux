import React, { Component } from "react";
import { Row } from "antd";
import "antd/dist/antd.css";
import DataPicker from "../component/homepage/DataPicker";
import HomeContent from "../component/homepage/HomeContent";

export default class Home extends Component {
  render() {
    return (
      <Row xs="6" md="6" lg='3'>   
     <DataPicker/>
     <HomeContent/>
      </Row>
    );
  }
}
