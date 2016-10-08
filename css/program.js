Function.prototype.method = function (name, func) {
	this.prototype[name] = func;
	return this;
};

var myObject = {
	value:0,
	increment:function (inc) {
		this.value += typeof inc === 'number' ? inc : 1;
	}
};

// Method invocation pattern
document.writeln("Method invocation");
// funtion bound to object is called method, it is ivoked via dot (.) operator
myObject.increment( );
document.writeln("myObject.increment(): " + myObject.value); // 1

myObject.increment(2);
document.writeln("myObject.increment(2): " + myObject.value); // 3


myObject.double = function () {
	var that = this;
	
	var helper = function() {
		that.value = that.value * 2;
	}
	
	// Function Invocation pattern
	helper();
};

document.writeln("Function invocation");
myObject.double();

document.writeln("myObject.double(): " + myObject.value); // 3


var Quo = function (string) {
	this.status = string;
};

Quo.prototype.get_status = function(string) {
	return this.status;
};

// Constructor invocation
var myQuo = new Quo("confused");

document.writeln("Constructor invocation");
document.writeln("myQuo.get_status(): "+myQuo.get_status());


var add = function (n1,n2,n3) {
	return n1+n2+n3;
}

var nums = [1, 2, 5];

var sum = add.apply(null, nums);

// Apply invocation
document.writeln("add.apply(null, nums): " + sum)

var anotherStatusObject = {
	status:"another status"
};

var anotherStatus = Quo.prototype.get_status.apply(anotherStatusObject);

// Apply invocation
document.writeln("Apply invocation");
document.writeln("Quo.prototype.get_status.apply(anotherStatusObject): " + anotherStatus);


function addMany() {
	var sum = 0, i;
	
	for (i = 0; i < arguments.length; i++) {
		sum += arguments[i];
	}
	
	return sum;
}

document.writeln("addmany(): " + addMany(1, 2, 3, 4));

// Closures:
document.writeln("Closures");
var createObj = function(initialValue) {
	return {
		state : initialValue,
		getState : function () {
			return this.state;
		},
		getInitialValue : function () {
			return initialValue;
		},
		incrementState : function () {
			this.state += 1;
			return this.state;
		}
	};
};

var initialValue = 5;
var obj = createObj(initialValue);
document.writeln("obj: " + obj.getState());
document.writeln("obj: " + obj.incrementState());
document.writeln("obj: " + obj.getState());
document.writeln("obj: " + obj.incrementState());
document.writeln("obj: " + obj.getInitialValue());


var obj2 = createObj(initialValue);
document.writeln("obj2: " + obj2.getState());


// Modules
document.writeln("Modules");

var uqSeqGen = function () {
	var seq = 0;
	var prefix = '';
	return {
		setSeq : function (s) {
			seq = s;
		},
		setPref : function (p) {
			prefix = p;
		},
		getUniq : function() {
			seq++;
			return prefix + seq;
		}
	};
};

var gen = uqSeqGen();

document.writeln("getUniq: " + gen.getUniq());
gen.setSeq(100);
gen.setPref('ASD');

document.writeln("getUniq: " + gen.getUniq());


var anotherModule = function(gen) {
	return {
		genFromFunction : function() {
			return gen.getUniq();
		}
	};
};

var aModule = anotherModule(gen);


document.writeln("aModule.genFromFunction: " + aModule.genFromFunction());


var object3000 = {};

var prop = object3000['asdf'];

if (prop == null) {
	alert("prop == null");
}

if (prop === undefined) {
	alert("prop === undefined");
}

if (!prop) {
	alert("prop");
}

