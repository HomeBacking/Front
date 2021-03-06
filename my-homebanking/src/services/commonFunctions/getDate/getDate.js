const currentDateObj = () => {
	const date = new Date();
	return date;
};

const transformDateObj = date => {
	const dateWithProp = new Date(date);
	return dateWithProp;
};

export const getCurrentTime = () => {
	let time = '';
	const hour = currentDateObj().getHours();
	const minutes = currentDateObj().getMinutes();
	time = `${hour}:${minutes} hs`;
	return time;
};

export const transformDateToHumanDate = date => {
	const allMonths = [
		'Ene',
		'Feb',
		'Mar',
		'Abr',
		'May',
		'Jun',
		'Jul',
		'Ago',
		'Sep',
		'Oct',
		'Nov',
		'Dic',
	];

	const days = [
		'Domingo',
		'Lunes',
		'Martes',
		'Miercoles',
		'Jueves',
		'Viernes',
		'Sabado',
	];
	const dateOfToday = currentDateObj().toLocaleDateString();
	const currentDay = currentDateObj().getDate();
	const currentMonth = currentDateObj().getMonth();
	const currentYear = currentDateObj().getFullYear();

	const day = transformDateObj(date).getDate();
	const dayFromDate = transformDateObj(date).getDay();

	const dayTransfered = days.find((e, index) => index === dayFromDate);
	const monthFromDate = transformDateObj(date).getMonth();
	const month = allMonths.find((e, index) => index === monthFromDate);
	const year = transformDateObj(date).getFullYear();
	const hour = transformDateObj(date).getHours();
	const minutes = transformDateObj(date).getMinutes();
	const newDate = transformDateObj(date).toLocaleDateString();
	let result = '';
	const timeDate = `${hour}:${minutes} hs`;

	const evaluateDay = lessADay => {
		const conditional =
			currentMonth === monthFromDate &&
			currentYear === year &&
			currentDay - lessADay === day;
		return conditional;
	};

	if (dateOfToday === newDate) {
		result = `Hoy - ${timeDate}`;
	} else if (evaluateDay(1)) {
		result = `Ayer - ${timeDate}`;
	} else if (evaluateDay(2)) {
		result = `${dayTransfered} - ${timeDate}`;
	} else if (evaluateDay(3)) {
		result = `${dayTransfered} - ${timeDate}`;
	} else if (evaluateDay(4)) {
		result = `${dayTransfered} - ${timeDate}`;
	} else if (evaluateDay(5)) {
		result = `${dayTransfered} - ${timeDate}`;
	} else if (evaluateDay(6)) {
		result = `${dayTransfered} - ${timeDate}`;
	} else if (evaluateDay(7)) {
		result = `${dayTransfered} - ${timeDate}`;
	} else if (evaluateDay(8)) {
		result = `${dayTransfered} - ${timeDate}`;
	} else {
		result = `${day} ${month}. ${year} - ${timeDate}`;
	}
	return result;
};
