function getBook(){
	
	console.log("inside get Book");
	
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function(){
		console.log("ready state: " + xhr.readyState);
		console.log("status: " + xhr.status);
		if(xhr.readyState === 4 && xhr.status === 200){
			var book = JSON.parse(xhr.responseText);
			document.getElementById("stuff").innerHTML = book.title;
			console.log(book);
			
		}
		
	}
	
	xhr.open("GET", "book", true);
	xhr.send();
	
}

function createBook(){
	
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function(){
		
		if(xhr.readyState === 4 && xhr.status === 200){
			
			document.getElementById("stuff").innerHTML = "book posted!!!";
			
		}
		
	}
	
	xhr.open("POST", "book", true);
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	xhr.send("book="+JSON.stringify({title:"The Hungry Caterpiller 2", desc:"even better than the last", isbn:223344556, author:"Howard", pageCount: 5}));
	
}

window.onload = function(){
	
	document.getElementById("getBook").addEventListener("click", getBook, false);
	document.getElementById("postBook").addEventListener("click", createBook, false);
	
}