module.exports = {
	extends: ['stylelint-config-recommended-scss'],
	plugins: [
		'stylelint-order',
	],
	rules: {
		'declaration-property-value-no-unknown': null,
		'scss/at-import-partial-extension': null,
		'order/properties-alphabetical-order': true,
		'selector-class-pattern': ['^[a-z][a-zA-Z0-9]+$', {
			message: 'Expected name to be camelCase',
		}],
		'scss/at-mixin-pattern': [
			'^(-?[a-z][a-z0-9]*)(-[a-z0-9]+)*$',
			{
				message: 'Expected mixin name to be kebab-case',
			},
		],
		'scss/at-function-pattern': [
			'^(-?[a-z][a-z0-9]*)(-[a-z0-9]+)*$',
			{
				message: 'Expected function name to be kebab-case',
			},
		],
		'scss/percent-placeholder-pattern': [
			'^(-?[a-z][a-z0-9]*)(-[a-z0-9]+)*$',
			{
				message: 'Expected placeholder to be kebab-case',
			},
		],
		'rule-empty-line-before': ['always', {
			ignore: ['after-comment', 'first-nested', 'inside-block'],
		}],
		'selector-pseudo-class-no-unknown': [
			true,
			{
				ignorePseudoClasses: ['global'],
			}
		],
	},
}
