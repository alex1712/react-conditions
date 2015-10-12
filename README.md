React Conditional
=======================

TODO

PLease, always remember that children are going to be evaluated always to be sent to the component, so the next code would break:

```
var	{ Conditional, If, Switch } = require('react-conditions');

<If test={typeof foo !== 'undefined'}>
	<span>{foo.bar}</span>
</If>
```

It would break because foo is going to be undefined and the span children is going to be evaluated althougt wouldn't be render in the DOM.

## Demo & Examples

Live demo: TODO

To build the examples locally, run:

```
npm install
gulp dev
```

Then open [`localhost:8000`](http://localhost:8000) in a browser.


## Installation

TODO

## Usage

TODO



```
var	{ Conditional, If, Switch } = require('react-conditions');

<If test={true}>
	<span>Hello</span>
</If>
```

```
var	{ Conditional, If, Switch } = require('react-conditions');

<If test={function() { return 1 === 2}}>
	<span>Hello</span>
</If>
```

```
var	{ Conditional, If, Switch } = require('react-conditions');

<Conditional>
	<Conditional.If test={function() { return  'foo' === 'bar';}}>
		Hello
	</Conditional.If>
	<Conditional.ElseIf test={function() { return  'foo' === 'foo';}}>
		Hello2
	</Conditional.ElseIf>
</Conditional>
```

```
var	{ Conditional, If, Switch } = require('react-conditions');

<Conditional>
	<Conditional.If test={true}>
		Hello
	</Conditional.If>
	<Conditional.ElseIf test={true}>
		Hello2
	</Conditional.ElseIf>
</Conditional>
```

```
var	{ Conditional, If, Switch } = require('react-conditions');

<Conditional>
	<Conditional.If test={false}>
		Hello
	</Conditional.If>
	<Conditional.ElseIf test={false}>
		Hello2
	</Conditional.ElseIf>
	<Conditional.Else >
		Else
	</Conditional.Else>
</Conditional>
```

```
var	{ Conditional, If, Switch } = require('react-conditions');

<Switch value="foo" breakInMatch={false}>
	<Switch.Case testValue="bar">
		BAR
	</Switch.Case>
	<Switch.Case testValue="foo">
		Foo
	</Switch.Case>
	<Switch.Default>
		Default
	</Switch.Default>
</Switch>
```

```
var	{ Conditional, If, Switch } = require('react-conditions');

<Switch value="foo" breakInMatch={false}>
	<Switch.Case testValue="bar">
		BAR
	</Switch.Case>
	<Switch.Case testValue="foo">
		Foo
		<Switch.Break />
	</Switch.Case>
	<Switch.Default>
		Default
	</Switch.Default>
</Switch>
```

```
var	{ Conditional, If, Switch } = require('react-conditions');

<Switch value="bar">
	<Switch.Case testValue="bar">
		BAR
	</Switch.Case>
	<Switch.Case testValue="foo">
		Foo
	</Switch.Case>
	<Switch.Default>
		Default
	</Switch.Default>
</Switch>
```

### Properties

* __DOCUMENT PROPERTIES HERE__

### Notes

__ADDITIONAL USAGE NOTES__

### License

MIT. Copyright (c) 2015 Alejandro Sellero.
