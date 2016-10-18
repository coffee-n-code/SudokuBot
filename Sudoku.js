var Sudoku = (function () {
    function Sudoku() {
        this._board = {
            "A": new Array(9),
            "B": new Array(9),
            "C": new Array(9),
            "D": new Array(9),
            "E": new Array(9),
            "F": new Array(9),
            "G": new Array(9),
            "H": new Array(9),
            "I": new Array(9)
        };
    }
    Sudoku.prototype.toString = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        output = " | 1 2 3 4 5 6 7 8 9\n";
        output +=
        ;
    };
    return Sudoku;
}());
