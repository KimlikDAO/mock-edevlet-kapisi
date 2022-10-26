build/oauth2.js: oauth2.js lib/util/cf-worker.js lib/api/edevletApi.js
	mkdir -p build
	yarn google-closure-compiler -W VERBOSE -O ADVANCED --charset UTF-8 \
                             --env BROWSER \
                             --assume_function_wrapper \
                             --js $^ \
                             --checks_only
	yarn uglifyjs $< -m -o $@

clean:
	rm -rf build

cf-deployment: build/oauth2.js
	yarn wrangler publish
