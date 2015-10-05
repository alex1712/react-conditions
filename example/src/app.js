var React = require('react'),
	Conditional = require('react-conditional');

var App = React.createClass({
	render: function() {
		return (
			<div>
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
			</div>
		)
	}
});

React.render(<App />, document.getElementById('app'));
