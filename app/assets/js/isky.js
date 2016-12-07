jQuery(document).ready(function() {
    App.init();
    App.initSliders();
    App.initBxSlider();
    App.initFancybox();
    if ($.browser.mozilla) {
		   $(".navbar .nav").css('padding-left', '50%');
		   // $(".navbar .nav").css('right', '-100px');
		}else if($.browser.msie) {
			alert( $.browser.version );
		   // $(".navbar .nav").css('padding-left', '100%');
		   $(".navbar .nav").css('float', 'right');
		}

    $("#sequence form").submit(function(e){
    	e.preventDefault();
    	
			var str = $(this).serialize();
			str = encodeURIComponent(str);
			str = str.split("%3D").join("=");
			str = str.split("%26").join("&");
			$.ajax({
				type: "POST",
				url: "mail/mail.php",
				data: str,
				cache: false,
				success: function(msg){
					statustext = msg.split('##__*__##');	
					if(statustext[0] == 'success'){
						$('#name').val('');
						$('#phone').val('');
						$('#add').val('');
						notif({
						  msg: statustext[1],
						  type: "infor"
						});
					}else if(statustext[0] == 'failure'){
						notif({
						  msg: statustext[1],
						  type: "error"
						});
					}else
						notif({
						  msg: 'Thông tin chưa được gửi đi, xin hãy thử lại lần nữa!',
						  type: "error"
						});
				}  

			});
			return false;
		});

    $("#book-sub").submit(function(e){
    	e.preventDefault();
    	
			var str = $(this).serialize();
			str = encodeURIComponent(str);
			str = str.split("%3D").join("=");
			str = str.split("%26").join("&");
			$.ajax({
				type: "POST",
				url: "mail/mail.php",
				data: str,
				cache: false,
				success: function(msg){
					statustext = msg.split('##__*__##');						
					if(statustext[0] == 'success'){
						$('#name').val('');
						$('#phone').val('');
						$('#add').val('');
						notif({
						  msg: statustext[1],
						  type: "infor"
						});
					}else if(statustext[0] == 'failure'){
						notif({
						  msg: statustext[1],
						  type: "error"
						});
					}else
						notif({
						  msg: 'Thông tin chưa được gửi đi, xin hãy thử lại lần nữa!',
						  type: "error"
						});
				}  

			});
			return false;
		});
});