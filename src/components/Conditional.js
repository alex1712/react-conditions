var React = require('react');

var TestEvaluator 		= require('../mixins/TestEvaluator');
var WithKeyedChildren 	= require('../mixins/WithKeyedChildren');

var Conditional = React.createClass({
	mixins: [TestEvaluator, WithKeyedChildren],

	_findChildToRender() {
		var childrensCount = React.Children.count(this.props.children); 
		if (childrensCount === 0) return null;
		
		if (childrensCount === 1) {
			var child = this.props.children;
			var testVal = this.evaluateTestProp(child.props);
			return child.type === Conditional.If && testVal ? child : null;
		} else {
			var validChild = this.props.children.find(child => {
				var testVal = this.evaluateTestProp(child.props);
				return (child.type === Conditional.If || child.type === Conditional.ElseIf) && testVal;
			});
			
			if(validChild) return validChild;
			else {
				var elseComponent = this.findChildByType(Conditional.Else);
				return elseComponent ? elseComponent : null;	
			}  
			
		}
	},
	
	render: function () {
		var result = this._findChildToRender();
		return !result ? null : result;
	}
});

Conditional.If = React.createClass({

	propTypes: {
		test: React.PropTypes.oneOfType([
			React.PropTypes.bool.isRequired,
			React.PropTypes.func.isRequired
		])
	},

	render(){
		return <div>{this.props.children}</div>;
	}
});

Conditional.ElseIf = React.createClass({

	propTypes: {
		test: React.PropTypes.oneOfType([
			React.PropTypes.bool.isRequired,
			React.PropTypes.func.isRequired
		])
	},

	render(){
		return <div>{this.props.children}</div>;
	}
});


Conditional.Else = React.createClass({
	render(){
		return <div>{this.props.children}</div>;
	}
});

module.exports = Conditional;
