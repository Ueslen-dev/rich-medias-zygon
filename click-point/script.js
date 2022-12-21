
//funcoes de clique
function clickRevealBrinco(){

  var priceBrinco = document.getElementById("priceBrinco");
  priceBrinco.setAttribute("class", "visibilite");
  priceBrinco.setAttribute("class", "animated bounceIn");
  priceBlusa.setAttribute("class", "remove");
  priceCalca.setAttribute("class", "remove");

}

function clickRevealBlusa(){

  var priceBlusa = document.getElementById("priceBlusa");
  priceBlusa.setAttribute("class", "visibilite");
  priceBlusa.setAttribute("class", "animated bounceIn");
  priceBrinco.setAttribute("class", "remove");
  priceCalca.setAttribute("class", "remove");
}

function clickRevealCalca(){

	var priceCalca = document.getElementById("priceCalca");
	priceCalca.setAttribute("class", "visibilite");
	priceCalca.setAttribute("class", "animated bounceIn");
	priceBlusa.setAttribute("class", "remove");
	priceBrinco.setAttribute("class", "remove");
}

//funcao de inicio das intrucoes
function instruction(){
	var instruction = document.getElementById("instruction");
    instruction.setAttribute("class", "remove");
}



   setInterval(instruction, 2000);
function start(){
}

function removePrice(){

	priceBrinco.setAttribute("class", "animated bounceOut");
	priceBlusa.setAttribute("class", "animated bounceOut");
	priceCalca.setAttribute("class", "animated bounceOut");
}

function startPrice(){

   setTimeout(removePrice, 2500);

}


