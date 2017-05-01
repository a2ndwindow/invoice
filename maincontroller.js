app.controller("MainController", function ($scope) {
var list = {
		name: "Sri Ranga Enterprise",
		items: [
			{ name: "tomoto", done: false, price: 100, count:1 },
			{ name: "carrot", done: false, price: 200, count:1},
			{ name: "potato", done: false, price:250, count:1 }

		]

	};
	$scope.date = new Date();
	$scope.totalPrice = 0;
	$scope.billPrice = 0 ;
	$scope.list = list;
	$scope.calculateTotal = function (item) {
		if( item.done == true){
			$scope.totalPrice += item.price ;
		}
		else{
			$scope.totalPrice -= item.price;
		}
	}
	$scope.name =null;
	$scope.value = null;

	$scope.addItem = function (itemName,value){
		$scope.list.items.push({name: itemName,done:false,price:value,count:1});
		$scope.name = null;
		$scope.value = null;
	}
});