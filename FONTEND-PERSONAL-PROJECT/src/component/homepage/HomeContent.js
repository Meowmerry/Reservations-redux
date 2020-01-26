import React, { Component } from "react";
import { Icon } from "antd";
import "./HomeContent.css";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Container,
  Row,
  Col,
  CardImgOverlay
} from "reactstrap";
import { topCuisines } from "../../TempStates/TopCuisines";
import { populars } from "../../TempStates/Populars";

export default class ContentHome extends Component {
  state = {
    topCuisines: [],
    populars: []
  };

  componentDidMount = async () => {
    this.setState(state => {
      return { ...state, topCuisines, populars };
    });
  };

  render() {
  
    return (
      // Start Container
      <Container style={{ marginTop: "30px", marginBottom: "50px" }}>
        <Row md="12">
          <Row>
            {" "}
            <Col xs="12">
              <h4>
                Top Restaurant near YOU
                <Icon
                  type="pushpin"
                  theme="filled"
                  style={{ fontSize: "30px", color: "#08c" }}
                />
              </h4>
            </Col>
          </Row>
          <Row style={{ color: "black" }}>
            {this.state.topCuisines.map(cuisine => (
              <Col xs="12" sm="6" lg="3">
                <a className="aText" href="/restaurant">
                  <Card key={cuisine.id} style={{ marginTop: "20px" }}>
                    <CardImg
                      width="100%"
                      src={cuisine.img}
                      alt="Card image cap"
                    />
                    <CardImgOverlay>
                      <CardTitle>{cuisine.title}</CardTitle>
                      <CardText>{cuisine.text}</CardText>
                    </CardImgOverlay>
                  </Card>
                </a>
              </Col>
            ))}
          </Row>
        </Row>

        <Row style={{ marginTop: "50px", marginBottom: "0px" }}>
          <Col>
            <h4>
              Popular restaurants
              <Icon
                type="fire"
                theme="filled"
                style={{ fontSize: "24px", color: "red" }}
              />
            </h4>
          </Col>
        </Row>
        <Row span={12}>
          {this.state.populars.map(popular => (
            <Col xs="12" sm="6" lg="3">
              <a href="/restaurant">
                <Card key={popular.id} style={{ marginTop: "20px" }}>
                  <CardImg top width="40%" alt="peacock" src={popular.image} />
                  <CardBody>
                    <CardTitle id="title">{popular.title}</CardTitle>
                    <CardSubtitle id="subtitle">
                      {popular.subtitle}
                    </CardSubtitle>
                    <CardText>{popular.detail}</CardText>
                    <Button id="button">Visit</Button>{" "}
                  </CardBody>
                </Card>{" "}
              </a>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}


