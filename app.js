var answer = 0;
var num = [];
function main() {
	console.log("start");
	answer = 0;
	var i;
	var locate = document.getElementsByClassName("a");
	console.log(locate.length);
	for (i = 0;i < locate.length; i++) {
		locate[i].style.color = "white";
		locate[i].style.backgroundColor = "black";
		
	}
	
	var savenum = [];
	var idstr;
	var found = 0;
	var i,b;
	for (i = 0; i < 10; i++) {
		var newnum = getNum();
		newnum = newnum.toString();
		if (savenum.length === 0) {
			savenum.push(newnum);
		} else {
			for (b = 0; b < savenum.length; b++) {
				if (newnum === savenum[b]) {
					found = 1;
					break
				} else {
					found = 0;
				}
			}
			if (found === 0) {
				savenum.push(newnum);
			} else {
				found = 0;
				i = i - 1;
			}
		}
	}
		
	for (i = 0; i < locate.length; i++) {
		locate[i].innerHTML = savenum[i];
		console.log(savenum[i])
		num[i] = savenum[i];
	}
	runcount();
}


function listNum() {
		
		var savenum = [];
		var idstr;
		var found = 0;
		var i,b;
		for (i = 0; i < 10; i++) {
			var newnum = getNum();
			newnum = newnum.toString();
			if (savenum.length === 0) {
				savenum.push(newnum);
			} else {
				for (b = 0; b < savenum.length; b++) {
					if (newnum === savenum[b]) {
						found = 1;
						break
					} else {
						found = 0;
					}
				}
				if (found === 0) {
					savenum.push(newnum);
				} else {
					found = 0;
					i = i - 1;
				}
			}
		}
		
		for (i = 0; i < savenum.length; i++) {
			idstr = addmore(i+1,'a');
			document.getElementById(idstr).innerHTML = savenum[i];
			
		}
		
		//document.getElementById("demo").innerHTML = output;
		
		return savenum;

}

function getNum() {
	var n = Math.random();
	n = n.toString();
	var s = n.substring(2,3);
	return s;
}

function hid() {

	var i,id;
	id = document.getElementsByClassName("a");
	for (i = 0;i < id.length; i++) {
		id[i].innerHTML = "*";
		
		
	}
	
	
	
}


function runcount() {
	globalcheck = setTimeout(hid,9000);
}
function addmore(num,word) {
	var i;
	var oneword = word;
	var num = num -1;
	for (i = 0; i < num; i++){
		word = word + oneword;
	}
	return word
	
}