const bonusPrice = new Array(200, 400, 600, 1000, 2000, 3000, 6000, 10000, 14000, 22000, 30000, 40000, 60000, 85000, 150000);

loadPricesLevel();

function loadPricesLevel() {
    let bonusBar = document.getElementById("bonus");
    bonusBar.innerHTML = "";
    for (let i = bonusPrice.length; i > 0; i--) {
        if (i % 5 != 0) {
            bonusBar.innerHTML += `
            <div class="col-md-3 text-right bonusPrices-right bonusPricesNo" id="Money${i}">${i}</div>
            <div class="col-md-9 bonusPrices-left priceValue" id="bonus">${bonusPrice[i-1]}</div> 
        `;
        } else {
            bonusBar.innerHTML += `
            <div class="col-md-3 text-right bonusPrices-right bonusPricesNo5 " id="Money${i}">${i}</div>
            <div class="col-md-9 text-left bonusPrices-left priceValue5" id="bonus">${bonusPrice[i-1]}</div> 
            `;
        }
    }

    let questionArray = randomSelectQuestion();
}

function startClock() {
    var time_left = 5;
    display = document.getElementById("circle-content");
    var downloadTimer = setInterval(function() {
        if (time_left <= 0) {
            clearInterval(downloadTimer);
            display.textContent = "-";
            showResults();
        } else {
            display.textContent = time_left;
        }
        time_left -= 1;
    }, 1000);
}

function showResults() {
    document.getElementById("backdrop").style.display = "block"
    document.getElementById("exampleModal").style.display = "block"
    document.getElementById("exampleModal").classList.add("show")
}

function closeModal() {
    document.getElementById("backdrop").style.display = "none"
    document.getElementById("exampleModal").style.display = "none"
    document.getElementById("exampleModal").classList.remove("show")
}

var modal = document.getElementById('exampleModal');
window.onclick = function(event) {
    if (event.target == modal) {
        closeModal()
    }
}

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
}\
let questionArray = [];
questionArray[0] = new questions("1+2 = ", new options("1", "2", "3", "4"), "3");
questionArray[1] = new questions("Mạnh vì…, bạo vì tiền", new options("Sắn", "Khoai", "Ngô", "Gạo"), "Gạo");
questionArray[2] = new questions("Đất nước nào là quê hương của ông già tuyết?", new options("Hà Lan", "Phần Lan", "Thái Lan", "Anh"), "Phần Lan");
questionArray[3] = new questions("Thành phần chính trong bầu khí quyển của Sao Hỏa là khí …..", new options("Oxi", "Cacbonic", "Hidro", "Nito"), "Cacbonic");
questionArray[4] = new questions("VINACOMIN là tập đoàn công nghiệp than và … Việt Nam.", new options("Thủy sản", "Hải sản", "Lâm sản", "Khoáng sản"), "Khoáng sản");
questionArray[5] = new questions("Liên hoan thơ châu Á – Thái Bình Dương lần đầu tiên sẽ được khai mạc tại thành phố nào?", new options("Hà Nội", "Bắc Ninh", "Hạ Long", "Hồ Chí Minh"), "Hạ Long");
questionArray[6] = new questions("Albicelestes là biệt danh của đội tuyển bóng đá quốc gia nào?", new options("Tây Ban Nha", "Bồ Đào Nha", "Séc", "Argentina"), "Argentina");
questionArray[7] = new questions("Bạch đầu quân là tên gọi của lực lượng dân quân nào trong kháng chiến chống Mỹ?", new options("Các cụ già", "Thanh niên", "Phụ nữ", "Nhi đồng"), "Các cụ già");
questionArray[8] = new questions("1+1 = ", new options("1", "2", "3", "4"), "2");
questionArray[9] = new questions("1+2 = ", new options("1", "2", "3", "4"), "3");
questionArray[10] = new questions("1 = ", new options("1", "2", "3", "4"), "1");
questionArray[11] = new questions("2 = ", new options("1", "2", "3", "4"), "2");
questionArray[12] = new questions("0.5 >", new options("3", "1", "2", "0"), "0");
questionArray[13] = new questions("50 : 10 = ", new options("5", "10", "15", "20"), "5");
questionArray[14] = new questions("3 : 2 = ", new options("1", "1.5", "2", "2.5"), "1.5");
questionArray[15] = new questions("2 * 3 = ", new options("2", "4", "6", "8"), "6");
questionArray[16] = new questions("Con chó trong tiếng Anh là gì?", new options("Dog", "Fish", "Bee", "Cat"), "Dog");
questionArray[17] = new questions("Ai có nhiều tiền nhất?", new options("Hiệp", "Hà", "Minh", "Mai"), "Hà");
questionArray[18] = new questions("Con gì trong những con sau đây khác với những con còn lại?", new options("Chó", "Mèo", "Lợn", "Gà"), "Gà");
questionArray[19] = new questions("Ai ngáo nhất team?", new options("Hà", "Minh", "Cường", "Mai"), "Hà");
questionArray[13] = new questions("Ai béo nhất nhà?", new options("Hà", "Minh", "Cường", "Mai"), "Hà");

function randomSelectQuestion() {
    let questionArray = new Array();
    return questionArray;
}

function loadQuestion(question) {}