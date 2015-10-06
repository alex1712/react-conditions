'use strict';

module.exports = {
	evaluateTestProp: function evaluateTestProp() {
		var props = arguments.length <= 0 || arguments[0] === undefined ? this.props : arguments[0];

		return typeof props.test === 'function' ? props.test() : props.test;
	}
};