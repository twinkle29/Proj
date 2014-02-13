var myApp=angular.module("myApp",[]);
myApp.factory("Avengers",function(){
	var Avengers={};
Avengers.cast=[{name:"xyz",character:"abc"},{name:"twinkle",character:"engineer"},{name:"aditi",character:"designer"}];
	return Avengers;
});
function AvengersCtrl($scope,Avengers)
{
	$scope.avengers=Avengers;
}
myApp.directive("powerpuff",function(){
  return{
    restrict:"E",
    template:"<div style='color:red'>Powerpuff save the day!!! --> Directive used here</div>"
  };
});
myApp.directive("superman",function(){
  return{
    restrict:"A",
    link:function()
    {
      alert("this is using directive");
    }
  };
});
myApp.directive("superman",function(){
  return{
    restrict:"C",
    link:function(){
      alert("This is using class in directve");
    }
  }
});
myApp.directive("superman",function(){
  return{
   restrict:"M",
    link:function(){
      alert("This is using comment in directve");
    }
  }
});
function TodoCntrl($scope)
{
	$scope.todos=[{text:"Learn angularjs",done:true},{text:"build application",done:false}];
	$scope.addTodos=function(){
    alert("inside!");
		$scope.todos.push({text:$scope.todoText,done:false});
		$scope.todoText='';
	};
	$scope.remaining=function()
	{
var count=0;
angular.forEach($scope.todos,function(todo){
	count+=todo.done?0:1;
});
return count;
	};
	$scope.archive=function()
	{
var oldTodos=$scope.todos;
$scope.todos=[];
angular.forEach(oldTodos,function(todo){
if(!todo.done)$scope.todos.push(todo);
});

	};
}


