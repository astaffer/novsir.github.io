app.controller('ContactsController',
    function ContactsController($scope,$http,dataService){
      var promiseObj=dataService.getContacts();
        promiseObj.then(function(value) { $scope.contacts=value; });
         $scope.save = function (answer, answerForm){
            if(answerForm.$valid){
					var param = JSON.stringify({
					   'from_email': 'website@novsir.ru',
					   'to':  'novcur@mail.ru' ,
					   'autotext': 'true',
					   'subject': 'Сообщение с сайта novsir',
					   'html': 'Новое сообщение',
					   'author':answer.author,
						'E-mail':answer.email,
							'text':answer.text
					});
					var url = 'https://formspree.io/astaffer@gmail.com';
		$http.post(url,param)
				.success(function(data, status, headers, config) {
				// this callback will be called asynchronously
				// when the response is available
				console.log(data);
				// действия по сохранению
			
                alert(answer.author + ", Ваше сообщение отправлено");
			 answer.author = null;
			 answer.email = null;
			 answer.text = null;
			  }).
			  error(function(data, status, headers, config) {
				// called asynchronously if an error occurs
				// or server returns response with an error status.
				alert(answer.author + ", извините, не удалось отправить сообщение.");
			  });
                
            }
        };
    }
)
