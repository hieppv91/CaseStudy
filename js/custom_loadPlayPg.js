const bonusPrice = new Array(200, 400, 600, 1000, 2000, 3000, 6000, 10000, 14000, 22000, 30000, 40000, 60000, 85000, 150000);
class options {
    constructor(option1, option2, option3, option4) {
        this.option1 = option1;
        this.option2 = option2;
        this.option3 = option3;
        this.option4 = option4;
    }
}
class questions {
    constructor(question, options, answer) {
        this.question = question;
        this.options = options;
        this.answer = answer;
    }
}
const questionArray = new Array(
    new questions("1+2 = ", new options("1", "2", "3", "4"), "3"),
    new questions("Mạnh vì…, bạo vì tiền", new options("Sắn", "Khoai", "Ngô", "Gạo"), "Gạo"),
    new questions("Đất nước nào là quê hương của ông già tuyết?", new options("Hà Lan", "Phần Lan", "Thái Lan", "Anh"), "Phần Lan"),
    new questions("Thành phần chính trong bầu khí quyển của Sao Hỏa là khí …..", new options("Oxi", "Cacbonic", "Hidro", "Nito"), "Cacbonic"),
    new questions("VINACOMIN là tập đoàn công nghiệp than và … Việt Nam.", new options("Thủy sản", "Hải sản", "Lâm sản", "Khoáng sản"), "Khoáng sản"),
    new questions("Liên hoan thơ châu Á – Thái Bình Dương lần đầu tiên sẽ được khai mạc tại thành phố nào?", new options("Hà Nội", "Bắc Ninh", "Hạ Long", "Hồ Chí Minh"), "Hạ Long"),
    new questions("Albicelestes là biệt danh của đội tuyển bóng đá quốc gia nào?", new options("Tây Ban Nha", "Bồ Đào Nha", "Séc", "Argentina"), "Argentina"),
    new questions("Bạch đầu quân là tên gọi của lực lượng dân quân nào trong kháng chiến chống Mỹ?", new options("Các cụ già", "Thanh niên", "Phụ nữ", "Nhi đồng"), "Các cụ già"),
    new questions("1+1 = ", new options("1", "2", "3", "4"), "2"),
    new questions("1+2 = ", new options("1", "2", "3", "4"), "3"),
    new questions("1 = ", new options("1", "2", "3", "4"), "1"),
    new questions("2 = ", new options("1", "2", "3", "4"), "2"),
    new questions("0.5 >", new options("3", "1", "2", "0"), "0"),
    new questions("50 : 10 = ", new options("5", "10", "15", "20"), "5"),
    new questions("3 : 2 = ", new options("1", "1.5", "2", "2.5"), "1.5"),
    new questions("2 * 3 = ", new options("2", "4", "6", "8"), "6"),
    new questions("Con chó trong tiếng Anh là gì?", new options("Dog", "Fish", "Bee", "Cat"), "Dog"),
    new questions("Ai có nhiều tiền nhất?", new options("Hiệp", "Hà", "Minh", "Mai"), "Hà"),
    new questions("Con gì trong những con sau đây khác với những con còn lại?", new options("Chó", "Mèo", "Lợn", "Gà"), "Gà"),
    new questions("Ai ngáo nhất team?", new options("Hà", "Minh", "Cường", "Mai"), "Hà"),
    new questions("Ai béo nhất nhà?", new options("Hà", "Minh", "Cường", "Mai"), "Hà")
);

let certainEarnMoney = 0,
    myMoney = 0,
    level = 1,
    limitedTime = 10,
    isAsking = false,
    help50Used = false,
    callPhoneUsed = false,
    askViewerUsed = false,
    myNotification = "";
let question = document.getElementById("questions-now");
let answer1 = document.getElementById("answer1");
let answer2 = document.getElementById("answer2");
let answer3 = document.getElementById("answer3");
let answer4 = document.getElementById("answer4");
let questionsList = randomSelectQuestion();
startClock();
loadPricesLevel();
loadQuestion(questionsList);
setActiveBorder(level - 1);

