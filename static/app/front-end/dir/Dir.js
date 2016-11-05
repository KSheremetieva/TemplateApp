import angular from "angular";
import $ from 'jquery';
import {app} from '../../app.js';
import  '../../mainCtrl.js'

app.directive('feDir', function(){
	return{
		restrict: 'E',
		replase: false,
		templateUrl: './static/app/front-end/dir/template/fe-Dir.html',
		link: function(scope, element, attributes){
			scope.fe = function(){
				console.log(' front-end work')
			}
		}
	}
})