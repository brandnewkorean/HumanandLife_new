$(function(){
	var email_test = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	
	var idCheck = false;
	var pwCheck = false;
	
	var inputType = 'email';
	
	$('.login-input').focus(function(){
		var id = $(this).attr('id');
		
		$('#'+id+'-label').animate({
			top: 0,
			fontSize: "0.9rem"
		},200);
		
		$('#'+id+'-wrap').css({
			borderBottom: "2px solid rgb(91,155,213)"
		});
	});
	
	$('.login-input').focusout(function(){
		if($(this).val() == ''){
			var id = $(this).attr('id');
			
			$('#'+id+'-label').animate({
				top: "1.5rem",
				fontSize: "1.2rem"
			},200);
		}
	});
	
	$('#id').focusout(function(){
		if($(this).val() == ''){
			$('#id-check').text('이메일 또는 휴대폰 번호를 입력해주세요.');
			$('#id-wrap').addClass('wrong-input');
		}
	});
	
	$('#id').on('input', function(){
		if($(this).val() == ''){
			$('#id-check').text('이메일 또는 휴대폰 번호를 입력해주세요.');
			$('#id-wrap').addClass('wrong-input');
		}else if(!email_test.test($(this).val())){
			if($(this).val().replace(/[0-9]/gi,'').length > 0 || $(this).val().length < 10){
				idCheck = false;
				$('#id-check').text('유효한 이메일 또는 전화번호를 입력해주세요.');
				$('#id-wrap').addClass('wrong-input');
			}else{
				inputType = 'phone';
				idCheck = true;
				$('#id-check').text('');
				$('#id-wrap').removeClass('wrong-input');
			}
		}else{
			inputType = 'email';
			idCheck = true;
			$('#id-check').text('');
			$('#id-wrap').removeClass('wrong-input');
		}
	});
	
	$('#password-button').click(function(){
		$(this).toggleClass('active');
		$(this).empty();
		
		if($(this).hasClass('active')){
			$(this).append('<svg focusable="false" viewBox="0 0 24 24" class="svg-icon btn__icon" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.8614 16.2672L14.0319 15.4377C13.4364 15.7896 12.7418 15.9915 12 15.9915C9.79083 15.9915 7.99997 14.2007 7.99997 11.9915C7.99997 11.2497 8.2019 10.5551 8.55379 9.95956L7.41027 8.81604C6.44483 9.5464 5.61875 10.3795 4.99709 11.0851C4.68742 11.4366 4.43247 11.7518 4.24038 12.0001C4.31287 12.0938 4.39437 12.1971 4.48445 12.3083C4.918 12.8438 5.54387 13.5557 6.31348 14.2645C7.88843 15.715 9.89992 17.0001 12 17.0001C12.979 17.0001 13.9432 16.7213 14.8614 16.2672ZM16.3393 17.7451L18.5872 19.993L20.0014 18.5788L5.42973 4.00708L4.01552 5.42129L5.98433 7.3901C4.97332 8.18372 4.12684 9.04748 3.49646 9.76296C3.08113 10.2343 2.75355 10.6483 2.5283 10.9466C2.41556 11.0959 2.32813 11.2166 2.26784 11.3016C2.23768 11.3441 2.21429 11.3777 2.19788 11.4015L2.17854 11.4297L2.17284 11.4381L2.171 11.4408L2.17033 11.4418C2.17033 11.4418 2.16982 11.4426 2.99999 12.0001L2.17033 11.4418L1.79541 12.0001L2.16982 12.5576L2.99999 12.0001C2.16982 12.5576 2.16982 12.5576 2.16982 12.5576L2.17181 12.5605L2.17529 12.5657L2.18667 12.5824C2.19621 12.5963 2.20966 12.6158 2.22691 12.6405C2.26141 12.6898 2.31117 12.7599 2.37544 12.8479C2.5039 13.0237 2.69078 13.2713 2.93005 13.5668C3.40736 14.1564 4.09951 14.9444 4.95858 15.7356C6.64099 17.2851 9.12949 19.0001 12 19.0001C13.5964 19.0001 15.0694 18.4689 16.3393 17.7451ZM10.0677 11.4735L12.518 13.9238C12.3528 13.968 12.1791 13.9915 12 13.9915C10.8954 13.9915 9.99997 13.0961 9.99997 11.9915C9.99997 11.8124 10.0235 11.6387 10.0677 11.4735ZM15.9627 12.54C15.9873 12.3607 16 12.1776 16 11.9915C16 9.78239 14.2091 7.99153 12 7.99153C11.8139 7.99153 11.6308 8.00424 11.4515 8.02883L15.9627 12.54ZM20.5038 14.2369C20.1148 14.6784 19.6436 15.1763 19.1021 15.6795L17.6868 14.2642C18.1891 13.8016 18.6325 13.3355 19.0031 12.9147C19.3127 12.5634 19.5676 12.2483 19.7596 12.0001C19.6871 11.9064 19.6056 11.8031 19.5155 11.6918C19.082 11.1564 18.4561 10.4444 17.6865 9.73564C16.1116 8.28513 14.1001 7.00008 12 7.00008C11.5301 7.00008 11.0636 7.0643 10.604 7.18131L9.02061 5.59796C9.94456 5.23192 10.9453 5.00008 12 5.00008C14.8705 5.00008 17.359 6.71502 19.0414 8.26451C19.9005 9.0557 20.5926 9.8438 21.0699 10.4333C21.3092 10.7288 21.4961 10.9765 21.6245 11.1523C21.6888 11.2402 21.7386 11.3103 21.7731 11.3597C21.7903 11.3844 21.8038 11.4038 21.8133 11.4178L21.8247 11.4345L21.8282 11.4396L21.8293 11.4414C21.8293 11.4414 21.8302 11.4426 21 12.0001C21.8302 12.5576 21.8299 12.5579 21.8299 12.5579L21.829 12.5593L21.8271 12.5621L21.8214 12.5705L21.8021 12.5987C21.7857 12.6225 21.7623 12.656 21.7322 12.6985C21.6719 12.7835 21.5845 12.9042 21.4718 13.0535C21.2466 13.3517 20.919 13.7656 20.5038 14.2369ZM21 12.0001L21.8302 11.4426L22.2046 12.0001L21.8299 12.5579L21 12.0001Z"></path></svg>');
			$('#password').attr('type','text');
		}else{
			$(this).append('<svg focusable="false" viewBox="0 0 24 24" id="password-button-icon" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 8C9.79084 8 7.99998 9.79086 7.99998 12C7.99998 14.2091 9.79084 16 12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8ZM9.99998 12C9.99998 10.8954 10.8954 10 12 10C13.1045 10 14 10.8954 14 12C14 13.1046 13.1045 14 12 14C10.8954 14 9.99998 13.1046 9.99998 12Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M21.8298 11.442C21.8298 11.442 21.8298 11.7947 21.6245 12C21.9328 12.3082 21.8298 12.558 21.8298 12.558L21.8282 12.5605L21.8247 12.5656L21.8133 12.5823C21.8038 12.5962 21.7903 12.6157 21.7731 12.6404C21.7386 12.6897 21.6888 12.7599 21.6245 12.8478C21.4961 13.0236 21.3092 13.2712 21.0699 13.5668C20.5926 14.1563 19.9005 14.9444 19.0414 15.7356C17.359 17.2851 14.8705 19 12 19C9.12949 19 6.64099 17.2851 4.95858 15.7356C4.09951 14.9444 3.40736 14.1563 2.93005 13.5668C2.69078 13.2712 2.5039 13.0236 2.37544 12.8478C2.31117 12.7599 2.26141 12.6897 2.22691 12.6404C2.20966 12.6157 2.19621 12.5962 2.18667 12.5823L2.17529 12.5656L2.17181 12.5605L2.17063 12.5587C2.17063 12.5587 2.18667 12.3016 2.48828 12C2.30078 12 2.17018 11.442 2.17018 11.442L2.17181 11.4395L2.17529 11.4344L2.18667 11.4177C2.19621 11.4038 2.20966 11.3843 2.22691 11.3596C2.26141 11.3103 2.31117 11.2401 2.37544 11.1522C2.5039 10.9764 2.69078 10.7288 2.93005 10.4332C3.40736 9.84372 4.09951 9.05563 4.95858 8.26443C6.64099 6.71494 9.12949 5 12 5C14.8705 5 17.359 6.71494 19.0414 8.26443C19.9005 9.05563 20.5926 9.84372 21.0699 10.4332C21.3092 10.7288 21.4961 10.9764 21.6245 11.1522C21.6888 11.2401 21.7386 11.3103 21.7731 11.3596C21.7903 11.3843 21.8038 11.4038 21.8133 11.4177L21.8247 11.4344L21.8282 11.4395L21.8298 11.442ZM4.48445 12.3082C4.39437 12.197 4.31287 12.0937 4.24038 12C4.31287 11.9063 4.39437 11.803 4.48445 11.6918C4.918 11.1563 5.54387 10.4444 6.31348 9.73557C7.88843 8.28506 9.89992 7 12 7C14.1001 7 16.1116 8.28506 17.6865 9.73557C18.4561 10.4444 19.082 11.1563 19.5155 11.6918C19.6056 11.803 19.6871 11.9063 19.7596 12C19.6871 12.0937 19.6056 12.197 19.5155 12.3082C19.082 12.8437 18.4561 13.5556 17.6865 14.2644C16.1116 15.7149 14.1001 17 12 17C9.89992 17 7.88843 15.7149 6.31348 14.2644C5.54387 13.5556 4.918 12.8437 4.48445 12.3082Z"></path><path d="M21.6245 12L21.8298 11.442L22.2046 12L21.8298 12.558L21.6245 12Z"></path><path d="M2.17018 11.442L2.48828 12L2.17529 12.5656L1.79541 12L2.17018 11.442Z"></path></svg>');
			$('#password').attr('type','password');
		}
	});
	
	$('#password').on('input', function(){
		if($(this).val().length < 8){
			pwCheck = false;
			$('#password-check').text('비밀번호는 최소 8 자 이상을 입력해야 합니다.');
			$('#password-wrap').addClass('wrong-input');
		}else{
			pwCheck = true;
			$('#password-check').text('');
			$('#password-wrap').removeClass('wrong-input');
		}
	});
	
	$('#password').keypress(function(e){
		if(e.keyCode == 13){
			$('#submit').click();
		}
	});
	
	$('#submit').click(function(){
		var vo;
		
		if(inputType == 'email'){
			vo = {
				inputType: inputType,
				email: $('#id').val(),
				password: $('#password').val()
			};
		}else{
			vo = {
				inputType: inputType,
				phone: $('#id').val(),
				password: $('#password').val()
			};
		}
		
		if(idCheck && pwCheck){
			$.ajax({
				url: "/service/login",
				type: "post",
				data: vo,
				success: function(data){
					switch(data.code){
					case 0:
						alert('로그인에 성공했습니다.');
						window.location.href = "/home";
						break;
					case 1:
						alert('비밀번호를 확인해주세요.');
						break;
					case 2:
						alert('존재하지 않는 아이디입니다.');
						break;
					default:
						alert('서버오류');
					}
				}
			});
		}
	});
	
	$('#join').click(function(){window.location.href = "/join-terms";});
});