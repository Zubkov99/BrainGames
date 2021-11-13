install:
	npm ci

test:
	npm test

publish:
	npm publish --dry-run
	
brain-games:
	node bin/brain-games.js

brain-calc:
	node bin/brain-calc.js

brain-even:
	node bin/brain-even.js

brain-gsd:
	node bin/brain-gsd.js

brain-prime:
	node bin/brain-prime.js

brain-progression:
	node bin/brain-progression.js

make lint:
	npx eslint .

.PHONY: test

