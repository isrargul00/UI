/*------------------------------------------
 Contact form
 ------------------------------------------*/


	$(document).ready(function () {



        // Contact Form

        $("#contactForm").submit(function(e){
        e.preventDefault();
	    });



		// Others


		$(document).on("scroll", onScroll);
 
		$('a[href^="#"]').on('click', function (e) {
			e.preventDefault();
			$(document).off("scroll");
 
			$('a').each(function () {
				$(this).removeClass('navactive');
			})
			$(this).addClass('navactive');
 
			var target = this.hash;
			$target = $(target);
			$('html, body').stop().animate({
				'scrollTop': $target.offset().top+2
			}, 500, 'swing', function () {
				window.location.hash = target;
				$(document).on("scroll", onScroll);
			});
		});
	});
 
	function onScroll(event){
		var scrollPosition = $(document).scrollTop();
		$('.nav li a').each(function () {
			var currentLink = $(this);
			var refElement = $(currentLink.attr("href"));
			if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
				$('ul.nav li a').removeClass("navactive");
				currentLink.addClass("navactive");
			}
			else{
				currentLink.removeClass("navactive");
			}
		});
	
       
        $(function(){
            $('#portfolio').mixitup({
                targetSelector: '.item',
                transitionSpeed: 350
            });
        });


    };


	//mail 
	function sendEmail() {

		var txtsender = "Clearbusiness.adrianvenoin@gmail.com";
		var token="e827e13a-1568-40c4-b1c1-ec2eccb8e624";

		var txtname = document.getElementById("txtname").value;
		var txtemail = document.getElementById("txtemail").value;
		var txtnumber = document.getElementById("txtnumber").value;
		var txtmessage = document.getElementById("txtmessage").value;

		var txtmsg = "Welcome to 24 Hours Italian Restaurant !<br><br>Hi, "+txtname+", Thank you for contant from 24 Hours Italian Restaurant. <br>Have a good day!!";
		var txtre ="Contact by !<br><br>Name: "+txtname+", Contact: "+txtnumber+", " + txtemail + "<br><br> message: "+txtmsg+"!!";

		Email.send({
		SecureToken : token, 
		To : txtsender,
			// <sender’s email address>
		From : txtsender,
		
		Subject : "24 Hours Italian Restaurant",
		Body : txtre,
		}).then(message => {
		
		if(message == "OK"){
		
			Email.send({
			SecureToken : token,
			To : txtemail,
				// <sender’s email address>
			From : txtsender,
			Subject : "24 Hours Italian Restaurant",
			Body : txtmsg,
			}).then(
				message => {
				if(message == "OK"){
					txtname = document.getElementById("txtname").value = "";
					txtemail = document.getElementById("txtemail").value ="";
					txtnumber = document.getElementById("txtnumber").value = "";
					txtmessage = document.getElementById("txtmessage").value = "";
					swal("Good job!", "Thank you!", "success").then(function() {
						window.location = "/";
					});
				}else{
					swal("Error!",message, "error");
				}
			});
	}else{
			swal("Error!",message, "error");
		}

	});
	
			// setTimeout("location.href = 'index.html';", 4000);
	}
		