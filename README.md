# patra-karaoke

This is a React and Firebase project that aims to be a karaoke manager!
The name of this project is a tribute to the Kafe Patra Klub in Prague, wich hosts karaoke nights every sunday.
This is also a demonstration of support for all the gay community around the world.

## About

This was my first React project ever and used a lot of code from the Wes Bos React For beginners course.
So, I think this is a good project to take a look if you are starting on React.

The idea is to have an app that hosts multiple Karaoke rooms with a "host" and "singer" interfaces.

In the "host" interface, there is a karaoke room with songs requested by the public. You can play or remove the songs.
In the "singer" interface, people can request songs to sing in the previous selected room and see wich song is playing now.

## Installation

To run this project, you need to install node.

After that, you must run "npm install" in the folder of this project, so you will install all the depencys to this project.

```bash
npm install
```

## Configuration

This project uses Firebase. To conect to firebase, you must use the ".env" file to set the connection between the project and Firebase.

You will find a file named ".templateenv" in the project. Copy and rename it to ".env" and set the variables inside it.

If you don't know how to do it, here's some tips:

1. Create an account on Firebase
2. Create an Web APP on Firebase
3. Change the read and write proprieties of your project to "true"
4. In the APP config, you will find these variables
5. You don't need to do anything else to make the app running

OBS: If you don't want to create a Firebase app to run this APP, you can rename the ".templateenv" file to ".env" and run it anyway. The app will run, but you won't be able to add any data.

## Running

Having everything installed, you can run "npm start", and node will run the application and open a browser to its location.

```bash
npm start
```

Let's sing!