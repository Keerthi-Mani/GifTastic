# GifTastic

## Overview

Because GIFs make life fun! Use Giphy API from Giphy Developers.  Check out Giphy Labs for inspiration.

## Scripting/Programming Languages

* HTML
*  CSS (including Bootstrap) 
* JavaScript (and libraries jQuery)

## Screenshots

## Installation

Download your GIPHY Developer app. Manage your apps, create your app and sign in to get your API Key. 


## Usage

Set the API version and api_key.

```        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topics + "&api_key=bKRakmKXT6210rxtpqBRT0Qi7xZgBdLE&limit=10";
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
## License

This project is licensed under the MIT License - see the LICENSE.md file for details
MIT © [Keerthi Mani]()
