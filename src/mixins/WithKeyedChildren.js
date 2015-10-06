'use strict';

module.exports = {
	findChildByType(type) {
		return this.props.children.find(child => child.type === type);
	},
	
	findChildrenByType(type) {
		return this.props.children.filter(child => child.type === type);
	}
};
