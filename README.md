# GifTastic

## Overview

Because GIFs make life fun! Use Giphy API from Giphy Developers. Check out Giphy Labs for inspiration.

![Alt Text](https://media.giphy.com/media/vFKqnCdLPNOKc/giphy.gif)

## Scripting/Programming Languages

- HTML
- CSS (including Bootstrap)
- JavaScript (and libraries jQuery)

## Screenshots

![image](https://user-images.githubusercontent.com/52920074/66431475-0b236980-e9ea-11e9-8af3-0a8e18c9cb1f.png)

![image](https://user-images.githubusercontent.com/52920074/66444296-b2b39280-ea10-11e9-9326-3dae4580fa34.png)

## Installation

Download your [GIPHY Developer]() app. Manage your apps, create your app and sign in to get your API Key.

## Usage

Set the API version and api_key.

```
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topics + "&api_key=bKRakmKXT6210rxtpqBRT0Qi7xZgBdLE&limit=10";
```

Syntax for Ajax call:

```
$.ajax({
url: queryURL,
method: "GET"
}).then(function (response) {
console.log(queryURL);
console.log(response);

var result = response.data;
}
```

### Github Deployed Link

[Gif Tastic](https://keerthi-mani.github.io/GifTastic/)

### Important:

Giphy API is currently in public beta. Unless version and api_key are set to specific values the default values for the beta period will be used. Check Giphy's API for updates.

That's it, you're ready to have fun!

### Trending

```
Giphy.trending(limit: 5)
```

### Searching

```
https://api.giphy.com/v1/gifs/search?q=" + topics
```

### Feedback and issues:

I really appreciate your feedback. If you want to see some improvements in the app I'll be really grateful if you can drop me a message.

Additionally, if you find any issue when running the app or any other other matter, please feel free to open an issue in this Github repo.

Author - Keerthi

### License

This project is licensed under the MIT License - see the LICENSE.md file for details

### Acknowledgement

Joe Han, Joshua Appel, Erin Rizal, & Jonathan Ho - Rutgers BCS Instructor and TA's

All of the Rutgers BCS Classmates that help make everyday an amazing experience.
