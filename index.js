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
	exporter.waitHello(delay).then(cb);

	// NOTE: Notice how this log will print first 
	// because the .then(cb) above is asynchronous
	console.log('Impatiently logging before your call back >:D');

	return;
};

// async / await example
exporter.asyncHello = async (delay = 1200, cb) => {
	var result = await exporter.waitHello(delay);
	cb();

	// This impatient log won't actually get through before the
	// above cb() because we used the 'await' keyword to pause
	// this function before continuing.
	// So this function is asynchronous, but can be written 
	// in a simple line-by-line procedural manner.
	console.log('Impatiently logging... but still after your call back :(');

	return;
};
