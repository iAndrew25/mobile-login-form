const BASE_UNIT = 8;

const Units = Array(40)
	.fill()
	.reduce((units, _, unit) => ({ ...units, [`x${unit}`]: unit * BASE_UNIT }), {});

export default Units;
