
var app = angular.module('calc',[]);

app.controller('calc',function($scope,$http){
	
	$scope.calculate= function(){
		
		$http({			
			method: "POST",
			url : '/calc',
			data : {
				
				"num1" : $scope.num1,
				"num2" : $scope.num2,
				"operation" : $scope.operation
			}		
		}).success(function(data){
			console.log(data.result);
			$scope.result = data.result;
			
		}).error(function(error){
			console.log(data.msg);
			$scope.result = data.msg;
			
		});
	}
		
	
	
	
})