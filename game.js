var vrednosti; 
var obrnjeneVrednosti = []; 
var obrnjeniId = []; 
var stObrnjenih = 0;
var score = 0;
var time = 180;
var level = 1;

function premesaj(){ 
	var i = vrednosti.length-1, j, temp; 
	while(i > 0){ 
		j = Math.floor(Math.random() * i); 
		temp = vrednosti[j]; vrednosti[j] = vrednosti[i]; vrednosti[i] = temp;
		i--;		
	} 
}

function novaIgra(){ 
	if (level == 1){
		document.getElementById('board').style.width= "415px";
		vrednosti = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8]; 
		stObrnjenih = 0; 
		time = 180;
		var polja = ''; 
		premesaj(); 
		for(var i = 0; i < vrednosti.length; i++){
			polja += '<div id="polje_'+i+'" onclick="obrni(this,'+vrednosti[i]+')" ></div>';
		}	 	
		document.getElementById('board').innerHTML = polja;
		setInterval(function(){odstevaj()}, 1000);
		document.getElementById('timescore').innerHTML = "Memory game		Time left: "+time+"		Score: "+score+"	Level: "+level; 
	} else if (level == 2){
		document.getElementById('board').style.width = "515px";
		vrednosti = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10]; 
		stObrnjenih = 0; 
		time = 120;
		var polja = ''; 
		premesaj(); 
		for(var i = 0; i < vrednosti.length; i++){
			polja += '<div id="polje_'+i+'" onclick="obrni(this,'+vrednosti[i]+')" ></div>';
		}	 	
		document.getElementById('board').innerHTML = polja;
		document.getElementById('timescore').innerHTML = "Memory game		Time left: "+time+"		Score: "+score+"	Level: "+level;
	} else if (level == 3){
		document.getElementById('board').style.width = "615px";
		vrednosti = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12]; 
		stObrnjenih = 0; 
		time = 240;
		var polja = ''; 
		premesaj(); 
		for(var i = 0; i < vrednosti.length; i++){
			polja += '<div id="polje_'+i+'" onclick="obrni(this,'+vrednosti[i]+')" ></div>';
		}	 	
		document.getElementById('board').innerHTML = polja;
		document.getElementById('timescore').innerHTML = "Memory game		Time left: "+time+"		Score: "+score+"	Level: "+level;
	}
}

function zakrij(){  
	var polje_1 = document.getElementById(obrnjeniId[0]);
	var polje_2 = document.getElementById(obrnjeniId[1]);
	polje_1.style.background = '#00F'; 
	polje_1.innerHTML = ""; 
	polje_2.style.background = '#00F'; 
	polje_2.innerHTML = ""; 
	obrnjeneVrednosti = []; 
	obrnjeniId = []; 
}

function odstevaj(){
	time--;
	document.getElementById('timescore').innerHTML = "Memory game		Time left: "+time+"		Score: "+score+"	Level: "+level;
	if (time==0) {
		alert("Game over, you run out of time! \n Generating new board...");
		score = 0;
		document.getElementById('board').innerHTML = ""; novaIgra(); 
	}	
}

function obrni(polje,vrednost){ 
	if (polje.innerHTML == "" && obrnjeneVrednosti.length < 2){
		switch (vrednost){
			case 1:
			polje.style.background = "url(icons/banana.svg)"; polje.id += "t";	polje.innerHTML = '<p></p>';			
			break;
			case 2:
			polje.style.background = "url(icons/cokolada.svg)"; polje.id += "t"; polje.innerHTML = '<p></p>';
			break;
			case 3:
			polje.style.background = "url(icons/hot-dog.svg)"; polje.id += "t"; polje.innerHTML = '<p></p>';
			break;
			case 4:
			polje.style.background = "url(icons/kivi.svg)"; polje.id += "t"; polje.innerHTML = '<p></p>';
			break;
			case 5:
			polje.style.background = "url(icons/kostanj.svg)"; polje.id += "t"; polje.innerHTML = '<p></p>';
			break;
			case 6:
			polje.style.background = "url(icons/krompir.svg)"; polje.id += "t"; polje.innerHTML = '<p></p>';
			break;
			case 7:
			polje.style.background = "url(icons/kruh.svg)"; polje.id += "t"; polje.innerHTML = '<p></p>';
			break;
			case 8:
			polje.style.background = "url(icons/lubenica.svg)"; polje.id += "t"; polje.innerHTML = '<p></p>';
			break;
			case 9:
			polje.style.background = "url(icons/meso.svg)"; polje.id += "t"; polje.innerHTML = '<p></p>';
			break;
			case 10:
			polje.style.background = "url(icons/Oranzna_BUCA.svg)"; polje.id += "t"; polje.innerHTML = '<p></p>';
			break;
			case 11:
			polje.style.background = "url(icons/Oranzna_KORENCEK.svg)"; polje.id += "t"; polje.innerHTML = '<p></p>';
			break;
			case 12:
			polje.style.background = "url(icons/pomaranca.svg)"; polje.id += "t"; polje.innerHTML = '<p></p>';
			break;
			case 13:
			polje.style.background = "url(icons/potica.svg)"; polje.id += "t"; polje.innerHTML = '<p></p>';
			break;
			case 14:
			polje.style.background = "url(icons/Rdeca_CESNJE.svg)"; polje.id += "t"; polje.innerHTML = '<p></p>';
			break;
			case 15:
			polje.style.background = "url(icons/Rdeca_JABOLKO.svg)"; polje.id += "t"; polje.innerHTML = '<p></p>';
			break;
			case 16:
			polje.style.background = "url(icons/Rjava_LESNIK.svg)"; polje.id += "t"; polje.innerHTML = '<p></p>';
			break;
			case 17:
			polje.style.background = "url(icons/sir.svg)"; polje.id += "t"; polje.innerHTML = '<p></p>';
			break;
			case 18:
			polje.style.background = "url(icons/Vijolicna_GROZDJE.svg)"; polje.id += "t"; polje.innerHTML = '<p></p>';
			break;
		}
		if (obrnjeneVrednosti.length == 0){ 
			obrnjeneVrednosti.push(vrednost); obrnjeniId.push(polje.id); 
		} 
		else if(obrnjeneVrednosti.length == 1){
			obrnjeneVrednosti.push(vrednost); obrnjeniId.push(polje.id);
			if(obrnjeneVrednosti[0] == obrnjeneVrednosti[1]){
				stObrnjenih += 2;  
				obrnjeneVrednosti = []; obrnjeniId = [];  
				score += 10;
				document.getElementById('timescore').innerHTML = "Memory game		Time left: "+time+"		Score: "+score+"	Level: "+level;
				if(stObrnjenih == vrednosti.length){ 
					if (level == 1){
						alert("Congratulations, you completed a level! Your score is: "+score+"\n Generating new level..."); 
						level++;
						document.getElementById('board').innerHTML = ""; novaIgra(); 
					} else if (level == 2){
						alert("Congratulations, you completed a level! Your score is: "+score+"\n Generating new level...");  
						level = 3;
						document.getElementById('board').innerHTML = ""; novaIgra(); 
					} else if (level == 3){
						alert("Congratulations, you won the game! Your score is: "+score+"\n Generating new game..."); 
						level = 1;
						score = 0;
						document.getElementById('board').innerHTML = ""; novaIgra(); 
					}
				} 
			} 
			else { 
				if(score > 0) score -= 1;
				document.getElementById('timescore').innerHTML = "Memory game		Time left: "+time+"		Score: "+score+"	Level: "+level;
				setTimeout(zakrij, 750);
			} 
		}
	} 
}