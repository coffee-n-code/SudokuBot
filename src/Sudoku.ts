class Sudoku {
	_board: Object = {
		"A": new Array(9),
		"B": new Array(9),
		"C": new Array(9),
		"D": new Array(9),
		"E": new Array(9),
		"F": new Array(9),
		"G": new Array(9),
		"H": new Array(9),
		"I": new Array(9)
	}
	
	render_row(row: any[]): string {
		var output = "";
		row.forEach((num: any) => {
			output += " ";
			if (num)
				output += num;
			else
				output += " ";
			output += " ";
		});
	}
	
	render_divider(): string {
		return "---|---|---|---|---|---|---|---|---|---";
	}
	
	toString(...args: any[]): string {
		return [
			render_row([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]),
			render_divider(),
			render_row(["A", 1, 2, 3, 4, 5, 6, 7, 8, 9]),
			render_divider(),
			render_row(["B", 1, 2, 3, 4, 5, 6, 7, 8, 9]),
			render_divider(),
			render_row(["C", 1, 2, 3, 4, 5, 6, 7, 8, 9]),
			render_divider(),
			render_row(["D", 1, 2, 3, 4, 5, 6, 7, 8, 9]),
			render_divider(),
			render_row(["E", 1, 2, 3, 4, 5, 6, 7, 8, 9]),
			render_divider(),
			render_row(["F", 1, 2, 3, 4, 5, 6, 7, 8, 9]),
			render_divider(),
			render_row(["G", 1, 2, 3, 4, 5, 6, 7, 8, 9]),
			render_divider(),
			render_row(["H", 1, 2, 3, 4, 5, 6, 7, 8, 9]),
			render_divider(),
			render_row(["I", 1, 2, 3, 4, 5, 6, 7, 8, 9])
		].join("\n");
	}
}