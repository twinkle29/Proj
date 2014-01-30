function TodoCntrl($scope)
{
	$scope.todos=[{text:"Learn angularjs",done:true},{text:"build application",done:false}];
	$scope.addTodos=function(){
		$scope.todos.push({text:$scope.todoText,done:false});
		$scope.todoText='';
	}
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