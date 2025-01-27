## Introduction

Every programmer begins with a "starter pack" of tools and knowledge, but the sheer breadth and depth of programming can quickly become overwhelming.

At some points, we find choosing a stack of tools a huge challenge to start a project. It is not a good signal, because it proves that we are drowning in a sea of technologies, and we are literally slowing down.

Thus, let me share my technology pool, which help me not to get lost whenever I plan a new project.

## Text editors

- [VSCode](https://code.visualstudio.com/)
- [Neovim](https://neovim.io/)
- [Zed](https://zed.dev/)

## Operating systems (dist)

- If you want to do anything related to games, I would recommend Windows.
- If you want to code only, I would recommend Linux's distributions. I prefer Ubuntu.
- But if you want to build mobile applications, you have no other choices than using MacOS. 🙂

## Languages (for coding)

I tried many languages. Honestly, it is not that hard to get familiar to a new language if you have already had a strong base of programming paradigms and software principles:

- JavaScript
- TypeScript
- HTML
- CSS
- Sass
- C/C++
- C#
- Java
- Python
- Ruby
- Golang
- SQL

> Remember, never teach the newbies JavaScript as their first language. Instead, I recommend C/C++ or Java.
> 
> Python? A fair starting point, but its ease of use comes at the cost of neglecting fundamental concepts like memory management and performance optimization.

## Backend

### Frameworks

The backend frameworks can vary depending on the programming language and the scale of your application. All in all, it purposes to provide the scalable interaction between tons of business logics.

- **Java?** Swing
- **C#?** Nah, I do not use Windows. Btw, the only choice you have is ASP .NET
- **Ruby?** on Rails
- **Python?**
	- Flask
	- Django
- **TypeScript?**
	- Express
	- NestJS
	- (Promising) Hono

> Choose your best civilization plz...

Remember to choose a framework wisely. Once you choose one and kick off your business project, you have no chance to change to another one. You can consider several below bullet points to make your choice easier:

- Which programming language that you are familiar?
- Your application's scaling potential?
	- If I have to write a small worker in Python, I would choose Flask; or in TypeScript, I would choose Express. Additionally, a simple Go module is a great choice.
	- If I have to write a full feature application, I would consider between Java Swing or TypeScript NestJS, to skip many coding architecture setups and to take the whole advantages of OOP.

### Databases

In fact, choosing a correct database is not as significant as a good data model design.

Each type of database provides different pros and cons, and it will be deep-dived by the engineers in the system design contexts.

I only list several common databases which are good to start for the developers:

- MySQL
- PostgreSQL
- MongoDB

#### ORM & ODM

Well, a pain point when you want a library that help you to connect your app to your database efficiently.

In almost backend programming languages, it's actually not a big deal. Every language comes with a featured ORM library (or ODM if you use MongoDB).

- Java has Hibernate
- C# has Entity Framework
- Ruby has Active Record
- Golang has GORM
- Python has SQLAlchemy for Flask, or the built-in Django.

But for JavaScript (or TypeScript), it is truly a problem. TypeORM, DrizzleORM, MikroORM, Sequelize, Prisma, Kysely, Knex.js, etc... Wtf?

Here is how I deal with that variety of libraries:

- My first priority is a query builder library. Mostly my projects only need a type-safe query solution, so I choose Kysely.
- If I have to use a true ORM, then I will go with MikroORM.
- For MongoDB, only Mongoose.

## Frontend

In essence, everything in the frontend focuses on HTML, CSS, and JavaScript only. It should have been simpler than the backend, where so many languages come into play.

But for some f\*\*\*ing reasons, now we have:

- More than 5 common frontend frameworks
- More than 10 common UI libraries
- Thousands of reinventing the wheel

I hate you all!

### Frameworks

For complex frontend web applications:

- Next.js
- Angular
- Vue

> Remember, React is not a framework, it is a library. Next.js is a framework of React.

For content-driven (static) web pages:

- Astro
- (Promising) Nue. I'm testing this one for my own [document pages](https://notes.xuankhoatu.com/), it has potential to be even better than Astro 🫠 Hope it can make its [vision](https://nuejs.org/vision/) come true.

### UI libraries

What are the purposes of an UI library?

- To save time setting up a design system
- To save time building a view
- To provide better readability and maintainability

Selecting a respect-design UI library is one of the most important parts when you apply a frontend framework. It saves you tons of time, both in designing and developing, while assuring the quality of your product's view.

At this time, I mainly work with React, so only suggest my React's UI libraries:

- MUI
- Ant Design
- Chakra UI
- Radix UI

Don't ask me why I do not include Shadcn in them, although it is so well-known. This trending guy, on one hand, is built on top of Radix UI, which is the only part I see as promising. But on another hand, Shadcn styles with Tailwind, which, in my opinion, is the biggest minus point.

> Why don't you use CSS?

## Desktop apps

Like coming back to the good old days, ignore all the drama from the web ~

If I have a chance to build a desktop app by myself, here is what I will consider:

- Qt (C/C++)
- Wails (Golang)
- Tauri (Rust)

## Cloud-computing services

### For static webs

You can refer to the hosting comparison [here](https://bejamas.com/compare/hosting). I can pick for you several options that are easy to use, low latency, and almost free.

- Vercel
- Firebase hosting
- Cloudflare pages
- Github pages

### For complex web applications

When you have to setup the fully customizable system, here comes the major cloud providers:

- Amazon Web Service
- Google Cloud Platform
- Microsoft Azure
