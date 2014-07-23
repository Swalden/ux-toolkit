myApp.controller('HomeCtrl',['$state','$scope', function ($state, $scope){
  "use strict";

  $scope.transition = function (pageid) {
      $state.go(pageid);
  };

  $scope.labels = {};
  $scope.tools = [
    {title: 'Design Studio', description: 'A collborative design tool that is great for focusing on a specific problem', image: 'url', type: 'method', id: '1'},
    {title: 'Design 1', description: 'A collborative design tool that is great for focusing on a specific problem', image: 'url', type: 'uxtool', id: '2'},
    {title: 'Design 2', description: 'A collborative design tool that is great for focusing on a specific problem', image: 'url', type: 'pattern', id: '3'},
    {title: 'Design Studio 2', description: 'A collborative design tool that is great for focusing on a specific problem', image: 'url', type: 'method', id: '4'},
    {title: 'Design 3', description: 'A collborative design tool that is great for focusing on a specific problem', image: 'url', type: 'uxtool', id: '5'},
    {title: 'Design 4', description: 'A collborative design tool that is great for focusing on a specific problem', image: 'url', type: 'pattern', id: '6'}
  ];

  var querySelector = document.querySelector.bind(document);

  var navdrawerContainer = querySelector('.navdrawer-container');
  var body = document.body;
  var appbarElement = querySelector('.app-bar');
  var menuBtn = querySelector('.menu');
  var main = querySelector('main');

  function closeMenu() {
    body.classList.remove('open');
    appbarElement.classList.remove('open');
    navdrawerContainer.classList.remove('open');
  }

  function toggleMenu() {
    body.classList.toggle('open');
    appbarElement.classList.toggle('open');
    navdrawerContainer.classList.toggle('open');
  }

  main.addEventListener('click', closeMenu);
  menuBtn.addEventListener('click', toggleMenu);
  navdrawerContainer.addEventListener('click', function (event) {
    if (event.target.nodeName === 'A' || event.target.nodeName === 'LI') {
      closeMenu();
    }
  });

 

}]);