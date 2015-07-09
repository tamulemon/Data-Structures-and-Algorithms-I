// find whether an array has duplicate
function duplicate(arr) {
	var hash = {};
	for (var i = 0; i < arr.length; i ++) {
		if (hash[arr[i]]) {
			return true;
		} else {
			hash[arr[i]] = true;
		}
	}
	return false;
}

// most frequent first letter
function frequency(arr) {
	var frequencyTable = {};
	for (var i = 0; i < arr.length; i ++) {
		var firstL = arr[i].charAt(0).toUpperCase();
		if (!(frequencyTable.hasOwnProperty(firstL))) {
			frequencyTable[firstL] = 1;
		} else {
			frequencyTable[firstL] ++;
		}
	}
	return max(frequencyTable);
}

// create an object to keep count of all letters
function alphabetObj() {
	var alphabetCount = {};
	for (var char = 65; char < 65+26; char++) {
		alphabetCount[String.fromCharCode(char)] = 0;
	}
	return alphabetCount;
}

// most frequent any letter
function frequency2(arr) {
	var frequencyTable = alphabetObj();
	for (var i = 0; i < arr.length; i ++) {
		var item = arr[i];
		for (var j = 0; j < item.length; j++) {
			frequencyTable[item.charAt(j).toUpperCase()] ++;
		}
	}
	return max(frequencyTable);
}


// to get rid of duplicates from an array
function unique(arr) {
	var newArr = [];
	for (var i = 0; i < arr.length; i++) {
		if (newArr.indexOf(arr[i]) === -1) {
			newArr.push(arr[i]);
		}
	}
	return newArr;
}

//find the largest value
function max(obj) {
	var max = 0,
			maxK = [];
	for (var key in obj) {
		if (obj[key] > max) {
			max = obj[key];
			maxK = [key];
		} 
		else if (obj[key] === max) {
			maxK.push(key);
		}
	}
	return [max, maxK];
}

//recreate shift
Array.prototype.shift1 = function() {
	var first = this[0];
	for (var i = 1; i < this.length; i++) {
		this[i-1] = this[i];
	}
	this.splice(-1,1);
	return first;
};

// recreate push
Array.prototype.push1 = function(x) {
	this[this.length] = x;
};

// receate pop
Array.prototype.pop1 = function() {
	var last = this[this.length-1];
	this.splice(-1,1);
	return last;
}

// receate unshift
Array.prototype.unshift1 = function(x) {
	for (var i = this.length; i >= 1; i--) {
		this[i] = this[i-1];
	}
	this[0] = x;
}

exports.duplicate = duplicate;
exports.frequency = frequency;
exports.frequency2 = frequency2;
//exports.max = max; // helper function doesn't need to be exported
exports.Array = new Array();
exports.unique = unique;

