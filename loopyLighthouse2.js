function loopyLighthouse (range, multiples, words){
    for(var i = range[0]; i <= range[1]; i++){
	if (i % 2 === 0 && i % 5 !== 0){
	    console.log(words[0]);
	}
	else if (i % 2 !== 0 && i % 5 === 0){
	    console.log(words[1]);
	}
	else if (i % 2 === 0 && i % 5 === 0){
	    console.log(words[0] + words[1]);
	}
	else{
	    console.log(i);
	}
    }
}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);
