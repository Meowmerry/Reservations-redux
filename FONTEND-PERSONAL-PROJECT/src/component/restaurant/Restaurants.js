import React, { Component } from 'react'
import { Row, Col } from 'antd'
import Restaurant from './Restaurant'

export default class Restaurants extends Component {
  renderRestaurants() {
    return this.props.restaurants.map(restaurant =>
      <Col xs={24} lg={12}>
        <Restaurant restaurantDetail={restaurant}
          handleClickAddToReserve={this.props.handleClickAddToReserve}
        />
      </Col>
    )
  }
  render() {
    return (
      <Row>
        {this.renderRestaurants()}
      </Row>
    )
  }
}