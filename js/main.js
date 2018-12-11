$(document).ready(function(){
	
	
	init = function(){
			ui();
			PrefixSettings();
			$('span.logo-bell').css(transitionPrefix,'.3s all ease-in-out').css(transformPrefix, 'scale(.5,.5)').css('opacity','1');
			$('span.progress').css(transitionPrefix,'1s all ease-in-out').css('bottom','60px').css('opacity','1');


			setTimeout(function(){
				$('span.logo-wire').css(transitionPrefix,'1s all ease-in-out').css('opacity','1');
			},300);

			setTimeout(function(){
				$('span.progress').addClass('go');
			},500);

			setTimeout(function(){
				$('span.progress').addClass('color');
			},1600);				

			setTimeout(function(){
				$('span.progress').css(transitionPrefix,'.3s all ease-in-out').css('bottom','-60px').css('opacity','0');
			}, 3000);
     		
			setTimeout(function(){
				$('span.logo-wire').css(transitionPrefix,'1s all ease-in-out').css('opacity','0');
			},3300);

			setTimeout(function(){
				$('span.logo-bell').addClass('pop');
			},4600);
			

			setTimeout(function(){
				$('div.ring-1').css(transitionPrefix,'.8s all ease-in-out').css(transformPrefix,'scale(.5,.5)');
			},4800);

			setTimeout(function(){
				$('div.ring-2').css(transitionPrefix,'.8s all ease-in-out').css(transformPrefix,'scale(.8,.8)');
				$('div.messages-listing-container').addClass('go');
				$('div.map-listing').addClass('go');
			},5200);
     
			setTimeout(function(){
				$('div.ring-3').css(transitionPrefix,'.8s all ease-in-out').css(transformPrefix,'scale(1.1,1.1)');
				$('div.alcatel-listing').addClass('go');

				$('div.file-listing').addClass('go');
				$('div.actions-listing').addClass('go');
			},5600);
			setTimeout(function(){
				$('span.profile-avatar').css(transitionPrefix, '.3s all ease-in-out').css('opacity','1');
				$('div.lines').css(transitionPrefix, '.3s all ease-in-out').css('opacity','.6').css(transformPrefix,'scale(1,1)');
			},5900);

			setTimeout(function(){
				$('ul li').eq(0).css(transitionPrefix,'.2s all ease-in-out').css('opacity','1').css(transformPrefix,'scale(1,1)');

			},6200);

			setTimeout(function(){
				$('ul li').eq(1).css(transitionPrefix,'.2s all ease-in-out').css('opacity','1').css(transformPrefix,'scale(1,1)');

			},6300);

			setTimeout(function(){
				$('ul li').eq(2).css(transitionPrefix,'.2s all ease-in-out').css('opacity','1').css(transformPrefix,'scale(1,1)');

			},6400);

			setTimeout(function(){
				$('ul li').eq(3).css(transitionPrefix,'.2s all ease-in-out').css('opacity','1').css(transformPrefix,'scale(1,1)');

			},6500);

			setTimeout(function(){
				$('ul li').eq(4).css(transitionPrefix,'.2s all ease-in-out').css('opacity','1').css(transformPrefix,'scale(1,1)')

			},6600);

			setTimeout(function(){
				$('div.notification-container').addClass('go');
				$('div.buddy-connections').css(transitionPrefix,'.3s all ease-in-out').css('opacity','1');
			},6800);

			setTimeout(function(){
				$('div.notification-container').addClass('bump');

			},7400);

			setTimeout(function(){
				$('div.notification-container').removeClass('bump');
			},7800);

			setTimeout(function(){
				$('div.notification-container').addClass('bump');
			},8400);

			setTimeout(function(){
				$('div.notification-container').removeClass('bump');
			},8800);

			setTimeout(function(){
				$('div.notification-container').addClass('bump');
			},9400);

			setTimeout(function(){
				$('div.notification-container').removeClass('bump');
			},9800);

	}

	



	ui = function(){
		$('div.messages-listing-container').on('click',function(){
			$('section.view-1').css(transformPrefix,'scale(2,2)translateX(-110px)translateY(-170px)');
			
				$('ul li').eq(0).css(transitionPrefix,'.2s all ease-in-out').css('opacity','0').css(transformPrefix,'scale(2,2)');
				$('ul li').eq(1).css(transitionPrefix,'.2s all ease-in-out').css('opacity','0').css(transformPrefix,'scale(2,2)');
				$('ul li').eq(2).css(transitionPrefix,'.2s all ease-in-out').css('opacity','0').css(transformPrefix,'scale(2,2)');
				$('ul li').eq(3).css(transitionPrefix,'.2s all ease-in-out').css('opacity','0').css(transformPrefix,'scale(2,2)');
				$('ul li').eq(4).css(transitionPrefix,'.2s all ease-in-out').css('opacity','0').css(transformPrefix,'scale(2,2)');				
				$('div.notification-container').css(transitionPrefix, '.2s all ease-in-out').css('opacity','0');

				setTimeout(function(){
					$('div.message-connections').css(transitionPrefix,'.3s all ease-in-out').css('opacity','1');
				},500);
			
			setTimeout(function(){
				$('div.arrival-container').css('opacity','1');
			},1100);

			setTimeout(function(){
				$('div.arrival-container').addClass('expand');
			},1600);
		});

		$('div.arrival-container').on('click',function(){

				$('div.arrival-container').removeClass('expand');
				setTimeout(function(){
					$('div.arrival-container').css('opacity','0');
				},200);

				setTimeout(function(){

					$('section.view-1').css(transformPrefix,'scale(1,1)translateX(0px)translateY(0px)');
					$('div.message-connections').css(transitionPrefix,'.3s all ease-in-out').css('opacity','0');
					
				},400);
				setTimeout(function(){

						$('ul li').eq(0).css(transitionPrefix,'.2s all ease-in-out').css('opacity','1').css(transformPrefix,'scale(1,1)');

					setTimeout(function(){
						$('ul li').eq(1).css(transitionPrefix,'.2s all ease-in-out').css('opacity','1').css(transformPrefix,'scale(1,1)');

					},100);

					setTimeout(function(){
						$('ul li').eq(2).css(transitionPrefix,'.2s all ease-in-out').css('opacity','1').css(transformPrefix,'scale(1,1)');
					},200);

					setTimeout(function(){
						$('ul li').eq(3).css(transitionPrefix,'.2s all ease-in-out').css('opacity','1').css(transformPrefix,'scale(1,1)');

					},300);

					setTimeout(function(){
						$('ul li').eq(4).css(transitionPrefix,'.2s all ease-in-out').css('opacity','1').css(transformPrefix,'scale(1,1)')

					},400);
					setTimeout(function(){
						$('div.notification-container').css(transitionPrefix, '.2s all ease-in-out').css('opacity','1');

					},500);

					setTimeout(function(){
						$('div.notification-container').addClass('bump');

					},600);

					setTimeout(function(){
						$('div.notification-container').removeClass('bump');
					},1000);


					setTimeout(function(){
						$('div.notification-container').addClass('bump');

					},1400);

					setTimeout(function(){
						$('div.notification-container').removeClass('bump');
					},1800);

					setTimeout(function(){
						$('div.notification-container').addClass('bump');

					},2200);

					setTimeout(function(){
						$('div.notification-container').removeClass('bump');
					},2600);

				},1500);
				

		});
	}




	PrefixSettings = function(){
		transformPrefix = getVendorPrefix(["transform", "msTransform", "MozTransform", "WebkitTransform", "OTransform"]);
		transitionPrefix = getVendorPrefix(["transition", "msTransition", "MozTransition", "WebkitTransition", "OTransition"]);
		animationPrefix = getVendorPrefix(["animation", "msAnimation", "MozAnimation", "WebkitAnimation", "OAnimation"]);
		gridPrefix = getVendorPrefix(["gridRow", "msGridRow", "MozGridRow", "WebkitGridRow", "OGridRow"]);
		hyphensPrefix = getVendorPrefix(["hyphens", "msHyphens", "MozHyphens", "WebkitHyphens", "OHyphens"]);
		columnPrefix = getVendorPrefix(["columnCount", "msColumnCount", "MozColumnCount", "WebkitColumnCount", "OColumnCount"]);
	}


	getVendorPrefix = function(arrayOfPrefixes) {
	   var tmp = document.createElement("div");
	      var result = "";
	      for (var i = 0; i < arrayOfPrefixes.length; ++i) {
	      if (typeof tmp.style[arrayOfPrefixes[i]] != 'undefined'){
	         result = arrayOfPrefixes[i];
	         break;
	      }
	      else {
	         result = null;
	      }
	      }
	      return result;
	}


	init();
});
