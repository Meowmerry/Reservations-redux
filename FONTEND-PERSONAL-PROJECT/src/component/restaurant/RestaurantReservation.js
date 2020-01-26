import React, { Component } from "react";
import { Row, Card, Col, Select, DatePicker, Button, Form, Input } from "antd";
import { withRouter } from "react-router";
import Axios from "../../config/axios.setup";
import { TIME_LIST, PARTY_SIZE_LIST } from "../../config/constants";
import moment from 'moment';
const { Option } = Select;

class RestaurantReservation extends Component {
  state = {
    date: null,
    dateString: null,
    times: "",
    partySizes: 0
  };

  handleReserveRestaurant = e => {
    const form = this.props.form;
    e.preventDefault();
    form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        let reservationDetail = {
          restaurantName: this.props.selectedRestaurant.name,
          restaurantID: this.props.selectedRestaurant.id,
          date: this.state.dateString,
          times: this.state.times,
          partySizes: this.state.partySizes
        };

        if (localStorage.getItem("ACCESS_TOKEN")) {
          Axios.post("/reserve", reservationDetail)
            .then(result => {
              this.props.history.push("/success");
            })
            .catch(err => {
              this.props.history.push("/failed");
            });
        } else {
          this.props.history.push("/reservation", {
            detail: reservationDetail
          });
        }
      } else {
        console.error("error error error error", err);
        console.log("Received values of form: ", values);
      }
    });
  };

  onChangeTime = value => {
    this.setState({ times: value });
    console.log(`selected ${value}`);
  };
  onChangePartySize = value => {
    this.setState({ partySizes: value });
    console.log(`selected ${value}`);
  };

  handleDateOnchange = (date, dateString) => {
    this.setState({ dateString: dateString });
    console.log(moment(new Date(this.state.date)).format('YYYY-MM-DD'))
  };

  validateName = (rule, value, callback) => {
    if (!this.props.selectedRestaurant.name) {
    }
    callback();
  };

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.selectedRestaurant.name !== this.props.selectedRestaurant.name
    ) {
      this.props.form.setFieldsValue({
        resturantName: nextProps.selectedRestaurant.name
      });
    }
  }

  render() {
    const { form } = this.props;
    return (
      <Row justify="center" >
       <Card id='card' style={{marginLeft:'5px', marginRight:'5px',marginBottom: '100px', textAlign:"center"}} >
          <Col span={24}>
            <Row >
              <h5>Make a reservation</h5>
            </Row>
            <Row  >
              <h6 style={{ color: "#1a237e" }}>
                <Form.Item label="Resturant Name">
                  {form.getFieldDecorator("resturantName", {
               rules: [
                      {
                        required: true,
                        message: "Please Select Restaurant Name"
                      },
                      {
                        validator: this.validateName
                      }
                    ]
                  })(
                    <textarea
                      disabled={true}
                      style={{
                        color: "black",
                        width: '100%',
                        backgroundColor: "snow",
                        border: "solid silver 0.5px ",
                        borderRadius: "5px ",
                        justify:"center"
                      }}
                    />
                  )}
                </Form.Item>
              </h6>
            </Row>
          </Col>
          <Row justify="center">
          <Form onSubmit={this.handleReserveRestaurant}>
            <Col span={24} >
              <Form.Item label="Date">
                {form.getFieldDecorator("date", {
                  rules: [
                    {
                      required: true,
                      message: "Please Select Date"
                    }
                  ]
                })(
                  <DatePicker 
                    onChange={this.handleDateOnchange}
                    value={this.state.date}
                    style={{
                      width: "100%",
                      border: "solid silver 0.5px ",
                      borderRadius: "5px "
                    }}
                  />
                )}
              </Form.Item>
            </Col>
            <Col span={24} >
              <Form.Item label="Time" >
                {form.getFieldDecorator("times", {
                  rules: [
                    {
                      required: true,
                      message: "Please Select Times"
                    }
                  ]
                })(
                  <Select 
                    showSearch
                    style={{
                      width: "100%",
                      border: "solid silver .5px ",
                      borderRadius: "5px "
                    }}
                    placeholder="Select times"
                    icon="clock-circle"
                    optionFilterProp="children"
                    onChange={this.onChangeTime}
                    filterOption={(input, option) =>
                      option.props.children
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                    }
                  >
                    {TIME_LIST.map(time => (
                      <Option key={time} value={time}>
                        {time}
                      </Option>
                    ))}
                  </Select>
                )}
              </Form.Item>{" "}
            </Col>

            <Col span={24}>
              <Form.Item label="Party Size">
                {form.getFieldDecorator("partySizes", {
                  rules: [
                    {
                      required: true,
                      message: "Please Select Party Size"
                    }
                  ]
                })(
                  <Select
                    showSearch
                    style={{
                      width: "100%",
                      border: "solid silver .5px ",
                      borderRadius: "5px "
                    }}
                    placeholder="Select party size"
                    optionFilterProp="children"
                    onChange={this.onChangePartySize}
                    filterOption={(input, option) =>
                      option.props.children
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                    }
                  >
                    {PARTY_SIZE_LIST.map(partySize => (
                      <Option key={partySize} value={partySize}>
                        {partySize}
                      </Option>
                    ))}
                  </Select>
                )}
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item>
                <Button
                  htmlType="submit"
                  style={{
                    backgroundColor: "#008CBA",
                    color: "white",
                    fontSize: "1rem",
                    width: "100%"
                  }}
                >
                  Reserve a Table
                </Button>
              </Form.Item>
            </Col>
          </Form>
          </Row>
        </Card>
      </Row>
    );
  }
}

const restaurantReservationForm = Form.create({
  name: "restaurantReservation"
})(RestaurantReservation);

export default withRouter(restaurantReservationForm);
