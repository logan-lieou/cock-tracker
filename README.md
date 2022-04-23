## Logic

Goal: Given the user's cock size we want to rate it.

How we go about this, user enters their cock size into our database their uuid is their jwt, we can then in the next page
receive the information from our database.

Sign the jwt then [jwt, cock information] if form is valid on submit go to the next page, on the next page request information from the database
about.

```
{
	uuid: jwt,
	length: l
	girth: g
}
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```
