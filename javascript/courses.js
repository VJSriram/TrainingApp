app.controller("courseCtrl",function($scope,$localStorage,$filter){
    
    if($localStorage.courselist)
	   $scope.courseList = $localStorage.courselist;
    else
        $scope.courseList = [];
	$scope.course = {};
	$scope.valid = false;
	//add new course
	$scope.saveCourse = function()
	{
		
        if(validData())
		{
			if($scope.course.id)
			{
				//edit Mode
				var editCourses = $filter('filter')($scope.courseList,{id:$scope.course.id});
				var pos = $scope.courseList.indexOf(editCourses[0]);
				$scope.course.created = new Date();
				$scope.courseList[pos] = $scope.course;
			}
			else{
				//new Mode
				$scope.course.id = $scope.courseList.length+1;
				$scope.course.created = new Date();
				$scope.courseList.push($scope.course);
			}

			// [{name:'java Ui',id:1,cretae:'16/8/2016'},{name:'sd',id:'2',created:'23/09/2016'}]
            // $http.post("url",{data:$scope.courseList}).success(funmction(){});
            $localStorage.courselist = $scope.courseList;
            
			$scope.course = {};
			
			$scope.msg = "Successfull Entry for Course";
			$scope.valid =true;

		}	
        else
		{
			$scope.msg = "Invalid Entry for Course";
			$scope.valid =false;
			
		}
			
	};
	//edit course
	$scope.editCourse = function(crsId)
	{
		// $scope.courseList[{name:'java',id:34},{name:'java',id:35},{name:'javaEE',id:37},{name:'javaUI',id:38}]
		var editCourses = $filter('filter')($scope.courseList,{id:crsId});
		//  editCourses[{name:'java',id:34}]
		$scope.course = angular.copy(editCourses[0]);
		
	};
	//delete course
	$scope.deleteCourse = function(crsId)
	{
		alert("you are deleted a course");
		var deleteCourses = $filter('filter')($scope.courseList,{id:crsId});
		var pos = $scope.courseList.indexOf(deleteCourses[0]);
		
		$scope.courseList.splice(pos,1);
		 $localStorage.courselist = $scope.courseList;
	};
	function validData()
	{
		if($scope.course.name == undefined || $scope.course.name == "")
			return false;
		else
			return true;
	}
});