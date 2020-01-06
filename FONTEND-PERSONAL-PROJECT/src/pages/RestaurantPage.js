import React, { Component } from "react";
import { Row, Col } from "antd";
import RestaurantsCart from "../component/restaurant/RestaurantsCart";

export default class RestaurantPage extends Component {

  render() {
    return (
      <Row>
          <Col md="13" sm="9" xs="5">
            <RestaurantsCart />
          </Col>

      </Row>
    );
  }
}
