function geral(){
	var item = document.querySelectorAll(".item");
	var qt   = document.querySelectorAll(".btt");
	var valor = document.querySelectorAll(".valor");
	var quantidade = "";
	var pedidos= "";
	var precoUni = "";
	var total = "";

	var x = item.length;
	var soma = 0;
	
	for (var i=0; i<x; i++) {
		if (qt[i].value > 0) {

			soma += qt[i].value * valor[i].value;

			pedidos = document.querySelector("#pedidos");
			pedidos.innerHTML += item[i].value + "<br>"

			quantidade = document.querySelector("#quantidade");
			quantidade.innerHTML += qt[i].value + "<br>"

			precoUni = document.querySelector("#precoUni");
			precoUni.innerHTML += "R$" + valor[i].value + ",00 <br>"	
		}
		
		 
	}


	total = document.querySelector("#comanda");
	total.innerHTML = "Total da conta: R$" + soma + ",00";  

}
