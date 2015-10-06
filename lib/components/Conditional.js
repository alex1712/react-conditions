'use strict';

var React = require('react');

var TestEvaluator = require('../mixins/TestEvaluator');
var WithKeyedChildren = require('../mixins/WithKeyedChildren');

var Conditional = React.createClass({
	displayName: 'Conditional',

	mixins: [TestEvaluator, WithKeyedChildren],

	_findChildToRender: function _findChildToRender() {
		var _this = this;

		var childrensCount = React.Children.count(this.props.children);
		if (childrensCount === 0) return null;

		if (childrensCount === 1) {
			var child = this.props.children;
			var testVal = this.evaluateTestProp(child.props);
			return child.type === Conditional.If && testVal ? child : null;
		} else {
			var validChild = this.props.children.find(function (child) {
				var testVal = _this.evaluateTestProp(child.props);
				return (child.type === Conditional.If || child.type === Conditional.ElseIf) && testVal;
			});

			if (validChild) return validChild;else {
				var elseComponent = this.findChildByType(Conditional.Else);
				return elseComponent ? elseComponent : null;
			}
		}
	},

	render: function render() {
		var result = this._findChildToRender();
		return !result ? null : result;
	}
});

Conditional.If = React.createClass({
	displayName: 'If',

	propTypes: {
		test: React.PropTypes.oneOfType([React.PropTypes.bool.isRequired, React.PropTypes.func.isRequired])
	},

	render: function render() {
		return React.createElement(
			'div',
			null,
			this.props.children
		);
	}
});

Conditional.ElseIf = React.createClass({
	displayName: 'ElseIf',

	propTypes: {
		test: React.PropTypes.oneOfType([React.PropTypes.bool.isRequired, React.PropTypes.func.isRequired])
	},

	render: function render() {
		return React.createElement(
			'div',
			null,
			this.props.children
		);
	}
});

Conditional.Else = React.createClass({
	displayName: 'Else',

	render: function render() {
		return React.createElement(
			'div',
			null,
			this.props.children
		);
	}
});

module.exports = Conditional;