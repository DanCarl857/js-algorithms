function isEquivalent(a, b) {
	// arrays of property names
	var aProps = Object.getOwnPropertyNames(a);
	var bProps = Object.getOwnPropertyNames(b);

	// If their property lengths are different, they're different objects
	if (aProps.length != bProps.length) {
		return false;	
	}
	
	for (var i = 0; i < aProps.length; i++) {
		var propName = aProps[i];

		// If the values of the property are different, not equal
		if (a[propName] !== b[propName]) {
			return false;
		}
	}

	return true;
}

isEquivalent({'hi': 12}, {'hi': 12}); // returns true

var obj1 = {'prop1': 'test', 'prop2': function (){} };
var obj2 = {'prop1': 'test', 'prop2': function (){} };

isEquivalent(obj1, obj2); // returns false
