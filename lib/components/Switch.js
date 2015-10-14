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