import React, { Component } from 'react'
import { Menu, Row, Col, Card } from 'antd'

export default class RestaurantCategories extends Component {
  renderCategories() {
    return this.props.categories.map(category =>
      <Menu.Item key={category.id}>
        <span>{category.name}</span>
      </Menu.Item>)
  }

  render() {
    const cateId = this.props.selectedId
    return (
      <Row>
        <Col>
        <Menu
          selectedKeys={[(cateId === null) ? null : cateId.toString()]}
          onClick={(e) => this.props.handleCategoriesIdFunc(e.key)}
        >
       {this.renderCategories()}
        </Menu>
        </Col>
     </Row>
    )
  }
}
