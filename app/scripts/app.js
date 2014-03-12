angular.
  module('taptap', ['ui.router']).
  config(function ($stateProvider, $urlRouterProvider) {
    'use strict';

    $stateProvider.
      state('home', {
        templateUrl: 'views/home.html',
        url: '/'
      });

    $urlRouterProvider.otherwise('/');
  });
