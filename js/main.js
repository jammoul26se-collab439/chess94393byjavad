var canvas = document.getElementById("chess-board");
var ctx = canvas.getContext("2d");
canvas.width = 480;
canvas.height = 480;
let currentLanguage = "en";
let pieceAnimating = false;
const translations = {
    en: {
        loading: "Loading",
        enableSounds: "Enable Sounds?",
        yes: "Yes",
        no: "No",
        chessGameBy: "Chess Game By Jawad Jammoul",
        start: "Start",
        options: "Options",
        aboutUs: "About-Us",
        exit: "Exit",
        musicOn: "Music : On",
        musicOff: "Music : Off",
        soundOn: "Sound : On",
        soundOff: "Sound : Off",
        language: "Language",
        qrCode: "QR Code",
        return: "Return",
        scanQRCode: "Scan Chess Game QR Code",
        selectDifficulty: "Please Select Difficulty",
        easyAI: "Easy AI",
        normalAI: "Normal AI",
        hardAI: "Hard AI",
        makhloutaEasyAI: "Makhlouta Easy AI",
        twoPlayers: "2 Players",
        playerTurn: "Player Turn",
        easyAITurn: "Easy AI Turn",
        normalAITurn: "Normal AI Turn",
        hardAITurn: "Hard AI Turn",
        chessGame: "Chess Game",
        version: "Version 1.46",
        byJawad: "By Jawad Jammoul",
        copyright: "© All Copyright Reserved",
        mainMenu: "Main Menu",
        easyAIWin: "Easy AI Win",
        normalAIWin: "Normal AI Win",
        hardAIWin: "Hard AI Win",
        makhloutaEasyAIWin: "Makhlouta Easy AI Win",
        playerWin: "Player Win",
        player1: "Player 1",
        player1Turn: "Player 1 Turn",
        player2: "Player 2",
        player2Turn: "Player 2 Turn",
        player02Win: "Player 02 Win",
        player01Win: "Player 01 Win",
        player: "Player",
        waitYourTurn: "Please wait your turn",
        check: "Check!"
    },
    fr: {
        loading: "Chargement",
        enableSounds: "Activer les sons ?",
        yes: "Oui",
        no: "Non",
        chessGameBy: "Jeu d'échecs par Jawad Jammoul",
        start: "Démarrer",
        options: "Options",
        aboutUs: "À propos de nous",
        exit: "Quitter",
        musicOn: "Musique : Activée",
        musicOff: "Musique : Désactivée",
        soundOn: "Son : Activé",
        soundOff: "Son : Désactivé",
        language: "Langue",
        qrCode: "Code QR",
        return: "Retour",
        scanQRCode: "Scanner le code QR du jeu d'échecs",
        selectDifficulty: "Veuillez sélectionner la difficulté",
        easyAI: "IA facile",
        normalAI: "IA normale",
        hardAI: "IA difficile",
        makhloutaEasyAI: "IA facile Makhlouta",
        twoPlayers: "2 joueurs",
        playerTurn: "Tour du joueur",
        easyAITurn: "Tour de l'IA facile",
        normalAITurn: "Tour de l'IA normale",
        hardAITurn: "Tour de l'IA difficile",
        chessGame: "Jeu d'échecs",
        version: "Version 1.46",
        byJawad: "Par Jawad Jammoul",
        copyright: "© Tous droits réservés",
        mainMenu: "Menu principal",
        easyAIWin: "Victoire de l'IA facile",
        normalAIWin: "Victoire de l'IA normale",
        hardAIWin: "Victoire de l'IA difficile",
        makhloutaEasyAIWin: "Victoire de l'IA facile Makhlouta",
        playerWin: "Victoire du joueur",
        player1: "Joueur 1",
        player1Turn: "Tour du joueur 1",
        player2: "Joueur 2",
        player2Turn: "Tour du joueur 2",
        player02Win: "Victoire du joueur 02",
        player01Win: "Victoire du joueur 01",
        player: "Joueur",
        waitYourTurn: "Veuillez attendre votre tour",
        check: "Échec !"
    },
    es: {
        loading: "Cargando",
        enableSounds: "¿Activar sonidos?",
        yes: "Sí",
        no: "No",
        chessGameBy: "Juego de ajedrez por Jawad Jammoul",
        start: "Iniciar",
        options: "Opciones",
        aboutUs: "Sobre nosotros",
        exit: "Salir",
        musicOn: "Música : Activada",
        musicOff: "Música : Desactivada",
        soundOn: "Sonido : Activado",
        soundOff: "Sonido : Desactivado",
        language: "Idioma",
        qrCode: "Código QR",
        return: "Volver",
        scanQRCode: "Escanear código QR del juego de ajedrez",
        selectDifficulty: "Seleccione la dificultad",
        easyAI: "IA fácil",
        normalAI: "IA normal",
        hardAI: "IA difícil",
        makhloutaEasyAI: "IA fácil Makhlouta",
        twoPlayers: "2 jugadores",
        playerTurn: "Turno del jugador",
        easyAITurn: "Turno de la IA fácil",
        normalAITurn: "Turno de la IA normal",
        hardAITurn: "Turno de la IA difícil",
        chessGame: "Juego de ajedrez",
        version: "Versión 1.46",
        byJawad: "Por Jawad Jammoul",
        copyright: "© Todos los derechos reservados",
        mainMenu: "Menú principal",
        easyAIWin: "Victoria de la IA fácil",
        normalAIWin: "Victoria de la IA normal",
        hardAIWin: "Victoria de la IA difícil",
        makhloutaEasyAIWin: "Victoria de la IA fácil Makhlouta",
        playerWin: "Victoria del jugador",
        player1: "Jugador 1",
        player1Turn: "Turno del jugador 1",
        player2: "Jugador 2",
        player2Turn: "Turno del jugador 2",
        player02Win: "Victoria del jugador 02",
        player01Win: "Victoria del jugador 01",
        player: "Jugador",
        waitYourTurn: "Por favor espera tu turno",
        check: "¡Jaque!"
    },
    ru: {
        loading: "Загрузка",
        enableSounds: "Включить звуки?",
        yes: "Да",
        no: "Нет",
        chessGameBy: "Шахматная игра от Jawad Jammoul",
        start: "Начать",
        options: "Настройки",
        aboutUs: "О нас",
        exit: "Выход",
        musicOn: "Музыка : Вкл.",
        musicOff: "Музыка : Выкл.",
        soundOn: "Звук : Вкл.",
        soundOff: "Звук : Выкл.",
        language: "Язык",
        qrCode: "QR-код",
        return: "Назад",
        scanQRCode: "Сканировать QR-код шахматной игры",
        selectDifficulty: "Выберите уровень сложности",
        easyAI: "Лёгкий ИИ",
        normalAI: "Обычный ИИ",
        hardAI: "Сложный ИИ",
        makhloutaEasyAI: "Лёгкий ИИ Makhlouta",
        twoPlayers: "2 игрока",
        playerTurn: "Ход игрока",
        easyAITurn: "Ход лёгкого ИИ",
        normalAITurn: "Ход обычного ИИ",
        hardAITurn: "Ход сложного ИИ",
        chessGame: "Шахматная игра",
        version: "Версия 1.46",
        byJawad: "Автор: Jawad Jammoul",
        copyright: "© Все права защищены",
        mainMenu: "Главное меню",
        easyAIWin: "Победа лёгкого ИИ",
        normalAIWin: "Победа обычного ИИ",
        hardAIWin: "Победа сложного ИИ",
        makhloutaEasyAIWin: "Победа лёгкого ИИ Makhlouta",
        playerWin: "Победа игрока",
        player1: "Игрок 1",
        player1Turn: "Ход игрока 1",
        player2: "Игрок 2",
        player2Turn: "Ход игрока 2",
        player02Win: "Победа игрока 02",
        player01Win: "Победа игрока 01",
        player: "Игрок",
        waitYourTurn: "Пожалуйста, дождитесь своего хода",
        check: "Шах!"
    },
    ar: {
        loading: "جار التحميل",
        enableSounds: "تفعيل الأصوات ؟",
        yes: "نعم",
        no: "لا",
        chessGameBy: "لعبة الشطرنج من تطوير Jawad Jammoul",
        start: "ابدأ",
        options: "الخيارات",
        aboutUs: "معلومات عنا",
        exit: "خروج",
        musicOn: "الموسيقى : مفعلة",
        musicOff: "الموسيقى : متوقفة",
        soundOn: "الصوت : مفعل",
        soundOff: "الصوت : متوقف",
        language: "اللغة",
        qrCode: "رمز QR",
        return: "عودة",
        scanQRCode: "امسح رمز QR الخاص بلعبة الشطرنج",
        selectDifficulty: "الرجاء اختيار مستوى الصعوبة",
        easyAI: "ذكاء اصطناعي سهل",
        normalAI: "ذكاء اصطناعي عادي",
        hardAI: "ذكاء اصطناعي صعب",
        makhloutaEasyAI: "ذكاء اصطناعي سهل Makhlouta",
        twoPlayers: "لاعبان",
        playerTurn: "دور اللاعب",
        easyAITurn: "دور الذكاء الاصطناعي السهل",
        normalAITurn: "دور الذكاء الاصطناعي العادي",
        hardAITurn: "دور الذكاء الاصطناعي الصعب",
        chessGame: "لعبة الشطرنج",
        version: "الإصدار 1.46",
        byJawad: "من تطوير Jawad Jammoul",
        copyright: "© جميع الحقوق محفوظة",
        mainMenu: "القائمة الرئيسية",
        easyAIWin: "فوز الذكاء الاصطناعي السهل",
        normalAIWin: "فوز الذكاء الاصطناعي العادي",
        hardAIWin: "فوز الذكاء الاصطناعي الصعب",
        makhloutaEasyAIWin: "فوز الذكاء الاصطناعي السهل Makhlouta",
        playerWin: "فوز اللاعب",
        player1: "اللاعب 1",
        player1Turn: "دور اللاعب 1",
        player2: "اللاعب 2",
        player2Turn: "دور اللاعب 2",
        player02Win: "فوز اللاعب 02",
        player01Win: "فوز اللاعب 01",
        player: "اللاعب",
        waitYourTurn: "الرجاء انتظار دورك",
        check: "كش!"
    }
};
function t(key) {
    return translations[currentLanguage][key] || translations.en[key] || key;
}
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
const youLoseSound = new Audio("assets/sounds/youLoseSoundTrick.mp4");
youLoseSound.volume = 1;
const checkMessage = document.getElementById("check-message");
const gameOverMessage = document.getElementById("game-over-message");
const waitTurnMessage = document.createElement("div");
waitTurnMessage.className = "wait-turn-message";
waitTurnMessage.textContent = t("waitYourTurn");
waitTurnMessage.style.position = "fixed";
waitTurnMessage.style.left = "50%";
waitTurnMessage.style.top = "45%";
waitTurnMessage.style.transform = "translate(-50%, -50%)";
waitTurnMessage.style.color = "red";
waitTurnMessage.style.fontSize = "26px";
waitTurnMessage.style.fontWeight = "bold";
waitTurnMessage.style.padding = "12px 20px";
waitTurnMessage.style.textAlign = "center";
waitTurnMessage.style.zIndex = "9999";
waitTurnMessage.style.display = "none";
document.body.appendChild(waitTurnMessage);
let waitTurnTimeout = null;
let loadingDots = 1;
let gameStarted = false;
let loadingCycles = 0;
let soundsEnabled = true;
let musicEnabled = true;
let firstMusic = new Audio("assets/sounds/MusicPlayFirst.mp4");
firstMusic.loop = true;
firstMusic.volume = 0.8;
const clickSound = new Audio("assets/sounds/ClickSoundTrack.mpeg");
clickSound.volume = 1;

