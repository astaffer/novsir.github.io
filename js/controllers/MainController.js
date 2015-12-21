app.controller('MainController', ['$scope', function($scope) {
  $scope.apps = [ 
	 
	  { 
	    icon: 'img/butterlogo.svg', 
	    title: 'МАСЛО', 
	    color:'yellow',
	    alt: 'Масло сливочное'
	  },
	  {
	    icon: 'img/milklogo.svg', 
	    title: 'МОЛОКО', 
	    color:'white',
alt: 'Молоко цельное'
	  }, { 
	    icon: 'img/cheeselogo.svg', 
	    title: 'СЫР', 
	    color:'yellow', 
	alt: 'Сыр'
	  }
	, { 
	    icon: 'img/yogurt.svg', 
	    title: 'ЙОГУРТ', 
	    color:'yellow', 
alt: 'Йогурт'
	  }
	, { 
	    icon: 'img/perishable.svg', 
	    title: 'СКОРОПОРТ', 
	    color:'yellow', 
alt: 'Скоропорт'
	  }
	, { 
	    icon: 'img/meltedcheese.svg', 
	    title: 'ПЛАВЛЕННЫЙ СЫР', 
	    color:'yellow', 
alt: 'Плавленный сыр'
	  }
		, { 
	    icon: 'img/other.svg', 
	    title: 'ДРУГОЕ', 
	    color:'yellow', 
	  }
	];
	

}]);