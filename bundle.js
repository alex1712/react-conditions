require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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


},{"../mixins/TestEvaluator":3,"../mixins/WithKeyedChildren":4,"react":undefined}],2:[function(require,module,exports){
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

		if (React.isValidElement(this.props.children)) return this.props.children;else return React.createElement(
			'div',
			null,
			this.props.children
		);
	}
});

module.exports = If;


},{"../mixins/TestEvaluator":3,"react":undefined}],3:[function(require,module,exports){
'use strict';

module.exports = {
	evaluateTestProp: function evaluateTestProp() {
		var props = arguments.length <= 0 || arguments[0] === undefined ? this.props : arguments[0];

		return typeof props.test === 'function' ? props.test() : props.test;
	}
};


},{}],4:[function(require,module,exports){
'use strict';

module.exports = {
	findChildByType: function findChildByType(type) {
		return this.props.children.find(function (child) {
			return child.type === type;
		});
	},

	findChildrenByType: function findChildrenByType(type) {
		return this.props.children.filter(function (child) {
			return child.type === type;
		});
	}
};


},{}],"react-conditions":[function(require,module,exports){
'use strict';

module.exports = {
	Conditional: require('./components/Conditional'),
	If: require('./components/If')
};


},{"./components/Conditional":1,"./components/If":2}]},{},[]);
