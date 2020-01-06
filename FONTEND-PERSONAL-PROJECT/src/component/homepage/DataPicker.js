import React, { Component } from "react";
import { Row, Col, } from "antd";


export default class DataPicker extends Component {
  state = {
    date: null,
    imageIndex: 0,
    intervalId: null
  };

  componentDidMount() {
    let intervalId = setInterval(() => {
      this.setState({
        imageIndex: (this.state.imageIndex + 1) % 6,
        intervalId: intervalId
      });
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }


  render() {
    const imageList = [
      "images/background-01.jpg",
      "images/background-02.jpg",
      "images/background-03.jpg",
      "images/background-04.jpg",
      "images/background-05.jpg",
      "images/background-06.jpg",
      "images/background-07.jpg"
    ];

    console.log(imageList[this.state.imageIndex]);
    return (
      <Row >
        <div
          className="datapicker"
          style={{
            backgroundImage: `url(${imageList[this.state.imageIndex]})`,
            width: "100%",
            height: "500px"
          }}
        >
          <Row type="flex" justify="center" align="middle" style={{fontSize: 40, color: '#e22b5a' }}>
          <Row style={{marginTop: '3%'}} 
          
          ><Col xs={24} lg={24}>Find your table for any occasion</Col></Row>
          </Row>
        </div>
      </Row>
    );
  }
}
