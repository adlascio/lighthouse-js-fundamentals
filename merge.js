function merge(a,b) {
    for(var i = 0; i < b.length; i++) {
	a.push(b[i]);
    }
    for (i = 0; i < a.length; i++) {
	for (var j = i + 1; j < a.length; j++) {
	    if(a[i] > a[j]) {
		var temp = a[i];
		a[i] = a[j];
		a[j] = temp;
	    }
	}
    }
    return a;
}
