 <p align="center">
  <a href="https://weddin.site/">
    <img src="https://weddin.site/images/logo_with_text_small.png" width="300px" alt="WeddIn logo with text" />
  </a>
 </p>

<h3 align="center">Organize your wedding event and guest list.</h3>
<p align="center">Create a digital custom invitation card for your wedding with WeddIn and send the link to your guests. Playfully build a website with all the content around your event, without any programming knowledge.</p>
<p align="center"></p>
<p align="center">
<a target="_blank" href="https://weddin.site/doc">Documentation</a> · <a target="_blank" href="https://weddin.site/demo">Live Demo</a>

</p>

# WeddIn Server<!-- omit in toc -->

<p>

  <a href="https://strapi.io/">
    <img src="https://img.shields.io/badge/Strapi-^4.6.0-blue" />
  </a>

</p>

Your backbone for the perfect wedding. A responsive user friendly ui to setup your personal wedding page. It's damn simple and easy. Just add our guest and information to the database and send the links to your guest.

All without coding! Just configuration. For a deeper look what you can set up and how it works, visit [weddin.site/doc](https://weddin.site/doc).

_Table of Content_

- [🚀 Getting started](#-getting-started)
- [🗄️ Startup Data](#️-startup-data)
  - [Demo Data](#demo-data)
  - [Init Data](#init-data)
  - [Credentials Backend](#credentials-backend)
  - [Credentials Client](#credentials-client)
- [🚢 Deploy](#-deploy)
  - [Run Production Mode](#run-production-mode)
- [🧾 License](#-license)
- [🚫 Disclaimer](#-disclaimer)

## 🚀 Getting started

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:1337
$ npm run develop
```

After that you can visit http://localhost:1337/admin and start setup you server with the ui.

In case you don't want to setup the data from scratch - the repo provide you with 2 diffrent demo data for an easy start - which can be used for local development as well as production - see [🗄️ Startup Data](#️-startup-data).

Don't forget the [WeddIn Client](https://github.com/Devtory-GbR/weddin-client) - to see your results and that your guest can sign in for your awesome wedding!

## 🗄️ Startup Data

n the folder _res_ you will find two different startup types

- **Demo**: filled with a lot of dummy data - perfect for test and developing
- **Init**: minimal db with all important stuff and some introduction - perfect for production as a db for a new site

### Demo Data

- stop the server
- copy _res/demo/db/data.db_ to _.tmp_.
- copy _res/demo/uploads/_ to _public/uploads/_.
- restart the server

Credentials to log in can be found below.

### Init Data

- stop the server
- copy _res/init/db/data.db_ to _.tmp_.
- restart the server

Credentials to log in can be found below.

### Credentials Backend

#### Admin<!-- omit in toc -->

**User**: admin@weddin.site

**PW**: AdminWeddin1

#### Editor/Author<!-- omit in toc -->

**User**: demo@weddin.site

**PW**: DemoWeddin1

### Credentials Client

#### Wedding couple<!-- omit in toc -->

**Code**: brautpaar

#### Dummy Guest<!-- omit in toc -->

**Code**: test

## 🚢 Deploy

Create a _.env_ file in root and fill have a look at [env.example](./env.example).

After that build the server and start.

```bash
$ npm run build
$ npm run start
```

### Run Production Mode

yarn is recommended

```bash
$ NODE_ENV=production yarn build

# just fot test it is works
$ NODE_ENV=production yarn start

# use pm2 to run as service in background
$ NODE_ENV=production pm2 start server.js --name XXXX.content.weddin.site
```

## 🧾 License

You can copy the source code, edit it and build totally new projects with it.
But however you are **not allowed to use the code for commercial use**.

See the [LICENSE](./LICENSE) file for more licensing information.

## 🚫 Disclaimer

YOUR ARE FREE TO USE THE CODE IN YOUR PROJECTS HOWEVER MAKE CLEAR THAT THE CODE IS OFFERED "AS-IS, WITHOUT WARRANTY AND DISCLAIMING LIABILITY FOR DAMAGES RESULTING FROM USING THE CODE.
