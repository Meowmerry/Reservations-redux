import React, { Component } from "react";
import Axios from "axios";
import { Row, Col, Form, Input, Button, Icon } from "antd";
import resgisterRestaurantSuccess from "../../component/restaurant/resgisterRestaurantSuccess";
import {
  successRestaurantRegisterNotification,
  failRestaurantRegisterNotification
} from "../../component/Notification/notification";

class RestaurantRegistration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDirty: false
    };
  }

  handleDirtyBlur = e => {
    const { value } = e.target;
    this.setState({ isDirty: this.state.isDirty || !!value });
  };


  submitForm = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, value) => {
      if (!err) {
        Axios.post("/restaurant", {
          name: value.name,
          email: value.email,
          restaurantName: value.restaurantName,
          phoneNumber: value.phoneNumber,
          country: value.country,
          city: value.city
        })
          .then(result => {
            console.log(result);
            this.props.history.push("/restaurantSuccess");
            window.location.reload(true);
            successRestaurantRegisterNotification();
          })
          .catch(err => {
            console.error(err);
            this.props.form.resetFields();
            failRestaurantRegisterNotification("something went wrong.");
          });
        this.props.form.resetFields();
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 20 },
        sm: { span: 12 },
        md: { span: 8 }
      }
    };
  
    return (
      <Row style={{ width: "100%", minHeight: "100vh" }}>
        <Row
          type="flex"
          justify="center"
          style={{ marginTop: "30px", marginBottom: "20px" }}
        >
          <Col
            xs={20}
            lg={12}
            style={{
              display: "flex",
              justifyItems: "center",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <h2 id="restaurantRegister">Get started with OpenUpYourTable!!</h2>

            <Col
              xs={20}
              lg={12}
              style={{
                display: "flex",
                justifyItems: "center",
                flexDirection: "column",
                alignItems: "center"
              }}
            >
              <Form
                {...formItemLayout}
                onSubmit={this.submitForm}
                style={{ maxWidth: "400px", width: "100%" }}
              >
                <Row>
                  <Form.Item label="">
                    {getFieldDecorator("name", {
                      rules: [
                        { required: true, message: "Please input your name" }
                      ]
                    })(
                      <Input
                        prefix={
                          <Icon
                            type="idcard"
                            theme="twoTone"
                            style={{ color: "rgba(0,0,0,.25)" }}
                          />
                        }
                        placeholder="Name"
                      />
                    )}
                  </Form.Item>
                </Row>
                <Row>
                  <Form.Item label="">
                    {getFieldDecorator("email", {
                      rules: [
                        { required: true, message: "Please input your email" }
                      ]
                    })(
                      <Input
                        prefix={
                          <Icon
                            type="mail"
                            theme="twoTone"
                            style={{ color: "rgba(0,0,0,.25)" }}
                          />
                        }
                        placeholder="Email"
                      />
                    )}
                  </Form.Item>
                </Row>
                <Row>
                  <Form.Item label="">
                    {getFieldDecorator("restaurantName", {
                      rules: [
                        {
                          required: true,
                          message: "Please input your restaurant name"
                        }
                      ]
                    })(
                      <Input
                        prefix={
                          <Icon
                            type="shop"
                            theme="twoTone"
                            style={{ color: "rgba(0,0,0,.25)" }}
                          />
                        }
                        placeholder="Restaurant name"
                      />
                    )}
                  </Form.Item>
                </Row>
                <Row>
                  <Form.Item label="">
                    {getFieldDecorator("phoneNumber", {
                      rules: [
                        {
                          required: true,
                          message: "Please input your phone number"
                        }
                      ]
                    })(
                      <Input
                        prefix={
                          <Icon
                          type="phone" theme="twoTone"
                            style={{ color: "rgba(0,0,0,.25)" }}
                          />
                        }
                        placeholder="Phone number"
                      />
                    )}
                  </Form.Item>
                </Row>
                <Row>
                  <Form.Item label="">
                    {getFieldDecorator("country", {
                      rules: [
                        { required: true, message: "Please input your country" }
                      ]
                    })(
                      <Input
                        prefix={
                          <Icon
                            type="home"
                            theme="twoTone"
                            style={{ color: "rgba(0,0,0,.25)" }}
                          />
                        }
                        placeholder="Country"
                      />
                    )}
                  </Form.Item>
                </Row>
                <Row>
                  <Form.Item label="">
                    {getFieldDecorator("city", {
                      rules: [
                        { required: true, message: "Please input your city" }
                      ]
                    })(
                      <Input
                        prefix={
                          <Icon
                            type="appstore"
                            theme="twoTone"
                            style={{ color: "rgba(0,0,0,.25)" }}
                          />
                        }
                        placeholder="City"
                      />
                    )}
                  </Form.Item>
                </Row>
                <Button type="primary"
                    htmlType="submit"
                    className="login-form-button"
                    style={{ width: "100%" }}>
                  Register
                </Button>
              </Form>
            </Col>
          </Col>
        </Row>
      </Row>
    );
  }
}
export default Form.create()(RestaurantRegistration);
