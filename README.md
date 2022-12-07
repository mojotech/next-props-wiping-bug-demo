This repo exists to demonstrate a bug.

`nmp run dev` and browse to:
http://localhost:3000/en-us/z/a.html

You will see that the getStaticProps runs on the server and produces the correct props on initial render: 
```
{ product :  {aye: 'bar'} }
```

But then Next makes another XHR request to `en-us/z/a.html.json`.  The server 308-redirects this to `/en-us/z/a.html`, which returns a response 
in html format.


The client side of Next attempts to parse this response as JSON and winds up with `{}`, which then becomes the Page's new props.  In effect, all props are wiped out.

This bug goes away if any of the following things change:
 * rename middleware.ts (which does nothing) to another filename
 * change trailingSlash in the config to false.
 * request http://localhost:3000/en-us/z/a/ instead of using the .html suffix.

 Unfortunately, our app requires all of these things.  So we have to deal with this Next bug.