import React, { Component } from 'react'
import { Row, Col, Card } from 'antd'
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
        <Card id='card' style={{marginLeft:'5px', marginRight:'5px'}}>
        {this.renderRestaurants()}
      </Card></Row>
    )
  }
}