
app.controller('DonateCtrl', function($scope, $http){
	$scope.$watch('forms.monetary', function(form) {
  if(form) {

  	var cardNumber = $scope.cardNumber; 
  	var cardCVC = $scope.cardCVC;
  	var cardExpMonth = $scope.cardExpMonth;
  	var cardExpMonth = $scope.cardExpYear;
  	var addressZip = $scope.addressZip;

		function stripeResponseHandler {
			var req = {
				method: 'POST',
				url: '..components/api/donate',
				data: { cardID: cardID }
			}

		  $http(req).then(function(response){
			  console.log(response);
			      
			  }, function(err){
			  	console.log(err);
			});
		}

  	Stripe.source.create({
	  	type: 'card',
	  	card: {
		    number: cardNumber,
	    	cvc: cardCVC,
	    	exp_month: cardExpMonth,
	    	exp_year: cardExpYear,
	  	},
	  		owner: {
	    		address: {
	      		postal_code: addressZip
	    		}
	  		}
			}, stripeResponseHandler); 
  	}
	});
});
