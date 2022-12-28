let parts = new Array(6); 

$(document).ready(function(){ 
	moveParts(); 	
	randomParts(); 		
})

function randomParts(){ 
	const partsOrder = [1,2,3]
	parts = [...partsOrder, 0,4,5]
	
	positionParts(); 
}		

function positionParts(){ 
	$('.allParts').remove();

	for(let part = 0; part < parts.length; part++){ 
		if(parts[part] === 0){ 
			$('#puzzle').append(`<div id="part${part}" class="partsNOT allParts"></div>`);
		}else{ 
			$('#puzzle').append(`<div id="part${part}" class="parts allParts parts${parts[part]}"></div>`);
		}
	}
	
	moveParts();
}

function moveParts(){ 
	$('#part0').on('click', function(){
		if(parts[1] === 0){
			parts[1] = parts[0];
			parts[0] = 0;
		}else if(parts[3] === 0){
			parts[3] = parts[0];
			parts[0] = 0;
		}
		positionParts();
	})
	$('#part1').on('click', function(){
		if(parts[0] === 0){
			parts[0] = parts[1];
			parts[1] = 0;
		}else if(parts[2] === 0){
			parts[2] = parts[1];
			parts[1] = 0;
		}else if(parts[4] === 0){
			parts[4] = parts[1];
			parts[1] = 0;
		}

		positionParts();
	})
	$('#part2').on('click', function(){
		if(parts[1] === 0){
			parts[1] = parts[2];
			parts[2] = 0;
		}else if(parts[5] === 0){
			parts[5] = parts[2];
			parts[2] = 0;
		}

		positionParts();
	})
	$('#part3').on('click', function(){
		if(parts[0] === 0){
			parts[0] = parts[3];
			parts[3] = 0;
		}else if(parts[4] === 0){
			parts[4] = parts[3];
			parts[3] = 0;
		}else if(parts[6] === 0){
			parts[6] = parts[3];
			parts[3] = 0;
		}

		positionParts();
	})
	$('#part4').on('click', function(){
		if(parts[1] === 0){
			parts[1] = parts[4];
			parts[4] = 0;
		}else if(parts[3] === 0){
			parts[3] = parts[4];
			parts[4] = 0;
		}else if(parts[5] === 0){
			parts[5] = parts[4];
			parts[4] = 0;
		}else if(parts[7] === 0){
			parts[7] = parts[4];
			parts[4] = 0;
		}

		positionParts();
	})
	$('#part5').on('click', function(){
		if(parts[2] === 0){
			parts[2] = parts[5];
			parts[5] = 0;
		}else if(parts[4] === 0){
			parts[4] = parts[5];
			parts[5] = 0;
		}else if(parts[8] === 0){
			parts[8] = parts[5];
			parts[5] = 0;
		}
		
		positionParts();
	})

	$('.parts').on('click', function(){
		checkIsTheEndPart();
	})
}
function checkIsTheEndPart(){
	for(let part = 0; part < parts.length; part++){
		if(part < 5){
			const incrementPart = part + 1
			if(incrementPart !== parts[part]){
				break;
			}
		}
		if(part === 5){			
			document.getElementById("puzzle").style.display = "none";
			document.getElementById("end").style.display = "block";
		}
	}
}