var app = angular.module("demoApp",['ui.router','home_ctrl']);
app.config(function($stateProvider,$urlRouterProvider){
    "ngInject";
    // $stateProvider.when("");
    $urlRouterProvider.when("","home");
    $urlRouterProvider.when("/","home");
    var getUrl = function(urlName){
        return "/html/"+urlName;
    }

    $stateProvider
        .state("home", {    // 首页
            url: "/home",
            controller: "homeCtrl as home",
            templateUrl: getUrl("home.html")
        })
})

// 控制head的title
app.controller("appCtrl",function($scope){
    "ngInject";
    $scope.html = {
        "title": "首页",
        "isLockScroll": false,
    };
})
