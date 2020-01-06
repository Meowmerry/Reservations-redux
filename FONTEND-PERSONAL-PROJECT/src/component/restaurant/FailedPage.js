import React, { Component } from 'react'
import { Row, Col, Card , Icon} from 'antd'

export default class FailedPage extends Component { 
    render() {
      return (
       <Row type="flex" justify="center" align="middle" >   
         <Card style={{ width: "50%",height: 500,marginTop:"5%",}} type="flex" justifyItems="center" align="middle">
         <Col  xs={24} lg={24}>
           <Icon type="frown"   style={{fontSize:40, color:'red',justifyItems:'center'}}/>
            <h2 style={{ justify:"center" ,marginTop:80}}>Opp!! Something went wrong!! </h2>
            
            <h4>Please try again!!</h4>
    </Col>
          </Card>
          
       </Row>
      );
    }
  }