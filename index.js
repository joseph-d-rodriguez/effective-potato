var exporter = module.exports = {};

exporter.delayedHello = (delay = 1200) => {
	setTimeout(() => console.log('hello'), delay);
};

exporter.waitHello = (delay = 1200) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log(`hello (after ${delay})`);
			resolve();
		}, delay);
	});
};

// promise callback example
exporter.cbHello = (delay = 1200, cb) => {
	module.exports.waitHello(delay).then(cb);
};

