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
		test: React.PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.func]).isRequired
	},

	render: function render() {
		return React.isValidElement(this.props.children) ? this.props.children : React.createElement(
			'div',
			null,
			this.props.children
		);
	}
});

Conditional.ElseIf = React.createClass({
	displayName: 'ElseIf',

	propTypes: {
		test: React.PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.func]).isRequired
	},

	render: function render() {
		return React.isValidElement(this.props.children) ? this.props.children : React.createElement(
			'div',
			null,
			this.props.children
		);
	}
});

Conditional.Else = React.createClass({
	displayName: 'Else',

	render: function render() {
		return React.isValidElement(this.props.children) ? this.props.children : React.createElement(
			'div',
			null,
			this.props.children
		);
	}
});

module.exports = Conditional;


},{"../mixins/TestEvaluator":4,"../mixins/WithKeyedChildren":5,"react":undefined}],2:[function(require,module,exports){
'use strict';

var React = require('react');

var TestEvaluator = require('../mixins/TestEvaluator');

var If = React.createClass({
	displayName: 'If',

	mixins: [TestEvaluator],

	propTypes: {
		test: React.PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.func]).isRequired
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


},{"../mixins/TestEvaluator":4,"react":undefined}],3:[function(require,module,exports){
'use strict';

var React = require('react');

var WithKeyedChildren = require('../mixins/WithKeyedChildren');

var Switch = React.createClass({
	displayName: 'Switch',

	mixins: [WithKeyedChildren],

	propTypes: {
		value: React.PropTypes.any.isRequired,
		breakInMatch: React.PropTypes.bool
	},

	getDefaultProps: function getDefaultProps() {
		return {
			breakInMatch: true
		};
	},

	_hasChildABreak: function _hasChildABreak(el) {
		return el.props.children.some ? el.props.children.some(function (child) {
			return child.type === Switch.Break;
		}) : false;
	},

	_findChildToRender: function _findChildToRender() {
		var childrensCount = React.Children.count(this.props.children);
		if (childrensCount === 0) return null;

		if (childrensCount === 1) {
			var child = this.props.children;
			var shouldRender = child.type === Switch.Default || child.props.testValue === this.props.value;
			return shouldRender ? child : null;
		} else {
			var wasBroken = false;
			var childrenResult = [];
			var children = this.findChildrenByType(Switch.Case);

			for (var i = 0; i < children.length; ++i) {
				var child = children[i];
				if (this.props.value === child.props.testValue) {
					childrenResult.push(child);
					if (this.props.breakInMatch || this._hasChildABreak(child)) {
						wasBroken = true;
						break;
					}
				}
			}
			if (!wasBroken) {
				var defaultChild = this.findChildByType(Switch.Default);
				if (defaultChild) childrenResult.push(defaultChild);
			}

			if (childrenResult.length === 0) return null;else if (childrenResult.length === 1) return React.isValidElement(childrenResult[0]) ? childrenResult[0] : React.createElement(
				'div',
				null,
				childrenResult[0]
			);

			return React.createElement(
				'div',
				null,
				childrenResult
			);
		}
	},

	render: function render() {
		var result = this._findChildToRender();
		return !result ? null : result;
	}
});

Switch.Break = React.createClass({
	displayName: 'Break',

	render: function render() {
		return null;
	}
});

Switch.Case = React.createClass({
	displayName: 'Case',

	mixins: [WithKeyedChildren],

	propTypes: {
		testValue: React.PropTypes.any.isRequired
	},

	render: function render() {
		return React.isValidElement(this.props.children) ? this.props.children : React.createElement(
			'div',
			null,
			this.props.children
		);
	}
});

Switch.Default = React.createClass({
	displayName: 'Default',

	render: function render() {
		return React.isValidElement(this.props.children) ? this.props.children : React.createElement(
			'div',
			null,
			this.props.children
		);
	}
});

module.exports = Switch;


},{"../mixins/WithKeyedChildren":5,"react":undefined}],4:[function(require,module,exports){
'use strict';

module.exports = {
	evaluateTestProp: function evaluateTestProp() {
		var props = arguments.length <= 0 || arguments[0] === undefined ? this.props : arguments[0];

		return typeof props.test === 'function' ? props.test() : props.test;
	}
};


},{}],5:[function(require,module,exports){
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
	Switch: require('./components/Switch'),
	Conditional: require('./components/Conditional'),
	If: require('./components/If')
};


},{"./components/Conditional":1,"./components/If":2,"./components/Switch":3}]},{},[]);
