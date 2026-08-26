function getPositionCoordinates(position) {
    const column = position.charCodeAt(0) - 97;
    const row = 8 - Number(position[1]);

    return { x: column*60 , y: row*60 } ;
}

function drawPiece(piece) {
    const position = getPositionCoordinates(piece.position);
    const image = new Image();
    image.src = piece.image;
    image.onload = function() {
        ctx.drawImage(
            image , position.x , position.y , 60 , 60
        );
    };
}