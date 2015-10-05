require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"react-conditions":[function(require,module,exports){
'use strict';

var React = require('react');

//var WithKeyedChildren = require('./mixins/WithKeyedChildren');

var Conditional = React.createClass({
	displayName: 'Conditional',

	_findChildByType: function _findChildByType(type) {
		return this.props.children.find(function (child) {
			return child.type === type;
		});
	},

	_findChildToRender: function _findChildToRender() {
		var childrensCount = React.Children.count(this.props.children);
		if (childrensCount === 0) return null;else if (childrensCount === 1) {
			var child = this.props.children;
			var testVal = typeof child.props.test === 'function' ? child.props.test() : child.props.test;
			return child.type === Conditional.If && testVal ? child : null;
		} else {
			var validChild = this.props.children.find(function (child) {
				var testVal = typeof child.props.test === 'function' ? child.props.test() : child.props.test;
				return (child.type === Conditional.If || child.type === Conditional.ElseIf) && testVal;
			});
			if (validChild) return validChild;else {
				var elseComponent = this._findChildByType(Conditional.Else);
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


},{"react":undefined}]},{},[]);
