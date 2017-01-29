# Pokedex
GitHub repository of a simple pokedex application using AngularJS2 and Material2

Hello wonderful people!

If you wanna get this magnificent pokedex and run it, follow these steps:

### NPM

To use this application, running on AngularJS2, you'll need the node package manager, or npm in short.
To get it, simply download it and follow the installation procedures (you can find it easily on the [NodeJS website](https://nodejs.org)).

If you already have npm installed, just update it:
```bash
npm install -g npm@latest
```

And then, be sure to install angular-cli (or update it):
```bash
npm install -g angular-cli
```

### Getting the project

Well, just download directly from [there](https://github.com/Thuwa77/pokedex/archive/master.zip) and unzip the archive, or you can clone it via git:
```bash
git clone https://github.com/Thuwa77/pokedex.git [directory_name]
```
Do note that the directory_name is optional and set to "pokedex" by default.

### Installing dependencies

Once you're at the root of the pokedex application, run:
```bash
npm install
```
And wait a moment...

### Running the application

Finally, you can run the application! While in the root folder, simply launch the service via:
```bash
npm start
```
Do note that `npm start` just run the `ng serve` command, so you can interchangeably use `npm start` or `ng serve`, as you like.
Second note: the default port is 4200, be sure that no application currently runs with this port, or kill it!

Once the server is launched, just go to [localhost:4200](http://localhost:4200) and voilà!

Oh, and if you like to run some tests, the command is simply `npm test`, but right now I can't seem to get it working... If you know how to, please do tell me!
