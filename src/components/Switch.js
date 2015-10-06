var React = require('react');

var WithKeyedChildren 	= require('../mixins/WithKeyedChildren');

var Switch = React.createClass({
	mixins: [WithKeyedChildren],

	propTypes: {
		value: React.PropTypes.any.isRequired,
		breakInMatch: React.PropTypes.bool
	},
	
	getDefaultProps() {
		return {
			breakInMatch: true
		}
	},
	
	_hasChildABreak(el) {
		return el.props.children.some ? el.props.children.some(child => child.type === Switch.Break) : false;
	},

	_findChildToRender() {
		var childrensCount = React.Children.count(this.props.children);
		if (childrensCount === 0) return null;

		if (childrensCount === 1) {
			let child = this.props.children;
			var shouldRender = child.type === Switch.Default || child.props.testValue === this.props.value;
			return shouldRender ? child : null;
		} else {
			let wasBroken = false;
			let childrenResult = [];
			let children = this.findChildrenByType(Switch.Case);
			
			for (let i = 0; i < children.length; ++i) {
				let child = children[i];
				if(this.props.value === child.props.testValue) {
					childrenResult.push(child);
					if (this.props.breakInMatch || this._hasChildABreak(child)){
						wasBroken = true;
						break;
					} 
				}
			}
			if (!wasBroken) {
				let defaultChild = this.findChildByType(Switch.Default);
				if (defaultChild) childrenResult.push(defaultChild);
			}
			
			if(childrenResult.length === 0) return null;
			else if(childrenResult.length === 1) return React.isValidElement(childrenResult[0]) ? childrenResult[0] : <div>{childrenResult[0]}</div>;
			
			return <div>{childrenResult}</div>;
		}
	},
	
	render: function () {
		var result = this._findChildToRender();
		return !result ? null : result;
	}
});

Switch.Break = React.createClass({
	render() {
		return null;
	}
});

Switch.Case = React.createClass({
	mixins: [WithKeyedChildren],

	propTypes: {
		testValue: React.PropTypes.any.isRequired
	},
	
	render(){
		return React.isValidElement(this.props.children) ? this.props.children : <div>{this.props.children}</div>;
	}
});

Switch.Default = React.createClass({
	render(){
		return React.isValidElement(this.props.children) ? this.props.children : <div>{this.props.children}</div>;
	}
});

module.exports = Switch;
