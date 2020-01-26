import React from 'react'
import { Row, Col, Form,  Input, Button } from 'antd';
import { connect } from 'react-redux'
import { login } from '../../redux/actions/actions'
import jwtDecode from 'jwt-decode'
import Axios from '../../config/axios.setup'
import { Link } from 'react-router-dom';
import { failLoginNotification, successLoginNotification } from '../../component/Notification/notification'


class Login extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        Axios.post('/loginUser', {
          username: values.username,
          password: values.password
        })
          .then(result => {
            console.log(result)
            const user = jwtDecode(result.data.token)
            this.props.login(user, result.data.token)
            this.props.history.push('/restaurant')
            window.location.reload(true);
            successLoginNotification()
          })
          .catch(err => {
            console.error(err);           
            this.props.form.resetFields()
            failLoginNotification("something went wrong.")
          })
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>  
        <Row type="flex" justify="center" align="middle" style={{ height: '100vh' }}>
          <Col md={8} sm={12} xs={24}>
          <Row style={{ marginBottom: '20px' }}><h3>Please sign in!</h3></Row>
            <img src='images/logo1.png' alt="Logo " style={{ width: "100%", height:'100%', borderRadius: 150/2, paddingLeft: '24px', paddingRight: '24px', maxWidth: '400px' }}></img>
          </Col>
          <Col md={8} sm={12} xs={24}>
            <Form onSubmit={this.handleSubmit} className="login-form" style={{ maxWidth: '400px', width: '100%' }}>
              <Form.Item label="Username">
                {getFieldDecorator('username', {
                  rules: [
                    {
                      required: true,
                      message: 'Please input your nickname!'
                    }
                  ],
                })(<Input />)}
              </Form.Item>
              <Form.Item label="Password">
                {getFieldDecorator('password', {
                  rules: [
                    {
                      required: true,
                      message: 'Please input your password!',
                    }
                  ],
                })(<Input.Password />)}
              </Form.Item>
              <Row>
                <Col span={12}>
                  <Form.Item>
                    <Link to='/signup'>
                      <Button block type="link" >
                        Sign Up
                      </Button>
                    </Link>
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item>
                    <Button block type="primary" htmlType="submit" className="login-form-button">
                      Log in
                    </Button>
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </Col>  
        </Row >
      </div >
    )
  }
}

const mapDispatchToProps = {
  login: login
}

const LoginForm = Form.create({ name: 'login' })(Login);
export default connect(null, mapDispatchToProps)(LoginForm)