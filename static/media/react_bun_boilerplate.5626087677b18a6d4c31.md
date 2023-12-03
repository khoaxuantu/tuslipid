# Introduction

> Many people are hyped with Bun for its performance and new features compared with
> Node. One of them is .jsx and .tsx file support with its internal transpiler, which help creating a React app by Bun becomes more convenient. But the problem here is to have a
> boilerplate to optimize the feature for creating React app.

I came up with that idea when reading the `JSX` runtime of Bun. If we can exclude the works of Babel and Webpack, then we can reduce our build time and bundle's size dramatically.

I also know that there has already been some templates to create a React app in Bun, such as:

```bash
bun create react-app appname
```

But the template like above simply uses Bun to run `npx create-react-app` and install all
the preset dependencies. It means the project will keep using Babel and Webpack; that's not
what I want 🙁

Then one day, I find out the appropriate templates in the `create-templates` repository of
the Bun community (you can check them out via this [link](https://github.com/bun-community/create-templates)), which are `react-ssr` and
`react`. Looking at the templates' code, it turned out that I barely understood what each line
actually does. I was desperate to discover the true techniques behind them so that came
up with an idea is to create a new custom React app boilerplate with Bun. To simulate
each technique then I would be able to understand them.

> Thus, why not to try?

Below, I will share what I have learned and recalled from my custom boilerplate.

# Table of Contents

- How are static contents served in a web
- How the server-side rendering delivers React components
- Inside the FileSystemRoute, refers to NextJS's routing
- About client-side rendering
- Cusom the console.log, manually custom a welcome console log

# How are the static contents served in a web

The basics comes first, or, as it should be said, everything is built on top of the basics. 
Sometimes, we are just too focused on fancy stuff that we forget why there are the 
things called fundamentals.  This time, it hit me hard.

I found the following code in the [`react-ssr`](https://github.com/bun-community/create-templates/tree/main/react-ssr) template:

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

Recall when we wrote our `index.html` for the first time, It turns out that everything follows the same concept:
- We request to the server for content.
- The server resolves the request path, then checks the file system.
- The server returns status `200` if it finds out the content, or status `404` if the content
	is not found.

We can try to start a http server via the popular [http-server](https://www.npmjs.com/package/http-server)
command in any static content folder, we will get the whole file system displayed on
the browser.

The difference here is just in the Bun serve option; we have specified a specific 
directory for the app to look into, not only a root directory.

> That's why I find the code so familiar huh...

> ... Updating
