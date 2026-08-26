function getPawnMoves(piece, pieces) {
    const moves = [];
    const files = ["a", "b", "c", "d", "e", "f", "g", "h"];
    const file = piece.position[0];
    const rank = Number(piece.position[1]);
    const column = files.indexOf(file);
    if(piece.color === "white") {
        const oneStep = rank + 1;
        if(!pieces.some(p => p.position === file + oneStep)) {
            moves.push(file + oneStep);
        }
        if(rank === 2) {
            const twoStep = rank + 2;
            if( !pieces.some(p => p.position === file + oneStep) && !pieces.some(p => p.position === file + twoStep)) {
                moves.push(file + twoStep);
            }
        }
        const nextRank = rank + 1;
        const diagonalLeft = column - 1;
        const diagonalRight = column + 1;
        if(diagonalLeft >= 0) {
            const leftPosition = files[diagonalLeft] + nextRank;
            const enemy = pieces.find(p => p.position === leftPosition && p.color !== piece.color
            );
            if(enemy && enemy.type !== "king") {
                moves.push(leftPosition);
            }
        }
        if(diagonalRight <= 7) {
            const rightPosition = files[diagonalRight] + nextRank;
            const enemy = pieces.find( p => p.position === rightPosition && p.color !== piece.color);
            if(enemy && enemy.type !== "king") {
                moves.push(rightPosition);
            }
        }
    }
    if(piece.color === "black") {
        const oneStep = rank - 1;
        if(!pieces.some(p => p.position === file + oneStep)) {
            moves.push(file + oneStep);
        }
        if(rank === 7) {
            const twoStep = rank - 2;
            if( !pieces.some(p => p.position === file + oneStep) && !pieces.some(p => p.position === file + twoStep)) {
                moves.push(file + twoStep);
            }
        }        
        const nextRank = rank - 1;
        const diagonalLeft = column - 1;
        const diagonalRight = column + 1;
        if(diagonalLeft >= 0) {
            const leftPosition = files[diagonalLeft] + nextRank;
            const enemy = pieces.find( p => p.position === leftPosition && p.color !== piece.color );
            if(enemy && enemy.type !== "king") {
                moves.push(leftPosition);
            }
        }
        if(diagonalRight <= 7) {
            const rightPosition = files[diagonalRight] + nextRank;
            const enemy = pieces.find( p => p.position === rightPosition && p.color !== piece.color );
            if(enemy && enemy.type !== "king") {
                moves.push(rightPosition);
            }
        }
    }
    return moves;
}


