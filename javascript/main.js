var app = angular.module("empms",['ngStorage','ui.router']);

app.controller("mainCtrl",function($scope,$rootScope,$localStorage){
	$rootScope.appName = "21CSSINDIA Training Management System(EMP-TMS)";
	//menu List
	
	$scope.menuList = [{state:'home',label:'Home',status:true,className:'home'},
						{state:'courses',label:'Courses',status:false,className:'ok'},
						{state:'trainers',label:'Trainers',status:false,className:'user'},
						{state:'students',label:'Students',status:false,className:'grain'},
						{state:'feedback',label:'Feedback',status:false,className:'bullhorn'},
						{state:'syllabus',label:'Syllabus',status:false,className:'leaf'}];
	
	$scope.changeActiveMenu = function(menuItem){
		for(var ind= 0;ind<$scope.menuList.length;ind++)
		{
			$scope.menuList[ind].status = false;
		}
			menuItem.status = true;
	};
	if($localStorage.validUser)
	{
		$rootScope.authenticated = true;
		$scope.ErrorMsg = "";
	}
	//logout function
	$scope.logout = function(){
		$rootScope.authenticated = false;
		$localStorage.$reset();	
	};
	
});



app.config(function($stateProvider, $urlRouterProvider) {
	
	$stateProvider
	.state("home",
				{ url:'/',
				  templateUrl:'templates/courses.html',
				  controller:'courseCtrl'
				}
		   )
	.state("courses",
				{ url:'/courses',
				  templateUrl:'templates/courses.html',
				  controller:'courseCtrl'
				}
		   )
	.state("trainers",
				{  url:'/trainers',
				   templateUrl:'templates/trainers.html',
				   controller:'trainersCtrl'
				}
		  )
	.state("students",
				{	url:'/students',
					templateUrl:'templates/students.html',
					controller:'studentsCtrl'
				}
			)
	.state("feedback",
				{	url:'/feedback',
					templateUrl:'templates/feedback.html',
					controller:'feedbackCtrl'
				}
			)
	.state("syllabus",
				{	url:'/syllabus',
					templateUrl:'templates/syllabus.html',
					controller:'syllabusCtrl'
				}
			);
});






