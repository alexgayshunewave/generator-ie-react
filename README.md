# generator-ie-react

> [Yeoman](http://yeoman.io) generator for a [React](http://facebook.github.io/react/) project

Creates a React project based on create-react-app with added extras like Redux, Typescript, Thunk and testing.

## About

This project was created to provide a starting point for a basic React project. 
While create-react-app currently services part of this need it doesn't generally
go far enough to providing tools that will be required for anything but the most
basic web app.

It should be noted that this project is extremely opinionated. There are many ways
that this kind of setup could be achieved with a different set of modules etc, this
is simply one that we know works and can promote a clean application build.

## Getting Started

Ensure you have Yeoman installed:

```bash
yarn global add yo
```

Clone this project:

```bash
git clone git@github.com:ie/generator-ie-react.git
```

Link the generator to Yeoman:

```bash
yarn link
```

Navigate to the directory you wish to start the project in:

```bash
cd myapp
```

Run the generator:

```bash
yo ie-react
```

... and follow the prompts.


## Future Enhancements

- React Router
- Component generation
- Placeholder Style Guide page
