import React from "react";
import { Row, Form, Input, Col, Button, Icon} from "antd";
import Axios from "../../config/axios.setup";
import { successSignUpNotification, failSignUpNotification } from '../../component/Notification/notification'

class Signup extends React.Component {
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
            successSignUpNotification()
          })
          .catch(err => {
            console.error(err);
            this.props.form.resetFields()
            failSignUpNotification("something went wrong.")
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
      <Row
        type="flex"
        justify="center"
        align="middle"
        style={{ height: "100vh" }}
        align="middle"
      >
        <Col md={8} sm={12} xs={24} style={{ justifyContent: "center"}}>
          <img
            src="images/logo1.png"
            alt="Logo "
            style={{ width: "20%", height:'20%', borderRadius: 150/2, }}
           
          ></img>
          <h3
            style={{
              justifyItems: "center",
              marginBottom: "40px",
              color: "#7a0141"
            }}
          >
            Welcome to OpentUpYourTable!
          </h3>
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
                      <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
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
                      <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
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
                              message: "Please input your Username"
                            }
                          ]
                        })(
                          <Input
                            placeholder="Your name*"
                          />
                        )}
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
    );
  }
}

export default Form.create()(Signup);
