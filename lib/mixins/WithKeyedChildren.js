'use strict';

module.exports = {
	findChildByType: function findChildByType(type) {
		return this.props.children.find(function (child) {
			return child.type === type;
		});
	},

	findChildrenByType: function findChildrenByType(type) {
		return this.props.children.filter(function (child) {
			return child.type === type;
		});
	}
};