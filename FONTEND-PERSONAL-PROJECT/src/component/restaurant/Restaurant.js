import React, { Component } from "react";
import { Card, Button, Row, Col } from "antd";

export default class Restaurant extends Component {
  render() {
    const restaurant = this.props.restaurantDetail;
    return (
      <Row>
        <Col style={{borderRadius:'10px'}} >
          <Card hoverable cover={<img src={restaurant.image} alt="img" />}>
            <h4 style={{ height: "120px" }}>{restaurant.name}</h4>
            <p style={{ height: "250px", overflowY: "scroll" }}>
              {restaurant.description}
            </p>
            <Button
              style={{
                backgroundColor: "#008CBA",
                color: "white",
                fontSize: "1rem"
              }}
              onClick={() => this.props.handleClickAddToReserve(restaurant)}
            >
              Reserve a Table
            </Button>
          </Card>{" "}
        </Col>{" "}
      </Row>
    );
  }
}
