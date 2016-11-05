import angular from "angular";
import $ from 'jquery';
import {app} from '../../app.js';
import  '../../mainCtrl.js'

app.directive('adminDir', function(){
	return{
		restrict: 'E',
		replase: false,
		templateUrl: './static/app/admin/dir/template/adminDir.html',
		link: function(scope, element, attributes){
			scope.admin = function(){
				console.log('admin work')
			}
		}
	}
})