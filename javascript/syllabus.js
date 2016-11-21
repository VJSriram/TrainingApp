app.controller("syllabusCtrl",function($scope,$filter,$localStorage){
	    //course list
     if($localStorage.courselist)
                $scope.courselist = $localStorage.courselist;
    else
        $scope.courselist =[];
    
     //trainer list
    if($localStorage.trainerList)
                $scope.trainerList = $localStorage.trainerList;
    else
        $scope.trainerList =[];
    //syllabus List
	if($localStorage.syllabusList)
                $scope.syllabusList = $localStorage.syllabusList;
    else
        $scope.syllabusList =[];

	$scope.syllabus = {};
	$scope.valid = false;
     $scope.editMode = false;
    
	//add new syllabus
	$scope.addsyllabus = function()
	{		
		if(validData())
		{
			
			if($scope.editMode)
                {
                   var editObject = $filter('filter')($scope.syllabusList,{id:$scope.syllabus.id});
                    
                    var pos = $scope.syllabusList.indexOf(editObject[0]);
                    $scope.syllabusList[pos] = $scope.syllabus;
                    $scope.editMode = false;  
                }
            
            
            else{
			$scope.syllabus.id = $scope.syllabusList.length+1;
			$scope.syllabusList.push($scope.syllabus);
                
            }
            
            $localStorage.syllabusList = $scope.syllabusList;
            
            $scope.syllabus = {};
			
			$scope.msg = "Successfull Entry for Course";
			$scope.valid =true;

		}	
        else
		{
			$scope.msg = "Invalid Entry for Course";
			$scope.valid =false;
			
		}
			
	};
    
	//validate form data
	function validData()
	{
		if($scope.syllabus.coursename == undefined || $scope.syllabus.coursename == "" || $scope.syllabus.duration == undefined || $scope.syllabus.duration == "" || $scope.syllabus.content == undefined || $scope.syllabus.content == "" || $scope.syllabus.trainer == undefined || $scope.syllabus.trainer == "" )
			return false;
		else
			return true;
	}
    // delete student
    $scope.deleteSyllabus = function(syllabusObj)
    {
        var pos = $scope.syllabusList.indexOf(syllabusObj);
        
        $scope.syllabusList.splice(pos,1);
    };
// edit student
    $scope.editSyllabus = function(syllabusObj)
    {
       
        $scope.syllabus.id = syllabusObj.name;
        $scope.syllabus.coursename = syllabusObj.id;
        $scope.syllabus.duration = syllabusObj.mailid;
        $scope.syllabus.content = syllabusObj.contact;
        $scope.syllabus.trainer = syllabusObj.course;
        $scope.editMode = true;
    };
    
});

