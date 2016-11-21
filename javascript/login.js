app.controller("loginCtrl",function($scope,$rootScope,$localStorage,$http){
	$scope.name = "User Login";
	
	$scope.login = function(){
		//validate User
		if($scope.user.pwd == "admin")
		{
			$rootScope.authenticated = true;
			$scope.ErrorMsg = "";
			$localStorage.validUser = true;
		}
			
		else
		{
			$rootScope.authenticated = false;
			$scope.ErrorMsg = "Invalid credentials";
		}
			
		
	}
	
});