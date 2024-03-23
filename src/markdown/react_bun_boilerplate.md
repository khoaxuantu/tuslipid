# Introduction

> We can learn by re-creating something.

Recently, I love diving deeper into React and already has some works using this library. Yeah, my
website is written in React 💩, and another interesting project is written in
[NextJS](https://nextjs.org), a React's framework, which is
[Algorithms Visualizer](https://algovisual.xuankhoatu.com/).

They both helped me discovering many meaningful aspects of frontend development, from SPA styling as
a beginner to detailed state management, hooks, components, modules, etc.

Still, I felt like I was missing something very original. It is a kind of thing that we ought to be
aware of whenever learning a framework/library, and I only figured it out when
[Bun](https://bun.sh) was released.

> Well, how is the React codebase initialized?

Many people are hyped about Bun, including me. Bun supports *jsx* and *tsx* formats with its
internal transpiler, so it definitely should be great with React. For this reason, I came up with
the idea of starting some small React projects with Bun.

However, it was not as easy as it seemed. I did not want to use Webpack and Babel if there had
already been transpiler support, but the existing templates still kept using them. If we create
a React app via Bun template as the following:

```bash
bun create react-app appname
```

We simply use Bun to run `npx create-react-app` and install all
the preset dependencies. That's not what I want. 🙁

Thus, the first thing I have to do here is create my own custom boilerplate.
Then one day, I found the appropriate templates in the `create-templates` repository of
the Bun community (you can check them out via this
[link](https://github.com/bun-community/create-templates)).

> So, why not try re-creating and customizing it?

After making my own customized boilerplate, I was surprised by discovering many new aspects of
a React project. Below, I will share what I have learned so far.

# How are the static contents served in a web

The basics come first, or more precisely said, everything is constructed upon the basics.
Sometimes, we are just too focused on fancy stuff that we forget why there are the
things called fundamentals.  This time, it hits me hard.

I found the following code in the
[`react-ssr`](https://github.com/bun-community/create-templates/blob/main/react-ssr/dev.tsx)
template:

```ts
function serveFromDir(config: {
  directory: string;
  path: string;
}): Response | null {
  let basePath = path.join(config.directory, config.path);
  const suffixes = ['', '.html', 'index.html'];

  for (const suffix of suffixes) {
    try {
      const pathWithSuffix = path.join(basePath, suffix);
      const stat = statSync(pathWithSuffix);
      if (stat && stat.isFile()) {
        return new Response(Bun.file(pathWithSuffix));
      }
    } catch (err) {}
  }

  return null;
}

export default {
  async fetch(request) {
    ...
    let reqPath = new URL(request.url).pathname;
    ...
    // check public
    const publicResponse = serveFromDir({
      directory: PUBLIC_DIR,
      path: reqPath,
    });
    if (publicResponse) return publicResponse;
    ...
  }
} satisfies ServeOptions;
```

Like a habit, my head came up with the `WTF`, that thing was frightening me. Although
it looks familiar, somehow I could not understand it at first.

> So... I must put myself through what frightening me huh...

It took a long time for me just to regain calm and read the code line by line, and finally,
I could break the code into the following pseudocode:

```
Define function serveFromDir(directory, filepath):
	basepath -> join directory and file path together
	suffixes -> ['', '.html', 'index.html'] as list

	For each suffix in the suffixes list:
		Try do:
			pathWithSuffix -> join basePath and suffix together
			stat -> get pathWithSuffix's statistic

			If stat exists and stat is a file:
				Return a Response with the blob object of the file located in pathWithSuffix
			End if
		Catch any error
		End try
	End for

	Return null
End define

In Bun serve option
	In async fetch():
		reqPath -> URL's pathname of request.url

		publicResponse -> serveFromDir(PUBLIC_DIR, reqPath)
		If publicResponse exists (not null):
			Return publicResponse as Response
		end if
	end fetch()
end Bun serve otion
```

Typically, the `serveFromDir()` method resolves the directory and filepath, then
checks the statistic in the resolved path. If it knows the statistic exists and
there is a file as the resolved path, it will return a `Response` object containing the
file.

In the Bun serve option, we use the `serveFromDir()` to map the request pathname to
the specific public folder. Thus, if we request to get public content, for
example, at `http://localhost:3000/image.jpg`, the flow will go like this:

1. The `reqPath` is assigned to `/image.jpg`
2. Assume we set the `PUBLIC_DIR` to `__dirname + /public`
3. In the `serveFromDir()`, we will have the `basePath` which is equivalent to
	`__dirname + /public/image.jpg`.
4. In the suffix `''`, we set the `pathWithSuffix` to the same with `basePath`,
	so the code will check the `image.jpg` in the `public` folder.
5. Assuming there is an `image.jpg` file in the `public` folder, it will return a `Response`
	object containing the blob object of that file.
6. Finally, this `Response` object is sent to the client browser.

Recall when we wrote our `index.html` for the first time, It turns out that everything follows the
same concept:
1. We request to the server for the content.
2. The server resolves the request path, then checks the file system.
3. The server returns status `200` if it finds out the content, or status `404` if the content
	is not found.

We can try to start a http server via the popular
[http-server](https://www.npmjs.com/package/http-server)
command in any static content folder, we will get the whole file system displayed on the browser.

The difference here is just in the Bun serve option, we have specified a specific
directory for the app to look into, not only a root directory.

> That's why I found the code so familiar huh...


# How the server-side rendering delivers React components

Originally, React was designed to render components as client-side rendering. Nevertheless, as the
web requirements in performance, SEO supports, scaling, etc... were increasing, React must have
released the supports on the server-side.

Since then, many frameworks have been built on top of the React server APIs, for instance, NextJS,
Remix, and Gatsby. Again, another question comes along with this concept:

> Which APIs do those frameworks use for server-side rendering?

We can easily look it up in React server APIs'
[documents](https://react.dev/reference/react-dom/server):

- For Node.js Streams

```ts
renderToPipeableStream()
renderToStaticNodeStream()
```

- For Web Streams

```ts
renderToReadableStream()
```

- For non-streaming environments
```ts
renderToString()
renderToStaticMarkup()
```

With them, we can generate React components to virtual DOM directly on the server and then send it
to the client.

In a JavaScript server runtime such as Node or my customized boilerplate, Bun, we can call those
APIs to perform the React server-side rendering conveniently. With Node, we may use
`renderToPipeableStream` or `renderToStaticNodeStream` to create a streaming connection that
delivers React components. In Bun, we can use `renderToReadableStream` for the same functionality.

```ts
import App from "./App.tsx";

const stream = await renderToReadableStream(<App />);
```

# At the client-side

We got the deliveries from the server as above. Now we need to have something to catch the components
at the client. React's `createRoot()` is not a good choice because it will destroy and re-create
the DOM nodes whenever there is a new component delivered from the server.

That is why `hydrateRoot()` appears.

> Call `hydrateRoot` to "attach" React to existing HTML that was already rendered by React in a
> server environment.
>
> ---> [Learn more about React's hydrateRoot](https://react.dev/reference/react-dom/client/hydrateRoot)

For the server-side routing, we may hydrate the entire document:

```ts
import { hydrateRoot } from "react-dom/client";
import App from "./App.tsx";

hydrateRoot(document, <App />);
```

# Inside the FileSystemRouter, refers to NextJS's routing

Bun provides an API for resolving routes against file-system paths with NextJS-style file-system
routing called `FileSystemRouter`.

I have done some debugging to find out how the routing resolver works, and the result has blown my
mind.

Assume we are running a React app at `localhost:3000` and have a file system for routing as follows:

```
pages/
|--- app.tsx

index.tsx
```

In the file `index.tsx`, we call `FileSystemRouter` with the direction assigned to the `pages`
folder.

```ts
const pageRouter = new Bun.FileSystemRouter({
  dir: './pages',
  style: 'nextjs',
});
console.log("🚀 ~ pageRouter:", pageRouter)
```

By logging the `pageRouter`, we get the following output at the console:

```bash
🚀 ~ pageRouter: FileSystemRouter {
  match: [Function: match],
  origin: null,
  reload: [Function: reload],
  routes: {
    "/app": "/home/user/your-work-directory/pages/app.tsx",
  },
  style: "nextjs",
}
```

We can see the `FileSystemRouter` object has mapped the path to the file system in the
`routes` attribute.

Then, when we call `FileSystemRouter.match` method (i.e, request to `localhost:3000/app`):

```ts
const match = pageRouter.match(request);
console.log(match);
```

```bash
MatchedRoute {
  filePath: "/home/user/your-work-directory/pages/app.tsx",
  kind: "exact",
  name: "/app",
  params: {},
  pathname: "/app",
  query: {},
  scriptSrc: "app.tsx",
  src: "app.tsx",
}
```

The `FileSystemRouter` object has resolved the HTTP request and returned a `MatchedRoute` object,
which maps the request path to the file path corresponding to the `routes` attribute of the
`FileSystemRouter` object. Since then, by receiving the request, the app will have the information
to access the corresponding path.

Therefore, if we build our React app source code (transpile *jsx/tsx* files to *js* files) in a build
directory called `build/`, we can use `FileSystemRouter` to map the request path to the *js* file
path, then send the file to the client so that the client can perform any feature of a React app.

```ts
import * as path from "path";

const PROJECT_ROOT = import.meta.dir;
const BUILD_DIR = path.resolve(PROJECT_ROOT, "build");

const buildMatch = buildRouter.match(req);
```

# Custom the console.log

This thing is not related to React, but it is an interesting thing that I found out when re-creating
the boilerplate.

When you run `npm start` in a `create-react-app` project, you will get the below console log:

![Create react app hello console log](/images/blogs/react_bun_boilerplate/1.webp 'create-react-app hello console log')

> How to have that colorful console log?

If we want to custom the color, we just simply need to use
[control character](https://en.wikipedia.org/wiki/ANSI_escape_code#Description) to color our output:

```ts
console.log('\x1b[33m Welcome to the app! \x1b[0m');
```

If we want to add prefix to console log, we need to override the `console.log` with JavaScript's
`bind`:

```ts
const prefix = "My prefix: ";
console.log = console.log.bind(console, prefix);
```

Here is the starting console log in my customized boilerplate:

```ts
/**
 * Add prefix to console log
 */
const prefix = '\x1b[96m[' + new Date().toLocaleString() + ']\x1b[0m -';
console.log = console.log.bind( console, prefix );

/**
 * A welcome log. It will display whenever the project starts
 */
export function hiConsole(port: string | number) {
  console.log("\x1b[92mCompiled successfully!\x1b[0m");
  console.log(`

Now you can view the project in your browser:

  Local       :   \x1b[96mhttp://localhost:${port}\x1b[0m
  IP Address  :   \x1b[96mhttp://127.0.0.1:${port}\x1b[0m

🚀🚀🚀 Have fun ~

  `);
}

hiConsole(3000);
```

![My custom console log](/images/blogs/react_bun_boilerplate/2.webp 'My custom console log')

# Conclusion

Just by re-creating a simple boilerplate, I can enrich my understanding of React and working with
JavaScript environments generally. It also provided insights into the fundamental concept of frontend
development, which I must have missed at some points. All in all, it emphasized the importance
of going beyond the surface and gaining a deeper comprehension of the tools and processes involved.

If you want to have a look into my customized React boilerplate with Bun, then you can go to my
Github repository [here](https://github.com/khoaxuantu/Custom-bun-react-app).

Although it only limits React server-side rendering, it is enough to build a small project,
such as my [Meme collection](https://meme.xuankhoatu.com/). 😆

# References

- [React documentations](https://react.dev)
- [Bun documentations](https://bun.sh/docs)
- [Using console colors with Node.js](https://blog.logrocket.com/using-console-colors-node-js/)

