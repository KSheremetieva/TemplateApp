import angular from "angular";
import $ from 'jquery';
import {app} from '../../app.js';;
import  '../../mainCtrl.js';
import admin_template from './template/adminDir.html'
app.directive('adminDir', function(){
	return{
		restrict: 'E',
		replase: false,
		controller: 'mainCtrl',
		template: admin_template,
		link: function(scope, element, attributes){
			scope.admin = function(){
				console.log('admin work')
			}
		}
	}
})