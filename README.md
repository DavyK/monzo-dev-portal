# monzo-dev-portal

## Getting Started
```
npm i
npm i -g webpack-cli
npm start
```
In your browser, go to `localhost:9000`

## Where to Next
I spent about 6 hours on this, which is more than I should have. 😳

I did struggle at the start with the login functionality as handling authentication through react is not something I have done before. I have always used python to handle authentication and redirection if authentication failed and use plain JS to pass along the cookie. If I were to revisit the code I would definitely change how I have implemented this.

Also, form validation and error messages are currently not in the Login form, I'd like to add those in too.

I never got to Pagination, due to time. That would obviously be the next task to meet the spec. From the gist, it didn't seem as there was a way to know the total of number of users, or if a given page was the last page. I think infinite scrolling of users would be the appropriate choice here.

I used a lot of css-grid for the layout. Hopefully your browser is modern enough so that it doesn't look too awful. It probably won't look as intended in I.E.

The **App** Avatars take a very long time to load so I'd like to see if I could do some progressive loading, though for avatars that might not be necessary.