function getQueenMoves(piece , pieces) {
    const moves = [];
    const files = ["a" , "b" , "c" , "d" , "e" , "f" , "g" , "h"];
    const file = piece.position[0];
    const rank = Number(piece.position[1]);
    const column = files.indexOf(file);
    const directions = [ [1,0] , [-1,0] , [0,1] , [0,-1] , [1,1] , [-1,1] , [1,-1] , [-1,-1] ];
    for(let direction of directions) {
        let currentColumn = column + direction[0];
        let currentRank = rank + direction[1];
        while(currentColumn >=0 && currentColumn <=7 && currentRank >=1 && currentRank <=8) {
            const position = files[currentColumn] + currentRank ;
            const obstacle = pieces.find( p => p.position === position);
            if(obstacle) {
                if(obstacle.color !== piece.color && obstacle.type !== "king") {
                    moves.push(position);
                }
                break;
            }
            moves.push(position);
            currentColumn += direction[0];
            currentRank += direction[1];
        }
    }
    return moves;
}
function getRookMoves(piece , pieces) {
    const moves = [];
    const files = ["a" , "b" , "c" , "d" , "e" , "f" , "g" , "h"];
    const file = piece.position[0];
    const rank = Number(piece.position[1]);
    const column = files.indexOf(file);
    const directions = [ [1,0] , [-1,0] , [0,1] , [0,-1]];
    for(let direction of directions) {
        let currentColumn = column + direction[0];
        let currentRank = rank + direction[1];
        while(currentColumn>=0 && currentColumn<=7 && currentRank>=1 && currentRank<=8) {
            const position = files[currentColumn] + currentRank;
            const obstacle = pieces.find(p => p.position === position);
            if(obstacle) {
                if(obstacle.color !== piece.color &&  obstacle.type !== "king") {
                    moves.push(position);
                }
                break;
            }
            moves.push(position);
            currentColumn += direction[0];
            currentRank += direction[1];
        }
    }
    return moves;
}
function getKnightMoves(piece , pieces) {
    const moves = [];
    const files = ["a" , "b" , "c" , "d" , "e" , "f" , "g" , "h"];
    const file = piece.position[0];
    const rank = Number(piece.position[1]);
    const column = files.indexOf(file);
    const possibleMoves = [[1,2] , [2,1] , [2,-1] , [1,-2] , [-1,-2] , [-2,-1] , [-2,1] , [-1,2]];
    for(let move of possibleMoves) {
        const newColumn = column + move[0];
        const newRank = rank + move[1];
        if(newColumn<0 || newColumn>7 || newRank<1 || newRank>8) {
            continue;
        }
        const position = files[newColumn] + newRank;
        const obstacle = pieces.find(p => p.position === position);
        if(!obstacle) {
            moves.push(position);
        }
        else if(obstacle.color !== piece.color &&  obstacle.type !== "king") {
            moves.push(position);
        }
    }
    return moves;
}
function getBishopMoves(piece , pieces) {
    const moves = [];
    const files = ["a" , "b" , "c" , "d" , "e" , "f" , "g" , "h"];
    const file = piece.position[0];
    const rank = Number(piece.position[1]);
    const column = files.indexOf(file);
    const directions = [[1,1] , [-1,1] , [1,-1] , [-1,-1]];
    for(let direction of directions) {
        let currentColumn = column + direction[0];
        let currentRank = rank + direction[1];
        while(currentColumn >=0 && currentColumn <=7 && currentRank >=1 && currentRank <=8) {
            const position = files[currentColumn] + currentRank;
            const obstacle = pieces.find(p => p.position === position);
            if(obstacle) {
                if(obstacle.color !== piece.color && obstacle.type !== "king") {
                    moves.push(position);
                }
                break;
            }
            moves.push(position);
            currentColumn += direction[0];
            currentRank += direction[1];
        }
    }
    return moves;
}
function getKingMoves(piece , pieces) {
    const moves = [];
    const files = ["a" , "b" , "c" , "d" , "e" , "f" , "g" , "h"];
    const file = piece.position[0];
    const rank = Number(piece.position[1]);
    const column = files.indexOf(file);
    const possibleMoves = [[1,0] , [-1,0] , [0,1] , [0,-1] , [1,1] , [-1,1] , [1,-1] , [-1,-1]];
    for(let move of possibleMoves) {
        const newColumn = column + move[0];
        const newRank = rank + move[1];
        if(newColumn<0 || newColumn>7 || newRank<1 || newRank>8) {
            continue;
        }
        const position = files[newColumn] + newRank;
        const obstacle = pieces.find(p => p.position === position);
        if(!obstacle) {
            moves.push(position);
        }
        else if(obstacle.color !== piece.color && obstacle.type !== "king") {
            moves.push(position);
        }
    }
    return moves;
}
function isSquareUnderAttack(position, color, pieces) {
    const enemyColor = color === "white" ? "black" : "white";
    const files = ["a", "b", "c", "d", "e", "f", "g", "h"];
    for(let enemy of pieces) {
        if(enemy.color !== enemyColor) 
            continue;
        const file = enemy.position[0];
        const rank = Number(enemy.position[1]);
        const column = files.indexOf(file);
        if(enemy.type === "pawn") {
            const direction = enemy.color === "white" ? 1 : -1;
            const attackRank = rank + direction;
            const leftColumn = column - 1;
            const rightColumn = column + 1;
            if(leftColumn >= 0) {
                if(files[leftColumn] + attackRank === position) 
                    return true; 
            }
            if(rightColumn <= 7) {
                if(files[rightColumn] + attackRank === position) 
                    return true;
            }
        }
        else if(enemy.type === "knight") {
            const possibleMoves = [[1, 2], [2, 1], [2, -1], [1, -2], [-1, -2], [-2, -1], [-2, 1], [-1, 2]];
            for(let move of possibleMoves) {
                const newColumn = column + move[0];
                const newRank = rank + move[1];
                if(newColumn < 0 || newColumn > 7 || newRank < 1 || newRank > 8) 
                    continue;
                if(files[newColumn] + newRank === position) 
                    return true;
            }
        }
        else if(enemy.type === "king") {
            const possibleMoves = [[1, 0], [-1, 0], [0, 1], [0, -1], [1, 1], [-1, 1], [1, -1], [-1, -1]];
            for(let move of possibleMoves) {
                const newColumn = column + move[0];
                const newRank = rank + move[1];
                if(newColumn < 0 || newColumn > 7 || newRank < 1 || newRank > 8) 
                    continue;
                if(files[newColumn] + newRank === position) 
                    return true;
            }
        }
        else {
            let directions = [];
            if(enemy.type === "rook") {
                directions = [
                    [1, 0], [-1, 0], [0, 1], [0, -1]
                ];
            }
            else if(enemy.type === "bishop") {
                directions = [[1, 1], [-1, 1], [1, -1], [-1, -1]];
            }
            else if(enemy.type === "queen") {
                directions = [[1, 0], [-1, 0], [0, 1], [0, -1], [1, 1], [-1, 1], [1, -1], [-1, -1]];
            }
    for(let direction of directions) {
    let currentColumn = column + direction[0];
    let currentRank = rank + direction[1];
    while(currentColumn >= 0 && currentColumn <= 7 && currentRank >= 1 && currentRank <= 8) {
        const currentPosition = files[currentColumn] + currentRank;
           if(currentPosition === position) 
               return true;
const obstacle = pieces.find(p => p.position === currentPosition);
if(obstacle) 
 break;
currentColumn += direction[0];
currentRank += direction[1];
                }
            }
        }
    }
    return false;
}
function isKingInCheck(color , pieces) {
    const king = pieces.find(
        piece => piece.type === "king" && piece.color === color
    );
    if(!king) {
        return false;
    }
    return isSquareUnderAttack(king.position , color , pieces);
}