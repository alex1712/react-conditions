var React = require('react');

//var WithKeyedChildren = require('./mixins/WithKeyedChildren');

var Conditional = React.createClass({

	_findChildByType(type) {
		return this.props.children.find(child => child.type === type);
	},
	
	_findChildToRender() {
		var childrensCount = React.Children.count(this.props.children); 
		if (childrensCount === 0) return null;
		else if (childrensCount === 1) {
			var child = this.props.children;
			var testVal = typeof child.props.test === 'function' ? child.props.test() : child.props.test;
			return child.type === Conditional.If && testVal ? child : null;
		} else {
			var validChild = this.props.children.find(child => {
				var testVal = typeof child.props.test === 'function' ? child.props.test() : child.props.test;
				return (child.type === Conditional.If || child.type === Conditional.ElseIf) && testVal;
			});
			if(validChild) return validChild;
			else {
				var elseComponent = this._findChildByType(Conditional.Else);
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
