# Introduction

> Many people are hyped with Bun for its performance and new features compared with
> NodeJS. One of them is .jsx and .tsx file support with its internal transpiler, which help creating a React app by Bun becomes more convenient. But the problem here is to have a
> boilerplate to optimize the feature for creating React app.

I came up with that idea when reading the `JSX` runtime of Bun. If we can exclude the works of Babel and Webpack, then we can reduce our build time and bundle's size dramatically.

I also know that there has been some templates already to create a React app in Bun, such as:

```bash
bun create react-app appname
```

But the template like above simply just use Bun to run `npx create-react-app` and install all
the preset dependencies. It means the project will keep using Babel and Webpack, that's not
what I want 🙁

Then one day, I find out the appropriate templates in the `create-templates` repository of
the Bun community (you can check them out at this [link](https://github.com/bun-community/create-templates)), which are `react-ssr` and
`react`. Looking at the templates' code, it turned out that I barely understood what each line
actually does. I was desperate to discover the truly techniques behinds them so that came
up with an idea is to create a new custom React app boilerplate with Bun. To simulate
each technique then I would be able to understand them.

> Thus, why not to try?

Below, I will share what I have learned from my custom boilerplate

# Table of Contents

- How will contents be served in a React app
- How server-side rendering deliver React components
- Inside the FileSystemRoute, refers to NextJS's routing
- About client-side rendering
- Cusom the console.log, manually custom a welcome console log

> ... Updating










<br><br>
