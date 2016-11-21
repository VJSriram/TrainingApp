app.controller("trainersCtrl",function($scope,$localStorage){
  
    if($localStorage.trainerList)
                $scope.trainerList = $localStorage.trainerList;
    else
        $scope.trainerList =[];
    //course list
    if($localStorage.courselist)
                $scope.courselist = $localStorage.courselist;
    else
        $scope.courselist =[];
    
	$scope.trainer = {};
	$scope.valid = false;
    
	//add new trainer
	$scope.addtrainer = function()
	{
		if(validData())
		{
			$scope.trainer.id = $scope.trainerList.length+1;
			$scope.trainerList.push($scope.trainer);
	       	$localStorage.trainerList =	$scope.trainerList;
			$scope.trainer = {};
			
			$scope.msg = "Successfull Entry for Trainer";
			$scope.valid =true;

		}	
        else
		{
			$scope.msg = "Invalid Entry for Trainer";
			$scope.valid =false;
			
		}
			
	};
	
	function validData()
	{
		if($scope.trainer.coursename == undefined || $scope.trainer.coursename == "" ||$scope.trainer.duration == undefined || $scope.trainer.duration == "" || $scope.trainer.name == undefined || $scope.trainer.name == "" )
			return false;
		else
			return true;
	}	
	
});