install: install-deps

install-deps:
	npm ci

test:
	npm test

publish:
	npm publish --dry-run
	
brain-games:
	node bin/brain-games.js

make lint:
	npx eslint .

.PHONY: test