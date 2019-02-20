module.exports = {};

module.exports.delayedHello = (delay = 1200) => {
	setTimeout(() => console.log('hello'), delay);
}

