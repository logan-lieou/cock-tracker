## Logic

Goal: Given the user's cock size we want to rate it.

How we go about this, user enters their cock size into our database their uuid is their jwt, we can then in the next page
receive the information from our database.

Sign the jwt then [jwt, cock information] if form is valid on submit go to the next page, on the next page request information from the database
about.

```
{
	jwt: uuid,
	name: string,
	girth: number,
	length: number,
	metric: bool,
}
```

## TODO's

- Unit Select (for now we use cm because that's what our dataset uses)
- statistics and backend jaja magic
- presistant database with cock distrobution

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```
