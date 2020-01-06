import React, { Component } from "react";
import RestaurantCategories from "./RestaurantCategories";
import Restaurants from "./Restaurants";
import RestaurantReservation from "./RestaurantReservation";
import "./RestaurantsCart.css";
import { Row, Col, Card } from "antd";
import Axios from "../../config/axios.setup";

export class RestaurantsCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoriesList: [],
      restaurantsList: [],
      reserve: [],
      selectedCategoriesId: null,
      selectedRestaurant: {
        id: null,
        name: ""
      }
    };

    this.handleCategoriesId = this.handleCategoriesId.bind(this);
    this.handleClickAddToReserve = this.handleClickAddToReserve.bind(this);
  }

  async componentDidMount() {
    const result1 = await Axios.get("/restaurant-category");
    const result2 = await Axios.get("/restaurant-lists");
    this.setState({
      categoriesList: result1.data,
      restaurantsList: result2.data,
      selectedCategoriesId: result1.data[0].id
    });
  }

  filterRestaurants() {
    const id = this.state.selectedCategoriesId;
    if (id == null) {
      return [];
    } else {
      return this.state.restaurantsList.filter(
        restaurant => restaurant.restaurant_category_id == id
      );
    }
  }

  handleCategoriesId(id) {
    this.setState({
      selectedCategoriesId: id
    });
  }

  handleClickAddToReserve(restaurant) {
    this.setState({
      selectedRestaurant: {
        id: restaurant.id,
        name: restaurant.name
      }
    });
  }

  render() {
    return (
      <Row
        gutter={[12, 0]}
        type="flex"
        justify="center"
        style={{ margin: "20px" }}
      >
        <Col xs={24} lg={5}>
          <Card id='card' >
            <RestaurantCategories
              categories={this.state.categoriesList}
              handleCategoriesIdFunc={this.handleCategoriesId}
              selectedId={this.state.selectedCategoriesId}
            />
          </Card>
        </Col>

        <Col xs={24} lg={12}>
          <Card id='card'>
            <Restaurants style={{marginLeft:'10px', marginRight:'10px'}}
              restaurants={this.filterRestaurants()}
              handleClickAddToReserve={this.handleClickAddToReserve}
            />
          </Card>
        </Col>

        <Col xs={24} lg={5}>
          <Card id='card'>
          <RestaurantReservation
            reserve={this.state.reserve}
            selectedRestaurant={this.state.selectedRestaurant}       
          /></Card>
        </Col>
      </Row>
    );
  }
}

export default RestaurantsCart;
