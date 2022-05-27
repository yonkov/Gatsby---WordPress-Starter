## Description

A blog created with Gatsby.js, Typescript and GraphQL that uses WordPress as a headless CMS. The blog is done for mere educational purposes. 

## Practical info
To run this project locally, first replace the WordPress remote url from `gatsby-config.ts` file with the  server from which you will be sourcing the data. Then do `npm install` and `npm run develop`. Please note that in order to be able to source the data, you need to install and activate the [WPGraphQL](https://wordpress.org/plugins/wp-graphql/) WordPress plugin, as well as the [WPGatsby](https://wordpress.org/plugins/wp-gatsby/) plugin on your WordPress site beforehand.

## Why use Gatsby instead of good old WordPress PHP templates?

The following text is copied from [gatsby-source-wordpress](https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-source-wordpress/docs/why-use-this-plugin.md) Readme, because it is great at explaining what is all the hassle about:

You can keep using WordPress as the fantastic CMS it is, and use React and modern tooling for your front-end!

Some highlights:

    Increased security and performance due to the static rendering of Gatsby
    A componentized architecture for your front-end code with React (better maintainability)
    A simpler way of asking for data with GraphQL (no need to remember dozens of data retrieval functions)
    Client-side state management with React opens up the doors to creating an app-like or full on app experience for your users
    Gatsby is committed to ensuring we are as accessible as possible out of the box

Additionally, this plugin is a great reason to use Gatsby with WordPress. Many of the complex and difficult aspects of going decoupled with WordPress have been abstracted for you behind the scenes, so you can work on building awesome apps and sites instead of reinventing the wheel to get decoupled WordPress working in your project.

### Developer's information

The fastest way to kickstart a Gatsby site that uses the WordPress api is to clone the [Gatsby WordPress blog starter](https://github.com/gatsbyjs/gatsby/tree/master/starters/gatsby-starter-wordpress-blog) project by the Gatsbty team:

`gatsby new my-blog-starter https://github.com/gatsbyjs/gatsby-starter-wordpress-blog`

You can also set up [Gatsby with Typescript and GraphQL](https://www.gatsbyjs.com/docs/quick-start/) manually by running the following commands:

1. `npm init gatsby gatsby-wordpress-starter` -y -ts
This will open a prompt that will ask you some questions and install necessary dependancies. If you state that you will be using WordPress, it will install `gatsby-source-wordpress` npm package, which will allow you to effectively fetch WordPress data from the Gatsby side of things. 

2. After that, run: `npm run develop`. This will start a local server at http://localhost:8000/

You can now use the `createPages` api to create the pages. If you ever get stuck, refer to the [Gatsby WordPress blog starter](https://github.com/gatsbyjs/gatsby/tree/master/starters/gatsby-starter-wordpress-blog).

### Useful links
[Sourcing from WordPress](https://www.gatsbyjs.com/docs/how-to/sourcing-data/sourcing-from-wordpress/)
[Gatsby Source WordPress](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-source-wordpress)
[Gatsby Starter WordPress blog](https://github.com/gatsbyjs/gatsby/tree/master/starters/gatsby-starter-wordpress-blog)
[Creating Pages from Data Programmatically](https://www.gatsbyjs.com/docs/programmatically-create-pages-from-data/)