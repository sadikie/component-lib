# component-lib


build will tell Babel to transpile everything in lib and put it in the build directory. Remember how we made the entry build/index.js

lint will run our linter recursively over lib to make sure our syntax is correct.

lint:watch is a nice script that will update the linter anytime a change has been made in lib. It’ll help us catch mistakes as we go.

prepublish is a really cool script. npm looks for this when we run npm publish and executes it just before. This is a nice way to make sure our assets in build are the latest versions. We’ll also be adding a lint and test script here later. This helps us ensure we don’t publish broken code to npm.

Linking our Library
NOTE: You’ll probably want to keep your component library open in one terminal pane and the app in another.
First we’ll add a build:watch script to our library’s package.json. The -w tells Babel to keep an eye on any changes to the lib directory and update the build directory.

From the root of our component library, run npm link. You’ll probably notice it’s running the prepublish script in the console.

From the root of our component library, run npm link. You’ll probably notice it’s running the prepublish script in the console.
Now we’ll tell our playground app that we want to use that symlinked library. From the root of the playground app run:
NOTE: Remember to replace component-lib with the name of your library.
npm link component-lib

 Remember that build:watch script we added earlier? We can use that now.
$ npm run build:watch