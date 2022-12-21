	// #CD_CODE
	var i0 = document.getElementById('count0');
	var i1 = document.getElementById('count1');	  	  	
	var s = "assets/img/n/";
	var ext = ".png";
	var days;
	var hours;
	var minutes;
	var seconds;
	var lbl_f;
	var lbl_d;
	var lbl_h;
	var isExpanded = false;	
	var countDownDate = new Date("Oct 2, 2017 10:30:00").getTime();	
	
	var x = setInterval(function() {
		var now = new Date().getTime();
		var distance = countDownDate - now;

		days = Math.floor(distance / (1000 * 60 * 60 * 24));
		hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		seconds = Math.floor((distance % (1000 * 60)) / 1000);

		if(days == 1){
			lbl_f = "FALTA";
			lbl_d = "DIA";
		}else{
			lbl_f="FALTAM";
			lbl_d = "DIAS";
		}

		if(hours == 1){
			lbl_h = "hora";
		}else{
			lbl_h = "horas";
		}

			if (distance < 0) {//END

				clearInterval(x);
				var ff = ("0" + days).slice(-2);	

				hours = ("0" + hours).slice(-2);
				minutes = ("0" + minutes).slice(-2);
				seconds = ("0" + seconds).slice(-2);  

				s0 = s + 0 + ext;
				s1 = s + 0 + ext;
				i0.src = s0;
				i1.src = s1;

				document.getElementById("hr").innerHTML = '00';
				document.getElementById("min").innerHTML = '00';
				document.getElementById("sec").innerHTML = '00';
				document.getElementById("txt-f").innerHTML = 'FALTAM';
				document.getElementById("txt-d-s").innerHTML = 'DIAS';
				document.getElementById("hora-s").innerHTML = 'horas';

			}else{
				var ff = ("0" + days).slice(-2);

				hours = ("0" + hours).slice(-2);
				minutes = ("0" + minutes).slice(-2);
				seconds = ("0" + seconds).slice(-2);

				s0 = s + ff.charAt(0) + ext;
				s1 = s + ff.charAt(1) + ext;
				i0.src = s0;
				i1.src = s1;				

				document.getElementById("hr").innerHTML = hours;
				document.getElementById("min").innerHTML = minutes;
				document.getElementById("sec").innerHTML = seconds;
				document.getElementById("txt-f").innerHTML = lbl_f;
				document.getElementById("txt-d-s").innerHTML = lbl_d;
				document.getElementById("hora-s").innerHTML = lbl_h;
			}		
		}, 350);

	function expand(){
		document.getElementById('expanded').style.display = 'block';
		isExpanded = true;
	}	