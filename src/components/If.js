var React = require('react');

var TestEvaluator = require('../mixins/TestEvaluator');

var If = React.createClass({
	mixins: [TestEvaluator],
	
	propTypes: {
		test: React.PropTypes.oneOfType([
			React.PropTypes.bool,
			React.PropTypes.func
		]).isRequired
	},

	render(){
		var testResult =  this.evaluateTestProp();
		var childrenCount = React.Children.count(this.props.children);
		if(childrenCount === 0 || !testResult) return null;
		
		if (React.isValidElement(this.props.children)) return this.props.children;
		else return <div>{this.props.children}</div>;
	}
});

module.exports = If;
