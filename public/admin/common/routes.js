app.config(function($routeProvider, $httpProvider, $stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise("/donate");

  // Now set up the states
  $stateProvider 
    .state('login', {
      url : '/login',
      templateUrl: 'components/login/login.html',
      controller: 'LoginCtrl',
    })

    .state('register', {
      url : '/register',
      templateUrl: 'components/register/register.html',
      controller: 'RegisterCtrl',
    })

    .state('campaigns', {
      url : '/campaigns',
      templateUrl: 'components/campaigns/campaigns.html',
      controller: 'CampaignsCtrl',
    })

    .state('campaigns/create', {
      url : '/campaigns/create',
      templateUrl: 'components/campaigns/createCampaigns.html',
      controller: 'CreateCampaignsCtrl',
    })

    .state('profile', {
      url : '/profile',
      templateUrl: 'components/profile/profile.html',
      controller: 'ProfileCtrl',
    })

    .state('donate', {
      url : '/donate',
      templateUrl: 'components/donate/donate.html',
      controller: 'DonateCtrl',
    })
});