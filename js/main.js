var canvas = document.getElementById("chess-board");
var ctx = canvas.getContext("2d");
canvas.width = 480;
canvas.height = 480;
const squareSize = 60;
const startScreen = document.getElementById("start-screen");
const loadingText = document.getElementById("loading-text");
const startBlock = document.getElementById("start-block");
const startButton = document.getElementById("start-button");
const timers = document.getElementById("timers");
const whiteTimer = document.getElementById("white-timer");
const blackTimer = document.getElementById("black-timer");
const gameMusic = new Audio("assets/sounds/MusicPlay.mp4");
gameMusic.loop = true;
gameMusic.volume = 0.8;
const checkMessage = document.getElementById("check-message");
const gameOverMessage = document.getElementById("game-over-message");
let loadingDots = 1;
let gameStarted = false;
let loadingCycles = 0;
let soundsEnabled = true;
let musicEnabled = true;
let firstMusic = new Audio("assets/sounds/MusicPlayFirst.mp4");
firstMusic.loop = true;
firstMusic.volume = 0.8;
const clickSound = new Audio("assets/sounds/ClickSoundTrack.m4a");
clickSound.volume = 1;
function playClickSound() {
    if(!soundsEnabled)
        return;
    clickSound.currentTime = 0;
    clickSound.play();
}
function startLoading(callback) {
    startBlock.style.display = "none";
    loadingText.style.display = "block";
    loadingDots = 1;
    loadingCycles = 0;
    const loadingInterval = setInterval(() => {
        loadingText.textContent = "Loading" + ".".repeat(loadingDots);
        loadingDots++;
        if(loadingDots > 3) {
            loadingDots = 1;
            loadingCycles++;
        }
        if(loadingCycles === 2) {
            clearInterval(loadingInterval);
            loadingText.style.display = "none";
            if(callback)
              callback();
        }
    }, 500);
}
function setSoundsEnabled(enabled) {
    soundsEnabled = enabled;
    moveSound.muted = !enabled;
    killSound.muted = !enabled;
    checkSound.muted = !enabled;
    youWinSound.muted = !enabled;
    clickSound.muted = !enabled;
}
function showSoundMenu() {
    //yesButton.addEventListener("click", playClickSound);
    //noButton.addEventListener("click", playClickSound);
    startBlock.classList.add("main-menu");
    startBlock.innerHTML = "";
    startBlock.classList.add("sound-menu");
    const title = document.createElement("div");
    title.textContent = "Enable Sounds?";
    title.className = "menu-title";
    const buttonsContainer = document.createElement("div");
    buttonsContainer.className = "menu-buttons";
    const yesButton = document.createElement("button");
    yesButton.textContent = "YES";
    yesButton.className = "menu-button";
    const noButton = document.createElement("button");
    noButton.textContent = "NO";
    noButton.className = "menu-button";
    yesButton.addEventListener("click", function() {
        setSoundsEnabled(true);
        startLoading(showMainMenu);
        firstMusic.currentTime = 0;
        firstMusic.play();
    });
    noButton.addEventListener("click", function() {
        setSoundsEnabled(false);
        musicEnabled = false;
        firstMusic.pause();
        firstMusic.currentTime = 0;
        startLoading(showMainMenu);
    });
    buttonsContainer.appendChild(yesButton);
    buttonsContainer.appendChild(noButton);
    startBlock.appendChild(title);
    startBlock.appendChild(buttonsContainer);
    startBlock.style.display = "flex";
}
function showMainMenu() {
    startBlock.className = "main-menu";
    startBlock.innerHTML = "";
    startBlock.classList.remove("sound-menu");
    startBlock.classList.remove("difficulty-menu");
    startBlock.classList.add("main-menu");
    startBlock.innerHTML = "";
    const title = document.createElement("div");
    title.textContent = "Chess Game By Jawad Jammoul";
    title.className = "menu-title";
    const startButton = document.createElement("button");
    startButton.textContent = "Start";
    startButton.className = "menu-button";
    const optionsButton = document.createElement("button");
    optionsButton.textContent = "Options";
    optionsButton.className = "menu-button";
    const aboutButton = document.createElement("button");
    aboutButton.textContent = "About-Us";
    aboutButton.className = "menu-button";
    const exitButton = document.createElement("button");
    exitButton.textContent = "Exit";
    exitButton.className = "menu-button";
    startButton.addEventListener("click", playClickSound);
    optionsButton.addEventListener("click", playClickSound);
    aboutButton.addEventListener("click", playClickSound);
    exitButton.addEventListener("click", playClickSound);
    startButton.addEventListener("click", function() {
        showDifficultyMenu();
    });
    optionsButton.addEventListener("click", function() {
        showOptionsMenu();
    });
    aboutButton.addEventListener("click", function() {
        window.location.href = "https://mypersonalmainpage5600.jammoul26se.workers.dev/";
    });
    exitButton.addEventListener("click", function() {
        window.location.href = "https://www.google.com";
    });
    startBlock.appendChild(title);
    startBlock.appendChild(startButton);
    startBlock.appendChild(optionsButton);
    startBlock.appendChild(aboutButton);
    startBlock.appendChild(exitButton);
    startBlock.style.display = "flex";
}
function showOptionsMenu() {
    startBlock.classList.remove("main-menu");
    startBlock.classList.remove("sound-menu");
    startBlock.classList.remove("difficulty-menu");
    startBlock.classList.add("options-menu");
    startBlock.innerHTML = "";
    const title = document.createElement("div");
    title.textContent = "Options";
    title.className = "menu-title";
    const musicButton = document.createElement("button");
    musicButton.className = "menu-button";
    const soundButton = document.createElement("button");
    soundButton.className = "menu-button";
    const languageButton = document.createElement("button");
    languageButton.textContent = "Language";
    languageButton.className = "menu-button";
    const returnButton = document.createElement("button");
    returnButton.textContent = "Return";
    returnButton.className = "return-button";
    function updateMusicButton() {
        if(musicEnabled) {
            musicButton.textContent = "Music : On";
            musicButton.style.backgroundColor = "green";
        }
        else {
            musicButton.textContent = "Music : Off";
            musicButton.style.backgroundColor = "red";
        }
    }
    function updateSoundButton() {
        if(soundsEnabled) {
            soundButton.textContent = "Sound : On";
            soundButton.style.backgroundColor = "green";
        }
        else {
            soundButton.textContent = "Sound : Off";
            soundButton.style.backgroundColor = "red";
        }
    }
    musicButton.addEventListener("click", function() {
        musicEnabled = !musicEnabled;
        gameMusic.muted = !musicEnabled;
        firstMusic.muted = !musicEnabled;
        youWinSound.muted = !musicEnabled;
        if(musicEnabled) {
            if(gameStarted)
                gameMusic.play();
            else
                firstMusic.play();
        }
        else {
            gameMusic.pause();
            firstMusic.pause();
        }
        updateMusicButton();
    });
    soundButton.addEventListener("click", function() {
        setSoundsEnabled(!soundsEnabled);
        updateSoundButton();
    });
    languageButton.addEventListener("click", function() {
        playClickSound();
    });
    returnButton.addEventListener("click", function() {
        playClickSound();
        showMainMenu();
    });
    updateMusicButton();
    updateSoundButton();
    startBlock.appendChild(title);
    startBlock.appendChild(musicButton);
    startBlock.appendChild(soundButton);
    startBlock.appendChild(languageButton);
    startBlock.appendChild(returnButton);
    startBlock.style.display = "flex";
}
function drawMoveDot(position) {
    const files = ["a", "b", "c", "d", "e", "f", "g", "h"];
    const column = files.indexOf(position[0]);
    const row = 8 - Number(position[1]);
    const centerX = column * squareSize + squareSize / 2;
    const centerY = row * squareSize + squareSize / 2;
    ctx.beginPath();
    ctx.arc(
        centerX, centerY, 8 , 0 , Math.PI * 2
    );
    ctx.fillStyle = "gray";
    ctx.fill();
}
function drawCaptureDotSquare(position) {
    const files = ["a", "b", "c", "d", "e", "f", "g", "h"];
    const column = files.indexOf(position[0]);
    const row = 8 - Number(position[1]);
    ctx.fillStyle = "red";
    ctx.fillRect(column * squareSize , row * squareSize , squareSize , squareSize);
    const enemy = pieces.find(
        piece => piece.position === position 
    );
    if(enemy)
      drawPiece(enemy);
}
function showDifficultyMenu() {
    startBlock.classList.remove("main-menu");
    startBlock.classList.remove("sound-menu");
    startBlock.classList.add("difficulty-menu");
    startBlock.innerHTML = "";
    const title = document.createElement("div");
    title.textContent = "Please Select Difficulty";
    title.className = "menu-title";
    const easyButton = document.createElement("button");
    easyButton.textContent = "Easy AI";
    easyButton.className = "menu-button";
    const normalButton = document.createElement("button");
    normalButton.textContent = "Normal AI";
    normalButton.className = "menu-button";
    const hardButton = document.createElement("button");
    hardButton.textContent = "Hard AI";
    hardButton.className = "menu-button";
    const twoPlayersButton = document.createElement("button");
    twoPlayersButton.textContent = "2 Players";
    twoPlayersButton.className = "menu-button";
    const makhloutaButton = document.createElement("button");
    makhloutaButton.textContent = "Makhlouta AI";
    makhloutaButton.className = "menu-button";
    const returnButton = document.createElement("button");
    returnButton.textContent = "Return";
    returnButton.className = "return-button";
    easyButton.addEventListener("click", playClickSound);
    normalButton.addEventListener("click", playClickSound);
    hardButton.addEventListener("click", playClickSound);
    twoPlayersButton.addEventListener("click", playClickSound);
    makhloutaButton.addEventListener("click", playClickSound);
    returnButton.addEventListener("click", playClickSound);
    easyButton.addEventListener("click", function() {
        startEasyAIGame();
    });
    normalButton.addEventListener("click", function() {
    });
    hardButton.addEventListener("click", function() {
    });
    makhloutaButton.addEventListener("click", function() {
    });
    twoPlayersButton.addEventListener("click", function() {
        startTwoPlayersGame();
    });
    returnButton.addEventListener("click", function() {
        showMainMenu();
    });
    startBlock.appendChild(title);
    startBlock.appendChild(easyButton);
    startBlock.appendChild(normalButton);
    startBlock.appendChild(hardButton);
    startBlock.appendChild(twoPlayersButton);
    startBlock.appendChild(makhloutaButton);
    startBlock.appendChild(returnButton);
    startBlock.style.display = "flex";
}
function startTwoPlayersGame() {
    startScreen.style.display = "none";
    firstMusic.pause();
    firstMusic.currentTime = 0;
    gameMode = "2players";
    startLoading(function() {
        gameStarted = true;
        timers.style.display = "flex";
        whiteTime = 24;
        blackTime = 0;
        currentTurn = "white";
        gameOver = false;
        if(aiMoveTimeout) {
            clearTimeout(aiMoveTimeout);
            aiMoveTimeout = null;
        }
        updateTimers();
        startTimer();
        if(soundsEnabled && musicEnabled) {
            gameMusic.currentTime = 0;
            gameMusic.play();
        }
        drawBoard();
    });
}
function startEasyAIGame() {
    startScreen.style.display = "none";
    firstMusic.pause();
    firstMusic.currentTime = 0;
    gameMode = "easyAI";
    startLoading(function() {
        gameStarted = true;
        timers.style.display = "flex";
        whiteTime = 24;
        blackTime = 0;
        currentTurn = "white";
        gameOver = false;
        if(aiMoveTimeout) {
            clearTimeout(aiMoveTimeout);
            aiMoveTimeout = null;
        }
        updateTimers();
        startTimer();
        if(soundsEnabled && musicEnabled) {
            gameMusic.currentTime = 0;
            gameMusic.play();
        }
        drawBoard();
    });
}
function makeEasyAIMove() {
    if(gameOver)
        return;
    if(gameMode !== "easyAI")
        return;
    if(currentTurn !== "black")
        return;
    const blackPieces = pieces.filter(
        piece => piece.color === "black"
    );
    let allLegalMoves = [];
    for(let piece of blackPieces) {
        const moves = getPieceMoves(piece);
        const legalMoves = getLegalMoves(
            piece,
            moves
        );
        for(let move of legalMoves) {
            allLegalMoves.push({
                piece: piece,
                move: move
            });
        }
    }
    if(allLegalMoves.length === 0) {
        updateCheckStatus();
        if(checkedKing === "black") {
            endGame("black");
        }
        return;
    }
    const randomIndex = Math.floor(
        Math.random() * allLegalMoves.length
    );
    const selectedAIMove = allLegalMoves[randomIndex];
    const aiPiece = selectedAIMove.piece;
    const targetPosition = selectedAIMove.move;
    const capturedPiece = pieces.find(
        piece =>
            piece.position === targetPosition &&
            piece.color !== aiPiece.color
    );
    playMoveSound();
    if(capturedPiece) {
        const capturedIndex = pieces.indexOf(
            capturedPiece
        );
        pieces.splice(capturedIndex, 1);
        setTimeout(() => {
            if(soundsEnabled) {
                killSound.currentTime = 0;
                killSound.play();
            }
        }, 100);
    }
    aiPiece.position = targetPosition;
    updateCheckStatus();
    if(checkedKing) {
        if(soundsEnabled) {
            checkSound.currentTime = 0;
            checkSound.play();
        }
        if(checkForCheckmate()) {
            drawBoard();
            return;
        }
    }
    if(aiPiece.type === "pawn" && aiPiece.position[1] === "1") {
        aiPiece.type = "queen";
        aiPiece.image = "assets/images/black-queen.png";
    }
    switchTurn();
    drawBoard();
}
function drawBoard() { 
for(let row = 0 ; row < 8 ; row++) {
    for(let col = 0 ; col < 8 ; col++) {
        if((row + col) % 2 === 0)
            ctx.fillStyle = "white";
        else
            ctx.fillStyle = "black";
        ctx.fillRect( col * squareSize,  row * squareSize,   squareSize,   squareSize );
    }
}
for(let piece of pieces) {
    drawPiece(piece);
     }
     drawCheckSquare();
  }
