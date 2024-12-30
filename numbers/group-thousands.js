export const groupThousandsRegExp = /(?<!\.\d*)(?<=\d)(?=(\d{3})+(?!\d))|(?<=\.(\d{3})+)(?=\d)/g;

export function groupThousands(numberString, separator = ' ') {
	return numberString.replace(groupThousandsRegExp, separator);
}
