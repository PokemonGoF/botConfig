# bot-conf

You can use the botConfig [here](https://pokemongof.github.io/botConfig)

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.

## Publishing
botConfig uses github pages to serve the html files.   
To push a new version to production do the following.
- Clone this repo
- Create a dist folder (`mkdir dist`)
- In the dist folder initalize a new git repo
- Add this remote: `git@github.com:PokemonGoF/botConfig.git`
- Followed by a fetch of the origin
- Checkout the gh-pages branch
- Go back to the root dir and run a `grunt build`

## TODO
- [ ] Make some tests