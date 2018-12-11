// https://eslint.org/docs/user-guide/configuring

module.exports = {
	root: true,
	parser: 'babel-eslint',
	parserOptions: {
		sourceType: 'module'
	},
	env: {
		browser: true,
		node: true
	},
	extends: 'airbnb-base',
	// required to lint *.vue files
	plugins: [
		'html'
	],
	// check if imports actually resolve
	settings: {
		'import/resolver': {
			webpack: {
				config: {
					resolve: {
						extensions: ['.js', '.vue']
					},
				},
			},
		},
	},
	// add your custom rules here
	rules: {
		// don't require .vue extension when importing
		'import/extensions': ['error', 'always', {
			js: 'never',
			vue: 'never'
		}],
		// disallow reassignment of function parameters
		// disallow parameter object manipulation except for specific exclusions
		'no-param-reassign': ['error', {
			props: true,
			ignorePropertyModificationsFor: [
				'state', // for vuex state
				'acc', // for reduce accumulators
				'e' // for e.returnvalue
			]
		}],
		// allow optionalDependencies
		'import/no-extraneous-dependencies': [
			'error', 
			{
				'devDependencies': true,
				'optionalDependencies': false,
				'peerDependencies': false
			}
		],
		'no-plusplus': 'off',
		// allow debugger during development
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		// allow debugger during development
		'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
		'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,
		'indent': [2, 'tab'],
		'no-tabs': 0,
		'no-param-reassign': 0,
	}
}
