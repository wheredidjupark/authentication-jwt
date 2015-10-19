"use strict";

/*
angular.module("psJWTApp").directive('pwConfirmation', function() {
    return {
        require: "ngModel",
        link: function(scope, element, attrs, ngModelCtrl){
        	function pwConfirmation(value){
        		var valid = (value === scope.$eval(attrs.pwConfirmation));
        		ngModelCtrl.$setValidity('equal', valid);
        		return valid ? valid: undefined;
        	}

        	ngModelCtrl.$parsers.push(pwConfirmation);
        	ngModelCtrl.$formatters.push(pwConfirmation);

        	scope.$watch(attrs.pwConfirmation, function(){
        		ngModelCtrl.$setViewValue(ngModelCtrl.$viewValue);
        	});
        }
    };

});
*/

angular.module('psJWTApp').directive('validateEquals', function() {
    return {
        require: 'ngModel',
        link: function(scope, element, attrs, ngModelCtrl) {
            function validateEqual(value) {
                var valid = (value === scope.$eval(attrs.validateEquals));
                ngModelCtrl.$setValidity('equal', valid);
                return valid ? value : undefined;
            }

            ngModelCtrl.$parsers.push(validateEqual);
            ngModelCtrl.$formatters.push(validateEqual);

            scope.$watch(attrs.validateEquals, function(){
            	ngModelCtrl.$setViewValue(ngModelCtrl.$viewValue);
            });


        }


    };
});
