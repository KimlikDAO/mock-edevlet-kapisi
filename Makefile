build/mock-edevlet-kapisi.js: mock-edevlet-kapisi.js \
    lib/api/oauth2.d.js \
    lib/node/nvi.d.js \
    lib/cloudflare/types.d.js lib/cloudflare/moduleWorker.d.js
	mkdir -p build
	yarn google-closure-compiler -W VERBOSE -O ADVANCED --charset UTF-8 \
                             --emit_use_strict \
                             --assume_function_wrapper \
                             --js $^ \
                             --js_output_file $@
	yarn uglifyjs $@ -m -o $@
	sed -i.bak 's/globalThis.Worker=/export default/g' $@

clean:
	rm -rf build

cf-deployment: build/mock-edevlet-kapisi.js mock-edevlet-kapisi.toml
	yarn wrangler publish -c mock-edevlet-kapisi.toml
