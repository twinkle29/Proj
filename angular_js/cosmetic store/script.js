var myApp=angular.module("myapp",[]);
myApp.factory("Frag",function(){
	var Frag={};
Frag.brand=[{name:"cyan",price:"Rs.1000",quantity:6},{name:"xyz",price:"Rs.1000",quantity:4},{name:"magenta",price:"Rs.1000",quantity:5},{name:"black",price:"Rs.1000",quantity:3},{name:"green",price:"Rs.1000",quantity:9},{name:"red",price:"Rs.1000",quantity:2},{name:"purple",price:"Rs.1000",quantity:1},{name:"yellow",price:"Rs.1000",quantity:11},{name:"neon",price:"Rs.1000",quantity:4}];
	return Frag;
});
function FragCtrl($scope,Frag)
{
	$scope.frag=Frag;
	
	$scope.viewFrag=function(val){
    alert("inside viewfrag!");
		$scope.newFrag=val;
		
	};
}
		
myApp.factory("Shampoo",function(){
	var Shampoo={};
Shampoo.brand=[{name:"rose",price:"Rs.1000"},{name:"tulip",price:"Rs.1000"},{name:"lily",price:"Rs.1000"},{name:"Sunflower",price:"Rs.1000"},{name:"Blue bell",price:"Rs.1000"},{name:"Buttercup",price:"Rs.1000"},{name:"Daisy",price:"Rs.1000"},{name:"Daffodil",price:"Rs.1000"},{name:"Primrose",price:"Rs.1000"}];
	return Shampoo;
});

function ShampCtrl($scope,Shampoo)
{
	$scope.shampoo=Shampoo;
}
myApp.factory("Cream",function(){
	var Cream={};
Cream.brand=[{name:"Caramel",price:"Rs.1000"},{name:"Chocolate",price:"Rs.1000"},{name:"Choco chips",price:"Rs.1000"},{name:"Almonds",price:"Rs.1000"},{name:"Jelly bean",price:"Rs.1000"},{name:"Milk duds",price:"Rs.1000"},{name:"Cadbury",price:"Rs.1000"},{name:"Hersheys",price:"Rs.1000"},{name:"Nestle",price:"Rs.1000"}];
	return Cream;
});
function SkinCtrl($scope,Cream)
{
	$scope.cream=Cream;
}



myApp.service("Reviews",function(){
	var Reviews=[{name:"Twinkle", rev:"Good"}];
	this.addReviewFact=function(n,r)
	{	alert("inside add review");
	
		Reviews.push({name:n,rev:r});


	};
	this.list=function() {
		
		return Reviews;
	};
});

myApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
	templateUrl: 'index.html',
	controller: 'expCtrl'
      }).
      when('/reviewPage', {
	templateUrl: 'templates/reviewPage.html',
	controller: 'expCtrl'
      }).
    otherwise({
	redirectTo: '/AddNewOrder'
      });
}]);


myApp.controller("expCtrl",function($scope,Reviews)
{	/*var Reviews=[{yourName:"Akshay",yourRev:"Good"},{yourName:"asd",yourRev:"Good"}];
	$scope.Reviews=Reviews;*/
	
	$scope.Reviews=Reviews.list();
	$scope.addReview=function(){ 
	alert("hi")
	Reviews.addReviewFact($scope.Name,$scope.Rev);
	
	
	};
});
	