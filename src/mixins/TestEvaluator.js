'use strict';

module.exports = {
	evaluateTestProp: (props = this.props) => {
		return typeof props.test === 'function' ? props.test() : props.test;
	}
};
