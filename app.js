require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var React = require('react');

var _require = require('react-conditions');

var Conditional = _require.Conditional;
var If = _require.If;
var Switch = _require.Switch;

var App = React.createClass({
	displayName: 'App',

	render: function render() {
		return React.createElement(
			'div',
			null,
			React.createElement(
				'p',
				null,
				'Input:',
				React.createElement('br', null),
				React.createElement(
					'pre',
					{ className: 'code' },
					'\t<If test={true}>\n\t\t<span>Hello</span>\n\t</If>'
				),
				'Output:',
				React.createElement('br', null),
				React.createElement(
					If,
					{ test: true },
					React.createElement(
						'span',
						null,
						'Hello'
					)
				)
			),
			React.createElement(
				'p',
				null,
				'Input:',
				React.createElement('br', null),
				React.createElement(
					'pre',
					{ className: 'code' },
					'\t<If test={function() {return \'foo\' == \'foo\'}}>\n\t\tHello\n\t</If>'
				),
				'Output:',
				React.createElement('br', null),
				React.createElement(
					If,
					{ test: function () {
							return 'foo' == 'foo';
						} },
					'Hello'
				)
			),
			React.createElement(
				'p',
				null,
				'Input:',
				React.createElement('br', null),
				React.createElement(
					'pre',
					{ className: 'code' },
					'\t<Conditional>\n\t\t<Conditional.If test={true}>\n\t\t\tHello\n\t\t</Conditional.If>\n\t\t<Conditional.ElseIf test={true}>\n\t\t\tHello2\n\t\t</Conditional.ElseIf>\n\t</Conditional>'
				),
				'Output:',
				React.createElement('br', null),
				React.createElement(
					Conditional,
					null,
					React.createElement(
						Conditional.If,
						{ test: true },
						'Hello'
					),
					React.createElement(
						Conditional.ElseIf,
						{ test: true },
						'Hello2'
					)
				)
			),
			React.createElement(
				'p',
				null,
				'Input:',
				React.createElement('br', null),
				React.createElement(
					'pre',
					{ className: 'code' },
					'\t<Conditional>\n\t\t<Conditional.If test={false}>\n\t\t\tHello\n\t\t</Conditional.If>\n\t\t<Conditional.ElseIf test={true}>\n\t\t\tHello2\n\t\t</Conditional.ElseIf>\n\t</Conditional>'
				),
				'Output:',
				React.createElement('br', null),
				React.createElement(
					Conditional,
					null,
					React.createElement(
						Conditional.If,
						{ test: false },
						'Hello'
					),
					React.createElement(
						Conditional.ElseIf,
						{ test: true },
						'Hello2'
					)
				)
			),
			React.createElement(
				'p',
				null,
				'Input:',
				React.createElement('br', null),
				React.createElement(
					'pre',
					{ className: 'code' },
					'\t<Conditional>\n\t\t<Conditional.If test={false}>\n\t\t\tHello\n\t\t</Conditional.If>\n\t\t<Conditional.ElseIf test={false}>\n\t\t\tHello2\n\t\t</Conditional.ElseIf>\n\t\t<Conditional.Else >\n\t\t\tElse\n\t\t</Conditional.Else>\n\t</Conditional>'
				),
				'Output:',
				React.createElement('br', null),
				React.createElement(
					Conditional,
					null,
					React.createElement(
						Conditional.If,
						{ test: false },
						'Hello'
					),
					React.createElement(
						Conditional.ElseIf,
						{ test: false },
						'Hello2'
					),
					React.createElement(
						Conditional.Else,
						null,
						'Else'
					)
				)
			),
			React.createElement(
				'p',
				null,
				'Input:',
				React.createElement('br', null),
				React.createElement(
					'pre',
					{ className: 'code' },
					'\t<Conditional>\n\t\t<Conditional.If test={() => 1 === 2}>\n\t\t\tHello\n\t\t</Conditional.If>\n\t\t<Conditional.ElseIf test={() => 1 === 1}>\n\t\t\tHello2\n\t\t</Conditional.ElseIf>\n\t\t<Conditional.Else >\n\t\t\tElse\n\t\t</Conditional.Else>\n\t</Conditional>'
				),
				'Output:',
				React.createElement('br', null),
				React.createElement(
					Conditional,
					null,
					React.createElement(
						Conditional.If,
						{ test: function () {
								return 1 === 2;
							} },
						'Hello'
					),
					React.createElement(
						Conditional.ElseIf,
						{ test: function () {
								return 1 === 1;
							} },
						'Hello2'
					),
					React.createElement(
						Conditional.Else,
						null,
						'Else'
					)
				)
			),
			React.createElement(
				'p',
				null,
				'Input:',
				React.createElement('br', null),
				React.createElement(
					'pre',
					{ className: 'code' },
					'\t<Conditional>\n\t\t<Conditional.If test={function() { return  \'foo\' === \'bar\';}}>\n\t\t\tHello\n\t\t</Conditional.If>\n\t\t<Conditional.ElseIf test={function() { return  \'foo\' === \'foo\';}}>\n\t\t\tHello2\n\t\t</Conditional.ElseIf>\n\t</Conditional>'
				),
				'Output:',
				React.createElement('br', null),
				React.createElement(
					Conditional,
					null,
					React.createElement(
						Conditional.If,
						{ test: function () {
								return 'foo' == 'bar';
							} },
						'Hello'
					),
					React.createElement(
						Conditional.ElseIf,
						{ test: function () {
								return 'foo' == 'foo';
							} },
						'Hello2'
					)
				)
			),
			React.createElement(
				'p',
				null,
				'Input:',
				React.createElement('br', null),
				React.createElement(
					'pre',
					{ className: 'code' },
					'\t<Switch value="foo" breakInMatch={false}>\n\t\t<Switch.Case testValue="bar">\n\t\t\tBAR\n\t\t</Switch.Case>\n\t\t<Switch.Case testValue="foo">\n\t\t\tFoo\n\t\t</Switch.Case>\n\t\t<Switch.Default>\n\t\t\tDefault\n\t\t</Switch.Default>\n\t</Switch>'
				),
				'Output:',
				React.createElement('br', null),
				React.createElement(
					Switch,
					{ value: 'foo', breakInMatch: false },
					React.createElement(
						Switch.Case,
						{ testValue: 'bar' },
						'BAR'
					),
					React.createElement(
						Switch.Case,
						{ testValue: 'foo' },
						'Foo'
					),
					React.createElement(
						Switch.Default,
						null,
						'Default'
					)
				)
			),
			React.createElement(
				'p',
				null,
				'Input:',
				React.createElement('br', null),
				React.createElement(
					'pre',
					{ className: 'code' },
					'\t<Switch value="foo" breakInMatch={false}>\n\t\t<Switch.Case testValue="bar">\n\t\t\tBAR\n\t\t</Switch.Case>\n\t\t<Switch.Case testValue="foo">\n\t\t\tFoo\n\t\t\t<Switch.Break />\n\t\t</Switch.Case>\n\t\t<Switch.Default>\n\t\t\tDefault\n\t\t</Switch.Default>\n\t</Switch>'
				),
				'Output:',
				React.createElement('br', null),
				React.createElement(
					Switch,
					{ value: 'foo', breakInMatch: false },
					React.createElement(
						Switch.Case,
						{ testValue: 'bar' },
						'BAR'
					),
					React.createElement(
						Switch.Case,
						{ testValue: 'foo' },
						'Foo',
						React.createElement(Switch.Break, null)
					),
					React.createElement(
						Switch.Default,
						null,
						'Default'
					)
				)
			),
			React.createElement(
				'p',
				null,
				'Input:',
				React.createElement('br', null),
				React.createElement(
					'pre',
					{ className: 'code' },
					'\t<Switch value="bar">\n\t\t<Switch.Case testValue="bar">\n\t\t\tBAR\n\t\t</Switch.Case>\n\t\t<Switch.Case testValue="foo">\n\t\t\tFoo\n\t\t</Switch.Case>\n\t\t<Switch.Default>\n\t\t\tDefault\n\t\t</Switch.Default>\n\t</Switch>'
				),
				'Output:',
				React.createElement('br', null),
				React.createElement(
					Switch,
					{ value: 'bar' },
					React.createElement(
						Switch.Case,
						{ testValue: 'bar' },
						'BAR'
					),
					React.createElement(
						Switch.Case,
						{ testValue: 'foo' },
						'Foo'
					),
					React.createElement(
						Switch.Default,
						null,
						'Default'
					)
				)
			)
		);
	}
});

React.render(React.createElement(App, null), document.getElementById('app'));


},{"react":undefined,"react-conditions":undefined}]},{},[1]);