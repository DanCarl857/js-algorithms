### Javascript Data Structures and Algorithms
#### I am doing this to learn more about datastructures and algorithms and also to improve my understanding of Javascript, data structures and algorithms as a whole. I think this will help me in my day to day programming with JS and possibly other languages.

### Chapter 1: Big-O Notation Primer

* Big-O notation measuers the worst case complexity of an algorithm.
* n represents the number of inputs. So basically we are asking *what will happen as _n_ approaches infinity
* Big-O tells us how efficient an algorithm is.
* O(Math.pow(n, n)) < O(Math.pow(n,2)) < O(n)
* O(1) does not change with respect to input space. => *constant time*
* O(n) is linear time and applies to algorithms that must do n operations in the worst-case scenario.
* Example of linear time algorithms:
```
function exampleLinear(n) {
	for (var i = 0; i < n; i++) {
		console.log(i);
	}
}
```
* O(Math.pow(n, 2)) is quadratic time and so on and so forth.
* Coefficient rule: if f(n) is O(g(n)), then kf(n) is O(g(n)) for any constant k > 0.
* Sum rule: if f(n) is O(h(n)) and g(n) is O(p(n)), then f(n)+g(n) is O(h(n)+p(n)). Product rule is similar.
* Transitive rule: if f(n) is O(g(n)) and g(n) is O(h(n)), then f(n) is O(h(n)). Simple way to state that the same complexity has the same Big-O.
* Polynomial rule: If f(n) is a polynomial of degree k, then f(n) is O(Math.pow(n, k)).
* Log of a power rule: log(nk) is O(log(n)) for any constant k > 0.

### Chapter 2: Javascript: Unique Parts

Here we learn about some exceptions and cases of Javascript's syntax and behavior.
Some rules:
* Avoid global variables at all costs
```
test = "sss";
console.log(test); // prints "sss"
```
* _Variable hoisting_ comes with using *var* along with understanding clearly how the scope of the variable is affected.
* Basically we are saying try to stick to *let* and *const* where needed. 

### Chapter 3: Javascript Numbers

* 0.1 + 0.2 === 0.3; // prints 'false' => binary representation of decimals
* Number.EPSILON returns the smallest interval between 2 representable numbers.
```
function numberEquals(x, y) {
	return Math.abs(x - y) < Number.EPSILON;
}

numberEquals(0.1 + 0.2, 0.3); // true
```
* Prime numbers are the basis of encryption
* Prime factorization is the process of determinig which prime numbers multiply to a given number.
