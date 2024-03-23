# Introduction
>
> One thing that make JavaScript weird to learn is
> how it interacts with the browser DOM: how to control the events, the forms,
> how the resource is loaded, etc...

Usually, many JavaScript tutorials tend to integrate DOM manipulation with JS, which
may confuse learners as a programming language. We are all introduced by the tutorials to
many APIs such as `getElementById`, `getQuerySelector`, `addEventListener`, etc...; but barely
understand how those APIs work in the browser, why we have them, and so forth. Talking in
more abstract terms, we find it difficult to be able to get a detailed insight into the mechanics of
the DOM with JavaScript.

Therefore, below are the notes that help you to cover the essential parts related to browser interaction
using JavaScript. It is based on [javascript.info's part 2](https://javascript.info/#tab-2) and requires
to have a fundamental knowledge of JavaScript. If you are a newbie in JS, let's check out the
[javascript.info's part 1](https://javascript.info/#tab-1) first before jumping into this section.

# Document
> Manipulate a web-page using JavaScript

<br></br>

## Browser environment, specs
<details open>
<summary>Details</summary>

The JavaScript language was intially created for web browsers. Since then, it has evolved into a language
with many uses and platforms.

A platform may be a browser, or a web-server or another *host*. The JavaScript specification calls that
a *host environment*.

A host environment provides its own objects and functions in addition to the language core. Web browsers
give a means to control web pages, Node.js provides server-side features, and so on.

Here's a tree view of what we have when JavaScript runs in web browser:
```
window
    |--- DOM
    |      |--- document
    |
    |--- BOM
    |      |--- navigator
    |      |--- screen
    |      |--- location
    |      |--- frames
    |      |--- history
    |      |--- XMLHttpRequest
    |
    |--- JavaScript
                |--- Object
                |--- Array
                |--- Function
                ...
```

There's a "root" objet called `window`. It has 2 roles:
1. It is a global object for JavaScript code.
2. It represents the "browser window" and provides methods to control it.

<details>

<summary>**DOM (Document Object Model)**</summary>

The Document Object Model, or DOM for short, represents all page content as objects that can be modified.

The `document` object is the main "entry point" to the page.
```js
// change the background color to red
document.body.style.background = "red";

// change it back after 1 second
setTimeout(() => document.body.style.background = "", 1000);
```
> There's also a separate specification, [CSS Object Model (CSSOM)](https://www.w3.org/TR/cssom-1/) for
> CSS rules and stylesheets, that explains how they are represented as objects, and how to read and write
> them.
>
> The CSSOM is used together with the DOM when we modify style rules for the document. In practice though,
> the CSSOM is rarely required, because we rarely need to modify CSS rules from JavaScript, but that's
> also possible.

</details>

<br></br>

<details>

<summary>**BOM (Browser Object Model)**</summary>

The Browser Object Model (BOM) represents additional objects provided by the browser (host environment)
for working with everything except the document.

For instace:
- The [navigator](https://developer.mozilla.org/en-US/docs/Web/API/Window/navigator) object provides
background information about the browser and the operating system. The most widely known properties are:
  + `navigator.userAgent` - about the current browser
  + `navigator.platform` - about the platform (can help to differentiate between Windows/Linux/Mac etc)
- The [location](https://developer.mozilla.org/en-US/docs/Web/API/Window/location) object allows us to
read the current URL and can redirect the browser to a new one.
    ```js
    alert(location.href); // shows the current URL
    if (confirm("Go to Tuslipid?")) {
        location.href = "https://xuankhoatu.com";
    }
    ```

</details>

</details>

<br></br>

## DOM tree
<details open>
<summary>Details</summary>

The backbone of an HTML document is tags.

According to the DOM, every HTML tag is an object. Nested tags are "children" of the enclosing one. The
text inside a tag is an object as well.

All these objects are accessible using JavaScript, and we can use them to modify the page.

```js
document.body.style.background = 'red';

setTimeout(() => document.body.style.background = '', 3000);
```

### An example of the DOM
```html
<!DOCTYPE HTML>
<html>
    <head>
        <title>About Tus</title>
    </head>
    <body>
        Something about Tusss...
    </body>
</html>
```
The DOM represents HTML as a tree structure of tags. Here's how it looks:
```html
<html>
  |--- <head>
  |       |--- text
  |       |--- <title>
  |       |         |--- text "About Tus"
  |
  |--- text
  |
  |--- <body>
  |      |--- text "Something about Tusss..."
```
### Autocorrection
If the browser encounters malformed HTML, it automatically corrects it when making the DOM.

For instance, the top tag is always `<html>`. Even if it doesn't exist in the document, it will exists in
the DOM, because the browser will create it. The same goes for `<body>`.

As an example, if the HTML file is the single word `"Hello"`, the browser will wrap it into `<html>` and
`<body>`, and add the required `<head>`, and the DOM will be:
```html
<html>
    |--- <head>
    |
    |--- <body>
    |       |--- text "Hello"
```
> An interesting "special case" is tables. by DOM specification they must have `<tbody>` tag, but HTML
> text may omit it. Then the browser creates `<tbody>` in the DOM automatically
> ```html
> <table id="table"><tr><td>1</td></tr></table>
> ```
> ```html
> <table>
>     |--- <tbody>
>     |         |--- <tr>
>     |         |      |--- <td>
>     |         |      |       |--- text "1"
> ```
### Other node types
There are [12 node types](https://dom.spec.whatwg.org/#node). In practice we usually work 4 of them:
- `document` - the "entry point" into DOM
- element nodes - HTML tags, the tree building blocks
- text nodes - contain text
- comments - sometimes we can put information here, it won't be shown, but JS can read it from the DOM

</details>

<br></br>

## Walking the DOM

<details open>
<summary>Details</summary>

The DOM allows us to do anything with elements and their contents, but first we need to reach the
corresponding DOM object. All operations on the DOM start with the `document` object - the main
"entry point".

<br></br>

![DOM nodes](/images/blogs/uncommon_javascript_notes_1/1.webp "DOM nodes")

<br></br>

### On top: documentElement and body
```html
<html> = document.documentElement
<body> = document.body
<head> = document.head
```
> `document.body` can be `null`

### Children: childNodes, firstChild, lastChild
There are 2 terms that we'll use from now on:
- **Child nodes (or children)** - elements that are direct children. For instance, `<head>` and `<body>`
are children of `<html>` element.
- **Descendants** - all elements that are nested in the given one, including children, their children,
and so on.
```js
childNodes - lists all child nodes, including text nodes
firstChild - gives fast access to the first children
lastChild - gives fast access to the last children
```

### DOM collections
As we can see, `childNodes` looks like an array. But actually it's not an array, but rather a *collection* - a special array - like iterable object.

There are 2 important consequences:
- We can use `for..of` to iterate over it:
  ```js
  for (let node of document.body.childNodes) {
      console.log(node);
  }
  ```
- Array methods won't work, because it's not an array:
  ```js
  alert(document.body.childNodes.filter); // undefined (there's no filter method)
  alert(Array.from(document.body.childNodes).filter) // function
  ```
> - DOM collections are read-only.
> - DOM collections are live (current state of DOM).
> - Don't use `for..in` to loop over collections.

### Siblings and the parent
*Siblings* are nodes that are children of the same parent. For instance, `<head>` and `<body>` are
siblings:
- `<body>` is said to be the "next" or "right" sibling of `<head>`
- `<head>` is said to be the "previous" or "left" sibling of `<body>`
The next sibling is in `nextSibling` property, and the previous one - in `previousSibling`. The parent
is available as `parentNode`.
```js
alert(document.body.parentNode === document.documentElement); // true
alert(document.head.nextSibling); // HTMLBodyElement
alert(document.body.previousSibling); // HTMLHeadElement
```

### Element-only navigation
Navigation properties listed above refer to all nodes. But for many tasks we don't want text or comment
nodes. We want to manipulate element nodes that represents tags and form the structure of the page.

So let's see more navigation links that only take *element nodes* into account:

<br></br>

![element nodes](/images/blogs/uncommon_javascript_notes_1/2.webp "element nodes")

<br></br>

The links are similar to those given above, just with `Element` word inside:
- `children` - only those children that are element nodes.
- `firstElementChild`, `lastElementChild` - first and last element children.
- `previousElementSibling`, `nextElementSibling` - neighbor elements.
- `parentElement` - parent element.

### More links: tables
The `<table>` element supports (in addition to the given above) these properties:
- `table.rows` - the collection of `<tr>` elements of the table.
- `table.caption/tHead/tFoot` - references to elements `<caption>`, `<thead>`, `<tfoot>`
- `table.tBodies` - the collection of `<tbody>` elements (can be many according to the standard, but
there will alwas be at lest one - even if it is not in the source HTML, the browser will put it in the
DOM).

`<thead>`, `<tfoot>`, `<tbody>` elements provide the `rows` property:
- `tbody.rows` - the collection of `<tr>` inside.

`<tr>`:
- `tr.cells` - the collection of `<td>` and `<th>` cells inside the given `<tr>`
- `tr.sectionRowIndex` - the position (index) of the given `<tr>` inside the enclosing
`<thead>/<tbody>/<tfoot>`.
- `tr.rowIndex` - the number of the `<tr>` in the table as a whole (including all table rows).

`<td>` and `<th>`:
- `<td.cellIndex` - the number of the cell inside the enclosing `<tr>`.

</details>

<br></br>

## Searching: getElement*, querySelector*
<details open>
<summary>Details</summary>

- `document.getElementById` - If an element has the `id` attribute, we can get the element no matter
where it is.
- `elem.querySelectorAll(css)` - Returns all elements inside `elem` matching the given CSS selector.
- `elem.querySelector(css)` - Returns the first element for the given CSS selector.
- `elem.matches(css)` - Checks if an `elem` matches the given CSS-selector. It returns `boolean`.
- `elem.closest(css)` - Looks for the nearest ancestor that matches the CSS-selector. The `elem` itself
is also included in the search.
- `elem.getElementsByTagName(tag)` - Looks for elements with the given tag an returns the collection of
them. The `tag` parameter can also be a star `"*"` for "any tags".
- `elem.getElementsByClassName(className)` - Returns elements that have the given CSS class.
- `document.getElementsByName(name)` returns elements with the given `name` attribute, document-wide. Very
rarely used.

</details>

<br></br>

## Node properties: type, tag and contents
<details open>
<summary>Details</summary>

### DOM node classes
Different DOM nodes may have different properties. For instance, an element node corresponding to tag
`<a>` has a link-related properties, and the one corresponding to `<input>` has input-related properties
and so on.

Each DOM node belongs to the corresponding built-in class. The root of the hierarchy is
[EventTarget](https://dom.spec.whatwg.org/#eventtarget), that is inherited by [Node](https://dom.spec.whatwg.org/#interface-node),
and other DOM nodes inherit from it.

<br></br>

![DOM node classes](/images/blogs/uncommon_javascript_notes_1/3.webp "DOM node classes")

<br></br>

> To see the DOM node class name, we can recall that an object ususally has the `constructor` property.
> It references the class constructor, and `constructor.name` is its name:
> ```js
> alert(document.body.constructor.name) // HTMLBodyElement
> ```

### The "nodeType" property
The `nodeType` property provides one more, "old-fashioned" way to get the "type" of a DOM node.

It has a numeric value:
- `elem.nodeType == 1` for element nodes,
- `elem.nodeType == 3` for text nodes,
- `elem.nodeType == 9` for the document object,
- There are few other values in [the specification](https://dom.spec.whatwg.org/#node)

In modern scripts, we can use `instanceof` and other class-based tests to see the node type, but sometimes
`nodeType` may be simpler.

### Tag: nodeName and tagName
Given a DOM node, we can read its tag name from `nodeName` or `tagName` properties:
```js
alert(document.body.nodeName); // BODY
alert(document.body.tagName); // BODY
```
Differences between `tagName` and `nodeName`:
- the `tagName` property exists only for `Element` nodes.
- the `nodeName` is defined for any `Node`:
  + For elements it means the same as `tagName`.
  + For other node types (text, comment, etc...) it has a string with the node type.

### innerHTML: the contents
The [innerHTML](https://w3c.github.io/DOM-Parsing/#the-innerhtml-mixin) property allows to get the HTML
inside the element as a string.

### Beware: "innerHTML +=" does a full overwrite
We can append HTML like this
```js
elem.innerHTML += "<div>Hello<img src='smile.gif'/> !</div>";
elem.innerHTML += "How goes?";
```
But we should be very careful about doing it, because what's going on is *not* an addition, but a full
overwrite. Technically, these 2 lines do the same:
```js
elem.innerHTML += "...";
elem.innerHTML = elem.innerHTML + "..."
```
1. The old contents is removed
2. The new `innerHTML` is written instead (a concatenation of the old and the new one).

> As the content is "zeroed-out" and rewritten from the scratch, all images and other resources will
be reloaded.

### outerHTML: full HTML of the element
The `outerHTML` property contains the full HTML of the element. That's like `innerHTML` plus the element
itself.

```html
<div id="elem">Hello <b>World</b></div>

<script>
  alert(elem.outerHTML);
  // element id 'elem'
</script>
```

> Unlike `innerHTML`, writing to `outerHTML` does not change the element. Instead, it replaces it in the
> DOM
> ```html
> <div>Hello, world!</div>
>
> <script>
>   let div = document.querySelector('div');
>
>   // replace div.outerHTML with <p>...</p>
>   div.outerHTML = '<p>A new element</p>';
>
>   // The 'div' still the same
>   alert(div.outerHTML); // <div>Hello, world!</div>
> </script>
> ```
>
> What happened in `div.outerHTML=...` is:
>
> - `div` was removed from the document.
> - Another piece of HTML `<p>A new element</p>` was inserted in its place.
> - `div` still has its old value. The new HTML wasn't saved to any variable.

### nodeValue/data: text node content

The `innerHTML` property is only valid for element nodes.

Other node types, such as text nodes, have their counterpart: `nodeValue` and `data` properties.
These two are almost the same for practical use, there are only minor specification differences.

```html
<body>
  Hello
  <!-- Comment -->
  <script>
    let text = document.body.firstChild;
    alert(text.data); // Hello

    let comment = text.nextSibling;
    alert(comment.data); // Comment
  </script>
</body>
```

### textContent: pure text
The `textContent` provides access to the *text* inside the element: only text, minus all `<tags>`
```html
<div id="news">
  <h1>Headline!</h1>
  <p>Martians attack people!</p>
</div>

<script>
  // Headline! Martians attack people!
  alert(news.textContent);
</script>
```
> Writing to `textContent` is much more useful, because it allows to write text the "safe way"

### The "hidden" property
The "hidden" attribute and the DOM property specifies whether the element is visible or not
```html
<div>Both divs below are hidden</div>

<div hidden>With the attribute "hidden"</div>

<div id="elem">JavaScript assigned the property "hidden"</div>

<script>
  elem.hidden = true;
</script>
```

### More properties
- `value` - the value for `<input>`, `<select>` and `<textarea>` (`HTMLInputElement`, `HTMLSelectElement`...)
- `href` - the "href" for `<a href="...">` (`HTMLAnchorElement`)
- `id` - the value of "id" attribute, for all elements (`HTMLElment`)
- ...and much more...

</details>

<br></br>

## Attributes and properties
<details open>
    <summary>Details</summary>

### DOM properties
There are a lot of built-in DOM properties, but technically no one limits us, and if there aren't
enough, we can add our own.

```javascript
document.body.myData = {
  name: 'Caesar',
  title: 'Imperator'
};

alert(document.body.myData.title); // Imperator

document.body.sayTagName = function() {
  alert(this.tagName);
}

document.body.sayTagName(); // BODY (the value of "this" in the method is document.body)
```
We can also modify built-in prototypes like `Element.prototype` and add new methods to all elements:
```js
Element.prototype.sayHi = function() {
  alert(`Hello, I'm ${this.tagName}`);
}
document.documentElement.sayHi(); // Hello, I'm HTML
document.body.sayHi(); // Hello, I'm BODY
```

### HTML attributes
```html
<body id="test">
  <script>
    alert(document.body.id); // test
  </script>
</body>
```
All attributes are accessible by using the following mthods:
- `elem.hasAttribute(name)` - checks for existence
- `elem.getAttribute(name)` - gets the value
- `elem.setAttribute(name, value)` - sets the value
- `elem.removeAttribute(name)` - removes the attribute

> - Attribute names are case-insensitive
> - We can assign anything to an attribute, but it becomes a string
> - All attributes are visible in `outerHTML`
> - The `attributes` collection is iterable and has all the attributes of the element (standard and
> non-standard) as objects with `name` and `value` properties

### Property-attribute synchronization
When a standard attribute changes, the corresponding property is auto-updated, and (with some exception)
vice versa.
```html
<input>

<script>
  let input = document.querySelector('input');

  // attribute -> property
  input.setAttribute('id', 'id');
  alert(input.id); // id (updated)

  // property -> attribute
  input.id = 'newId';
  alert(input.getAttribute('id')); // newId (updated)
</script>
```
But there are exclusions, for instance `input.value` synchronizes only from attribute -> property, but
not back:
```js
// attribute => property
input.setAttribute('value', 'text');
alert(input.value) // text

// NOT property => attribute
input.value = 'newValue';
alert(input.getAttribute('value')); // text (not updated)
```

### DOM properties are typed
- DOM properties are not always strings.
- For instace, the `input.checked` property (for checkboxes) is a boolean
- The `style` attribute is a string, but the `style` property is an object
- The `href` DOM property is always a *full* URL, even if the attribute contains a relative URL or just
a `#hash`
  ```html
  <a id="a" href="#hello">link</a>
  <script>
    // attribute
    alert(a.getAttribute('href')); // #hello

    //property
    alert(a.href); // full URL in the form https://example.com/page#hello
  ```

### Non-standard attributes, dataset
Sometimes non-standard attributes are used to pass custom data from HTML to JavaScript, or to "mark"
HTML-elements for JavaScript
```html
<!-- mark the div to show "name" here -->
<div show-info="name"></div>
<!-- and age here -->
<div show-info="age"></div>

<script>
  // the code finds an element with the mark and shows what's requested
  let user = {
    name: "Peter",
    age: 25,
  };

  for (let div of document.querySelectorAll('[show-info]')) {
    // insert the corresponding info into the field
    let field = div.getAttribute('show-info');
    div.innerHTML = user[field]; // first Pete into "name", then 25 into "age"
  }
</script>
```
Also they can be used to style an element.
```html
<style>
  /* style rely on the custom attribute "order-state" */
  .order[order-state="new"] {
    color: green;
  }
  .order[order-state="pending"] {
    color: blue;
  }
  .order[order-state="canceled"] {
    color: red;
  }
</style>

<div class="order" order-state="new">
  A new order.
</div>

<div class="order" order-state="pending">
  A pending order.
</div>

<div class="order" order-state="canceled">
  A canceled order.
</div>
```
To avoid conflicts in development, there exist [data-*](https://html.spec.whatwg.org/#embedding-custom-non-visible-data-with-the-data-*-attributes)
attributes.
> All attributes starting with "data-" are reserved for programmers' use. They are available in the
> `dataset` property
```html
<body data-about="Elephants">
<script>
  alert(document.body.dataset.about); // Elephants
</script>
```

</details>

<br></br>

## Modifying the document
<details open>
    <summary>Details</summary>

### Creating an element
`document.createElement(tag)`
```javascript
let div = document.createElement('div');
```
`document.createTextNode(text)`
```javascript
let textNode = document.createTextNode('Lmao');
```

### Insertion method
```javascript
document.body.append(div);
```
- `node.append(...nodes or strings)`: append nodes or strings *at the end* of
`node`.
- `node.prepend(...nodes or strings)`: insert nodes or strings *at the beginning* of `node`.
- `node.before(...nodes or strings)`: insert nodes or strings *before* `node`.
- `node.after(...nodes or strings)`: insert nodes or strings *after* `node`.
- `node.replaceWith(...nodes or strings)`: replaces `node` with the given
nodes or strings.

### insertAdjacentHTML / Text / Element
`elem.insertAdjacentHTML(where, html)`

The first parameter is a code word, specifying where to insert relative to
`elem`. Must be one of the following:
- `"beforebegin"`: insert `html` immediately before `elem`.
- `"afterbegin"`: insert `html` into `elem`, at the beginning.
- `"beforeend"`: insert `html` into `elem`, at the end.
- `"afterend"`: insert `html` immediately after `elem`.

The method has 2 brothers:
- `elem.insertAdjacentText(where, text)`: the same syntax, but a string of text
is inserted "as text" instead of HTML.
- `elem.insertAdjacentElement(where, elem)`: the same syntax, but inserts an
element.

### Node removal
```js
elem.remove()
```
> All insertion methods automatically remove the node from the old place

### Cloning nodes: cloneNode
The call `elem.cloneNode(true)` creates a "deep" clone of the element - with all attributes and
subelements. If we call `elem.cloneNode(false)`, then the clone is made without child elements.
```javascript
let div2 = div.cloneNode(true); // clone the existing div
div2.querySelector('b').innerHTML = 'Bye there!'; // change the clone

div.after(div2); // show the clone after the existing div
```

### DocumentFragment
`DocumentFragment` is a special DOM node that servers as a wrapper to pass around lists of nodes. We canappend other nodes to it, but when we insert it somewhere, then its content is inserted instead.
```html
<ul id="ul"></ul>

<script>
  function getListContent() {
    let fragment = new DocumentFragment();

    for (let i = 1; i <= 3; i++) {
      let li = document.createElement('li');
      li.append(i);
      fragment.append(li);
    }

    return fragment;
  }

  ul.append(getListContent()); // (*)
</script>
```
At the last line `(*)` we append `DocumentFragment`, but it "blends in", so the resulting structure will be:
```html
<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
</ul>
```
> `DocumentFragment` is rarely used explicitly. We mention it mainly because there are some concepts on
top of it, like [template](#template-element) element, that we'll cover much later.

</details>

<br></br>

## Styles and classes
<details open>
    <summary>Details</summary>

There are generally 2 ways to style an element:
1. Create a class in CSS and add it: `<div class="...">`
2. Write properties directly into `style`: `<div style="...">`

JavaScript can modify both classes and `style` properties.
```javascript
let top = /* complex calculations */;
let left = /* complex calculations */;

elem.style.top = top;
elem.style.left = left;
```

### className and classList
The `elem.className` corresponds to the `"class"` attribute
```html
<body class= "main page">
  <script>
    alert(document.body.className); // main page
  </script>
</body>
```
Methods of `classList`:
```javascript
elem.classList.add("class") // Adds the class
elem.classList.remove("class") // Removes the class
elem.classList.toggle("class") // Adds the class if it doesn't exist, otherwise reomves it
elem.classList.contains("class") // checks for the given class, returns boolean
```

### Element style
The property `elem.style` is an object that corresponds to what's written in the `"style"` attribute.
```
width => elem.style.width

background-color  => elem.style.backgroundColor
z-index           => elem.style.zIndex
border-left-width => elem.style.borderLeftWidth
```

### Resetting the style property
`elem.style.removeProperty('style property)`: Remove a property of style

### Mind the units
```javascript
document.body.style.margin = 20; // doesn't work
document.body.style.margin = '20px'; // Add the CSS unit and it works
```

### Computed styles: getComputedStyle
> The `style` property operates only on the value of the `"style"` attribute, without CSS cascade.

So we can't read anything that comes from CSS classes using `elem.style`

There is another method for that: `getComputedStyle`.

```javascript
getComputedStyle(element, [pseudo])
```
```javascript
let computedStyle = getComputedStyle(document.body);
alert(computedStyle.marginTop);
alert(computedStyle.color);
```

</details>

<br></br>

## Element sizes and scrolling
<details open>
    <summary>Details</summary>

### Sample element
```html
<div id="example">
  ...Text...
</div>
<style>
  #example {
    width: 300px;
    height: 200px;
    border: 25px solid #E6E6E6;
    padding: 20px;
    overflow: auto;
  }
</style>
```
![sample element](/images/blogs/uncommon_javascript_notes_1/4.webp "Sample element")

> Mind the scrollbar. If the scrollbar is `16px` wide then the content width remains only `300 - 16 = 284px`.

### Geometry
Here's the overall picture with geometry properties:

![Geometry picture](/images/blogs/uncommon_javascript_notes_1/5.webp "Geometry picture")

- `offsetWidth`: The outer width = inner CSS-width + paddings + borders
- `offsetHeight`: The outer height = inner CSS-height + paddings + borders
- `clientLeft`: Left border width
- `clientTop`: Top border width
- `clientWidth`: The inner width = inner CSS-width + paddings (exclude scrollbar)
- `clientHeight`: The inner height = inner CSS-height + paddings (exclude scrollbar)
- `scrollWidth`: The full inner width including the scrolled out parts
- `scrollHeight`: The full inner height including the scrolled out parts
- `scrollTop`: *How much is scrolled up*
- `scrollLeft`: *How much is scrolled left*

### Don't take width/height from CSS
We should use geometry properties instead of `getComputedStyle`:
1. CSS `width/height` depend on another property: `box-sizing` that defines "what is" CSS width and
height. A change in `box-sizing` for CSS purpose may break such JavaScript.
2. CSS `width/height` maybe `auto`
    ```html
    <span id="elem">Hello!</span>

    <script>
      alert(getComputedStyle(elem).width); // auto
    </script>
    ```
3. A scrollbar

</details>

<br></br>

## Window sizes and scrolling
<details open>
    <summary>Details</summary>

### Width/height of the window
```javascript
documentElement.clientHeight;
documentElement.clientWidth;
```
> Not `window.innerWidth/innerHeight`
> ```javascript
> alert(window.innerWidth); // full window width
> alert(document.documentElement.clientWidth); // window width minus the scrollbar
> ```

### Width/height of the document
Theoretically, as the root document element is `document.documentElement`, and it encloses all the content,
we could measure the document's full size as `document.documentElement.scrollWidth/scrollHeight`.

But on that element, for the whole page, these properties do not work as intended. In Chrome/Safari/Opera, if
there's no scroll, then `documentElement.scrollHeight` may be even less than `documentElement.clientHeight`
! Weird, right?

To reliably obtain the full document height. we should take the maximum of these properties:
```javascript
let scrollHeight = Math.max(
  document.body.scrollHeight, document.documentElement.scrollHeight,
  document.body.offsetHeight, document.documentElement.offsetHeight,
  document.body.clientHeight, document.documentElement.clientHeight
);
```

### Get the current scroll
DOM elements have their current scroll state in their `scrollLeft/scrollTop` properties.

For document scroll: `document.documentElement.scrollLeft/scrollTop`

Speical properties: `window.pageXOffset/pageYOffset`

> For historical reasons, these properties are the same:
> - `window.pageXOffset` is an alias of `window.scrollX`
> - `window.pageYOffset` is an alias of `window.scrollY`

### Scrolling: scrollTo, scrollBy, scrollIntoView
- `window.scrollBy(x,y)` - scrolls the page *relative to its current position*
- `widnow.scrollTo(pageX, pageY)` - scrolls the page to *absolute coordinates*, so that the top-left corner
of the visible part has coordinates `(pageX, pageY)` ralative to the document's top-left corner. It's like setting
`scrollLeft/scrollTop`

***scrollIntoView***\
The call to `elem.scrollIntoView(top)` scrolls the page to make `elem` visible. It has one argument:
- If `top=true` (default), then the page will be scrolled to make `elem` appear on the top of the window. The
upper edge of the element will be aligned with the window top.
- If `top=false`, then the page scrolls to make `elem` appear at the bottom. The bottom edge of the element
will be aligned with the window bottom.

### Forbid the scrolling
```javascript
document.body.style.overflow = "hidden"
```

</details>

<br></br>

## Coordinates
<details open>
    <summary>Details</summary>

Most JavaScript methods deal with one of 2 coordinate systems:
1. **Relative to the window** - similar to `position: fixed`, calculated from the window top/left edge.
    - We'll denote these coordinates as `clientX/clientY`.
2. **Relative to the document** - similar to `position: absolute` in the document root, calculated from the
document top/left edge.
    - We'll denote them `pageX/pageY`.

### Element coordinates: getBoundingClientRect
```javascript
elem.getBoundingClientRect()
```
Returns window coordinates for a minimal rectangle that encloses `elem` as an object of built-in
[DOMRect](https://www.w3.org/TR/geometry-1/#domrect) class.

Main `DOMRect` properties:
- `x/y`: X/Y-coordinates of the rectangle origin relative to window.
- `width/height`: width/height of the rectangle (can be negative).

Additionally, there are derived properties:
- `top/bottom`: Y-coordinates for the top/bottom rectangle edge.
- `left/right`: X-coordinates for the left/right rectangle edge.

Output
```ts
x: 10
y: 314.82812
width: 419.796875
height: 21
top: 314.82812
bottom: 335.828125
left: 10
right: 429.796875
```

As you can see, `x/y` and `width/height` fully describe the element. Derived properties can be easily calculated
from them:
- `left = x`
- `top = y`
- `right = x + width`
- `bottom = y + height`

> - Coordinates may be decimal fractions, e.g. `10.5`.
>
> - Coordinates may be negative. For instance, if the page is scrolled so that `elem` is now above the window.

### elementFromPoint(x,y)
```javascript
let elem = document.elementFromPoint(x, y);
```
Returns the most nested element at window coordinates `(x,y)`.

### Document coordinates
The 2 coordinates systems are connected by the formula:
- `pageY` = `clientY` + height of the scrolled-out vertical part of the document.
- `pageX` = `clientX` + width of the scrolled-out horizontal part of the document.

```javascript
function getCoords(elem) {
  let box = elem.getBoundingClientRect();

  return {
    top: box.top + window.pageYOffset,
    right: box.right + window.pageXOffset,
    bottom: box.bottom + window.pageYOffset,
    left: box.left + window.pageXOffset
  };
}
```

</details>

# Introduction to Events
> An introduction to browser events, event properties and handling patterns.

## Introduction to browser events
<details open>
    <summary>Details</summary>

Here's a list of the most useful DOM events:

**Mouse events:**
- `click` when the mouse click on an element
- `contextmenu` when the mouse right-clicks on an element
- `mouseover` / `mouseout` when the mouse cursor comes over / leaves an element
- `mousedown` / `mouseup` when the mouse button is pressed / released over an element
- `mousemove` when the mouse is moved

**Keyboard events:**
- `keydown` and `keyup` when a keyboard key is pressed and released

**Form element events:**
- `submit` when the visitors submits a `<form>`
- `focus` when the visitor focuses on an element, e.g. on an `<input>`

**Document events:**
- `DOMContentLoaded` when the HTML is loaded and processed, DOM is fully built

**CSS events:**
- `transitioned` when a CSS-animation finishes

### Event handlers
To react on events we can assign a *handler* - a function that runs in case of an event.

#### HTML-attribute
A handler can be set in HTML with an attribute named `on<event>`.
```html
<input value="Slap me" onclick="alert('Slapped!')" type="button">
```

#### DOM property
We can assign a handler using a DOM property `on<event>`.
```html
<input id="elem" type="button" value="Slap me">
<script>
  const elem = document.getElementById('elem');
  elem.onclick = function() {
    alert('Ouch...');
  };
</script>
```

### Possible mistakes
We can set an existing function as a handler. But be careful: the function should be assigned without parentheses
```javascript
function sayThanks() {
  alert('Thanks!');
}

elem.onclick = sayThanks; // ok
elem.onclick = sayThanks(); // nope
```
If we add parentheses, then `sayThanks()` becomes a function call. So the last line actually takes the *result* of the function execution,
that is `undefined` (as the function returns nothing), and assigns it to `onclick`. That's doesn't work because we need to assign the
function.

...On the other hand, in the markup we do need the parentheses:
```html
<input type="button" id="button" onclick="sayThanks()">
```
When the browser reads the attribute, it creates a handler function with body from the attribute content.

> Don't use `setAttribute` for handlers. Such a call won't work:
> ```javascript
> // a click on <body> will generate errors,
> // because attributes are always strings, function becomes a string
> document.body.setAttribute('onclick', function() { alert(1) });
> ```

### addEventListener
The fundamental problem of the aforementioned ways to assign handlers is that we *can't assign multiple handlers to one event.*

Developers of web standards understood that long ago and suggested an alternative way of managing handlers using the special methods
`addEventListener` and `removeEventListener` which aren't bound by such constaint.

The syntax to add a handler:
```javascript
element.addEventListener(event, handler, [options])
```

`event`\
Event name, e.g. `"click"`

`handler`\
The handler function.

`options`\
An addition optional object with properties:
- `once: boolean`: if `true`, then the listener is automatically removed after it triggers.
- `capture: boolean`: the phase where to handle the event.
- `passive: boolean`: if `true`, then the handler will not call `preventDefault()`

To remove the handler, use `removeEventListener`:
```javascript
element.removeEventListener(event, handler)
```

### Event object
To properly handle an event we'd want to know more about what's happened. Not just a "click" or a "keydown", but whate were the pointer
coordinates? Which key was pressed? And so on.

When an event happens, the browser creates an *event object*, puts details into it and passes it as an argument to the handler.

```javascript
elem.onclick = function(event) {
  // show event type, element and coordinates of the click
  alert(event.type + " at " + event.currentTarget);
  alert("Coordinates: " + event.clientX + ":" + event.clientY);
}
```

### Object handlers: handleEvent
We can assign not just a function, but an object as an event handler using `addEventListener`. When an event occurs, its 'handleEvent'
method is called.
```javascript
let obj = {
  handleEvent(event) {
    alert(event.type + " at " + event.currentTarget);
  }
};

elem.addEventListener('click', obj);
```

</details>

## Bubbling and capturing
<details open>
    <summary>Details</summary>

```html
<div onclick="alert('The handler!')">
  <em>If you click on <code>EM</code>, the handler on <code>DIV</code> runs.</em>
</div>
```

### Bubbling
> When an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors.
```html
<!-- The event handlers will be triggered from p -> div -> form -->
<form id="form" style="border: 1px solid black; cursor: pointer;" onClick="alert">
  --> click on FORM
  <div id="div" style="border: 1px solid black; margin: 10px; cursor: pointer;">
    --> click on DIV
    <p id="p" style="border: 1px solid black; margin: 10px; cursor: pointer;"> --> click on P</p>
  </div>
</form>
```

### event.target
A handler on a parent element can always get the details about where it actually happened.

> The most deeply nested element that caused the event is called a *target* element, accessible as `event.target`.

The differences from `this` (= `event.currentTarget`):
- `event.target`: is the "target" element that initiated the event, it doesn't change through the bubbling process.
- `this`: is the "current" element, the one that has a currently running handler on it.

### Stopping bubbling
A bubbling event goes from the target element straight up. Normally it goes upwards till `<html>`, and then to `document` object, and some
events even reach `window`, calling all handlers on the path.

But any handler may decide that the event has been fully processed and stop the bubbling.

The method for it is `event.stopPropagation()`.
```html
<body onclick="alert(`the bubbling doesn't reach here`)">
  <button onclick="event.stopPropagation()">Click me</button>
</body>
```

### Capturing
There's another phase of event processing called "capturing". It is rarely used in real code, but sometimes can be useful.

The standard [DOM Events](https://www.w3.org/TR/DOM-Level-3-Events/) describes 3 phases of event propagation:
1. Capturing phase - the event goes down to the element.
2. Target phase - the event reached the target element.
3. Bubbling phase - the event bubbles up from the element.

![Event propagation](/images/blogs/uncommon_javascript_notes_1/6.webp "Event propagation visualizer")

To catch an event on the capturing phase, we need to set the handler `capture` option to `true`:
```js
elem.addEventListener(..., {capture: true});

// or, just "true" is an alias to {capture: true}
elem.addEventListener(..., true);
```
There are 2 possible values of the `capture` option:
- If `false` (default), then the handler is set on the bubbling phase.
- If it's `true`, then the handler is set on the capturing phase.

</details>

<br></br>

## Event delegation
Capturing and bubbling allow us to implement one of the most powerful event handling patterns called *event delegation*.

The idea is that if we have a lot of elements handled in a similar way, then instead of assigning a handler to each of them - we put a
single handler on their common ancestor.

See the detailed example [here.](https://javascript.info/event-delegation)


> Updating...



