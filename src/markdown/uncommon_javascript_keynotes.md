

## Content
<details>

- [JavaScript Fundamentals (but uncommon)](#javascript-fundamentals)
    + [Interaction](#interaction)
    + [Comparisons](#comparisons)
    + [Nullish coalescing operation `??`](#nullish-coalescing-operator---)
    + [Loop `for`](#loop-for)
    + [Functions](#functions)
- [Code quality](#code-quality)
    + [Polyfills and transpillers](#polyfills-and-transpilers)
- [Objects: the basics](#objects--the-basics)
    + [Objects](#objects)
    + [Symbol type](#symbol-type)
- [Data types](#data-types)
    + [Iterables](#iterables)
    + [Object.keys, values, entries](#object-keys--values--entries)
    + [Desctructuring assignment](#destructuring-assignment)
    + [Date and time](#date-and-time)
    + [JSON methods, toJSON](#json-methods--tojson)
- [Advanced working with functions](#advanced-working-with-functions)
    + [Rest parameters and spread syntax](#rest-parameters-and-spread-syntax)
    + [The old `var`](#the-old-var)
    + [Global object](#global-object)
    + [The `new Function` syntax](#the-new-function-syntax)
    + [Scheduling: `setTimeout` and `setInterval`](#scheduling--settimeout-and-setinterval)
    + [Decorators and forwarding, call/apply](#decorators-and-forwarding--call-apply)
    + [Function binding](#function-binding)
- [Object properties configuration](#object-properties-configuration)
    + [Property flags and descriptors](#property-flags-and-descriptors)
- [Prototypes, inheritance](#prototypes--inheritance)
    + [Prototypal inheritance](#prototypal-inheritance)
    + [F.prototype](#f-prototype)
    + [Native prototypes](#native-prototypes)
- [Classes](#classes)
- [Error handling](#error-handling)
    + [Custom erros, extending Error](#custom-errors--extending-error)
- [Promises, async/await](#promises--async-await)
    + [Callbacks](#introduction--callbacks)
    + [Promise](#promise)
    + [Promise chaining](#promise-chaining)
    + [Error handling with promises](#error-handling-with-promises)
    + [Promise API](#promise-api)
    + [Promisification](#promisification)
    + [Microtasks](#microtasks)
    + [Async/await](#async-await)
    

</details>
<br><br>

---

## JavaScript Fundamentals
### Interaction
- alert
- prompt
- confirm
	

### Comparisons
- `==` vs `===`
<details>

A strict equality operator `===` checks the equality without type
conversion. In other words, if `a` and `b` are different types, then `a === b`
immediately returns `false` without an attempt to convert them.

In `a == b`, if the type of `a` is different from `b`, `b` needs
converting to the same type of `a` then check the equality.
```js
0 == false; // true
0 === false; // false
```

</details>


### Nullish coalescing operator `??`
`??` returns the first arguments if it's not `null/undefined`. Otherwise,
the second one.

<details>

```js
result = a ?? b;

// same as
result = (a !== null && a !== undefined) ? a : b;
```
Comparison with `||`:
- `||` returns the first *truthy* value. `||` doesn't distinguish
between `false`, `0`, and empty string `""` and `null/undefined`.
- `??` returns the first *defined* value.
```js
let height = 0;
alert(height || 100); // 100
alert(height ?? 100); // 0
```

</details>


### Loop `for`
<details>

- `for` (basic)
- `forEach`
```js
array.forEach(element => element);
```
- `for...in`
```js
for (const key in obj) {
    if (Object.hasOwnProperties(key)) {
        const element = obj[key];
    }
}
```
- `for...of`
```js
for (const iterator of obj) {
    const value = iterator;
}
```
</details>


### Functions
<details>

- Function declaration: 
```js
function func() {}
```
- Function expression:
```js
const func = function() {}
```
- Arrow function:
```js
const func = () => {}
```

</details>
<br><br>

## Code quality
### Polyfills and transpilers
**Polyfills**\
The scripts that update/add new functions.


**Transpilers**\
Translate code to different version.

<br><br>

## Objects: the basics
### Objects
- `this`
> `this` in arrow function refers to `this` in surrounding the function

- Optional chaining `?.`


### Symbol type
<details>

- `Symbol()` Two symbols with the same description are not equal
- Hidden properties
    + In an object literal: need `[]`
    + Are skipped by `for...in`
- Global symbols
    + `Symbol.for("id")`
    + `Symbol.keyFor(sym)`

</details>
<br><br>

## Data types
### Iterables
<details>

Make any object usable in a `for...of` loop

- `Symbol.iterator`
```js
funcName[Symbol.iterator] = function() {
    return {
        current: this.from,
        last: this.to

        next() {
            if (this.current <= this.last) {
                return { done: false, value: this.current++ };
            } else {
                return { done: true };
            }
        }
    }
}
```
- String is iterable
- Calling an iterator explicity
```js
let str = "Hello";

let iterator = str[Symbol.iterator]();

while (true) {
    let result = iterator.next();
    if (result.done) break;
    console.log(result.value);
}
```
- Iterables and array-likes
Different, array-likes can be not iterable
- `Array.from`
```js
let arrayLike = {
    0: "hello",
    1: "world",
    length: 2
};
let arr = Array.from(arrayLike);
console.log(arr);
```

</details>


### Object.keys, values, entries
<details>

- `Object.keys`
```js
Object.keys(obj)
// Return [key1, key2,...]
```
- `Object.values`
```js
Object.values(obj)
// Return [value1, value2, ...]
```
- `Object.entries`
```js
Object.entries(obj)
// Return [[key1, value1], [key2, value1], ...]
```
- `Object.fromEntries`
```js
const array = Object.entries(obj);
Object.fromEntries(array);
// Return the object from array
```
- Transforming objects
```js
let originalObj = Object.fromEntries(
    Object.entries(initialObj).map(entry => [entry[0], entry[1]]);
);
```

</details>


### Destructuring assignment
<details>

- Array destructuring
```js
let arr = ["Khoa", "Tu"];
let [word1, word2] = arr; // word1 = "Khoa", word2 = "Tu"
```
- The rest `...`
```js
let [word1, word2, ...rest] = [] // rest is a new array of the rest element
```
- Default values
```js
let [name="Guest", surname="Anonymous"] = ["Julius"];
// name="Julius" (from array)
// surname="Anonymous" (default used)
```
- Object destructuring
```js
let {field1, field2} = obj;
let {field1: f1, field2: f2} = obj;
let {value1=val1, value2=val2, field} = obj
let {field1, ...rest} = obj;
```
- Nested destructuring
```js
let options = {
    size: {
        width: 100,
        height: 200
    },
    items: [1, 2],
    extrat: true
};

// Destructuring
let {
    size: {
        width,
        height
    },
    items: [item1, item2],
    title: "Menu" // not present in the object
} = options;
```

</details>


### Date and time
<details>

- Date before 01/01/1970 has negative timestamp
- Autocorrection
- Benchmarking: 
`date1.getTime()-date2.getTime()` is faster than `date1-date2`
- Date.parse from a string:
    + The string format should be: `YYYY-MM-DDTHH:mm:ss.sssZ`
    + Shorter variants are also possible: `YYYY-MM-DD`, `YYYY-MM`, `YYYY`

</details>


### JSON methods, toJSON
<details>

- `JSON.stringify`: to string
- `JSON.parse`: to object
- JSON supports following data types:
    + Objects
    + Arrays
    + Primitives:
        + strings
        + numbers
        + boolean
        + null
- JSON skips some object properties:
    + Function
    + Symbolic keys and values
    + Properties that store `undefined`
- Limitation: there must be no circular references
```js
let room = {};
let meetup = {};
meetup.place = room; // meetup references room
room.occupiedBy = meetup; // roon references meetup
JSON.stringify(meetup) // Error
```
- Full syntax
```js
let json = JSON.stringify(value[, replacer, space])
```
- Excluding and transforming: replacer
```js
function replacer(key, value) {
    console.log(`${key}: ${value}`);
    return (key === 'a_field_we_want_to_exclude') ? undefined : value;
}
```
- Formatting: space
```js
JSON.strignify(user, null, 2); // format 2 space
```
- Custom `toJSON()` method
- `JSON.parse`
```js
JSON.parse(str, [reviver]);
```
- Using reviver
```js
JSON.parse(str, function(key, value) {
    // A date string may not be a Date object so we have to 
    // update it to a Date object
    if (key == 'date') return new Date(value);
    return value;
})
```

</details>
<br><br>


## Advanced working with functions
### Rest parameters and spread syntax
<details>

- Rest parameters `...`
```js
function f(...args) {} // args is the name of the array -> parameters array
```
>The rest parameters must be at the end
- The `arguments` variable\
A special array-like object that contains all arguments by their index
```js
function f() {
    console.log(arguments[0]);
    console.log(arguments[1]);
}

f(1, 2); // Show 1, 2
f(1); // Show 1, undefined (no second argument)
```
> Arrow functions do not have `arguments`
- Spread syntax
```js
let arr = [1,2,3];
Math.max(...arr); // 3

let arr1 = [2,3,4];
Math.max(...arr, ...arr1); // 4
Math.max(...arr,5,...arr1,6); // 6
```
> The spread syntax internally uses iterators to gather elements,
> the same way as `for...of` does. So it can be used with any iterable.
- Copy an array/object
```js
let arr = [1, 2, 3];
let arrCopy = [...arr]; // Spread the array into a list of parameters 
                        // then put the result into a new array
console.log(arr === arrCopy) // false
```
```js
let obj = { a: 1, b: 2, c: 3 };
let objCopy = { ...obj };

console.log(obj === objCopy); // false
console.log(JSON.stringify(obj) === JSON.stringify(objCopy)); // true
```

</details>


### The old `var`
<details>

- `var` has no block scope
```js
if (true) {
    var test = true;
}
console.log(test); // true
```
- `var` tolerates redeclarations
```js
var user = "Tus";
var user = "Tu";
// Works fine
```
- `var` variables can be declared below their use
```js
function sayHi() {
    phrase = "Hello";
    console.log(phrase);
    var phrase;
}
```
> Declarations are hoisted, but assignments are not
- IIFE\
In the past, as there was only `var`, and it has no block-level
visibility, programmers invented a way to emulate it. What they did
was called "immediately-invoked function expressions" (IIFE).
```js
(function() {
    alert('Parentheses around the function');
})();

(function() {
    alert('Parentheses around the whole thing');
}());

!function() {
    alert('Bitwise NOT operator starts the expression');
}();

+function() {
    alert('Unary plus starts the expression');
}();
```

</details>


### Global object
```js
window.globalObj = {}
```


### The `new Function` syntax
Useful when creating function from string is needed
```js
let func = new Function([arg1, arg2, ...argN], functionBody);
```


### Scheduling: `setTimeout` and `setInterval`
<details>

- `setTimeout`
```js
let timerId = setTimeout(func|code, [delay], [arg1], [arg2], ...);
```
- Canceling with `clearTimeout`
```js
let timerId = setTimeout(...);
clearTimeout(timerId);
```
- `setInterval`
```js
let timerId = setInterval(func|code, [delay], [arg1], [arg2], ...)
```
- Canceling with `TimerId`
```js
let timerId = setInterval(() => alert('clicl'), 2000);
setTimeout(() => { clearInterval(timerId); alert('stop'); }, 5000);
```
- Nested `setTimeout`
```js
/** instead of
 * let timerId = setInterval(() => alert('tick'), 2000);
**/

let timerId = setTimeout(function tick() {
    alert('tick');
    timerId = setTimeout(tick, 2000);
}, 2000);
```
- Zero delay `setTimeout`\
This schedules the execution of `func` as soon as possible. But the
scheduler will invoke it only after ther currently executing script
is complete.
```js
setTimeout(() => alert("World"));

alert("hello");
```

</details>


### Decorators and forwarding, call/apply
<details>

#### Transparent caching
Let's say we have a function `slow(x)` which is CPU-heavy, but its 
results are stable. In other words, for the same `x` it always return
the same result.

If the function is called often, we may want to cache (remember) the
results to avoid spending extra-time on recalculations.

Instead of adding that functionality into `slow()` we'll create a 
wrapper function, that adds caching
```js
function slow(x) {
    // there can be a heavy CPU-intensive job here
    alert(`Called with ${x}`);
    return x;
}

function cachingDecorator(func) {
    let cache = new Map();

    return function(x) {
        if (cache.has(x)) {         // if there's such key in cache 
            return cache.get(x);    // read the result from it
        }

        let result = func(x);       // otherwise call func

        cache.set(x, result);       // and cache (remember) the result
        return result;
    }
}

slow = cachingDecorator(slow);

alert( slow(1) ); // slow(1) is cached and the result returned
alert( "Again: " + slow(1)); // slow(1) result returned from cache
```

#### Using `func.call` for the context
The caching decorator mentioned above is not suited to work with 
object methods.

For instance, in the code below `worker.slow()` stops working after
the decoration:
```js
// we'll make worker.slow caching
let worker = {
    someMethod() {
        return 1;
    }

    slow(x) {
        // scary CPU-heavy task here
        alert("Called with " + x);
        return x * this.someMethod(); // (*)
    }
}

// same code as before
function cachingDecorator(func) {
    let cache = new Map();
    return function(x) {
        if (cache.has(x)) return cache.get(x);
        let result = func(x); // (**)
        cache.set(x, result);
        return result;
    };
}

alert( worker.slow(1) ); // the original method works

worker.slow = cachingDecorator(worker.slow); // now make it caching

alert( worker.slow(2) ); // Error: Canor read property 'someMethod` of undefined
```
The error occurs in the line `(*)` that tries to access `this.someMethod`
and fails.

The reason is that the wrapper calls the original function as `func(x)`
in the line `(**)`. And, when called like that, the function gets
`this = undefined`.

**Let's fix it.** There's a special built-in function method
`func.call(context, ...args)` that allows to call a funciton explicitly
setting `this`.
```js
func.call(context, arg1, arg2, ...)

// These 2 calls do almost the same
func(1, 2, 3);
func.call(obj, 1, 2, 3);
```
```js
function sayHi() {
    alert(this.name);
}

let user = { name: "John" };
let admin = { name: "Admin" };

// use call to pass different objects as "this"
sayHi.call(user);
sayHi.call(admin);
```
In our case, we can `call` in the wrapper to pass the context to 
the original function:
```js
// before: let result = func(x);
let result = func.call(this, x);
```

#### Going multi-argument
Till now the `cachingDecorator` was working only with single-argument
functions. Now how to cache the multi-argument `worker.slow` method?
```js
let worker = {
    slow(min, max) {
        return min + max; // scary CPU-hogger is assumed
    }
};

// cachingDecorator needs modifying
function cachingDecorator(func, hash) {
    let cache = new Map();
    return function() {
        let key = hash(arguments); // (*)
        if (cache.has(key)) {
            return cache.get(key);
        }

        let result = func.call(this, ...arguments); // (**)

        cache.set(key, result);
        return result;
    }
}

function hash(args) {
    return args[0] + ',' + args[1];
}

// should remember same-argument calls
worker.slow = cachingDecorator(worker.slow, hash);

alert(worker.slow(3, 5)); // works
alert("Again " + worker.slow(3, 5)); // same (cached)
```

#### `func.apply`
Instead of `func.call(this, ...arguments)` we could use 
`func.apply(this, arguments)`.
```js
func.apply(context, args)
```
These two calls are almost equivalent:
```js
func.call(context, ...args);
func.apply(context, args);
```

</details>


### Function binding
<details>

- Losing `this`
```js
let user = {
    firstname: "John";
    sayHi() {
        alert(`Hello, ${this.firstname}!`);
    }
};

setTimeout(user.sayHi, 1000); // Hello, undefined!
```
- Solution 1: a wrapper
```js
let user = {
    firstname: "John";
    sayHi() {
        alert(`Hello, ${this.firstname}!`);
    }
};

setTimeout(function() {
    user.sayHi(); // Hello, John!
}, 1000);
```
- Solution 2: bind
```js
let boundFunc = func.bind(context);
```
```js
let user = {
    firstname: "John";
};

function func() {
    alert(this.firstName);
}

let funcUser = func.bind(usert);
funcUser(); // John
```
- Partial functions\
The full syntax of `bind`:
```js
let bound = func.bind(context, [arg1], [arg2], ...);
```
```js
function mul(a, b) {
    return a*b;
}

let double = mul.bind(null, 2);

alert( double(3) ); // = mul(2, 3) = 6
```
- Going partial without context\
What if we'd like to fix some arguments, but not the context `this`?\
The native `bind` does not allow that.
```js
function partial(func, ...argsBound) {
    return function(...args) {
        return func.call(this, ...argsBound, ...args);
    }
}

// Usage
let user = {
    firstName: "John",
    say(time, phrase) {
        alert(`[${time}] ${this.firstName}: ${phrase}!`);
    }
};

// add a partial method with fixed time
user.sayNow = partial(user.say, new Date().getHours() + ':' + new Date().getMinutes());

user.sayNow("Hello");
// [10:00] John: Hello!
```

</details>
<br><br>


## Object properties configuration
### Property flags and descriptors
<details>

`Propety flags`\
Object properties, besides a `value`, have three special attributes:
    
    + `writable`
    + `enumerable`
    + `configurable`

Method `Object.getOwnPropertyDescriptor` allows to query the full 
information about a property
```js
let descriptor = Object.getOwnPropertyDescriptor(obj, propertyName);
```
To change the flags, we can use `Object.defindProperty`
```js
Object.defineProperty(obj, propertyName, descriptor);
Object.defineProperty(user, "name", {
    value: "John"
});
```
`Object.defineProperties` help an object to define multiple properties
```js
Object.defineProperties(obj, {
    prop1: descriptor1,
    prop2: descriptor2,
    // ...
})
```

</details>
<br><br>


## Prototypes, inheritance
### Prototypal inheritance
<details>

- `[[Prototype]]`
```js
let animal = {
    eats: true
};

let rabbit = {
    jumps: true
};

rabbit.__proto__ = animal;

console.log(rabbit.eats); // true
console.log(rabbit.jumps); // true
```
> The `__proto__` must be an object or null


### F.prototype
Used when a object is created by a constructor function, like `new F()`
```js
let animal = {
    eats: true
}

function Rabbit(name) {
    this.name = name;
}

Rabbit.prototype = animal;

let rabbit = new Rabbit("White Rabbit"); // When a new Rabbit is created,
                                         // assign its [[Prototype]] to animal

console.log(rabbit.eats); // true
```

- Default F.prototype, constructor property
```js
function Rabbit() {};

/* default prototype
Rabbit.prototype = { constructor: Rabbit };
*/
```

</details>


### Native prototypes
<details>

- `Object.prototype`
```js
let obj = {};

console.log(obj.__proto__ === Object.prototype); // true

console.log(obj.toString === obj.__proto__.toString); // true
console.log(obj.toString === Object.prototype.toString); // true
```
> There is no more `[[Prototype]]` in the chain above `Object.prototype`

- Other built-in prototypes\
Other built-in objects such as `Array`, `Date`, `Function`, etc...
also keep methods in prototypes
```js
let arr = [1, 2, 3];

console.log(arr.__proto__ === Array.prototype); // true

console.log(arr.__proto__.__proto__ === Object.prototype); // true

console.log(arr.__proto__.__proto__.__proto__) // null

console.log(arr); // 1,2,3 <-- the result of Array.prototype.toString
```

- Changing native prototypes
```js
// show becomes available to all strings
String.prototype.show = function() {
    alert(this);
}

"Boom!".show(); // Boom!
```

- Borrowing from prototypes
```js
let obj = {
    0: "Hello",
    1: "World!",
    length = 2,
};
obj.join = Array.prototype.join;
console.log(obj.join(',')); // Hello,World!
```
</details>
<br><br>


## Classes
<details>

In JavaScript, a class is a kind of function.

What `class A{...}` construct really does is:
1. Creates a function named `A`, that becomes the result of the class
declaration. The function code is taken from the `constructor` method.
2. Stores class methods in `A.prototype`

**Basic syntax**
```js
class MyClass {
    prop = value; // property

    constructor(...) { // constructor
        // ...
    }

    method(...) {} // method

    get something(...) {} // getter method
    set something(...) {} // setter method

    [Symbol.iterator]() {} // method with computed name (symbol here)
    // ...
}
```

</details>
<br><br>


## Error handling
<details>

```js
try {
    // run this code
} catch(err) {
    // If an error happened, then jump here
    // err is the error object
} finally {
    // do in any case after try/catch
}
```

</details>

### Custom errors, extending Error
<details>

- Extending Error\
The `Error` class is built-in, but here's its approximation code so
we can understand what we're extending
```js
// The "pseudocode" for the built-in Error class defined by JavaScript itself
class Error {
    constructor(message) {
        this.message = message;
        this.name = "Error"; // (different names for different built-in error classes)
        this.stack = <call stack>; // non-standard, but most environments support it
    }
}
```
Inherit `ValidationError` from it
```js
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

function test() {
    throw new ValidationError("Whoops!");
}

try {
    test();
} catch(err) {
    alert(err.message); // Whoops!
    alert(err.name); // ValidationError
    alert(err.stack); // a list of nested calles with lines numbers for each
}
```
Further inheritance
```js
class PropertyRequiredError extends ValidationError {
    constructor(property);
    super("No property: " + property);
    this.name = "PropetyRequiredError";
    this.property = property;
}

// Usage
function validateUser(json) {
    let user = JSON.parse(json);

    if (!user.age) {
        throw new PropertyRequiredError("age");
    }
    if (!user.name) {
        throw mew PropertyRequiredError("name");
    }

    return user;
}

// Example with try...catch
try {
    let user = validateUser('{ "age": 25 }');
} catch {
    if (err instanceof ValidationError) {
        alert("Invalid data: " + err.message);
        alert(err.name); // PropertyRequiredError
        alert(err.property); // name
    } else if (err instanceof SyntaxError) {
        alert("JSON Syntax Error: " + err.message);
    } else {
        throw err;
    }
}
```
Wrapping exceptions\
There can be more types of errors and we may not want to check for all 
error types one-by-one everytime, so we may need an exception wrapper.
```js
class ReadError extends Error {
    constructor(message, cause) {
        super(message);
        this.cause = cause;
        this.name = 'ReadError';
    }
}

function readUser(json) {
    let user;

    try {
        user = JSON.parse(json);
    } catch (err) {
        if (err instanceof SyntaxError) {
            throw new ReadError('Syntax Error', err);
        } else {
            throw err;
        }
    }

    try {
        validateUser(user);
    } catch (err) {
        if (err instanceof ValidationError) {
            throw new ReadError("Validation Error", err);
        } else {
            throw err;
        }
    }
}

try {
    readUser('{bad json}');
} catch (e) {
    if (e instanceof ReadError) {
        alert(e);
        alert("Original error: " + e.cause);
    } else {
        throw e;
    }
}
```

</details>
<br><br>


## Promises, async/await
### Introduction: callbacks
Many functions are provided by JavaScript host environments that allow
you to schedule *asynchronous* actions. In other words, actions that
we initiate now, but they finish later.
<details>

```js
function loadScript(src) {
    // creates a <script> tag and append it to the page
    // this causes the script with given src to start loading and run
    // when complete
    let script = document.createElement('script');
    script.src = src;
    document.head.append(script);
}

// load and execute the script at the given path
loadScript('/my/script.js'); // the script has "function newFunction() {}"
// the code below loadScript doesn't wait for the script loading to finish
newFunction(); // no such function!
```
Let's add a `callback` function as a second argument to `loadScript`
that should execute when the script loads:
```js
function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;

    script.onload = () => callback(script);

    document.head.append(script);
}

loadScript('/my/script.js', function() {
    // the callback runs after the script is loaded
    newFunction(); // so now it works
    ...
});
```
<br>

**Callback in callback**\
How can we load two scripts sequentially: the first one, and then the
second one after it?\
The natural solution would be to put the second `loadScript` call 
inside the callback
```js
loadScript('/my/script.js', function(script) {

  alert(`Cool, the ${script.src} is loaded, let's load one more`);

  loadScript('/my/script2.js', function(script) {
    alert(`Cool, the second script is loaded`);
  });

});
```
After the outer `loadScript` is complete, the callback initiates the 
inner one.\
What if we want one more script...?
```js
loadScript('/my/script.js', function(script) {
    loadScript('/my/script2.js', function(script) {
        loadScript('/my/script3.js', function(script) {
            // ... continue after all scripts are loaded
        })
    })
})
```
<br>

**Handling errors**\
Here's an improved version of `loadScript` that tracks loading errors
```js
function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;

    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error(`Script load error for ${src}`));

    document.head.append(script);
}

// The usage
loadScript('/my/script.js', function(err, script) {
    if (error) {
        // handle error
    } else {
        // script loaded successfully
    }
});
```
<br>

**Pyramid of Doom**
```js
loadScript('1.js', function(error, script) {
    if (error) {
        handleError(error);
    } else {
        // ...
        loadScript('2.js', function(error, script) {
            if (error) {
                handleError(error);
            } else {
                // ...
                loadScript('3.js', function(error, script) {
                    if (error) {
                        handleError(error);
                    } else {
                        // ...continue after all scripts are loaded
                    }
                })
            }
        })
    }
})
```
Callbacks hell! We can try to alleviate the problem by making every
action a standalone function
```js
loadScript('1.js', step1);

function step1(error, script) {
    if (error) {
        handleError(error);
    } else {
        // ...
        loadScript('2.js', step2);
    }
}

function step2(error, script) {
    if (error) {
        handleError(error);
    } else {
        // ...
        loadScript('3.js', step3);
    }
}

function step3(error, script) {
    if (error) {
        handleError(error);
    } else {
        // ...continue after all scripts are loaded
    }
}
```

</details>


### Promise
```js
let promise = new Promise(function(resolve, reject) {
    // executor
});
```
<details>

The `promise` object returned by the `new Promise` constructor has 
these internal properties
- `state` - initially `"pending"`, then changes to either `"fulfilled"`
when `resolve` is called or `"rejected"` when `reject` is called.
- `result` - initially `undefined`, then changes to `value` when
`resolve(value)` is called or `error` when `reject(error)` is called.
> Only the first call of `resolve/reject` is taken into account.
> Further calls are ignored.

**Consumers: then, catch**\
`then`
```js
promise.then(
    function(result) { /* handle a successful result */},
    function(error) { /* handle an error */ }
);
```
`catch` - if we interested only in errors
```js
promise.catch(errorHandlingFunction);
```

**Cleanup: finally**\
The call `.finally(f)` is similar to `.then(f, f)` in the sense that 
`f` runs always, when the promise is settled: be it resolve or reject.
```js
new Promise((resolve, reject) => {
    /* do sth */
})
// runs when the promise is settled, doesn't matter successfully or not
.finally(() => stop loading indicator)
// so the loading indicator is always stopped before we go on
.then(result => show result, err => show error);
```

</details>


### Promise chaining
<details>

```js
new Promise(function(resolve, reject) {
    setTimeout(() => resolve(1), 1000);
}).then(function(result) {
    alert(result); // 1
    return result * 2;
}).then(function(result) {
    alert(result); // 2
    return result * 2;
}).then(function(result) {
    alert(result); // 4
    return result * 2;
})
```

</details>


### Error handling with promises
```js
fetch('https://no-such-server.blabla') // rejects
.then(response => response.json())
.catch(err => alert(err)) // TypeError: failed to fetch
```

<details>

**Implicit try...catch**\
This code:
```js
new Promise((resolve, reject) => {
    throw new Error("Whoops!");
}).catch(alert); // Error: Whoops!
```
...Works exactly the same as this:
```js
new Promise((resolve, reject) => {
    reject(new Error("Whoops!"));
}).catch(alert); // Error: Whoops!
```
The "invisible `try...catch`" around the executor automatically catches
the error and turns it into rejected promise.

**Rethrowing**\
In a promise we may analyze the error and rethrow it like a regular 
`try...catch` if it can't be handled.
```js
// the execution: catch -> catch
new Promise((resolve, reject) => {
    throw new Error("Whoops!");
}).catch(function (error) {
    if (error instanceof URIError) {
        // Handle it
    } else {
        alert("Can't handle such error");
        throw error; // Throwing this or another error jumps to the next catch
    }
}).then(function() {
    /* Doesn't run here */
}).catch(error => {
    alert(`The unknown error has occured: ${error}`);
    // Don't return anything => execution goes the normal way
});
```

</details>


### Promise API
<details>

- **Promise.all**\
`Promise.all` takes an iterable (ususally, an array of promises) and
returns a new promise.\
The new promise resolves when all listed promises are resolved, and
the array of their results becomes its result.
```js
let promise = Promise.all(iterable)
```
For instance, the `Promise.all` below settles after 3 seconds, and 
then it result is an array `[1,2,3]`
```js
Promise.all([
    new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
    new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
    new Promise(resolve => setTimeout(() => resolve(3), 1000))  // 3
]).then(alert); // 1,2,3 when promises are ready
```
> If one promise rejects, `Promise.all` immediately rejects, 
> completely forgetting about the other ones in the list. Their result
> are ignored.

- **Promise.allSettled**
> This is a recent addition to the language. Old browsers may need
> polyfills.

For example, we'd like to fetch the information about multiple users.
Even if one request fails, we're still interested in the others.
```js
let urls = [
    'https://api.github.com/users/iliakan',
    'https://api.github.com/users/remy',
    'https://no-such-url'
];

Promise.allSettled(urls.map(url => fetch(url)))
.then(results => { // (*)
    results.forEach((result, num) => {
        if (result.status === "fulfilled") {
            alert(`${urls[num]}: ${result.value.status}`);
        }
        if (result.status === "rejected") {
            alert(`${urls[num]}: ${result.reason}`);
        }
    });
});
```
The `results` in the line `(*)` will be
```js
[
    {status: 'fulfilled', value: ...response...},
    {status: 'fulfilled', value: ...response...},
    {status: 'rejected', reason: ...error object...}
]
```

- **Promise.race**\
Similar to `Promise.all`, but waits only for the first settled promise
and gets its result (or error).
```js
let promise = Promise.race(iterable);
```
```js
Promise.race([
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
  new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 2000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
]).then(alert); // 1
```

- **Promise.any**\
Similar to `Promise.race`, but waits only for the first fulfilled
promise and gets it result. If all of the given promises are rejected,
the the returned promise is rejected with `AggregateError`.
```js
let promise = Promise.any(iterable);
```
```js
Promise.any([
  new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 1000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 2000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
]).then(alert); // 1

// When all promises fail
Promise.any([
  new Promise((resolve, reject) => setTimeout(() => reject(new Error("Ouch!")), 1000)),
  new Promise((resolve, reject) => setTimeout(() => reject(new Error("Error!")), 2000))
]).catch(error => {
  console.log(error.constructor.name); // AggregateError
  console.log(error.errors[0]); // Error: Ouch!
  console.log(error.errors[1]); // Error: Error!
});
```

- **Promise.resolve/reject**
    + `Promise.resolve(value)` is same as `new Promise(resolve => resolve(value))`.
    + `Promise.reject(value)` is same as `new Promise((resolve, reject) => reject(error))`.

</details>


### Promisification
"Promisification" is a long word for a simple transformation - the 
conversion of a function that accepts a callback into a function that
returns a promise.
<details>

For instance, we have `loadScript(src, callback)` from
[Introduction: callbacks](#introduction-callbacks)
```js
function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;

    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error(`Script load error for ${src}`));

    document.head.append(script);
}
```
We can promisify like this
```js
let loadScriptPromise = function(src) {
    return new Promise((resolve, reject) => {
        loadScript(src, (err, script) => {
            if (err) reject(err);
            else resolve(script);
        })
    })
}

// Usage
loadScriptPromise('path/script.js').then(...);
```
The new function is a wrapper arount the original `loadScript` function.
It calls it providng its own callback that translates to promise
`resolve/reject`.

In practice we may need to promisify more than one function, so it 
makes sense to use a helper. We'll call it `promisify(f)`: it accepts
a to-promisify function `f` and returns a wrapper function.
```js
function promisify(f) {
    return function (...args) { // return a wrapper-function
        return new Promise((resolve, reject) => {
            function callback(err, result) { // our custom callback for f
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            }

            args.push(callback); // append our custon callback to the end of f arguments

            f.call(this, ...args); // call the original function
        });
    };
}

// Usage
let loadScriptPromise = promisify(loadScript);
loadScriptPromise(...).then(...);
```
Here, `promisify` assumes that the original function expects a callback
with exactly two arguments `(err, result)`. That's what we encounter 
most often. Then our custom callback is in exactly the right format, 
and `promisify` works great for such a case.

But what if the original `f` expects a callback with more arguments
`callback(err, res1, res2, ...)?

We can improve our helper. Let's make a more advanced version of 
`promisify`.
- When called as `promisify(f)` it should work similar to the version
above.
- When called as `promisify(f, true)`, it should return the promise 
that resolves with the array of callback results. That's exactly for
callbacks with many arguments.
```js
// promisify(f, true) to get array of results
function promisify(f, manyArgs = false) {
    return function (...args) {
        return new Promise((resolve, reject) => {
            function callback(err, ...results) { // our custom callback for f
                if (err) {
                    reject(err);
                } else {
                    // resolve with all callback results if manyArgs is specified
                    resolve(manyArgs ? results : results[0]); 
                }
            }

            args.push(callback);

            f.call(this, ...args);
        });
    };
}

// usage
f = promisify(f, true);
f(...).then(arrayOfResults => ..., err => ...);
```
> There are also modules with a bit more flexible promisification
> functions, e.g. [es6.promisify](https://github.com/digitaldesignlabs/es6-promisify).
> In Node.js, there's a built-in `util.promisify` function for that.

</details>


### Microtasks
```js
let promise = Promise.resolve();

promise.then(() => alert("promise done!"));

alert("code finished"); // this alert shows first
```
<details>

#### Microtasks queue
As stated in the [specification](https://tc39.github.io/ecma262/#sec-jobs-and-job-queues):
- The queue is first-in-first-out: tasks enqueued first are run first.
- Execution of a task is initiated only when nothing else is running.

When a promise is ready, its `.then/catch/finally` handlers are put
into the queue, they are not executed yet. When the JavaScript engine
becomes free from the current code, it takes a task from the queue and executes it.

</details>


### Async/await
There's a special syntax to work with promises in a more comfortable
fashion, called "async/await". It's surprisingly easy to understand
and use.
<details>

#### Async function
The word `async` before a function means one simple thing: a function
always returns a promise. Other values are wrapped in a resolved 
promise automatically.
```js
async function f() {
    return 1;
}

f().then(alert); // 1
```
...We could explicity return a promise, which would be the same:
```js
async function f() {
    return Promise.resolve(1);
}

f().then(alert); // 1
```

#### Await
The keyword `await` makes JavaScript wait until the promise settles
and returns it result
> It works only inside async functions.
```js
let value = await promise;
```
Here's an example with a promise that resolves in 1 second:
```js
async function f() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("done!"), 1000);
    });
    let result = await promise; // wait until the promise resolves
    alert(result); // "done!"
}
```

#### Error handling
If a promise resolves normally, then `await promise` returns the result.
But in the case of a rejection, it throws the error, just as if there
were a `throw` statement at that line.
```js
// This code
async function f() {
    await Promise.reject(new Error("Whoops!"));
}

// ...is the same as this
async function f() {
    throw new Error("Whoops!");
}
```
We can catch errors using `try...catch`, the same way as a regular
`throw`:
```js
async function f() {
    try {
        let response = await fetch('https://no-such-url');
    } catch (err) {
        alert(err); // TypeError: failed to fetch
    }
}

f()
```
In the case of an error, the control jumps to the `catch` block. We
can also wrap multiple lines:
```js
async function f() {
    try {
        let response = await fetch('/no-user-here');
        let user = await response.json();
    } catch (err) {
        // catches errors both in fetch and response.json
        alert(err);
    }
}

f();
```
If we don't have `try...catch`, then the promise generated by the call
of the async function `f()` becomes rejected. We can append `.catch` 
to handle it:
```js
async function f() {
    let response = await fetch('https://no-such-url');
}

// f() becomes a rejected promise
f().catch(alert); // TypeError: failed to fetch
```

</details>
<br><br>
