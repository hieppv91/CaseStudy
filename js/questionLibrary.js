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
const questions1 = new questions("Mạnh vì…, bạo vì tiền", new options("Sắn", "Khoai", "Ngô", "Gạo"), "Gạo");
const questions2 = new questions("Đất nước nào là quê hương của ông già tuyết?", new options("Hà Lan", "Phần Lan", "Thái Lan", "Anh"), "Phần Lan");
const questions3 = new questions("Thành phần chính trong bầu khí quyển của Sao Hỏa là khí …..", new options("Oxi", "Cacbonic", "Hidro", "Nito"), "Cacbonic");
const questions4 = new questions("VINACOMIN là tập đoàn công nghiệp than và … Việt Nam.", new options("Thủy sản", "Hải sản", "Lâm sản", "Khoáng sản"), "Khoáng sản");
const questions5 = new questions("Liên hoan thơ châu Á – Thái Bình Dương lần đầu tiên sẽ được khai mạc tại thành phố nào?", new options("Hà Nội", "Bắc Ninh", "Hạ Long", "Hồ Chí Minh"), "Hạ Long");
const questions6 = new questions("Albicelestes là biệt danh của đội tuyển bóng đá quốc gia nào?", new options("Tây Ban Nha", "Bồ Đào Nha", "Séc", "Argentina"), "Argentina");
const questions7 = new questions("Bạch đầu quân là tên gọi của lực lượng dân quân nào trong kháng chiến chống Mỹ?", new options("Các cụ già", "Thanh niên", "Phụ nữ", "Nhi đồng"), "Các cụ già");
const questions8 = new questions("1+1 = ", new options("1", "2", "3", "4"), "2");
const questions9 = new questions("1+2 = ", new options("1", "2", "3", "4"), "3");
const questions10 = new questions("1 = ", new options("1", "2", "3", "4"), "1");
const questions11 = new questions("2 = ", new options("1", "2", "3", "4"), "2");
const questions12 = new questions("0.5 >", new options("3", "1", "2", "0"), "0");
const questions13 = new questions("50 : 10 = ", new options("5", "10", "15", "20"), "5");
const questions14 = new questions("3 : 2 = ", new options("1", "1.5", "2", "2.5"), "1.5");
const questions15 = new questions("2 * 3 = ", new options("2", "4", "6", "8"), "6");
const questions16 = new questions("Con chó trong tiếng Anh là gì?", new options("Dog", "Fish", "Bee", "Cat"), "Dog");
const questions17 = new questions("Ai có nhiều tiền nhất?", new options("Hiệp", "Hà", "Minh", "Mai"), "Hà");
const questions19 = new questions("Con gì trong những con sau đây khác với những con còn lại?", new options("Chó", "Mèo", "Lợn", "Gà"), "Gà");
const questions19 = new questions("Ai ngáo nhất team?", new options("Hà", "Minh", "Cường", "Mai"), "Hà");
const questions20 = new questions("Ai béo nhất nhà?", new options("Hà", "Minh", "Cường", "Mai"), "Hà");