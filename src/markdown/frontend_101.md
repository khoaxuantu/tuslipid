## Introduction

Frontend development can feel like a rollercoaster. One minute you are building something beautiful, the next you are wrestling with a seemingly simple task like centering a div for hours, and the last you introduce a monstrous, complicated as f\*ck component.

We can be hyped about any new UI library easily, yet the fundamentals seem to slip away, and finally we never want to press the F12 again...

What's the problem here?

The web, at its core, is basically a kind of document - a digital page, much like a magazine or a book, viewed through your browser. We have somehow taken this simple concept and built something incredibly complex.

Now, let me ask you one question: Can you generalize your frontend knowledge to featured concepts so we can have an overview of what frontend development is?

If you can't, here is your answer...

## Web standards first

> HTML, CSS, and JavaScript

Everything of a website is built on top of them: HTML for the document structure, CSS for the styling, and JavaScript for controlling dynamic behavior.

Whatever technologies you choose to dramatize your development knowledge (TypeScript, React, Vue, Angular, Tailwind, Sass, etc...), they will all become those three after a building command.

> You can learn more about the details of web standards via [MDN web docs](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/The_web_standards_model).

### HTML

HyperText Markup Language, or HTML, is a markup language consisting of different elements you can wrap content in to give it ***meaning (semantics)*** and ***structure***.

```html
<body>
  <header></header>
  <section>
    <ul>
      <li></li>
      <li></li>
    </ul>
  </section>
  <section>
    <p></p>
  </section>
  <footer></footer>
</body>
```

### CSS

Cascading Style Sheets (CSS) is a rule-based language used to apply styles to your HTML.

```css
body {
  header {
    padding: 16px;
  }

  section {
    margin: 16px;
  }

  footer {
    font-size: smaller;
  }
}
```

### JavaScript

JavaScript is the programming language we use to add interactivity to websites, from dynamic style switching, to fetching updates from the server, right through to complex 3D graphics.

