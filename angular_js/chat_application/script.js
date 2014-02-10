var app = angular.module("myapp", ["firebase"]);
      function MyController($scope, $firebase) {
        var ref = new Firebase("https://bpocci8hozm.firebaseio-demo.com/");
        $scope.messages = $firebase(ref);
        $scope.addMessage = function(e) {
          if (e.keyCode != 13) return;
          $scope.messages.$add({from: $scope.name, body: $scope.msg});
          $scope.msg = "";
        }
        $scope.logout=function()
		{
			Firebase.goOffline();
		}


  document.onIdle = function () {
    setUserStatus(" idle");
  }
  document.onAway = function () {
    setUserStatus("away");
  }
  document.onBack = function (isIdle, isAway) {
    setUserStatus("online");
  }

  setIdleTimeout(5000);
  setAwayTimeout(10000);

  function setUserStatus(status)
		{
			currentStatus=status;
			newRef.set({ name:name , status:status });

		}

      }