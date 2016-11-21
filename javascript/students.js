app.controller("studentsCtrl",function($scope,$filter,$localStorage){
	
    
     //course list
    if($localStorage.courselist)
                $scope.courselist = $localStorage.courselist;
    else
        $scope.courselist =[];
    
	//student List
	 if($localStorage.StudentList)
                $scope.StudentList = $localStorage.StudentList;
    else
        $scope.StudentList =[];

	$scope.Student = {};
	$scope.valid = false;
    $scope.editMode = false;
    
	//add new student
	$scope.addstudent = function()
	{
		if(validData())
		{
			
			if($scope.editMode)
                {
                   var editObject = $filter('filter')($scope.StudentList,{id:$scope.Student.id});
                    
                    var pos = $scope.StudentList.indexOf(editObject[0]);
                    $scope.StudentList[pos] = $scope.Student;
                    $scope.editMode = false;  
                }
            else{
                
                  $scope.Student.id = $scope.StudentList.length+1;
            
			      $scope.StudentList.push($scope.Student);
                
            }
           //data moved to local storage
			$localStorage.StudentList = $scope.StudentList;
			
			$scope.Student = {};
			
			$scope.msg = "Successfull Entry for Student";
			$scope.valid =true;

		}	
        else
		{
			$scope.msg = "Invalid Entry for Student";
			$scope.valid =false;
			
		}
			
	};
	//validate form data
	function validData()
	{
		if($scope.Student.name == undefined || $scope.Student.name == "")
			return false;
        else if($scope.Student.mailid == undefined || $scope.Student.mailid == "")
            return false;
        else if($scope.Student.contact == undefined || $scope.Student.contact == "")
            return false;
          else if($scope.Student.course == undefined || $scope.Student.course == "")
            return false;
		else
			return true;
	}
 // delete student
    $scope.deleteStudent = function(stdObj)
    {
        var pos = $scope.StudentList.indexOf(stdObj);
        
        $scope.StudentList.splice(pos,1);
    };
// edit student
    $scope.editStudent = function(stdObj)
    {
       
        $scope.Student.name = stdObj.name;
          $scope.Student.id = stdObj.id;
          $scope.Student.mailid = stdObj.mailid;
          $scope.Student.contact = stdObj.contact;
          $scope.Student.course = stdObj.course;
        $scope.editMode = true;
    };
});