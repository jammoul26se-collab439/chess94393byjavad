const imageCache = {};
let movingPiece = null;
let moveAnimationFrame = null;
function getPositionCoordinates(position) {
    const column = position.charCodeAt(0) - 97;
    const row = 8 - Number(position[1]);
    return { x: column * 60, y: row * 60 };
}
function drawPiece(piece) {
    if(piece === movingPiece)
        return;
    const position = getPositionCoordinates(piece.position);
    if(!imageCache[piece.image]) {
        const image = new Image();
        image.src = piece.image;
        imageCache[piece.image] = image;
        image.onload = function() {
            drawBoard();
        };
        return;
    }
    const image = imageCache[piece.image];
    if(!image.complete)
        return;
    ctx.drawImage(
        image,
        position.x,
        position.y,
        60,
        60
    );
}
function animateMove(piece, fromPosition, toPosition, callback) {
    if(moveAnimationFrame) {
        cancelAnimationFrame(moveAnimationFrame);
        moveAnimationFrame = null;
    }
    movingPiece = piece;
    const from = getPositionCoordinates(fromPosition);
    const to = getPositionCoordinates(toPosition);
    const startTime = performance.now();
    const distanceX = to.x - from.x;
    const distanceY = to.y - from.y;
    const distanceInSquares = Math.max(
        Math.abs(distanceX) / 60,
        Math.abs(distanceY) / 60
    );
    const duration = Math.max(
        250,
        distanceInSquares * 90
    );
    function animate(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const currentX = from.x + distanceX * progress;
        const currentY = from.y + distanceY * progress;
        drawBoard();
        if(imageCache[piece.image] && imageCache[piece.image].complete) {
            ctx.drawImage(
                imageCache[piece.image],
                currentX,
                currentY,
                60,
                60
            );
        }
        if(progress < 1) 
            moveAnimationFrame = requestAnimationFrame(animate);
        else {
            moveAnimationFrame = null;
            movingPiece = null;
            piece.position = toPosition;
            drawBoard();
            if(callback)
                callback();
        }
    }
    moveAnimationFrame = requestAnimationFrame(animate);
}
/* const imageCache = {};
function getPositionCoordinates(position) {
    const column = position.charCodeAt(0) - 97;
    const row = 8 - Number(position[1]);
    return { x: column * 60, y: row * 60 };
}
function drawPiece(piece) {
    const position = getPositionCoordinates(piece.position);
    if(!imageCache[piece.image]) {
        const image = new Image();
        image.src = piece.image;
        imageCache[piece.image] = image;
        image.onload = function() {
            drawBoard();
        };
        return;
    }
    const image = imageCache[piece.image];
    if(!image.complete)
        return;
    ctx.drawImage(
        image,
        position.x,
        position.y,
        60,
        60
    );
}
*/
/*function getPositionCoordinates(position) {
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
    */