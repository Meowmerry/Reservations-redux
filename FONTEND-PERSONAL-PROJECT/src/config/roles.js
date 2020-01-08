const components = {
    login: {
      component: 'Login',
      url: '/login',
    },
    signup: {
      component: 'Signup',
      url: '/signup',
    },
    restaurantRegistration: {
      component: 'RestaurantRegistration',
      url: '/resgister',
    },
    home: {
      component: 'Home',
      url:'/home'
    },
    restaurant: {
      component: 'RestaurantPage',
      url:'/restaurant'
    },
    reservation: {
      component: 'BookRestaurant',
      url:'/reservation'
    },
    success :{
      component: 'SuccessPage',
      url:'/success'
    },
    restaurantSuccess: {
      component: 'ResgisterRestaurantSuccess',
      url:'/restaurantSuccess'
    },
    failed: {
      component: 'FailedPage',
      url:'/failed'
    },

  };
  
  export default {
    //role name as a key.
    owner: {
      routes: [...Object.values(components)],
      redirect:'/home'
    },
    user: {
      routes: [
        components.restaurantRegistration,
        components.success,
        components.home,
        components.failed,
        components.restaurant,
        components.reservation
      ],
      redirect:'/restaurant'
    },
    guest: {
      routes: [
        components.login,
        components.signup,
        components.home,
        components.restaurant
      ],
      redirect:'/home'
    }
  }