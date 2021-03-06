var React = require('react');

var	{ Conditional, If, Switch } = require('react-conditions');

var App = React.createClass({
	render: function() {
		return (
			<div>
				<p>
					Input:<br/>
					<pre className="code">
{`	<If test={true}>
		<span>Hello</span>
	</If>`}
					</pre>
					Output:<br/>
					<If test={true}>
						<span>Hello</span>
					</If>
				</p>
				<p>
					Input:<br/>
					<pre className="code">
{`	<If test={function() {return 'foo' == 'foo'}}>
		Hello
	</If>`}
					</pre>
					Output:<br/>
					<If test={function() {return 'foo' == 'foo'}}>
						Hello
					</If>
				</p>
				
				<p>
					Input:<br/>
					<pre className="code">
{`	<Conditional>
		<Conditional.If test={true}>
			Hello
		</Conditional.If>
		<Conditional.ElseIf test={true}>
			Hello2
		</Conditional.ElseIf>
	</Conditional>`}
					</pre>
					Output:<br/>
					<Conditional>
						<Conditional.If test={true}>
							Hello
						</Conditional.If>
						<Conditional.ElseIf test={true}>
							Hello2
						</Conditional.ElseIf>
					</Conditional>
				</p>
				<p>
					Input:<br/>
					<pre className="code">
{`	<Conditional>
		<Conditional.If test={false}>
			Hello
		</Conditional.If>
		<Conditional.ElseIf test={true}>
			Hello2
		</Conditional.ElseIf>
	</Conditional>`}
					</pre>
					Output:<br/>
					<Conditional>
						<Conditional.If test={false}>
							Hello
						</Conditional.If>
						<Conditional.ElseIf test={true}>
							Hello2
						</Conditional.ElseIf>
					</Conditional>
				</p>
				<p>
					Input:<br/>
					<pre className="code">
{`	<Conditional>
		<Conditional.If test={false}>
			Hello
		</Conditional.If>
		<Conditional.ElseIf test={false}>
			Hello2
		</Conditional.ElseIf>
		<Conditional.Else >
			Else
		</Conditional.Else>
	</Conditional>`}
					</pre>
					Output:<br/>
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
				</p>

				<p>
					Input:<br/>
					<pre className="code">
{`	<Conditional>
		<Conditional.If test={() => 1 === 2}>
			Hello
		</Conditional.If>
		<Conditional.ElseIf test={() => 1 === 1}>
			Hello2
		</Conditional.ElseIf>
		<Conditional.Else >
			Else
		</Conditional.Else>
	</Conditional>`}
					</pre>
					Output:<br/>
					<Conditional>
						<Conditional.If test={() => 1 === 2}>
							Hello
						</Conditional.If>
						<Conditional.ElseIf test={() => 1 === 1}>
							Hello2
						</Conditional.ElseIf>
						<Conditional.Else >
							Else
						</Conditional.Else>
					</Conditional>
				</p>

				<p>
					Input:<br/>
					<pre className="code">
{`	<Conditional>
		<Conditional.If test={function() { return  'foo' === 'bar';}}>
			Hello
		</Conditional.If>
		<Conditional.ElseIf test={function() { return  'foo' === 'foo';}}>
			Hello2
		</Conditional.ElseIf>
	</Conditional>`}
					</pre>
					Output:<br/>
					<Conditional>
						<Conditional.If test={function() { return  'foo' == 'bar';}}>
							Hello
						</Conditional.If>
						<Conditional.ElseIf test={function() { return  'foo' == 'foo';}}>
							Hello2
						</Conditional.ElseIf>
					</Conditional>
				</p>


				<p>
					Input:<br/>
					<pre className="code">
{`	<Switch value="foo" breakInMatch={false}>
		<Switch.Case testValue="bar">
			BAR
		</Switch.Case>
		<Switch.Case testValue="foo">
			Foo
		</Switch.Case>
		<Switch.Default>
			Default
		</Switch.Default>
	</Switch>`}
					</pre>
					Output:<br/>
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
				</p>

				<p>
					Input:<br/>
					<pre className="code">
{`	<Switch value="foo" breakInMatch={false}>
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
	</Switch>`}
					</pre>
					Output:<br/>
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
				</p>

				<p>
					Input:<br/>
					<pre className="code">
{`	<Switch value="bar">
		<Switch.Case testValue="bar">
			BAR
		</Switch.Case>
		<Switch.Case testValue="foo">
			Foo
		</Switch.Case>
		<Switch.Default>
			Default
		</Switch.Default>
	</Switch>`}
					</pre>
					Output:<br/>
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
				</p>
			</div>
		)
	}
});

React.render(<App />, document.getElementById('app'));
