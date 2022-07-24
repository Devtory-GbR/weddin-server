# WeddIn application - Backend

Backend for Weding invitations

## Develop

```
npm install
npm run build
npm run develoop
```

## Demo DB

in the folder _res/demo_db/_ you will find a example db - **data.db**.
In the database there is already a lot of stuff set auto. e.g.

- Roles for the User
- Routes
- Invitations
- Guests
- a lot of example content in the sections

### Credentials Backend

you can just use it as a starter, the creadentails for the backend in this demo db are the following:

**User**: admin@weddin.site

**PW**: AdminWeddin1

### Dummy Invitations

**Brautpaar**: brautpaar

**Test User**: test

## Deploy PROD

### Edit .env

Edit the file for instance with the correct port and other stuff

### Build Strapi

```
NODE_ENV=production yarn build
```

### RUN Prod Server - just for test

```
NODE_ENV=production yarn start
```

### RUN Prod Server - with PM2 recommended

```
NODE_ENV=production pm2 start server.js --name content.XXXX.weedin.site
```

## Settings

All the _single types_ in the _Content Manager_.
These are needed to setup the personal wedding page/ to configurate it.

### Appearance

| Value              | Default   | Requiered | Description                                                                                                       |
| ------------------ | --------- | --------- | ----------------------------------------------------------------------------------------------------------------- |
| **PrimaryColor**   | _#778074_ | true      | HEX-Value of the primary Color on the weeding page                                                                |
| **SecondaryColor** | _#debd8a_ | true      | HEX-Value of the secondary Color on the weeding page                                                              |
| **AccentColor**    | _#555555_ | true      | HEX-Value - Color of the dividers and some other stuff. Usally the default color is fine and don't need to change |

### General

| Value             | Default            | Requiered | Description                                                                                                                                                                                                                                                  |
| ----------------- | ------------------ | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **CoupleName**    | _Sandra & Martin_  | true      | Shown on the SignIn-Page and at the Header                                                                                                                                                                                                                   |
| **WeddingDate**   | _24.04.2020_       | true      | visible in different spots on the page                                                                                                                                                                                                                       |
| **ConfirmLatest** | _31.12.2019_       | true      | to inform the user, unitl you are waiting for a feedback. This date is also shown in diffrent spots on the page. Also is is used when the settings value **CanEditAfterConfirmLatest**=no to calculate if the guest can do any changes (under GuestFeedback) |
| **Countdown**     | _24.04.2020 13:00_ | true      | DateTime when the countdown on the page is 0                                                                                                                                                                                                                 |
| **Logo**          | _Image_            | true      | Shown on the Login-Page and in the title bar, also it is used to generate a set of images for the browser. Usally it should be something araound 512x512                                                                                                     |

### GoogleMap

| Value       | Default        | Requiered | Description                                                                                                                                          |
| ----------- | -------------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| **API_KEY** | _YOUR_API_KEY_ | false     | is is used for the component _GoogleMapDivider_. [How to Creating API keys](https://developers.google.com/maps/documentation/javascript/get-api-key) |

### GuestFeedback

| Value                         | Default | Requiered | Description                                                                                                                                                                                                                                                                                                    |
| ----------------------------- | ------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **PlusOneForSinglePerson**    | _true_  | true      | when it is _on_ the user can add an other guest (+1), but only if he/she is single, per user only 2 adult guest can be confirm to the weeding. when it is _off_ the button to add an other guest is missing                                                                                                    |
| **CanEditAfterConfirmLatest** | _true_  | true      | when it is _on_ the user can still edit the data e.g. confirn/decline the invitation or do other stuff like change foodpreferences, even when the _confirmLatest_-Deadline passed. When it is _off_ then user is only available to change data before the _confirmLatest_-Date. (can be setup under _general_) |
| **CanChooseEatPreference**    | _true_  | true      | each guest can choose the food prefrerences, during the confirm process, like a survey. To give the user a list of options the _collection type_ **EatPreferences** has to be filled.                                                                                                                          |
| **CanChooseDrinkPreference**  | _false_ | true      | each guest can choose the drink prefrerences, during the confirm process, like a survey. To give the user a list of options the _collection type_ **DrinkPreferences** has to be filled.                                                                                                                       |
| **CanChooseNeedShuttle**      | _false_ | true      | toogle of neeeding a shuttle is visible during the confirm process, like a survey                                                                                                                                                                                                                              |
| **CanChooseNeedHotel**        | _false_ | true      | toogle of neeeding a hotel is visible during the confirm process                                                                                                                                                                                                                                               |

### Header

| Value                    | Default              | Requiered | Description                                                                                                                             |
| ------------------------ | -------------------- | --------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| **Image**                | _Image_              | true      | Picture to shown a stating page when visiting the page/ after the login. It should be in the min format 1920x1080                       |
| **Title**                | _Kirchliche Trauung_ | true      | Title                                                                                                                                   |
| **ShowCoupleName**       | _true_               | true      | Show couple name                                                                                                                        |
| **ShowDate**             | _true_               | true      | Show date                                                                                                                               |
| **ShowGuestName**        | _true_               | true      | Show the guest name on the landing page with some nice welcome words: _Hello Guest1_                                                    |
| **ShowInvitationButton** | _true_               | true      | Show the invitation button, so that the user can lick on it and navigate automaticly toe the confirmation section                       |
| **BrightText**           | _true_               | true      | on the color if the text is bright - some kind of white - or dark - some kind of black. So thte the text is good readable on the header |

### SignIn

| Value                | Default | Requiered | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| -------------------- | ------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **SignInRequired**   | _true_  | true      | When it is on, then the user have to access via a access code. (data entry's in the table _Invitations_). So at first you only see a login page and after that the user see the hole informations (**Recommanded**) <br /><br /> When it is off, the login page is skipped. In that mode a lot of features will not work, like the hole confirmation process.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| **GlobalAccessCode** | _false_ | true      | When it is off, then each user his/her own invitation with a personal code. To achieve that, you have to fill all your invitations in the table _Invitations_ and assign each _Invitation_ to one or more _Guests_ (data entry's in the table _Guests_) Of course it need some initial work, but in the end you will have a complete list of all your invitations and guests, you can use all features (Confirmation, Eat/Drink Preferences, ...) and with the nice dashboard in the front-end you will see all numbers in real-time and know exactly how many people will come to your party (**Recommanded**) <br /><br /> When it is on, you need exactly on data entry in the _Invitations_ Table. Good news: you will have a login page and a secured api, so that only with an access code that is visible. **Bad news**: you can still not use the hole potential of your weeding page. |

## Components

Can be used to fill the content of the page.
Each seaction (date entry in table _Sections_) can have multiple Widgets.

### Widgets

- **Free text**
  :
- **Imageslider**
  :
- **TimelineEntry**
  :
- **ContactCouple**
  :
- **Contact**
  :
- **Confirm**
  :
- **When**
  :

### Dividers

- **SectionDivider**
  :
- **GoogleMapDivider**
  :

### Style

- **Spacer**
  :
