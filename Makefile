TESTS = test/*.test.js
REPORTER = spec
TIMEOUT = 1000

install:
	@npm install --registry=http://registry.npm.taobao.org

clean:
	@rm -f src/pvector.js
	@rm -f src/pvector.min.js

build:
	@browserify lib/pvector.js -s PVector -o src/pvector.js
	@./node_modules/.bin/uglifyjs src/pvector.js -c -o src/pvector.min.js

test: install
	@NODE_ENV=test ./node_modules/.bin/mocha \
		--reporter $(REPORTER) \
		--timeout $(TIMEOUT) \
		$(MOCHA_OPTS) \
		--require should \
		$(TESTS)

test-cov cov: install
	@NODE_ENV=test ./node_modules/.bin/istanbul cover ./node_modules/.bin/_mocha \
		-- -u exports \
		--reporter $(REPORTER) \
		--timeout $(TIMEOUT) \
		--require should \
		$(TESTS)

test-travis:
	@NODE_ENV=test node \
		node_modules/.bin/istanbul cover \
		./node_modules/.bin/_mocha \
		--report lcovonly \
		-- -u exports \
		--reporter $(REPORTER) \
		--require should \
		$(TESTS) \
		--bail

.PHONY: test
