function countWords(){
	text = document.getElementById("wc").value
	text = text.split(" ");
	let total = 0;
	text.forEach(word => {
		if (word != "") {
			total++;
		}
	});
	document.getElementById("totalwords").innerHTML = "Total words: " + total;
}