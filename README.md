# component-lib


build will tell Babel to transpile everything in lib and put it in the build directory. Remember how we made the entry build/index.js

lint will run our linter recursively over lib to make sure our syntax is correct.

lint:watch is a nice script that will update the linter anytime a change has been made in lib. It’ll help us catch mistakes as we go.

prepublish is a really cool script. npm looks for this when we run npm publish and executes it just before. This is a nice way to make sure our assets in build are the latest versions. We’ll also be adding a lint and test script here later. This helps us ensure we don’t publish broken code to npm.