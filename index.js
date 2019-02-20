module.exports = {};

module.exports.delayedHello = (delay = 1200) => {
	setTimeout(() => console.log('hello'), delay);
};

module.exports.waitHello = (delay = 1200) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log(`hello (after ${delay})`);
			resolve();
		}, delay);
	});
};