let selectedPiece = null;
let validMoves = [];
let promotionPiece = null;
let currentTurn = "white";
let checkedKing = null; 
let whiteTime = 24;
let blackTime = 0;
let timerInterval = null;
let gameMode = "2players";
let aiMoveTimeout = null;
let gameOver = false;
drawBoard();
function updateTimers() {
 whiteTimer.textContent = "00:" + String(whiteTime).padStart(2, "0"); 
 blackTimer.textContent = "00:" + String(blackTime).padStart(2, "0");
}
function startTimer() {
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        if(currentTurn === "white") {
            if(whiteTime > 0) {
                whiteTime--;
                updateTimers();
            }
            if(whiteTime === 0) {
                switchTurn();
            }
        }
        else if(currentTurn === "black") {
          if(blackTime > 0){
          blackTime--;
          updateTimers();
          }
          if(blackTime === 0) {
            switchTurn();
          }
        }
    } , 1000);
}
function switchTurn() {
    selectedPiece = null;
    validMoves = [];
    if(currentTurn === "white") {
        whiteTime = 0;
        blackTime = 24;
        currentTurn = "black";
        updateTimers();
        drawBoard();
        if(gameMode === "easyAI") {
            const randomDelay = Math.floor(Math.random() * 5000) + 1000;
            aiMoveTimeout = setTimeout(() => {
                makeEasyAIMove();
            }, randomDelay);
        }
    }
    else {
        blackTime = 0;
        whiteTime = 24;
        currentTurn = "white";
        updateTimers();
        drawBoard();
    }
}
function updateCheckStatus() {
    if(isKingInCheck("white" , pieces)) {
        checkedKing = "white";
        checkMessage.style.display = "block";
    }
    else if(isKingInCheck("black" , pieces)) {
        checkedKing = "black";
        checkMessage.style.display = "block";
    }
    else {
        checkedKing = null;
        checkMessage.style.display = "none";
    }
}
function drawCheckSquare() {
    if(!checkedKing) {
        return;
    }
    const king = pieces.find(
        piece => piece.type === "king" && piece.color === checkedKing
    );
    if(!king) {
      return;
    }
    const files = ["a" , "b" , "c" , "d" , "e" , "f" , "g" , "h"];
    const column = files.indexOf(king.position[0]);
    const row = 8 - Number(king.position[1]);
    ctx.fillStyle = "red";
    ctx.fillRect(column* squareSize , row*squareSize , squareSize , squareSize);
    drawPiece(king);
}

