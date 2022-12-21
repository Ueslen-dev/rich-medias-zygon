var normal, normalCta, expanded, imap;
	normal = document.getElementById('normal');
	normalCta = document.getElementById('normalCta');
	expanded = document.getElementById('expanded');
	imap = document.getElementById('i-map');

function expand() { 
	normal.style.display = 'none';
	normalCta.style.display = 'none';
	expanded.style.display = 'block';    
	imap.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2354.0967780963083!2d-34.87757347537979!3d-7.114051608773653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ace7efed034e6d%3A0xba338927564cdbc4!2sParque%20Zoobot%C3%A2nico%20Arruda%20C%C3%A2mara%20(Bica)!5e0!3m2!1spt-BR!2sbr!4v1572377505370!5m2!1spt-BR!2sbr'; 
}



var link;
var ct = "https://www.google.com/maps/place/Parque+Zoobotânico+Arruda+Câmara+(Bica)/@-7.114106,-34.8795093,17z/data=!3m1!4b1!4m5!3m4!1s0x7ace7efed034e6d:0xba338927564cdbc4!8m2!3d-7.114106!4d-34.8773206";
function getParameterByName(name, url) {
	if (!url) url = window.location.href;
	name = name.replace(/[\[\]]/g, "\\$&");
	var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
	results = regex.exec(url);
	if (!results) return null;
	if (!results[2]) return '';
	return decodeURIComponent(results[2].replace(/\+/g, " "));
}
function clickCTA(){
	var link = getParameterByName('clicktag');
	if(link == null){
		link = ct;
	}
	window.open(link, '_blank');	
}
