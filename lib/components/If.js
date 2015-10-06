'use strict';

var React = require('react');

var TestEvaluator = require('../mixins/TestEvaluator');

var If = React.createClass({
	displayName: 'If',

	mixins: [TestEvaluator],

	propTypes: {
		test: React.PropTypes.oneOfType([React.PropTypes.bool.isRequired, React.PropTypes.func.isRequired])
	},

	render: function render() {
		var testResult = this.evaluateTestProp();
		var childrenCount = React.Children.count(this.props.children);
		if (childrenCount === 0 || !testResult) return null;

		if (childrenCount === 1 && React.isValidElement(this.props.children)) return this.props.children;else return React.createElement(
			'div',
			null,
			this.props.children
		);
	}
});

module.exports = If;