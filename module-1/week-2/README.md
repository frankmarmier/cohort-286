# Cheat sheet

## Querying elements

- Getting a single element by it's id.

```javascript
const myElement = document.getElementById("string");
```

- Getting a single element with a css selector
  This method will find the first element in the HTML hierarchy
  that matches the css selector.

```javascript
const myElement = document.querySelector(".css > selector");
```

- Getting a list of elements with a css selector

```javascript
const elements = document.querySelectorAll(".selector");
```

^ This will return a NodeList (you can forEach), it will be
an array-like object with elements that match the selector

- Getting elements by tag name

```javascript
const elements = document.getElementsByTagName("p");
```

^ This will return an HTML Collection, an array-like object aswell
containing all the HTMLElements that are `p` tags

- Getting elements by class name

```javascript
const elements = document.getElementsByClassName("student");
```

^ This will return an HTML Collection, an array-like object aswell
containing all the HTMLElements with the `student` class name.

---

## Updating the DOM !

- Changing an elements property

```javascript
const myElement = document.getElementById("foo");

myElement.id = "bar"; // id is now bar
myElement.className = `some-class`; // class is now some-class
myElement.style.backgroundColor = "red"; // background-color is now red !
```

- Changing the classList

```javascript
const myElement = document.getElementById("foo");

myElement.classList.add("some-class"); // adds a class some-class to
myElement.classList.remove("some-class"); // removes a class some-class to

myElement.classList.toggle("some-class"); // toggles a class some-class to
// If the element already  has the class "some-class"
// it will remove it, otherwise it will add it.
```

- Updating an elements content

```javascript
const myElement = document.getElementById("foo");
// Changing the innerHTML.

myElement.innerHTML = `<h2>Hello world</h2>`;
// myElement now contains a single child that is an h2 tag with some text.

// With create element

const title = document.createElement("h2");
h2.textContent = "Hello world";
myElement.appendChild(h2);
// myElement has an h2 that has been added as a child.
```