function playClickSound() {
    if(!soundsEnabled)
        return;
    clickSound.currentTime = 0;
    clickSound.play();
}
function loadImage(src) {
    return new Promise((resolve, reject) => {
        const image = new Image();

        image.onload = () => {
            resolve();
        };

        image.onerror = () => {
            reject(new Error("Failed to load image: " + src));
        };

        image.src = src;
    });
}
function loadAudio(src) {
    return new Promise((resolve, reject) => {
        const audio = new Audio();
        audio.addEventListener("canplaythrough", () => {
            resolve();
        }, { once: true });
        audio.addEventListener("error", () => {
            reject(new Error("Failed to load audio: " + src));
        }, { once: true });
        audio.preload = "auto";
        audio.src = src;
        audio.load();
    });
}
const gameImageAssets = [
    "assets/images/white-pawn.png",
    "assets/images/white-rook.png",
    "assets/images/white-knight.png",
    "assets/images/white-bishop.png",
    "assets/images/white-queen.png",
    "assets/images/white-king.png",
    "assets/images/black-pawn.png",
    "assets/images/black-rook.png",
    "assets/images/black-knight.png",
    "assets/images/black-bishop.png",
    "assets/images/black-queen.png",
    "assets/images/black-king.png"
];
const gameAudioAssets = [
    "assets/sounds/move.m4a",
    "assets/sounds/kill.m4a",
    "assets/sounds/Check.mp4",
    "assets/sounds/youWinSoundTrick.mp4"
];
let assetsReady = false;
function preloadGameAssets() {
    const imagePromises = gameImageAssets.map(src => loadImage(src));
    const audioPromises = gameAudioAssets.map(src => loadAudio(src));
    const characterVoicePromises = characterVoices.map(audio => {
        return new Promise((resolve, reject) => {
            if(audio.readyState >= 4) {
                resolve();
                return;
            }
            audio.addEventListener("canplaythrough", () => {
                resolve();
            }, { once: true });
            audio.addEventListener("error", () => {
                reject(new Error("Failed to load character voice"));
            }, { once: true });
            audio.preload = "auto";
            audio.load();
        });
    });
    const musicPromises = [
    waitForAudioReady(firstMusic),
    waitForAudioReady(gameMusic)
];
    return Promise.all([
        ...imagePromises,
        ...audioPromises,
        ...characterVoicePromises
    ]).then(() => {
        assetsReady = true;
    });
}
function waitForAudioReady(audio) {
    return new Promise((resolve, reject) => {
        if(audio.readyState >= 4) {
            resolve();
            return;
        }
        audio.addEventListener("canplaythrough", () => {
            resolve();
        }, { once: true });
        audio.addEventListener("error", () => {
            reject(new Error("Failed to load music"));
        }, { once: true });
        audio.preload = "auto";
        audio.load();
    });
}
function waitForAudioReady(audio) {
    return new Promise((resolve) => {
        if(audio.readyState >= 3) {
            resolve();
            return;
        }
        const onReady = () => {
            audio.removeEventListener("canplaythrough", onReady);
            audio.removeEventListener("loadeddata", onReady);
            resolve();
        };
        audio.addEventListener("canplaythrough", onReady);
        audio.addEventListener("loadeddata", onReady);
        audio.load();
    });
}
function preloadAssets() {
    const imagePaths = [
        "assets/images/white-pawn.png",
        "assets/images/white-rook.png",
        "assets/images/white-knight.png",
        "assets/images/white-bishop.png",
        "assets/images/white-queen.png",
        "assets/images/white-king.png",
        "assets/images/black-pawn.png",
        "assets/images/black-rook.png",
        "assets/images/black-knight.png",
        "assets/images/black-bishop.png",
        "assets/images/black-queen.png",
        "assets/images/black-king.png"
    ];
    const imagePromises = imagePaths.map((src) => {
        return new Promise((resolve) => {
            const img = new Image();
            img.onload = () => resolve();
            img.onerror = () => resolve();
            img.src = src;
        });
    });
    const audioPromises = [
        waitForAudioReady(moveSound),
        waitForAudioReady(killSound),
        waitForAudioReady(checkSound),
        waitForAudioReady(youWinSound),
        waitForAudioReady(youLoseSound)
    ];
    const characterVoicePromises = characterVoices.map((voice) => {
        return waitForAudioReady(voice);
    });
    const musicPromises = [
        waitForAudioReady(firstMusic),
        waitForAudioReady(gameMusic)
    ];
    return Promise.all([
        ...imagePromises,
        ...audioPromises,
        ...characterVoicePromises,
        ...musicPromises
    ]).then(() => {
        preloadAssetsReady = true;
    });
}
let preloadAssetsReady = false;
function waitForAudioReady(audio) {
    return new Promise((resolve) => {
        if(audio.readyState >= 3) {
            resolve();
            return;
        }
        const onReady = () => {
            audio.removeEventListener("canplaythrough", onReady);
            audio.removeEventListener("loadeddata", onReady);
            resolve();
        };
        audio.addEventListener("canplaythrough", onReady);
        audio.addEventListener("loadeddata", onReady);
        audio.load();
    });
}
function startLoading(callback) {
    startBlock.style.display = "none";
    loadingText.style.display = "block";
    loadingDots = 1;
    loadingCycles = 0;
    const loadingInterval = setInterval(() => {
        loadingText.textContent = t("loading") + ".".repeat(loadingDots);
        loadingDots++;
        if(loadingDots > 3) {
            loadingDots = 1;
            loadingCycles++;
        }
        if(loadingCycles === 2) {
            clearInterval(loadingInterval);
            preloadAssets().then(() => {
                loadingText.style.display = "none";
                if(callback)
                    callback();
            });
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
    title.textContent = t("enableSounds");
    title.className = "menu-title";
    const buttonsContainer = document.createElement("div");
    buttonsContainer.className = "menu-buttons";
    const yesButton = document.createElement("button");
    yesButton.textContent = t("yes");
    yesButton.className = "menu-button";
    const noButton = document.createElement("button");
    noButton.textContent = t("no");
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
    title.textContent = t("chessGameBy");
    title.className = "menu-title";
    const startButton = document.createElement("button");
    startButton.textContent = t("start");
    startButton.className = "menu-button";
    const optionsButton = document.createElement("button");
    optionsButton.textContent = t("options");
    optionsButton.className = "menu-button";
    const aboutButton = document.createElement("button");
    aboutButton.textContent = t("aboutUs");
    aboutButton.className = "menu-button";
    const exitButton = document.createElement("button");
    exitButton.textContent = t("exit");
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
    startBlock.classList.remove("qr-menu");
    startBlock.classList.add("options-menu");
    startBlock.innerHTML = "";
    const title = document.createElement("div");
    title.textContent = t("options");
    title.className = "menu-title";
    const musicButton = document.createElement("button");
    musicButton.className = "menu-button";
    const soundButton = document.createElement("button");
    soundButton.className = "menu-button";
    const languageButton = document.createElement("button");
    languageButton.textContent = t("language");
    languageButton.className = "menu-button";
    const qrButton = document.createElement("button");
    qrButton.textContent = t("qrCode");
    qrButton.className = "menu-button";
    qrButton.style.backgroundColor = "1e3a8a";
    qrButton.style.color = "white";
    qrButton.id = "qr-code-button";
    const returnButton = document.createElement("button");
    returnButton.textContent = t("return");
    returnButton.className = "return-button";
    function updateMusicButton() {
        if(musicEnabled) {
            musicButton.textContent = t("musicOn");
            musicButton.style.backgroundColor = "green";
        }
        else {
            musicButton.textContent = t("musicOff");
            musicButton.style.backgroundColor = "red";
        }
    }
    function updateSoundButton() {
        if(soundsEnabled) {
            soundButton.textContent = t("soundOn");
            soundButton.style.backgroundColor = "green";
        }
        else {
            soundButton.textContent = t("soundOff");
            soundButton.style.backgroundColor = "red";
        }
    }
    function showQRCodeMenu() {
        startBlock.classList.remove("main-menu");
        startBlock.classList.remove("sound-menu");
        startBlock.classList.remove("difficulty-menu");
        startBlock.classList.remove("options-menu");
        startBlock.classList.add("qr-menu");
        startBlock.innerHTML = "";
        const title = document.createElement("div");
        title.textContent = t("scanQRCode");
        title.className = "menu-title";
        const qrImage = document.createElement("img");
        qrImage.src = "assets/images/QRGame.png";
        qrImage.alt = "Chess Game QR Code";
        qrImage.className = "qr-image";
        const returnButton = document.createElement("button");
        returnButton.textContent = t("return");
        returnButton.className = "return-button";
        returnButton.addEventListener("click", function() {
            playClickSound();
            showOptionsMenu();
        });
        startBlock.appendChild(title);
        startBlock.appendChild(qrImage);
        startBlock.appendChild(returnButton);
        startBlock.style.display = "flex";
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
        showLanguageMenu();
    });
    qrButton.addEventListener("click", function() {
        playClickSound();
        showQRCodeMenu();
    });
    returnButton.addEventListener("click", function() {
        playClickSound();
        showMainMenu();
    });
    startBlock.appendChild(title);
    startBlock.appendChild(musicButton);
    startBlock.appendChild(soundButton);
    startBlock.appendChild(languageButton);
    startBlock.appendChild(qrButton);
    startBlock.appendChild(returnButton);
    updateMusicButton();
    updateSoundButton();
    startBlock.style.display = "flex";
}
function showLanguageMenu() {
    startBlock.classList.remove("main-menu");
    startBlock.classList.remove("sound-menu");
    startBlock.classList.remove("difficulty-menu");
    startBlock.classList.remove("qr-menu");
    startBlock.classList.remove("options-menu");
    startBlock.classList.add("language-menu");
    startBlock.innerHTML = "";
    const languages = [
        {
            name: "English",
            code: "en"
        },
        {
            name: "Français",
            code: "fr"
        },
        {
            name: "Español",
            code: "es"
        },
        {
            name: "Русский",
            code: "ru"
        },
        {
            name: "اللغة العربية",
            code: "ar"
        }
    ];
    for(let language of languages) {
        const button = document.createElement("button");
        button.textContent = language.name;
        button.className = "menu-button";
        button.addEventListener("click", function() {
            playClickSound();
            currentLanguage = language.code;
            updateGameFooter();
            const gameFooter = document.getElementById("game-footer");
            if(gameFooter)
                gameFooter.style.display = "none";
            updateGameModeDisplay();
            updateTurnDisplay();
            waitTurnMessage.textContent =  t("waitYourTurn");
            showOptionsMenu();
        });
        startBlock.appendChild(button);
    }
    const returnButton = document.createElement("button");
    returnButton.textContent = t("return");
    returnButton.className = "return-button";
    returnButton.addEventListener("click", function() {
        playClickSound();
        showOptionsMenu();
    });
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
    title.textContent = t("selectDifficulty");
    title.className = "menu-title";
    const easyButton = document.createElement("button");
    easyButton.textContent = t("easyAI");
    easyButton.className = "menu-button";
    const normalButton = document.createElement("button");
    normalButton.textContent = t("normalAI");
    normalButton.className = "menu-button";
    const hardButton = document.createElement("button");
    hardButton.textContent = t("hardAI");
    hardButton.className = "menu-button";
    const twoPlayersButton = document.createElement("button");
    twoPlayersButton.textContent = t("twoPlayers");
    twoPlayersButton.className = "menu-button";
    const makhloutaButton = document.createElement("button");
    makhloutaButton.textContent = t("makhloutaEasyAI");
    makhloutaButton.className = "menu-button";
    const returnButton = document.createElement("button");
    returnButton.textContent = t("return");
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
        startNormalAIGame();
    });
    hardButton.addEventListener("click", function() {
        startHardAIGame();
    });
    makhloutaButton.addEventListener("click", function() {
        startMakhloutaEasyAIGame();
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
    firstMusic.pause();
    firstMusic.currentTime = 0;
    gameMode = "2players";
    resetPieces();
    startLoading(function() {
        startScreen.style.display = "none";
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
        setupGameInterface();
        if(soundsEnabled && musicEnabled) {
            gameMusic.currentTime = 0;
            gameMusic.play();
        }
        drawBoard();
    });
}
function startEasyAIGame() {
    firstMusic.pause();
    firstMusic.currentTime = 0;
    gameMode = "easyAI";
    resetPieces();
    startLoading(function() {
        startScreen.style.display = "none";
        gameStarted = true;
        whiteTime = 24;
        blackTime = 0;
        currentTurn = "white";
        gameOver = false;
        if(aiMoveTimeout) {
            clearTimeout(aiMoveTimeout);
            aiMoveTimeout = null;
        }
        setupGameInterface();
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
    if(gameMode !== "easyAI" && gameMode !== "makhloutaEasyAI")
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
    const capturedPiece = pieces.find(piece => piece.position === targetPosition && piece.color !== aiPiece.color);
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
   animatePieceMove(aiPiece, targetPosition, function() {
    if(capturedPiece) {
        const capturedIndex = pieces.indexOf(capturedPiece);
        if(capturedIndex !== -1)
            pieces.splice(capturedIndex, 1);
        if(soundsEnabled) {
            killSound.currentTime = 0;
            killSound.play();
        }
    }
    updateCheckStatus();
    if(checkedKing) {
        if(soundsEnabled) {
            checkSound.currentTime = 0;
            checkSound.play();
        }
        if(checkForCheckmate())
            return;
    }
    if(gameMode !== "makhloutaEasyAI" && aiPiece.type === "pawn" && aiPiece.position[1] === "1") {
        aiPiece.type = "queen";
        aiPiece.image = "assets/images/black-queen.png";
    }
    switchTurn();
});
}
function startHardAIGame() {
    firstMusic.pause();
    firstMusic.currentTime = 0;
    gameMode = "hardAI";
    resetPieces();
    startLoading(function() {
        startScreen.style.display = "none";
        gameStarted = true;
        whiteTime = 6;
        blackTime = 0;
        currentTurn = "white";
        gameOver = false;
        hardAIThinking = false;
        if(aiMoveTimeout) {
            clearTimeout(aiMoveTimeout);
            aiMoveTimeout = null;
        }
        setupGameInterface();
        if(soundsEnabled && musicEnabled) {
            gameMusic.currentTime = 0;
            gameMusic.play();
        }
        drawBoard();
    });
}
function startNormalAIGame() {
    firstMusic.pause();
    firstMusic.currentTime = 0;
    gameMode = "normalAI";
    resetPieces();
    startLoading(function() {
        startScreen.style.display = "none";
        gameStarted = true;
        whiteTime = 12;
        blackTime = 0;
        currentTurn = "white";
        gameOver = false;
        if(aiMoveTimeout) {
            clearTimeout(aiMoveTimeout);
            aiMoveTimeout = null;
        }
        setupGameInterface();
        if(soundsEnabled && musicEnabled) {
            gameMusic.currentTime = 0;
            gameMusic.play();
        }
        drawBoard();
    });
}
function startMakhloutaEasyAIGame() {
    firstMusic.pause();
    firstMusic.currentTime = 0;
    gameMode = "makhloutaEasyAI";
    resetPieces();
    startLoading(function() {
        startScreen.style.display = "none";
        gameStarted = true;
        whiteTime = 24;
        blackTime = 0;
        currentTurn = "white";
        gameOver = false;
        if(aiMoveTimeout) {
            clearTimeout(aiMoveTimeout);
            aiMoveTimeout = null;
        }
        createMakhloutaPosition();
        updateCheckStatus();
        setupGameInterface();
        if(soundsEnabled && musicEnabled) {
            gameMusic.currentTime = 0;
            gameMusic.play();
        }
        drawBoard();
    });
}
function createMakhloutaPosition() {
    const files = ["a", "b", "c", "d", "e", "f", "g", "h"];
    const positions = [];
    for(let row = 1; row <= 8; row++) {
        for(let file of files) 
            positions.push(file + row);
    }
    let validPositionFound = false;
    while(!validPositionFound) {
        for(let i = positions.length - 1; i > 0; i--) {
            const randomIndex = Math.floor(Math.random() * (i + 1));
            const temp = positions[i];
            positions[i] = positions[randomIndex];
            positions[randomIndex] = temp;
        }
        for(let i = 0; i < pieces.length; i++) 
            pieces[i].position = positions[i];
        const whiteInCheck = isKingInCheck("white", pieces);
        const blackInCheck = isKingInCheck("black",pieces);
        if(!whiteInCheck && !blackInCheck) 
            validPositionFound = true;
    }
    checkedKing = null;
}
function makeNormalAIMove() {
    if(gameOver)
        return;
    if(gameMode !== "normalAI")
        return;
    if(currentTurn !== "black")
        return;
    const blackPieces = pieces.filter(piece => piece.color === "black");
    let allLegalMoves = [];
    for(let piece of blackPieces) {
        const moves = getPieceMoves(piece);
        const legalMoves = getLegalMoves(piece,moves);
        for(let move of legalMoves) {
            allLegalMoves.push({ piece: piece, move: move });
        }
    }
    if(allLegalMoves.length === 0) {
        updateCheckStatus();
        if(checkedKing === "black") 
            endGame("black");
        return;
    }
    let scoredMoves = [];
    for(let possibleMove of allLegalMoves) {
        const piece = possibleMove.piece;
        const targetPosition = possibleMove.move;
        let score = 1;
        const capturedPiece = pieces.find(
            otherPiece =>
                otherPiece.position === targetPosition &&
                otherPiece.color !== piece.color
        );
        if(capturedPiece) {
            if(capturedPiece.type === "queen")
                score += 35;
            else if(capturedPiece.type === "rook")
                score += 25;
            else if(capturedPiece.type === "bishop")
                score += 18;
            else if(capturedPiece.type === "knight")
                score += 18;
            else if(capturedPiece.type === "pawn")
                score += 10;
            else
                score += 50;
        }
        const originalPosition = piece.position;
        let capturedIndex = -1;
        if(capturedPiece) {
            capturedIndex = pieces.indexOf(capturedPiece);
            pieces.splice(capturedIndex, 1);
        }
        piece.position = targetPosition;
        const givesCheck = isKingInCheck("white", pieces);
        piece.position = originalPosition;
        if(capturedPiece) 
            pieces.splice(capturedIndex, 0, capturedPiece);
        if(givesCheck) 
            score += 30;
        if(piece.type === "knight" ||
           piece.type === "bishop") {
            score += 3;
        }
        score += Math.random() * 12;
        scoredMoves.push({piece: piece, move: targetPosition, score: score});
    }
    scoredMoves.sort((a, b) => b.score - a.score);
    let candidateMoves;
    if(scoredMoves.length <= 3) 
        candidateMoves = scoredMoves;
    else 
        candidateMoves = scoredMoves.slice(0 , Math.min(6, scoredMoves.length));
    const randomIndex = Math.floor(Math.random() * candidateMoves.length);
    const selectedAIMove = candidateMoves[randomIndex];
    const aiPiece = selectedAIMove.piece;
    const targetPosition = selectedAIMove.move;
    const capturedPiece = pieces.find(
        piece => piece.position === targetPosition && piece.color !== aiPiece.color);
    playMoveSound();
   animatePieceMove(aiPiece, targetPosition, function() {
    if(capturedPiece) {
        const capturedIndex = pieces.indexOf(capturedPiece);
        if(capturedIndex !== -1)
            pieces.splice(capturedIndex, 1);
        if(soundsEnabled) {
            killSound.currentTime = 0;
            killSound.play();
        }
    }
    updateCheckStatus();
    if(checkedKing) {
        if(soundsEnabled) {
            checkSound.currentTime = 0;
            checkSound.play();
        }
        if(checkForCheckmate())
            return;
    }
    if(gameMode !== "makhloutaEasyAI" && aiPiece.type === "pawn" && aiPiece.position[1] === "1") {
        aiPiece.type = "queen";
        aiPiece.image = "assets/images/black-queen.png";
    }
    switchTurn();
});
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
let hardAIThinking = false;
let returnToMenuTimeout = null;
drawBoard();
function updateTimers() {
 whiteTimer.textContent = "00:" + String(whiteTime).padStart(2, "0"); 
 blackTimer.textContent = "00:" + String(blackTime).padStart(2, "0");
}
function updateGameModeDisplay() {
    let aiName;
    if(gameMode === "easyAI")
        aiName = t("easyAI");
    else if(gameMode === "normalAI")
        aiName = t("normalAI");
    else if(gameMode === "hardAI")
        aiName = t("hardAI");
    else if(gameMode === "makhloutaEasyAI")
        aiName = t("makhloutaEasyAI");
    else
        aiName = t("player2");
    let leftLabel = document.getElementById("left-player-label");
    let rightLabel = document.getElementById("right-player-label");
    if(!leftLabel) {
        leftLabel = document.createElement("div");
        leftLabel.id = "left-player-label";
        timers.appendChild(leftLabel);
    }
    if(!rightLabel) {
        rightLabel = document.createElement("div");
        rightLabel.id = "right-player-label";
        timers.appendChild(rightLabel);
    }
    if(gameMode === "2players") {
    leftLabel.textContent = currentTurn === "black" ? t("player2Turn") : t("player2");
    rightLabel.textContent = currentTurn === "white" ? t("player1Turn") : t("player1");
}
else {
    leftLabel.textContent = currentTurn === "black" ? aiName + " " + getTurnWord() : aiName;
    rightLabel.textContent = currentTurn === "white" ? t("playerTurn") : t("player");
}
    if(currentTurn === "black") {
        leftLabel.classList.add("active-player");
        leftLabel.classList.remove("inactive-player");
        rightLabel.classList.add("inactive-player");
        rightLabel.classList.remove("active-player");
    }
    else {
        leftLabel.classList.add("inactive-player");
        leftLabel.classList.remove("active-player");
        rightLabel.classList.add("active-player");
        rightLabel.classList.remove("inactive-player");
    }
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
                updateCheckStatus();
        if(checkedKing === "white") {
                    endGame("white");
                    return;
                }
                switchTurn();
            }
        }
        else if(currentTurn === "black") {
            if(blackTime > 0) {
                blackTime--;
                updateTimers();
            }
            if(blackTime === 0) {
                updateCheckStatus();
                if(checkedKing === "black") {
                    endGame("black");
                    return;
                }
                switchTurn();
            }
        }
    }, 1000);
}
function switchTurn() {
    selectedPiece = null;
    validMoves = [];
    if(currentTurn === "white") {
        whiteTime = 0;
        if(gameMode === "easyAI" || gameMode === "makhloutaEasyAI") 
            blackTime = 24;
        else if(gameMode === "normalAI") 
            blackTime = 12;
        else if(gameMode === "hardAI") 
            blackTime = 6;
        else 
            blackTime = 24;
        currentTurn = "black";
        updateTurnDisplay();
        updateTimers();
        drawBoard();
        if(gameMode === "easyAI" || gameMode === "makhloutaEasyAI") {
            const randomDelay = Math.floor(Math.random() * 5000) + 1000;
            aiMoveTimeout = setTimeout(() => { makeEasyAIMove(); }, randomDelay);
        }
        else if(gameMode === "normalAI") {
            const randomDelay = Math.floor(Math.random() * 4000) + 1000;
            aiMoveTimeout = setTimeout(() => { makeNormalAIMove(); }, randomDelay);
        }
        else if(gameMode === "hardAI") {
            const randomDelay = Math.floor(Math.random() * 1500) + 500;
            aiMoveTimeout = setTimeout(() => { makeHardAIMove(); }, randomDelay);
        }
    }
    else {
        blackTime = 0;
        if(gameMode === "easyAI" || gameMode === "makhloutaEasyAI") 
            whiteTime = 24;
        else if(gameMode === "normalAI") 
            whiteTime = 12;
        else if(gameMode === "hardAI") 
            whiteTime = 6;
        else 
            whiteTime = 24;
        currentTurn = "white";
        updateTurnDisplay();
        updateTimers();
        drawBoard();
    }
}
function updateTurnDisplay() {
    const leftLabel = document.getElementById("left-player-label");
    const rightLabel = document.getElementById("right-player-label");
    if(!leftLabel || !rightLabel)
        return;
    if(gameMode === "2players") {
        leftLabel.textContent = currentTurn === "black" ? t("player2Turn") : t("player2");
        rightLabel.textContent = currentTurn === "white" ? t("player1Turn") : t("player1");
    }
    else if(gameMode === "easyAI") {
        leftLabel.textContent = currentTurn === "black" ? t("easyAITurn") : t("easyAI");
        rightLabel.textContent = currentTurn === "white" ? t("playerTurn") : t("player");
    }
    else if(gameMode === "normalAI") {
        leftLabel.textContent = currentTurn === "black" ? t("normalAITurn") : t("normalAI");
        rightLabel.textContent = currentTurn === "white" ? t("playerTurn") : t("player");
    }
    else if(gameMode === "hardAI") {
        leftLabel.textContent = currentTurn === "black" ? t("hardAITurn") : t("hardAI");
        rightLabel.textContent = currentTurn === "white" ? t("playerTurn") : t("player");
    }
    else if(gameMode === "makhloutaEasyAI") {
    leftLabel.textContent = currentTurn === "black" ? t("makhloutaEasyAI") : t("makhloutaEasyAI");
    rightLabel.textContent = currentTurn === "white" ? t("playerTurn") : t("player");
    }
    if(currentTurn === "black") {
        leftLabel.classList.add("active-player");
        leftLabel.classList.remove("inactive-player");
        rightLabel.classList.add("inactive-player");
        rightLabel.classList.remove("active-player");
    }
    else {
        leftLabel.classList.add("inactive-player");
        leftLabel.classList.remove("active-player");
        rightLabel.classList.add("active-player");
        rightLabel.classList.remove("inactive-player");
    }
}
function closeInGameOptions() {
    const gameOptionsBlock = document.getElementById("game-options-block");
    if(gameOptionsBlock) 
        gameOptionsBlock.style.display = "none";
}
function updateGameFooter() {
    let footer = document.getElementById("game-footer");
    if(!footer) {
        footer = document.createElement("div");
        footer.id = "game-footer";
        const leftSide = document.createElement("div");
        leftSide.id = "footer-left";
        const versionText = document.createElement("div");
        versionText.id = "version-text";
        versionText.textContent = t("version");
        leftSide.appendChild(versionText);
        const rightSide = document.createElement("div");
        rightSide.id = "footer-right";
        rightSide.style.display = "flex";
        rightSide.style.flexDirection = "column";
        rightSide.style.alignItems = "center";
        const gameOptionsButton = document.createElement("button");
        gameOptionsButton.textContent = t("options");
        gameOptionsButton.id = "game-options-button";
        const mainMenuButton = document.createElement("button");
        mainMenuButton.textContent = t("mainMenu");
        mainMenuButton.id = "game-main-menu-button";
        const creatorText = document.createElement("div");
        creatorText.id = "creator-text";
        creatorText.textContent = t("byJawad");
        const copyrightText = document.createElement("div");
        copyrightText.id = "copyright-text";
        copyrightText.textContent = t("copyright");
        const gameOptionsBlock = document.createElement("div");
        gameOptionsBlock.id = "game-options-block";
        gameOptionsBlock.style.position = "fixed";
        gameOptionsBlock.style.left = "50%";
        gameOptionsBlock.style.top = "50%";
        gameOptionsBlock.style.transform = "translate(-50%, -50%)";
        gameOptionsBlock.style.zIndex = "10000";
        gameOptionsBlock.style.display = "none";
        gameOptionsBlock.style.backgroundColor = "black";
        gameOptionsBlock.style.padding = "15px";
        gameOptionsBlock.style.borderRadius = "10px";
        gameOptionsBlock.style.marginBottom = "10px";
        gameOptionsBlock.style.width = "180px";
        gameOptionsBlock.style.boxSizing = "border-box";
        gameOptionsBlock.style.flexDirection = "column";
        gameOptionsBlock.style.alignItems = "center";
        gameOptionsBlock.style.gap = "8px";
        const existingCheckMessage = document.getElementById("check-message");
        if(existingCheckMessage)
            existingCheckMessage.textContent = t("check");
        const gameOptionsTitle = document.createElement("div");
        gameOptionsTitle.textContent = t("options");
        gameOptionsTitle.style.color = "white";
        gameOptionsTitle.style.fontWeight = "bold";
        gameOptionsTitle.style.fontSize = "20px";
        gameOptionsTitle.style.marginBottom = "5px";
        const volumeButton = document.createElement("button");
        volumeButton.id = "game-volume-button";
        volumeButton.style.width = "150px";
        const musicButton = document.createElement("button");
        musicButton.id = "game-music-button";
        musicButton.style.width = "150px";
        const returnOptionsButton = document.createElement("button");
        returnOptionsButton.id = "game-options-return-button";
        returnOptionsButton.textContent = t("return");
        returnOptionsButton.style.width = "80px";
        returnOptionsButton.style.backgroundColor = "gray";
        returnOptionsButton.style.color = "white";
        returnOptionsButton.style.fontSize = "14px";
        returnOptionsButton.style.padding = "5px";
        returnOptionsButton.addEventListener("click", function() {
            playClickSound();
            gameOptionsBlock.style.display = "none";
        });
        function updateInGameOptionsButtons() {
            if(soundsEnabled) {
                volumeButton.textContent = "Volume : On";
                volumeButton.style.backgroundColor = "green";
            }
            else {
                volumeButton.textContent = "Volume : Off";
                volumeButton.style.backgroundColor = "red";
            }
            if(musicEnabled) {
                musicButton.textContent = "Music : On";
                musicButton.style.backgroundColor = "green";
            }
            else {
                musicButton.textContent = "Music : Off";
                musicButton.style.backgroundColor = "red";
            }
        }
        volumeButton.addEventListener("click", function() {
            setSoundsEnabled(!soundsEnabled);
            updateInGameOptionsButtons();
        });
        musicButton.addEventListener("click", function() {
            musicEnabled = !musicEnabled;
            gameMusic.muted = !musicEnabled;
            firstMusic.muted = !musicEnabled;
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
            updateInGameOptionsButtons();
        });
        gameOptionsBlock.appendChild(gameOptionsTitle);
        gameOptionsBlock.appendChild(volumeButton);
        gameOptionsBlock.appendChild(musicButton);
        gameOptionsBlock.appendChild(returnOptionsButton);
        gameOptionsButton.addEventListener("click", function() {
            playClickSound();
            if(gameOptionsBlock.style.display === "none") {
                updateInGameOptionsButtons();
                gameOptionsBlock.style.display = "flex";
            }
            else 
                gameOptionsBlock.style.display = "none";
        });
        mainMenuButton.addEventListener("click", function() {
            playClickSound();
            closeInGameOptions();
            returnToMainMenuAfterGameOver();
        });
        /*
        rightSide.appendChild(gameOptionsBlock);
        rightSide.appendChild(gameOptionsButton);
        rightSide.appendChild(mainMenuButton);
        rightSide.appendChild(creatorText);
        rightSide.appendChild(copyrightText);
        */
       rightSide.appendChild(gameOptionsBlock);
const gameButtonsContainer = document.createElement("div");
gameButtonsContainer.id = "game-buttons-container";
gameButtonsContainer.appendChild(gameOptionsButton);
gameButtonsContainer.appendChild(mainMenuButton);
rightSide.appendChild(gameButtonsContainer);
rightSide.appendChild(creatorText);
rightSide.appendChild(copyrightText);
if(window.innerWidth <= 600) {
    gameButtonsContainer.style.display = "flex";
    gameButtonsContainer.style.flexDirection = "row";
    gameButtonsContainer.style.justifyContent = "center";
    gameButtonsContainer.style.alignItems = "center";
    gameButtonsContainer.style.gap = "5px";
}
        footer.appendChild(leftSide);
        footer.appendChild(rightSide);
        canvas.parentNode.insertBefore(footer, canvas.nextSibling);
        //footer.style.display = "none";
    }
    const existingChessGameTitle = document.getElementById("chess-game-title");
    const existingVersionText = document.getElementById("version-text");
    const existingGameOptionsButton = document.getElementById("game-options-button");
    const existingMainMenuButton = document.getElementById("game-main-menu-button");
    const existingCreatorText = document.getElementById("creator-text");
    const existingCopyrightText = document.getElementById("copyright-text");
    const existingGameOptionsTitle = document.querySelector("#game-options-block > div");
    if(existingChessGameTitle)
        existingChessGameTitle.textContent = t("chessGame");
    if(existingVersionText)
        existingVersionText.textContent = t("version");
    if(existingGameOptionsButton)
        existingGameOptionsButton.textContent = t("options")
    if(existingMainMenuButton)
        existingMainMenuButton.textContent = t("mainMenu");
    if(existingCreatorText)
        existingCreatorText.textContent = t("byJawad");
    if(existingCopyrightText)
        existingCopyrightText.textContent = t("copyright");
    if(existingGameOptionsTitle)
        existingGameOptionsTitle.textContent = t("options");
}
function updateCheckStatus() {
    if(isKingInCheck("white" , pieces)) {
        checkedKing = "white";
        checkMessage.textContent = t("check");
        checkMessage.style.display = "block";
    }
    else if(isKingInCheck("black" , pieces)) {
        checkedKing = "black";
        checkMessage.textContent = t("check");
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
function returnToMainMenuAfterGameOver() {
    clearInterval(timerInterval);
    if(aiMoveTimeout) {
        clearTimeout(aiMoveTimeout);
        aiMoveTimeout = null;
    }
    gameMusic.pause();
    gameMusic.currentTime = 0;
    youWinSound.pause();
    youWinSound.currentTime = 0;
    youLoseSound.pause();
    youLoseSound.currentTime = 0;
    gameOverMessage.style.display = "none";
    checkMessage.style.display = "none";
    timers.style.display = "none";
    const gameFooter = document.getElementById("game-footer");
    if(gameFooter)
        gameFooter.style.display = "none";
    selectedPiece = null;
    validMoves = [];
    promotionPiece = null;
    gameStarted = false;
    gameOver = false;
    hardAIThinking = false;
    startScreen.style.display = "flex";
    showMainMenu();
    if(musicEnabled) {
        firstMusic.currentTime = 0;
        firstMusic.play();
    }
}
function endGame(losingColor) {
    closeInGameOptions();
    gameOver = true;
    clearInterval(timerInterval);
    gameMusic.pause();
    gameMusic.currentTime = 0;
    selectedPiece = null;
    validMoves = [];
    checkMessage.style.display = "none";
    if(gameMode === "easyAI") {
        if(losingColor === "white")
            gameOverMessage.textContent = t("easyAIWin");
        else
            gameOverMessage.textContent = t("playerWin");
    }
    else if(gameMode === "normalAI") {
        if(losingColor === "white")
            gameOverMessage.textContent = t("normalAIWin");
        else
            gameOverMessage.textContent = t("playerWin");
    }
    else if(gameMode === "hardAI") {
        if(losingColor === "white")
            gameOverMessage.textContent = t("hardAIWin");
        else
            gameOverMessage.textContent = t("playerWin");
    }
    else if(gameMode === "makhloutaEasyAI") {
        if(losingColor === "white")
            gameOverMessage.textContent = t("makhloutaEasyAIWin");
        else
            gameOverMessage.textContent = t("playerWin");
    }
    else {
        if(losingColor === "white")
            gameOverMessage.textContent = t("player02Win");
        else
            gameOverMessage.textContent = t("player01Win");
    }
    gameOverMessage.style.display = "block";
    if(soundsEnabled && musicEnabled) {
        if(losingColor === "white" && gameMode !== "2players") {
            youLoseSound.currentTime = 0;
            youLoseSound.play();

        }
        else {
            youWinSound.currentTime = 0;
            youWinSound.play();
        }
    }
    clearTimeout(returnToMenuTimeout);
    returnToMenuTimeout = setTimeout(() => {
        returnToMainMenuAfterGameOver();
    }, 15000);
}
function resetPieces() {
    pieces.length = 0;
    for(let column = 0; column < 8; column++) {
        const position = String.fromCharCode(97 + column) + "2";
        pieces.push(
            new Piece("pawn","white", position, "assets/images/white-pawn.png"
            )
        );
    }
    for(let column of ["a", "h"]) {
        pieces.push(
            new Piece("rook", "white", column + "1", "assets/images/white-rook.png"
            )
        );
    }
    for(let column of ["b", "g"]) {
        pieces.push(
            new Piece("knight", "white", column + "1", "assets/images/white-knight.png"
            )
        );
    }
    for(let column of ["c", "f"]) {
        pieces.push(
            new Piece( "bishop" , "white", column + "1", "assets/images/white-bishop.png"
            )
        );
    }
    pieces.push(
        new Piece(
            "queen", "white", "d1", "assets/images/white-queen.png"
        )
    );
    pieces.push(
        new Piece(
            "king", "white", "e1", "assets/images/white-king.png"
        )
    );
    for(let column = 0; column < 8; column++) {
        const position = String.fromCharCode(97 + column) + "7";
        pieces.push(
            new Piece(
                "pawn", "black", position, "assets/images/black-pawn.png"
            )
        );
    }
    for(let column of ["a", "h"]) {
        pieces.push(
            new Piece(
                "rook", "black", column + "8", "assets/images/black-rook.png"
            )
        );
    }
    for(let column of ["b", "g"]) {
        pieces.push(
            new Piece(
                "knight", "black", column + "8", "assets/images/black-knight.png"
            )
        );
    }
    for(let column of ["c", "f"]) {
        pieces.push(
            new Piece(
                "bishop", "black", column + "8", "assets/images/black-bishop.png"
            )
        );
    }
    pieces.push(
        new Piece(
            "queen", "black", "d8", "assets/images/black-queen.png"
        )
    );
    pieces.push(
        new Piece(
            "king", "black", "e8", "assets/images/black-king.png"
        )
    );
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
function getPieceValue(piece) {
    if(piece.type === "pawn")
        return 100;
    if(piece.type === "knight")
        return 320;
    if(piece.type === "bishop")
        return 330;
    if(piece.type === "rook")
        return 500;
    if(piece.type === "queen")
        return 900;
    if(piece.type === "king")
        return 20000;
    return 0;
}
function evaluateBoard() {
    let score = 0;
    for(let piece of pieces) {
        const value = getPieceValue(piece);
        if(piece.color === "black")
            score += value;
        else
            score -= value;
    }
    return score;
}
function evaluateKingSafety() {
    let score = 0;
    if(isKingInCheck("black", pieces)) 
        score -= 500;
    if(isKingInCheck("white", pieces)) 
        score += 500;
    return score;
}
function evaluatePosition() {
    let score = evaluateBoard();
    score += evaluateKingSafety();
    return score;
}
function minimax(depth, alpha, beta, maximizingPlayer) {
    updateCheckStatus();
    if(depth === 0) 
        return evaluatePosition();
    if(checkedKing) {
        const kingColor = checkedKing;
        if(!hasAnyLegalMove(kingColor)) {
            if(kingColor === "black")
                return -1000000 - depth;
            if(kingColor === "white") 
                return 1000000 + depth;
        }
    }
    if(maximizingPlayer) {
        let maxEvaluation = -Infinity;
        const blackPieces = pieces.filter(piece => piece.color === "black");
        for(let piece of blackPieces) {
            const moves = getPieceMoves(piece);
            const legalMoves = getLegalMoves(piece, moves);
            for(let move of legalMoves) {
                const originalPosition = piece.position;
                const capturedPiece = pieces.find(otherPiece => otherPiece.position === move && otherPiece.color !== piece.color);
                const capturedIndex = capturedPiece? pieces.indexOf(capturedPiece): -1;
                if(capturedPiece) 
                    pieces.splice(capturedIndex, 1);
                piece.position = move;
                let evaluation = minimax(depth - 1, alpha, beta, false);
                piece.position = originalPosition;
                if(capturedPiece) 
                    pieces.splice(capturedIndex, 0, capturedPiece);
                maxEvaluation = Math.max(maxEvaluation, evaluation);
                alpha = Math.max(alpha, evaluation);
                if(beta <= alpha) 
                    return maxEvaluation;
            }
        }
        return maxEvaluation;
    }
    else {
        let minEvaluation = Infinity;
        const whitePieces = pieces.filter(piece => piece.color === "white");
        for(let piece of whitePieces) {
            const moves = getPieceMoves(piece);
            const legalMoves = getLegalMoves(piece, moves);
            for(let move of legalMoves) {
                const originalPosition = piece.position;
                const capturedPiece = pieces.find(otherPiece => otherPiece.position === move && otherPiece.color !== piece.color);
                const capturedIndex = capturedPiece ? pieces.indexOf(capturedPiece) : -1;
                if(capturedPiece) 
                    pieces.splice(capturedIndex, 1);
                piece.position = move;
                let evaluation = minimax(depth - 1, alpha, beta, true);
                piece.position = originalPosition;
                if(capturedPiece) 
                    pieces.splice(capturedIndex, 0, capturedPiece);
                minEvaluation = Math.min(minEvaluation, evaluation);
                beta = Math.min(beta, evaluation);
                if(beta <= alpha) 
                    return minEvaluation;
            }
        }
        return minEvaluation;
    }
}
function setupGameInterface() {
    timers.style.display = "flex";
    const gameFooter = document.getElementById("game-footer");
    if(gameFooter)
        gameFooter.style.display = "flex";
    updateTimers();
    updateGameModeDisplay();
    updateTurnDisplay();
    updateGameFooter();
    startTimer();
}
function getHardAIMove() {
    const blackPieces = pieces.filter(piece => piece.color === "black");
    let bestMove = null;
    let bestEvaluation = -Infinity;
    const searchDepth = 3;
    for(let piece of blackPieces) {
        const moves = getPieceMoves(piece);
        const legalMoves = getLegalMoves(piece, moves);
        for(let move of legalMoves) {
            const originalPosition = piece.position;
            const capturedPiece = pieces.find(otherPiece => otherPiece.position === move && otherPiece.color !== piece.color);
            const capturedIndex = capturedPiece? pieces.indexOf(capturedPiece): -1;
            if(capturedPiece) 
                pieces.splice(capturedIndex, 1);
            piece.position = move;
            const evaluation = minimax(searchDepth - 1, -Infinity, Infinity, false);
            piece.position = originalPosition;
            if(capturedPiece) 
                pieces.splice(capturedIndex, 0, capturedPiece);
            if(evaluation > bestEvaluation || bestMove === null) {
                bestEvaluation = evaluation;
                bestMove = { piece: piece, move: move };
            }
        }
    }
    return bestMove;
}
function makeHardAIMove() {
    if(gameOver)
        return;
    if(gameMode !== "hardAI")
        return;
    if(currentTurn !== "black")
        return;
    hardAIThinking = true;
    const selectedMove = getHardAIMove();
    if(!selectedMove) {
        updateCheckStatus();
        if(checkedKing === "black") 
            endGame("black");
        hardAIThinking = false;
        return;
    }
    const aiPiece = selectedMove.piece;
    const targetPosition = selectedMove.move;
    const capturedPiece = pieces.find(piece => piece.position === targetPosition && piece.color !== aiPiece.color);
    playMoveSound();
    animatePieceMove(aiPiece, targetPosition, function() {
    if(capturedPiece) {
        const capturedIndex = pieces.indexOf(capturedPiece);
        if(capturedIndex !== -1)
            pieces.splice(capturedIndex, 1);
        if(soundsEnabled) {
            killSound.currentTime = 0;
            killSound.play();
        }
    }
    updateCheckStatus();
    if(checkedKing) {
        if(soundsEnabled) {
            checkSound.currentTime = 0;
            checkSound.play();
        }
        if(checkForCheckmate()) {
            hardAIThinking = false;
            return;
        }
    }
    if(aiPiece.type === "pawn" && aiPiece.position[1] === "1") {
        aiPiece.type = "queen";
        aiPiece.image = "assets/images/black-queen.png"; 
    }
    hardAIThinking = false;
    switchTurn();
});
}
function animatePieceMove(piece, targetPosition, callback) {
    const startPosition = piece.position;
    const start = getPositionCoordinates(startPosition);
    const target = getPositionCoordinates(targetPosition);
    const startTime = performance.now();
    const duration = 200;
    pieceAnimating = true;
    function animate(currentTime) {
        const progress = Math.min(
            (currentTime - startTime) / duration,
            1
        );
        const x = start.x + (target.x - start.x) * progress;
        const y = start.y + (target.y - start.y) * progress;
        piece.position = targetPosition;
        drawBoard();
        const image = imageCache[piece.image];
        if(image && image.complete) {
            ctx.drawImage(
                image,
                x,
                y,
                60,
                60
            );
        }
        if(progress < 1) 
            requestAnimationFrame(animate);
        else {
            piece.position = targetPosition;
            pieceAnimating = false;
            drawBoard();
            if(callback)
                callback();
        }
    }
    requestAnimationFrame(animate);
}
canvas.addEventListener("click", function(event) {
    if(!gameStarted)
        return;
    if(gameOver) {
        return;
    }
    if(pieceAnimating)
        return;
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
       const movingPiece = selectedPiece;
selectedPiece = null;
validMoves = [];
animatePieceMove(movingPiece, position, function() {
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
    console.log("White in check: " , isKingInCheck("white", pieces));
    console.log("Black in check: " , isKingInCheck("black" , pieces));
    if(gameMode !== "makhloutaEasyAI" && movingPiece.type === "pawn" && ((movingPiece.color === "white" && movingPiece.position[1] === "8") || (movingPiece.color === "black" && movingPiece.position[1] === "1")) ) {
        promotionPiece = movingPiece;
        promotionMenu.style.display = "block";
    }
    else 
    switchTurn();
    drawBoard();
});
return;
    }
    console.log("Position:", position);
    selectedPiece = pieces.find(piece => piece.position === position);
   if((gameMode === "easyAI" || gameMode === "normalAI" || gameMode === "hardAI" || gameMode === "makhloutaEasyAI") && currentTurn === "black") {
    selectedPiece = null;
    validMoves = [];
    waitTurnMessage.style.display = "block";
    clearTimeout(waitTurnTimeout);
    waitTurnTimeout = setTimeout(() => {
        waitTurnMessage.style.display = "none";
    }, 1000);
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

//startLoading() drawPiece() existingVersionText updateGameFooter style