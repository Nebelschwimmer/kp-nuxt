export default (fn: ( ...args: number[]) => [number], delay: number) => {
	let timeoutId: number;
	return (...args: [number]) => {
		clearTimeout(timeoutId);
		timeoutId = window.setTimeout(() => {
			fn(...args);
		}, delay);
	};
}
