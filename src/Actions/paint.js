

export const paint = (color) => {
	console.log("action paint")
	return {
		type: 'PAINT',
		payload : {color:color},
	}
};

