/*请求方法封装*/
function FlatMessage(sendFunction,recvFunction){
	this.send = undefined;
	this.param = {};
	this.method = 'GET';
	this.result = undefined;
	this.recv = undefined;
	if('function' == typeof sendFunction){
		this.send = sendFunction;
	}
	if('function' == typeof sendFunction){
		this.recv = recvFunction;
	}
	return this;
}

var msg = new FlatMessage(function(){
	this.result = '你好';
},function(){
	alert(this.result);
});


flat.factory('$flatService',['$http','$rootScope','$flatConstant',function($http,$rootScope,$flatConstant){
		
	function excute(msg,callBack){
		
	}
	
	return{
		excute : excute
	};
}]);