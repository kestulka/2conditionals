"use strict";

// 1.

// const balas = 5;

// if (balas <= 3) {
// 	console.log("neigiamas pazymys");
// } else if (balas == 4 || balas == 5) {
// 	console.log("teigiamas, bet pasistenk");
// } else if (balas == 6 || balas == 7) {
// 	console.log("vidutiniskai");
// } else if (balas == 8 || balas == 9) {
// 	console.log("pasigirk mamai");
// } else if (balas == 10) {
// 	console.log("nuo ko nusirasei?");
// } else {
// 	console.log("svaigsti");
// }

// 2.

// let menuo = "balandis";

// switch (menuo) {
// 	case "sausis":
// 	case "vasaris":
// 	case "kovas":
// 		console.log("ziema");
// 		break;
// 	case "balandis":
// 	case "geguze":
// 	case "birzelis":
// 		console.log("vasara");
// 		break;
// 	case "liepa":
// 	case "rugpjutis":
// 	case "rugsejis":
// 		console.log("pavasaris");
// 		break;
// 	case "spalis":
// 	case "lapkritis":
// 	case "gruodis":
// 		console.log("ruduo");
// 		break;
// 	default:
// 		console.log("metu laikas siam menesiui neegizstuoja");
// }

// 3.

// let laikas = 14;
// if (laikas >= 6 && laikas < 11) {
// 	console.log("skanios kavytes grazios dienytes");
// } else if (laikas >= 11 && laikas < 18) {
// 	console.log("laba diena mokiniai, - laba diena, tamsta");
// } else if (laikas >= 18 && laikas < 21) {
// 	console.log("ciucio liulio");
// } else {
// 	console.log("labanakt");
// }

// 4.

// const date = new Date();
// const day = date.getDay();
// console.log(day);
// switch (day) {
// 	case 1:
// 		console.log("pirmadienis");
// 		break;
// 	case 2:
// 		console.log("antradienis");
// 		break;
// 	case 3:
// 		console.log("treciadienis");
// 		break;
// 	case 4:
// 		console.log("ketvirtadienis");
// 		break;
// 	case 5:
// 		console.log("penktadienis");
// 		break;
// 	case 6:
// 		console.log("sestadienis");
// 		break;
// 	case 7:
// 		console.log("sekmadienis");
// 		break;
// 	default:
// 		console.log("tokios dienos nera");
// }

// 5.

// let pacanas = 19;

// if (pacanas >= 18) {
// 	console.log(`tu esi pilnametis`);
// 	if (pacanas >= 21) {
// 		console.log("tu esi pilnametis ir dar gali nusipirkti alaus");
// 	}
// } else {
// 	console.log("dar reikia paaugti");
// }

// 6.

// let skaicius = -2;

// if (skaicius == 0) {
// 	console.log("skaicius yra lygus nuliui");
// } else if (skaicius > 0) {
// 	console.log("skaicius yra teigiamas");
// } else {
// 	console.log("skaicius yra neigiamas");
// }

// 7.

// let vartotojas = true;
// let admin = true;
// if (vartotojas == true) {
// 	console.log("vartotojas yra prisijunges");
// 	if (vartotojas == true && admin == true) {
// 		console.log("vartotojas yra prisijunges ir dar adminas");
// 	}
// } else if (vartotojas == true && admin == false) {
// 	console.log("vartotojas yra prisijunges, taciau ne adminas");
// } else {
// 	console.log("vartotojas nera prisijunges");
// }

// 8.

// const paprastas = true;
// const admin = false;
// const skelbimas = true;

// if (paprastas == true) {
// 	console.log("Vartotojas(paprastas) online ");
// 	if (paprastas == true && skelbimas == true) {
// 		console.log("Galite ištrinti skelbimą");
// 	}
// } else if (admin == true) {
// 	console.log("Vartotojas(admin) prisijunges");
// 	if (admin == true) {
// 		console.log("Galite patvirtinti skelbima");
// 	}
// } else {
// 	console.log("Prašome prijungti vartotoją");
// }

// 9.

// let irasas = prompt("iveskite skaiciu: ");
// if (irasas > 50) {
// 	console.log(irasas);
// } else {
// 	console.log("ivestas skaicius mazesnis uz 50");
// }

// 10.

// let zenklas = prompt("Iveskite zenkla: ");
// let sk1 = parseInt(prompt("Iveskite pirma skaiciu: "));
// let sk2 = parseInt(prompt("Iveskite antra skaiciu: "));

// if (zenklas == "+") {
// 	const suma = sk1 + sk2;
// 	console.log(suma);
// } else if (zenklas == "-") {
// 	const atimtis = sk1 - sk2;
// 	console.log(atimtis);
// } else if (zenklas == "*") {
// 	const daugyba = sk1 * sk2;
// 	console.log(daugyba);
// } else if (zenklas == "/") {
// 	const dalyba = sk1 / sk2;
// 	console.log(dalyba);
// } else {
// 	console.log("as per prastas skaiciuotuvas");
// }
