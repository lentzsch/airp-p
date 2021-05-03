# airp-p

Aipnp, AirPlane and Pilot, is an Airbnb inspired app that allows aircraft owners to offset the costs of ownership by renting their plane out when they aren't flying it, and It allows general aviation, normally a very expensive hobby, to be more financially feasable for non-owners. In the future, the costs of renting out aircraft could be greatly reduced by usilising an algorythm that takes in a plane's destination, home airport, and time of availibility, and makes sure that aircraft is rented in such away that it returns home or close to home when the aircraft's avalability window comes to an end. The will all but eleminated deadheading, one of the single biggest money wasters in renting aircraft.

In order to enjoy the app, you can either sign in as a demo user with demo credentials, or create your own user. Instructions for both are below.

###To sign in as a demo user:
- email: demo@user.io
- password: password

###To Sign up:
- All feilds must hav valid values.
- Certificate number must be 7 digits.
- Password must be 6 characters long.

## Technologies 
#### Front-End
- Javascript
- React
- Redux
- HTML
- CSS
- Heroku Server

#### Back-End
- PostgreSQL: Database
- ExpressJs: Express session
- Bcrypt: User Authentication
- Sequelize: Manage Database

## Features
 - User session authentication/authorization handled using bcryptjs for hashing and Express session for cookie generation
 - Authorized users granted access to booking aircraft
 - Utilizes Redux to filter the list of aircraft by airport

## Challenges
 - Planning. Understanding your own limitations from both a time and ability perspective is important on your first solo project. Ambition can lead to a lot of half implamented features and the need to make executive decisions as to what features stay and what goes. As a result, the features that do stay suffer for it.
 - Using local image urls in React for a mapped array of links provided bugs that I was unable to solve. I was able to find a workaround by using exterior links to a site hosting the images. This works well since I would like to have AWS integration in the future.