In the browser context, JavaScript comes with many built-in APIs that help developers connect the UI to the underlying levels of the browser. They are commonly called [Web APIs](https://developer.mozilla.org/en-US/docs/Web/API).

## Rendering

We all know that the browser reads the HTML and CSS of a web and displays it to a monitor.

However, in a frontend project, developers don't have to write exactly thousands of HTML files.

Instead, they can use different frameworks based on various programming languages for better productivity. Then they generate the HTML, CSS, or JavaScript files and publish them to the Internet in build time or runtime.

To understand how a web framework works, it is critical to understand where the static files are generated in production.

### Static Site Deployment

In the most primitive way, we write a simple web in HTML files, copy those files to a folder in our remote machine, and then configure a proxy to serve the files to the Internet.

I call it the **Static Site Deployment**.

### Static Site Generation (SSG)

We are storing hundreds of articles with plain text format in a database. They are waiting to be published.

We need a more elegant way than writing hundreds of corresponding HTML files. Thus, the scripts that transform a plain text document to an HTML document are introduced. It helps to generate the HTML files at build time and deploy them to the production environment.

I call it the **Static Site Generation**.

Many frameworks support SSG, for instance, [Next.js Pages router](https://nextjs.org/docs/pages/building-your-application/rendering/static-site-generation), [Astro](https://astro.build/),  [Nue](https://nuejs.org/), etc...

### Server Side Rendering (SSR)

Here comes the dynamic web, where the content changes depending on the data stored in the database.

We want a way to reflect the HTML changes from the data changes. One way is to generate a chunk of HTML code in the server as a response for each request.

I call it the **Server Side Rendering**.

SSR is supported in the majority of frontend frameworks, for example, [Next.js](https://nextjs.org/), [Angular](https://angular.dev/), or [Vue](https://vuejs.org/); and server-side frameworks such as [Django](https://www.djangoproject.com/), [Flask](https://flask.palletsprojects.com/en/stable/), [Ruby on Rails](https://rubyonrails.org/), etc...

### Client Side Rendering (CSR)

Hey, I want to build a web application whose behavior is when changing a view, it just changes certain chunks of HTML, not the whole document. This way, it keeps us on the same page and minimizes the page transition effects.

The term **Single Page Application** is introduced.

To be able to perform this behavior, we need a lot of help from JavaScript in the client's browser. The rendering procedures are changed as well:

1. The client fetches the JavaScript and HTML template files from the server.
2. When the DOM is ready at the client's browser, it runs JavaScript rendering scripts.
3. The JavaScript scripts generate HTML code and inject it into the HTML base file.
4. The browser reflects the UI from the HTML changes.

I call it the **Client Side Rendering**.

[React](https://react.dev/), [Angular](https://angular.dev/), and [Vue](https://vuejs.org) primarily support CSR.

## Routing

The routing of static pages is simple. It follows the HTML file system correspondingly. For example, we have a source folder as follows:

```
index.html
resource-a.html
resource-b
|--- index.html
|--- sub
|    |--- index.html
|    |--- sth.html
```

The routing will present as:

```
/
/resource-a.html
/resource-b
/resource-b/sub
/resource-b/sub/sth.html
```

In CSR and SSR, the routing is more complex. You have to define a router configuration manually or follow frameworks' conventions.

## Responsive design

One of the major problems with web design is responsive web, in which you have to ensure your web is fit with different screen resolutions.

Many developers are stuck with how to make a component responsive. Of course we cannot expect a developer to truly understand design stuff, but at least we should be able to understand how it works in the most fundamental way.

Let me share some tips to make the responsive design easier:

- F12 my site :)
- The HTML document is responsive by default. It is important; you can avoid many CSS overrides if you respect HTML tags' default display.
- Your wrapper component should automatically make its child components responsive to your screen. If not, there must be some components with a certain height or width that break the rule.
- You should not set a fixed height to any component.
- Common media queries I use for mobile, tablet, and desktop. They can give you a good start, and then you can extend it to the more specific breakpoints, depending on your design (i.e., 320px, 1440px, etc.):
	- Mobile: min-width 576px
	- Tablet: min-width 768px
	- Desktop: min-width 1200px
- If your content takes more space than your wrapper component's capacity, it's time to use overflow.
- Usually, 1rem (16px) spacing is fit for all the devices. Don't make things more complicated. 🙃

## Components

A component is a self-contained, reusable piece of code that represents part of a user interface, typically consisting of HTML markup, CSS styling, and JavaScript logic.

Here is a question: how can we determine a component in a web?

I am confident to tell you that this is a component

```html
<span>Hello world!</span>
```

And this one is a component as well

```html
Hello world!
```

#### Tips

- HTML markups are semantic by default. Every tag has its own meaning and takes responsibility as a component.
- We can learn more ideas of components from most UI libraries, which have defined many components very well. Btw, I'm in love with [Material Design 3 Components](https://m3.material.io/components). 🙂
- The DOM structure is designed as a [composite tree](https://refactoring.guru/design-patterns/composite), so we should follow this pattern to define our component system.
- A component can contain many child components.

## States

Inside a component, we know that there is a lot of data supporting it to be rendered to our screen.

Due to the flexible interactivity requirements, we are aware the component may change its properties multiple times. Each time it changes, we expect that its display is also changed so that we can observe the ongoing events on the web.

The idea is whenever some data in a component changes, it should trigger a method to reflect the change to its corresponding HTML block. It is time the [State](https://refactoring.guru/design-patterns/state) pattern comes into play.

In the OOP context, we can assume a component corresponds to an object implementing method `render()`.

Let's try an example. Here I want to implement a modal component, which provides 2 states: opened and closed.
- If the modal is opened, then it should be rendered to the screen.
- If the modal is closed, then it should be hidden from the screen.

```js
/* modal.js */

let stateA;

class Modal {
  render() {
    if (stateA == "opened") {
      const newDiv = document.createElement("div");
      newDiv.id = "modal";
      document.documentElement.appendChild(newDiv);
    } else {
      const div = document.getElementById("modal");
      if (div.parentNode) {
        div.parentNode.removeChild(div);
      }
    }
  }
}

const activeModal = new Modal();

const setStateA = (newState) => {
  stateA = newState;
  activeModal.render();
};

export const useState = (initialState) => {
  stateA = initialState;

  return [stateA, setStateA];
}
```

We now can use the export function in a different component, to control the modal

```js
import { useState } from "./modal.js";

...

const [modalState, setModalState] = useState("closed");

...
```

> Does it look familiar? Yup, like React's `useState` hook.
>
> Disclaimer: It does not truly represent the implementation of the `useState` hook; I'm just giving a simplifying example inspired by the hook.

## Layouts

When starting to build a web, numerous developers often place components randomly due to a lack of understanding regarding effective layout design. Ultimately, they end up with a chaotic arrangement of overlapping views, compounded by huge challenges in achieving responsiveness.

A thoughtful and structured layout is essential for creating a seamless user experience and ensuring that all elements function harmoniously.

To simplify the layout structuring and minimize design frauds, I have come up with my own rules:

- Divide a container (screen) into columns, usually 12 or 10 columns, then apply grid display to the container for screens that are larger than mobile.

```css
@media screen and (min-width: 768px) {
  section[is=container] {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
  }

  div[is=column-1] {
    grid-column-start: span 2;
  }

  div[is=column-2] {
    grid-column: 4 / 10;
  }

  div[is=column-3] {
    grid-column: 11 / 13;
  }
}
```

- Using the wrapper pattern, which wraps all the main contents in a container that has a predefined maximum width. This approach has a disadvantage is that it may leave too many blank spaces on a huge screen (at more than ~1980px).

```css
section[is=container] {
  margin-left: 1rem;
  margin-right: 1rem;
  max-width: 960px; /* or 900px, 1024px, etc... */
}

@media screen and (min-width: 768px) {
  section[is=container] {
    margin-left: auto;
    margin-right: auto;
  }
}
```

- Using flex display for one-row layout.

```css
div[role=horizontal-stack] {
  display: flex;
}

div[role=vertical-stack] {
  display: flex;
  flex-direction: column;
}
```

- Layering the view to 5 levels, configuring them with the z-index property:
	- Level 0: Neutral, or default level
	- Level 1: For the sticky or static contents, for instance, navigation bar, static buttons, etc...
	- Level 2: For the focus state of level 1, for example, an opened menu if the menu is in a navigation bar.
	- Level 3: For the backdrop overlay of level 4
	- Level 4: The highest, for modals or drawers, etc...

```css
::root {
  --z-index-1: 1;
  --z-index-2: 2;
  --z-index-3: 3;
  --z-index-4: 4;
}
```

## Data fetching

In the dynamic web context, we render content depending on the changes of data.  This requirement introduces a new problem:

> How should we fetch data from servers?

For traditional dynamic webs, we often use server side rendering, which is supported by a back-end framework, such as [Django](https://www.djangoproject.com/) or [Ruby on Rails](https://rubyonrails.org/). So the data fetching is almost done at the server side.

Many things have changed since Single Page Application was introduced.

To avoid network overhead, we only fetch enough needed data and make changes where needed. It is when the data-getting APIs from browsers are fully utilized.

In legacy webs, we can see XMLHttpRequest + JQuery everywhere.

In modern webs, we can detect the Fetch API or Axios easily.

Then there are real-time web applications, in which we have to learn about WebSocket, extending Socket.io, or Server-Sent Events (SSE).

## SEO

SEO - short for search engine optimization - is about helping search engines understand your content, and helping users find your site and make a decision about whether they should visit your site through a search engine.

One more thing that developers may miss.

The SEO is very significant to the marketing efficiency because it helps more people reach out to our websites.

### Head metadata

To help the search engine be aware of our web, we have to insert many metadata tags into our HTML document. Yeah, this is our responsibility.

My most commonly used metadata is

```html
<title></title>
<meta name="description" content="" >
<meta name="author" content="" >
<link rel="canonical" href="" >
<meta property="og:title" content="" >
<meta property="og:description" content="" >
<meta property="og:url" content="" >
<meta property="og:site_name" content="" >
<meta property="og:image" content="" >
<meta property="og:type" content="" >
<meta name="twitter:card" content="" >
<meta name="twitter:title" content="" >
<meta name="twitter:description" content="" >
<meta name="twitter:image" content="" >
```

### Google rich result

Google Search also provides custom search appearance, which helps your web page exhibit richer content in search results.

It can be done via Google Search's [structured data markup](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data), where you need to provide [JSON-LD](https://json-ld.org/) in your HTML markups.

## Error handling

It is a very noteworthy topic when you are designing your web behaviors.

There are three main errors that can occur on your browser:

1. Network errors
2. Server errors
3. Runtime errors

### Network errors

It occurs when a browser is in offline mode. We have nothing to do but wait until your computer connects to a new stable network. ¯\\_(ツ)_/¯

You can play the dinosaur game if you use Chrome :)

### Server errors

Usually, we use the HTTP protocol for client-server communication. So the error handling follows the HTTP status codes.

If there is any error from the server, the client will receive a corresponding HTTP error status code. It usually is 400 - 499 if the causes are from a client request, or 500 - 599 if the causes are from an internal server.

With this response mechanism, we can have many ways to handle the errors for better user experience. For example:

- If the response status is not ok, render a small toast component to your screen or render a modal with more detailed information.
- If the response indicates that a resource is not found, redirect to the not found view.
- If the response indicates that the request is not authenticated, redirect to the sign-in view.

### Runtime errors

If your web contains only HTML and CSS files, you don't need to care about runtime errors.

But if your web use JavaScript, then you have to be careful.

Forgetting null checks, operating on wrong data types, writing syntax errors, etc... If you make a mistake, you are dead meat 💀

## Monitoring

The essential aspect that we have to consider after a web go-live is how to monitor it.

When choosing a frontend monitoring solution, we should consider several of the following aspects:

- API
- Traffic
- Performance, such as Core Web Vitals, loading times, etc...
- Error tracking
- Alerting

## Conclusion

Above are the key concepts I have distilled after two years working in frontend development. It has been a journey of discovery, and I have learned that a solid understanding of these fundamentals is essential. With them, learning every framework or library is never a big deal.

People tend to focus on new trending frameworks, come up with new principles and introduce new conventions, but they almost forget one thing:

> Less is more
