import React, { Component } from "react";
import { Row, Col, Card, Form, Input, Button, Icon } from "antd";
import Axios from "../config/axios.setup";
import SuccessPage from "../component/restaurant/SuccessPage";
import { failLoginNotification, successLoginNotification } from '../component/Notification/notification'


class BookRestaurant extends Component {
  state = {
    isDirty: false
  };

  handleDirtyBlur = e => {
    const { value } = e.target;
    this.setState({ isDirty: this.state.isDirty || !!value });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue("password")) {
      callback("Password and Confirm password are not match");
    } else {
      callback();
    }
  };

  compareToSecondPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && this.state.isDirty) {
      form.validateFields(["confirm"], { force: true });
    }
    callback();
  };

  submitForm = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, value) => {
      if (!err) {
        Axios.post("/registerUser", {
          username: value.username,
          password: value.password,
          name: value.name
        })
          .then(result => {
            console.log(result);
            this.props.history.push('/login')
            window.location.reload(true);
            successLoginNotification()
          })
          .catch(err => {
            console.error(err);
            this.props.form.resetFields()
            failLoginNotification("something went wrong.")
          });
        this.props.form.resetFields();
      }
    });
  };

  render() {
    console.log(this.props.location.state.detail);
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 12 },
        md: { span: 8 }
      }
    };
    if (localStorage.getItem("ACCESS_TOKEN")) {
      return <SuccessPage />;
    }
    return (
      <Row
        gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 20]}
        justify="center"
        align="middle"
      >
        <Col className="gutter-row" span={24}>
          <Row type="flex" justify="center">
            <Card
              className="gutter-box"
              style={{
                width: "50%",
                height: "50%",
                marginTop: " 20px"
              }}
            >
              <Row gutter={(0, 48)} type="flex" justify="center">
                <Col xs={24} sm={12} md={12}>
                  <h3 style={{color:'#940303'}}>You're almost done!</h3>
                </Col>{" "}
              </Row>
              <Row gutter={(0, 48)} type="flex" justify="center">
                <Col xs={12} sm={12} md={12}>
                  <h4>ID :
                    {this.props.location.state.detail.restaurantId || null} </h4>
                   <h4> Restaurant Name :
                    {this.props.location.state.detail.restaurantName || null}{" "}
                    
                  </h4>
                </Col>
              </Row>
              <Row gutter={(8, 48)} type="flex" justify="center">
                <Col span={8}><Icon type="calendar" theme="twoTone" style={{fontSize:30}} />
                  <p>DATE :{this.props.location.state.detail.date || null}</p>
                </Col>
                <Col span={8}><Icon type="dashboard" theme="twoTone" style={{fontSize:30}} />
                  <p>TIME :{this.props.location.state.detail.times || null}</p>
                </Col>
                <Col span={8}><Icon type="usergroup-add" style={{fontSize:30, color:'#c9093b'}} />
                  <p>
                    Party Size :
                    {this.props.location.state.detail.partySizes || null}
                  </p>
                </Col>
              </Row>

              <Row gutter={(8, 48)} type="flex" justify="center">
                <Col md={12} sm={12} xs={24}>
                  <h5
                    style={{
                      justifyItems: "center",
                      color: "#7a0141"
                    }}
                  >
                    Please Sign Up
                  </h5>
                  <Form
                    {...formItemLayout}
                    onSubmit={this.submitForm}
                    className="login-form"
                    style={{ maxWidth: "400px", width: "100%" }}
                  >
                    <Row>
                      <Form.Item label="">
                        {getFieldDecorator("username", {
                          rules: [
                            {
                              required: true,
                              message: "Please input your Username"
                            }
                          ]
                        })(
                          <Input
                            prefix={
                              <Icon
                                type="user"
                                style={{ color: "rgba(0,0,0,.25)" }}
                              />
                            }
                            placeholder="Username"
                          />
                        )}
                      </Form.Item>
                      <Form.Item label="">
                        {getFieldDecorator("password", {
                          rules: [
                            {
                              required: true,
                              message: "Please input your Password "
                            },
                            {
                              validator: this.compareToSecondPassword
                            }
                          ]
                        })(
                          <Input
                            prefix={
                              <Icon
                                type="lock"
                                style={{ color: "rgba(0,0,0,.25)" }}
                              />
                            }
                            type="password"
                            placeholder="Password"
                          />
                        )}
                      </Form.Item>
                      <Form.Item label="">
                        {getFieldDecorator("confirm", {
                          rules: [
                            {
                              required: true,
                              message: "Please Confirm your password"
                            },
                            {
                              validator: this.compareToFirstPassword
                            }
                          ]
                        })(
                          <Input.Password
                            onBlur={this.handleDirtyBlur}
                            placeholder="Confirm password*"
                          />
                        )}
                      </Form.Item>
                      <Form.Item label="">
                        {getFieldDecorator("name", {
                          rules: [
                            {
                              required: true,
                              message: "Please input your name"
                            }
                          ]
                        })(<Input placeholder="Your name*" />)}
                      </Form.Item>

                      
                    </Row>

                    <Row type="flex" justify="center">
                      <Col md={8} sm={12} xs={24}>
                        <Form.Item>
                          <Button
                            type="primary"
                            htmlType="submit"
                            className="login-form-button"
                            style={{ width: "100%" }}
                          >
                            Sign Up
                          </Button>
                        </Form.Item>
                      </Col>
                    </Row>
                  </Form>
                </Col>
              </Row>
            </Card>
          </Row>
        </Col>
      </Row>
    );
  }
}
export default Form.create()(BookRestaurant);