const promotionMenu = document.getElementById("promotion-menu");
const moveSound = new Audio("assets/sounds/move.m4a");
function playMoveSound() {
    if(!soundsEnabled)
        return;
    moveSound.currentTime = 0;
    moveSound.play();
    setTimeout(() => {
        moveSound.pause();
        moveSound.currentTime = 0;
    } , 400);
}
const killSound = new Audio("assets/sounds/kill.m4a");
const pawnVoices = [
    new Audio("assets/sounds/CharactersVoices/pawn1.m4a"),
  //  new Audio("assets/sounds/CharactersVoices/pawn2.m4a")
    new Audio("assets/sounds/CharactersVoices/pawn3.m4a"),
    new Audio("assets/sounds/CharactersVoices/pawn4.m4a"),
    new Audio("assets/sounds/CharactersVoices/pawn5.m4a")
];
let remainingPawnVoices = [];
const bishopVoices = [
    new Audio("assets/sounds/CharactersVoices/bishop1.m4a"),
    new Audio("assets/sounds/CharactersVoices/bishop2.m4a")
];
let remainingBishopVoices = [];
const knightVoices = [
    new Audio("assets/sounds/CharactersVoices/knight01.m4a"),
    new Audio("assets/sounds/CharactersVoices/knight02.m4a")
];
let remainingKnightVoices = [];
const kingVoices = [
    new Audio("assets/sounds/CharactersVoices/king1.m4a"),
    new Audio("assets/sounds/CharactersVoices/king2.m4a"),
    new Audio("assets/sounds/CharactersVoices/king3.m4a")
]
let remainingKingVoices = [];
const queenVoices = [
    new Audio("assets/sounds/CharactersVoices/queen1.m4a"),
    new Audio("assets/sounds/CharactersVoices/queen2.m4a")
];
let remainingQueenVoices = [];
const rookVoices = [
    new Audio("assets/sounds/CharactersVoices/rook1.m4a") ,
    new Audio("assets/sounds/CharactersVoices/rook2.m4a")
];
let remainingRookVoices = [];
const characterVoices = [
    ...pawnVoices,   ...bishopVoices,  ...knightVoices,
    ...kingVoices,   ...queenVoices,   ...rookVoices
];
const checkSound = new Audio("assets/sounds/Check.mp4");
checkSound.volume = 1;
const youWinSound = new Audio("assets/sounds/youWinSoundTrick.mp4");
youWinSound.volume = 1;
startLoading(function() {
    showSoundMenu();
});
document.getElementById("bishop-btn").addEventListener("click" , function() {
    promotionPiece.type = "bishop";
    promotionPiece.image = promotionPiece.color === "white" ? "assets/images/white-bishop.png" : "assets/images/black-bishop.png";
   finishPromotion();
});
document.getElementById("knight-btn").addEventListener("click" , function() {
    promotionPiece.type = "knight";
    promotionPiece.image = promotionPiece.color === "white" ? "assets/images/white-knight.png" : "assets/images/black-knight.png";
    finishPromotion();
});
document.getElementById("queen-btn").addEventListener("click" , function() {
    promotionPiece.type = "queen";
    promotionPiece.image = promotionPiece.color === "white" ? "assets/images/white-queen.png" : "assets/images/black-queen.png";
    finishPromotion();
});
document.getElementById("rook-btn").addEventListener("click" , function() {
    promotionPiece.type = "rook";
    promotionPiece.image = promotionPiece.color === "white" ? "assets/images/white-rook.png" : "assets/images/black-rook.png";
    finishPromotion();
});
function finishPromotion() {
    promotionMenu.style.display = "none";
    updateCheckStatus();
    if(checkedKing) {
        if(soundsEnabled) {
             checkSound.currentTime = 0;
             checkSound.play();
        }
        if(checkForCheckmate()) {
            drawBoard();
            return;
        }
    }
    currentTurn = currentTurn === "white" ? "black" : "white" ;
    drawBoard();
}
function playPawnVoice() {
    if(!soundsEnabled)
        return
    if(remainingPawnVoices.length === 0) {
        remainingPawnVoices = [...pawnVoices];
    }
    let randomIndex = Math.floor(
        Math.random()* remainingPawnVoices.length
    );
    const voice = remainingPawnVoices[randomIndex];
        remainingPawnVoices.splice(randomIndex , 1);
       voice.currentTime = 0;
       voice.play();
}
function playBishopVoice() {
    if(!soundsEnabled)
        return
    if(remainingBishopVoices.length === 0) {
        remainingBishopVoices = [...bishopVoices];
    }
    let randomIndex = Math.floor(
        Math.random()*remainingBishopVoices.length
    );
    const voice = remainingBishopVoices[randomIndex];
    remainingBishopVoices.splice(randomIndex , 1);
    voice.currentTime = 0;
    voice.play();
}
function playKnightVoice() {
    if(!soundsEnabled)
        return
    if(remainingKnightVoices.length === 0) {
        remainingKnightVoices = [...knightVoices];
    }
    let randomIndex = Math.floor(
        Math.random()*remainingKnightVoices.length
    );
    const voice = remainingKnightVoices[randomIndex];
    remainingKnightVoices.splice(randomIndex , 1);
    voice.currentTime = 0;
    voice.play();
}
function playKingVoice() {
    if(!soundsEnabled)
        return
    if(remainingKingVoices.length === 0) {
        remainingKingVoices = [...kingVoices];
    }
    let randomIndex = Math.floor(
        Math.random()* remainingKingVoices.length
    );
    const voice = remainingKingVoices[randomIndex];
    remainingKingVoices.splice(randomIndex , 1);
    voice.currentTime = 0;
    voice.play();
}
function playQueenVoice() {
    if(!soundsEnabled)
        return
    if(remainingQueenVoices.length === 0) {
        remainingQueenVoices = [...queenVoices];
    }
    let randomIndex = Math.floor(
        Math.random()*remainingQueenVoices.length
    );
    const voice = remainingQueenVoices[randomIndex];
    remainingQueenVoices.splice(randomIndex ,1);
    voice.currentTime = 0;
    voice.play();
}
function playRookVoice() {
    if(!soundsEnabled)
        return
    if(remainingRookVoices.length === 0) {
        remainingRookVoices = [...rookVoices];
    }
    let randomIndex = Math.floor(
        Math.random()*remainingRookVoices.length
    );
    const voice = remainingRookVoices[randomIndex];
    remainingRookVoices.splice(randomIndex , 1);
    voice.currentTime = 0;
    voice.play();
}
function isMoveLegalAgainstCheck(piece, targetPosition) {
    const originalPosition = piece.position;
    const capturedPiece = pieces.find(otherPiece => otherPiece.position === targetPosition && otherPiece.color !== piece.color );
    if(capturedPiece && capturedPiece.type === "king") 
        return false;
    const capturedIndex = capturedPiece ? pieces.indexOf(capturedPiece): -1;
    if(capturedPiece) 
        pieces.splice(capturedIndex, 1);
    piece.position = targetPosition;
    const stillInCheck = isKingInCheck(piece.color, pieces);
    piece.position = originalPosition;
    if(capturedPiece) 
        pieces.splice(capturedIndex, 0, capturedPiece);
    return !stillInCheck;
}
function getLegalMoves(piece , moves) {
    return moves.filter(move => isMoveLegalAgainstCheck(piece , move));
}
function hasAnyLegalMove(color) {
    const colorPieces = pieces.filter(piece => piece.color === color);
    for(let piece of colorPieces) {
        const moves = getPieceMoves(piece);
        const legalMoves = getLegalMoves(piece , moves);
        if(legalMoves.length > 0) {
            return true;
        }
    }
    return false;
}
function checkForCheckmate() {
    if(!checkedKing) {
        return false;
    }
    const kingColor = checkedKing;
    const hasLegalMove = hasAnyLegalMove(kingColor);
    if(!hasLegalMove) {
        endGame(kingColor);
        return true;
    }
    return false;
}
function endGame(losingColor) {
    gameOver = true;
    clearInterval(timerInterval);
    gameMusic.pause();
    gameMusic.currentTime = 0;
    selectedPiece = null;
    validMoves = [];
    checkMessage.style.display = "none";
    if(gameMode === "easyAI") {
    if(losingColor === "white") {
        gameOverMessage.textContent = "Easy Ai Win";
    }
    else {
        gameOverMessage.textContent = "Player Win";
    }
}
else {
    if(losingColor === "white") 
        gameOverMessage.textContent = "Player 02 Win";
    else
        gameOverMessage.textContent = "Player 01 Win";
}
    gameOverMessage.style.display = "block";
    if(soundsEnabled && musicEnabled) {
        youWinSound.currentTime = 0;
        youWinSound.play();
    }
}
function getPieceMoves(piece) {
    if(piece.type === "pawn")
        return getPawnMoves(piece , pieces);
    else if(piece.type === "queen")
        return getQueenMoves(piece , pieces);
    else if(piece.type === "rook")
        return getRookMoves(piece , pieces);
    else if(piece.type === "knight")
        return getKnightMoves(piece , pieces);
    else if(piece.type === "bishop")
        return getBishopMoves(piece , pieces);
    else
        return getKingMoves(piece , pieces)
    return [];
}
canvas.addEventListener("click", function(event) {
    if(!gameStarted)
        return;
    if(gameOver) {
        return;
    }
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    const mouseX = (event.clientX - rect.left) * scaleX;
    const mouseY = (event.clientY - rect.top) * scaleY ;
    const column = Math.floor(mouseX / squareSize);
    const row = Math.floor(mouseY / squareSize);
    console.log("Row:", row);
    console.log("Column:", column);
    const files = ["a", "b", "c", "d", "e", "f", "g", "h"];
    const position = files[column] + (8 - row);
    if(selectedPiece && validMoves.includes(position)) {
        const capturedPiece = pieces.find( piece => piece.position === position && piece.color !== selectedPiece.color);
       playMoveSound();
        if(capturedPiece) {
            setTimeout( () => {
                if(soundsEnabled) {
                    killSound.currentTime = 0;
                    killSound.play();
                }
            } , 100);
            const capturedIndex = pieces.indexOf(capturedPiece);
            pieces.splice(capturedIndex , 1);
        }
        selectedPiece.position = position;
        updateCheckStatus();
        if(checkedKing) {
            if(soundsEnabled) {
                checkSound.currentTime = 0;
                checkSound.play();
            }
        if(checkForCheckmate()) {
            selectedPiece = null;
            validMoves = [];
            drawBoard();
            return;
        }
    }
        console.log("White in check: " , isKingInCheck("white", pieces));
        console.log("Black in check: " , isKingInCheck("black" , pieces));
        if(selectedPiece.type === "pawn" && (
        (selectedPiece.color === "white" && selectedPiece.position[1] === "8") || (selectedPiece.color === "black" && selectedPiece.position[1] === "1")
       )) {
        promotionPiece = selectedPiece ;
        promotionMenu.style.display = "block";
       }
       else {
            switchTurn(); 
       }
       selectedPiece = null;
       validMoves = [];
       drawBoard();
        return;
    }
    console.log("Position:", position);
    selectedPiece = pieces.find(
        piece => piece.position === position
    );
    if(gameMode === "easyAI" && currentTurn === "black") {
    selectedPiece = null;
    validMoves = [];
    return;
}
    if(selectedPiece && selectedPiece.color !== currentTurn) {
        selectedPiece = null;
        validMoves = [];
        return;
    }
    if(selectedPiece && selectedPiece.type === "pawn") {
        playPawnVoice();
    }
    if(selectedPiece && selectedPiece.type === "bishop") {
        playBishopVoice();
    }
    if(selectedPiece && selectedPiece.type === "knight") {
        playKnightVoice();
    }
    if(selectedPiece && selectedPiece.type === "king") {
        playKingVoice();
    }
    if(selectedPiece && selectedPiece.type === "queen") {
        playQueenVoice();
    }
    if(selectedPiece && selectedPiece.type === "rook") {
        playRookVoice();
    }
    console.log("Selected Piece:", selectedPiece);
    if(selectedPiece && (selectedPiece.type === "pawn" || selectedPiece.type === "queen" || selectedPiece.type === "rook" || selectedPiece.type === "knight" || selectedPiece.type === "bishop" || selectedPiece.type === "king")) {
        if(selectedPiece.type === "pawn")
        validMoves = getPawnMoves(selectedPiece , pieces);
        else if(selectedPiece.type === "queen")
            validMoves = getQueenMoves(selectedPiece , pieces);
        else if(selectedPiece.type === "rook")
            validMoves = getRookMoves(selectedPiece , pieces);
        else if(selectedPiece.type === "knight")
            validMoves = getKnightMoves(selectedPiece , pieces);
         else if(selectedPiece.type === "bishop")
            validMoves = getBishopMoves(selectedPiece , pieces);
        else if(selectedPiece.type === "king")
            validMoves = getKingMoves(selectedPiece , pieces);
        validMoves = getLegalMoves(selectedPiece , validMoves);
        const captureMoves = validMoves.filter(move => pieces.some(
            piece => piece.position === move && piece.color !== selectedPiece.color 
        )
    );
        console.log("Valid moves:", validMoves);
        drawBoard();
        for(let move of validMoves) {
            if(captureMoves.includes(move)) 
                drawCaptureDotSquare(move);
            else 
            drawMoveDot(move);
        }
    }
});
// const musicEnabled gameMusic.pause() switchTurn() endGame()