function pressAnswer(options) {
    switch (options) {
        case 1:
            {
                answer1.addEventListener("click", checkAnswer(answer1, level));
                break;
            }
        case 2:
            {
                answer2.addEventListener("click", checkAnswer(answer2, level));
                break;
            }
        case 3:
            {
                answer3.addEventListener("click", checkAnswer(answer3, level));
                break;
            }
        case 4:
            {
                answer4.addEventListener("click", checkAnswer(answer4, level));
                break;
            }
        default:
            alert("Error");
    }
};

function setActiveBorder(level) {
    let activeBorder = document.getElementById(`borderHere${level}`);
    let activeNo = document.getElementById(`Money${level}`);
    let activeMoney = document.getElementById(`bonusPrice${level}`);

    if (level < 15) {
        if (level > 0) {
            let deactivateBorder = document.getElementById(`borderHere${level-1}`);
            let deactivateNo = document.getElementById(`Money${level-1}`);
            let deactivateMoney = document.getElementById(`bonusPrice${level-1}`);
            deactivateNo.classList.remove("active5");
            deactivateMoney.classList.remove("active5");
            deactivateBorder.classList.remove("active-border");
        }

        activeBorder.classList.add("active-border");
        activeNo.classList.add("active5");
        activeMoney.classList.add("active5");
    }
}

function checkAnswer(answer) {
    if (answer.value == questionsList[level].answer) {
        myMoney = bonusPrice[level];
        setActiveBorder(level);
        if (level == 5 || level == 10 || level == 15)
            certainEarnMoney = bonusPrice[level - 1];
        if (level >= 15) {
            showResults();
            clearInterval(downloadTimer);
        } else {
            level++;
            loadQuestion(questionsList);
            clearInterval(downloadTimer);
            startClock();
        }
    } else {
        showResults();
        clearInterval(downloadTimer);
    }
}

function randomSelectQuestion() {
    let tempArray = questionArray;
    let questionsList = [];
    while (questionsList.length < 16) {
        let index = Math.floor(Math.random() * tempArray.length);
        questionsList.push(tempArray[index]);
        tempArray.splice(index, 1);
    }
    return questionsList;
}

function loadQuestion(questionsList) {
    question.innerText = questionsList[level].question;
    answer1.value = questionsList[level].options.option1;
    answer2.value = questionsList[level].options.option2;
    answer3.value = questionsList[level].options.option3;
    answer4.value = questionsList[level].options.option4;
}

function loadPricesLevel() {
    let bonusBar = document.getElementById("bonus");
    bonusBar.innerHTML = "";
    for (let i = bonusPrice.length - 1; i >= 0; i--) {
        if (i == 0) {
            bonusBar.innerHTML += `
<div class="col-md-12 active-border" id="borderHere${i}">
<div class="col-md-3 text-right bonusPrices-right bonusPricesNo5 active5" id="Money${i}">${i+1}</div>
<div class="col-md-9 text-left bonusPrices-left priceValue5 active5" id="bonusPrice${i}">${bonusPrice[i]}</div>            
</div>
`;
            continue;
        }
        if ((i + 1) % 5 != 0) {
            bonusBar.innerHTML += `
<div class="col-md-12" id="borderHere${i}">
<div class="col-md-3 text-right bonusPrices-right bonusPricesNo" id="Money${i}">${i+1}</div>
<div class="col-md-9 bonusPrices-left priceValue" id="bonusPrice${i}">${bonusPrice[i]}</div> 
</div>
`;
        } else {
            bonusBar.innerHTML += `
<div class="col-md-12" id="borderHere${i}">
<div class="col-md-3 text-right bonusPrices-right bonusPricesNo5 " id="Money${i}">${i+1}</div>
<div class="col-md-9 text-left bonusPrices-left priceValue5" id="bonusPrice${i}">${bonusPrice[i]}</div>            
</div>
`;
        }
    }
    bonusBar.innerHTML += `
<div class="col-md-12 text-center">
<input type="button" value="Kết thúc" id="endGame" onclick="giveMoney()" class="btn btn-primary">
</div>`;
}

var downloadTimer;

function startClock() {
    let time_left = limitedTime;
    display = document.getElementById("circle-content");
    display.textContent = time_left;
    downloadTimer = setInterval(function() {
        if (time_left <= 0) {
            time_left = limitedTime;
            display.textContent = time_left;
            clearInterval(downloadTimer);
            showResults();
        } else {
            display.textContent = time_left;
        }
        time_left -= 1;
    }, 1000);
}

