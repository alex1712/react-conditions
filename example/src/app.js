var React = require('react');

var	{ Conditional, If } = require('react-conditions');

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
{`	<If test={true}>
		Hello
	</If>`}
					</pre>
					Output:<br/>
					<If test={true}>
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
			</div>
		)
	}
});

React.render(<App />, document.getElementById('app'));
