const pieces = [] ;
for(let column = 0 ; column < 8 ; column++) {
    const position = String.fromCharCode(97 + column) + "2" ;
    const pawn = new Piece("pawn" , "white" , position , "assets/images/white-pawn.png");
    pieces.push(pawn);
}
for(let column of ["a" , "h"]) {
    const rook = new Piece("rook" , "white" , column+"1" , "assets/images/white-rook.png");
    pieces.push(rook);
}
for(let column of ["b" , "g"]) {
    const knight = new Piece("knight" , "white" , column+"1" , "assets/images/white-knight.png");
    pieces.push(knight);
}
for(let column of ["c" , "f"]) {
    const bishop = new Piece("bishop" , "white" , column+"1" , "assets/images/white-bishop.png");
    pieces.push(bishop);
}
const whiteQueen = new Piece("queen" , "white" , "d1" , "assets/images/white-queen.png");
pieces.push(whiteQueen);

const whiteKing = new Piece("king" , "white" , "e1" , "assets/images/white-king.png");
pieces.push(whiteKing);

for(let column=0; column<8 ; column++) {
    const position = String.fromCharCode(97 + column) + "7";
    const pawn = new Piece("pawn" , "black" , position , "assets/images/black-pawn.png");
    pieces.push(pawn);
}

for(let column of ["a" , "h"]) {
    const rook = new Piece("rook" , "black" , column+"8" , "assets/images/black-rook.png");
    pieces.push(rook);
}

for(let column of ["b" , "g"]) {
    const knight = new Piece("knight" , "black" , column+"8" , "assets/images/black-knight.png");
    pieces.push(knight);
}

for(let column of ["c" , "f"]) {
    const bishop = new Piece("bishop" , "black" , column+"8" , "assets/images/black-bishop.png");
    pieces.push(bishop);
}
const blackQueen = new Piece("queen" , "black" , "d8" , "assets/images/black-queen.png");
pieces.push(blackQueen);
const blackKing = new Piece("king" , "black" , "e8" , "assets/images/black-king.png");
pieces.push(blackKing);
//console.log(pieces);
