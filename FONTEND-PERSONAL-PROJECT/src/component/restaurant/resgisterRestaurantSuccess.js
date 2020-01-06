import React, { Component } from 'react'
import { Row, Col, Card , Icon} from 'antd'

export default class ResgisterRestaurantSuccess extends Component {
    
    render() {
      return (
       <Row type="flex" justify="center" align="middle" >   
         <Card style={{ width: "50%",height: 300,marginTop:100, backgroundColor:'#e5b4b3'}} type="flex" justify="center" align="middle">
           <Col >
           <Row  >
           <Icon type="like" theme="twoTone"  style={{fontSize:40}}/>
            <h2 style={{ justify:"center" ,marginTop:80}}>YOU ARE DONE!! </h2>
            <h4>Thank you for join us, Enjoy your company!!</h4>
         </Row>
          </Col></Card>
          
       </Row>
      );
    }
  }