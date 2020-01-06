import { notification, Icon } from 'antd'
import React from 'react'

const successLoginNotification = (message) => {
  notification.open({
    message: 'Login successful',
    description:'Enjoy with open your table',
    icon: <Icon type="smile" style={{ color: '#54b600' }} />,
  });
};


const failLoginNotification = (message) => {
  notification.open({
    message: 'Login fail',
    description: "Plese check your username and password",
    icon: <Icon type="frown"  style={{ color: '#dc4d4d' }} />,
  });
};

const successRestaurantRegisterNotification = (message) => {
  notification.open({
    message: 'Register successful',
    description:'Thank you for joing with our Site, enjoy your...',
    icon: <Icon type="smile" style={{ color: '#54b600' }} />,
  });
};


const failRestaurantRegisterNotification = (message) => {
  notification.open({
    message: 'Register fail',
    description: "Plese your detail again",
    icon: <Icon type="frown"  style={{ color: '#dc4d4d' }} />,
  });
};

export { failLoginNotification, successLoginNotification,successRestaurantRegisterNotification, failRestaurantRegisterNotification}