function showResults() {
    let notification = document.getElementById("modal-body");
    notification.innerText = `Bạn giành được ${certainEarnMoney} USD`;
    clearInterval(downloadTimer);
    document.getElementById("backdrop").style.display = "block";
    document.getElementById("exampleModal").style.display = "block";
    document.getElementById("exampleModal").classList.add("show");
}

function giveMoney() {
    let notification = document.getElementById("modal-body");
    notification.innerText = `Bạn giành được ${myMoney} USD`;
    clearInterval(downloadTimer);
    document.getElementById("backdrop").style.display = "block";
    document.getElementById("exampleModal").style.display = "block";
    document.getElementById("exampleModal").classList.add("show");
}


function closeModal() {
    document.getElementById("backdrop").style.display = "none";
    document.getElementById("exampleModal").style.display = "none";
    document.getElementById("exampleModal").classList.remove("show");
    if (isAsking) {
        let btnReplay = document.getElementById("btnReplay");
        btnReplay.style.visibility = "visible";
        isAsking = false;
    } else {
        window.location.reload(false);
        isAsking = false;
    }
}

function replay() {
    window.location.reload(false);
}

function showAnswer(myNotification) {
    let btnReplay = document.getElementById("btnReplay");
    btnReplay.style.visibility = 'hidden';
    let notification = document.getElementById("modal-body");
    notification.innerHTML = myNotification;
    document.getElementById("backdrop").style.display = "block";
    document.getElementById("exampleModal").style.display = "block";
    document.getElementById("exampleModal").classList.add("show");
}

function askViewer() {
    isAsking = true;
    if (!askViewerUsed) {
        askViewerUsed = true;
        let max = 100;
        let rate = []
        for (let i = 0; i < 4; i++) {
            rate[i] = Math.floor(Math.random() * max);
            max -= rate[i];
        }
        showRate(rate);
    } else {
        showAnswer("Trợ giúp đã được sử dụng!")
    }
}

function showRate(rate) {
    let myString = `
A: ${rate[0]}%; <br>
B: ${rate[1]}%; <br>
C: ${rate[2]}%; <br>
D: ${rate[3]}%; <br>
`;

    showAnswer(myString);
}

function callPhone() {
    isAsking = true;
    if (!callPhoneUsed) {
        callPhoneUsed = true;
        let myAnswer = `My answer is ${questionsList[level].answer}`;
        showAnswer(myAnswer);
    } else {
        showAnswer("Trợ giúp đã được sử dụng!")
    }
}

function help50() {
    let position = [];
    let indexArray = [];
    if (questionsList[level].options.option1 == questionsList[level].answer) {
        indexArray = new Array(questionsList[level].options.option2, questionsList[level].options.option3, questionsList[level].options.option4);
        position[0] = questionsList[level].options.option1;
    }
    if (questionsList[level].options.option2 == questionsList[level].answer) {
        indexArray = new Array(questionsList[level].options.option1, questionsList[level].options.option3, questionsList[level].options.option4);
        position[0] = questionsList[level].options.option2;
    }
    if (questionsList[level].options.option3 == questionsList[level].answer) {
        indexArray = new Array(questionsList[level].options.option1, questionsList[level].options.option2, questionsList[level].options.option4);
        position[0] = questionsList[level].options.option3;
    }
    if (questionsList[level].options.option4 == questionsList[level].answer) {
        indexArray = new Array(questionsList[level].options.option1, questionsList[level].options.option2, questionsList[level].options.option3);
        position[0] = questionsList[level].options.option4;
    }
    position[1] = indexArray[Math.floor(Math.random() * indexArray.length)];


    if (!checkValueInArray(position, questionsList[level].options.option1))
        answer1.value = "";
    if (!checkValueInArray(position, questionsList[level].options.option2))
        answer2.value = "";
    if (!checkValueInArray(position, questionsList[level].options.option3))
        answer3.value = "";
    if (!checkValueInArray(position, questionsList[level].options.option4))
        answer4.value = "";
}

function checkValueInArray(myArray, value) {
    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i] == value)
            return true;
    }
    return false;
}