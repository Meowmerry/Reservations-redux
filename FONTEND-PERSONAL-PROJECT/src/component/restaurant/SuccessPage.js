import React, { Component } from 'react'
import { Row, Col, Card , Icon} from 'antd'

export default class SuccessPage extends Component {
    
    render() {
      return (
       <Row type="flex" justify="center" align="middle" >   
         <Card style={{ width: "50%",height: 500,marginTop:"5%", backgroundColor:'#e5b4b3'}} type="flex" justify="center" align="middle">
  
           <Col  xs={24} lg={24}>
           <Icon type="like" theme="twoTone"  style={{fontSize:40}}/>
            <h2 style={{ justify:"center" ,marginTop:80}}>YOU ARE DONE!! </h2>
            
            <h4>WE ARE LOOKING TO SEE YOU!!</h4>
   
          </Col></Card>
          
       </Row>
      );
    }
  }