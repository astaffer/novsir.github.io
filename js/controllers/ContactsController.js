app.controller('ContactsController',
    function ContactsController($scope,$http,dataService){
      var promiseObj=dataService.getContacts();
        promiseObj.then(function(value) { $scope.contacts=value; });
         $scope.save = function (answer, answerForm){
            if(answerForm.$valid){
					var param = JSON.stringify({'key': 'ES1fqDzSBDEpbOw1Kph4Pw',
				   'message': {
					   'from_email': 'website@novsir.ru',
					   'to': [{'email': 'novcur@mail.ru', 'type': 'to'}],
					   'autotext': 'true',
					   'subject': 'Сообщение с сайта novsir',
					   'html': '<h1>Новое сообщение</h1>'
							+'<b>Обращение:</b>'+answer.author
							+'<br><b>E-mail адрес:</b>'+answer.email
							+'<br><b>Текст обращения:</b>'+'<p>'+answer.text+'</p>'
					}});
					var url = 'https://mandrillapp.com/api/1.0/messages/send.json';
		$http.post(url,param)
				.success(function(data, status, headers, config) {
				// this callback will be called asynchronously
				// when the response is available
				console.log(data);
				// действия по сохранению
			 answer.author = null;
			 answer.email = null;
			 answer.text = null;
                alert(answer.author + ", Ваше сообщение отправлено");
			
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