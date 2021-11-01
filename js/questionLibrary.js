// class options {
//     constructor(option1, option2, option3, option4) {
//         this.option1 = option1;
//         this.option2 = option2;
//         this.option3 = option3;
//         this.option4 = option4;
//     }
// }
// class questions {
//     constructor(question, options, answer) {
//         this.question = question;
//         this.options = options;
//         this.answer = answer;
//     }
// }
// const questions1 = new questions("Mạnh vì…, bạo vì tiền", new options("Sắn", "Khoai", "Ngô", "Gạo"), "Gạo");
// const questions2 = new questions("Đất nước nào là quê hương của ông già tuyết?", new options("Hà Lan", "Phần Lan", "Thái Lan", "Anh"), "Phần Lan");
// const questions3 = new questions("Thành phần chính trong bầu khí quyển của Sao Hỏa là khí …..", new options("Oxi", "Cacbonic", "Hidro", "Nito"), "Cacbonic");
// const questions4 = new questions("VINACOMIN là tập đoàn công nghiệp than và … Việt Nam.", new options("Thủy sản", "Hải sản", "Lâm sản", "Khoáng sản"), "Khoáng sản");
// const questions5 = new questions("Liên hoan thơ châu Á – Thái Bình Dương lần đầu tiên sẽ được khai mạc tại thành phố nào?", new options("Hà Nội", "Bắc Ninh", "Hạ Long", "Hồ Chí Minh"), "Hạ Long");
// const questions6 = new questions("Albicelestes là biệt danh của đội tuyển bóng đá quốc gia nào?", new options("Tây Ban Nha", "Bồ Đào Nha", "Séc", "Argentina"), "Argentina");
// const questions7 = new questions("Bạch đầu quân là tên gọi của lực lượng dân quân nào trong kháng chiến chống Mỹ?", new options("Các cụ già", "Thanh niên", "Phụ nữ", "Nhi đồng"), "Các cụ già");
// const questions8 = new questions("1+1 = ", new options("1", "2", "3", "4"), "2");
// const questions9 = new questions("1+2 = ", new options("1", "2", "3", "4"), "3");
// const questions10 = new questions("1 = ", new options("1", "2", "3", "4"), "1");
// const questions11 = new questions("2 = ", new options("1", "2", "3", "4"), "2");
// const questions12 = new questions("0.5 >", new options("3", "1", "2", "0"), "0");
// const questions13 = new questions("50 : 10 = ", new options("5", "10", "15", "20"), "5");
// const questions14 = new questions("3 : 2 = ", new options("1", "1.5", "2", "2.5"), "1.5");
// const questions15 = new questions("2 * 3 = ", new options("2", "4", "6", "8"), "6");
// const questions16 = new questions("Con chó trong tiếng Anh là gì?", new options("Dog", "Fish", "Bee", "Cat"), "Dog");
// const questions17 = new questions("Ai có nhiều tiền nhất?", new options("Hiệp", "Hà", "Minh", "Mai"), "Hà");
// const questions19 = new questions("Con gì trong những con sau đây khác với những con còn lại?", new options("Chó", "Mèo", "Lợn", "Gà"), "Gà");
// const questions19 = new questions("Ai ngáo nhất team?", new options("Hà", "Minh", "Cường", "Mai"), "Hà");
// const questions20 = new questions("Ai béo nhất nhà?", new options("Hà", "Minh", "Cường", "Mai"), "Hà");


var questionAllList = [{
        "questions": [{
                "question": "Cha thương con vì con giống mẹ, mẹ thương con vì con giông ai ?",
                "content": [
                    "Ba",
                    "Bác hàng xóm",
                    "Thợ sửa ông nước",
                    "Thợ điện"
                ],
                "correct": 0
            },
            {
                "question": "Chất khí không hoặc rất ít tác dụng với khí khác gọi là gì?",
                "content": [
                    "Khí trơ",
                    "Khí nén",
                    "Khí hiếm",
                    "Khí thơm"
                ],
                "correct": 0
            }, {
                "question": "Quốc khánh nước Cộng hoà xã hội chủ nghĩa Việt Nam?",
                "content": [
                    "30.04",
                    "02.09",
                    "14.02",
                    "09.02"
                ],
                "correct": 1
            }, {
                "question": "Kết nối sức mạnh là khẩu hiệu của mạng di động nào nước ta?",
                "content": [
                    "Viettel",
                    "Vinaphone",
                    "EVN",
                    "Sfone"
                ],
                "correct": 2
            }, {
                "question": "Trong các nhân vật sau đây, nhân vật nào thuộc bộ truyện tranh Đôrêmon?",
                "content": [
                    "Cađic",
                    "Sôngôku",
                    "Chaien",
                    "Bumma"
                ],
                "correct": 2
            }, {
                "question": "Thứ tự nào sau đây đúng với một câu thành ngữ?",
                "content": [
                    "Tre mọc măng già",
                    "Tre già măng mọc",
                    "Măng mọc tre già",
                    "Măng già tre học"
                ],
                "correct": 1
            }, {
                "question": "Đâu là tên một lọai bóng",
                "content": [
                    "Giường",
                    "Tủ",
                    "Bàn",
                    "Ghế"
                ],
                "correct": 2
            }
        ]
    },
    {
        "questions": [{
                "question": "Bức tranh 'Thiếu nữ bên hoa huệ' của tác giả nào?",
                "content": [
                    "Trần Văn Cẩn",
                    "Tô Ngọc Vân",
                    "Bùi Xuân Phái",
                    "Nguyễn Sáng"
                ],
                "correct": 1
            },
            {
                "question": "Đơn vị đo cường độ dòng điện là gì?",
                "content": [
                    "Ampe",
                    "Vôn",
                    "Ôm",
                    "Mét"
                ],
                "correct": 0
            }, {
                "question": "Theo cấu trúc phân tầng thì rừng tự nhiên được chia làm mấy tầng?",
                "content": [
                    "2",
                    "3",
                    "4",
                    "5"
                ],
                "correct": 1
            }, {
                "question": "Windows Media Player là gì?",
                "content": [
                    "Phần mềm chỉnh nhạc",
                    "Phần mềm ghép nhạc",
                    "Phần mềm nghe nhạc",
                    "Phần mềm tách nhạc"
                ],
                "correct": 2
            }, {
                "question": "Quốc kì của cộng hòa liên bang Đức có bao nhiêu màu?",
                "content": [
                    "2",
                    "3",
                    "4",
                    "5"
                ],
                "correct": 1
            }, {
                "question": "Lông gấu trắng Bắc cực có màu gì",
                "content": [
                    "Trắng",
                    "Vàng nhạt",
                    "Đen",
                    "Trong suốt"
                ],
                "correct": 3
            }, {
                "question": "Cầu thang lên chùa Một cột hiện nay làm bằng gì?",
                "content": [
                    "Gỗ",
                    "Tre",
                    "Gạch, vữa",
                    "Bê Tông"
                ],
                "correct": 2
            }
        ]
    },
    {
        "questions": [{
                "question": "Thành phần chính của Cát là gì?",
                "content": [
                    "Si",
                    "Au",
                    "Al",
                    "Cu"
                ],
                "correct": 0
            },
            {
                "question": "Bạn cho biết vua Lê nào được lịch sử tôn làm anh hùng?",
                "content": [
                    "Lê Hiền Tông",
                    "Lê Chiêu Tông",
                    "Lê Thái Tổ",
                    "Lê Thánh Tông"
                ],
                "correct": 2
            }, {
                "question": "Hoàng cung Diocletian, 1 kỳ quan thế giới nằm ở quốc gia nào?",
                "content": [
                    "Nam Phi",
                    "Nam Tư",
                    "Ấn Độ",
                    "Pakistan"
                ],
                "correct": 1
            }, {
                "question": "Quốc tế thứ II còn có tên gọi khác là gì?",
                "content": [
                    "Quốc tế Cộng Sản",
                    "Quốc tế XHCN",
                    "Đồng Minh những người Cộng Sản",
                    "Hội Liên Hiệp Quốc tế những người Lao động"
                ],
                "correct": 1
            }, {
                "question": "Năm 1924 khi rời Liên Xô sang Quảng Châu Trung Quốc, Nguyễn Ái Quốc lấy tên gì?",
                "content": [
                    "Tống Văn Sơ",
                    "Lý Thuỵ",
                    "Nguyễn Tất Thành",
                    "Hồ Chí Minh"
                ],
                "correct": 1
            }
        ]
    },
    {
        "questions": [{
                "question": "Nền văn minh nào là phát triển nhất trong lich sử đất nước Mexico?",
                "content": [
                    "Maya",
                    "Aztec",
                    "Inca",
                    "Olmec"
                ],
                "correct": 1
            },
            {
                "question": "Ngành được xem là thước đo trình độ phát triển kinh tế  kỹ thuật của mọi quốc gia trên thế giới là ngành công nghiệp nào trong các ngành sau?",
                "content": [
                    "Năng lượng",
                    "Luyện kim",
                    "Cơ khí",
                    "Điện tử  Tin học"
                ],
                "correct": 3
            }, {
                "question": "Đất nước nào được mệnh danh là 'Đất nước Triệu Voi'?",
                "content": [
                    "Lào",
                    "Thái Lan",
                    "Campuchia",
                    "Malaysia"
                ],
                "correct": 0
            }, {
                "question": "Lương Thế Vinh thường được nhân gian gọi là trạng gì?",
                "content": [
                    "Trạng Quỳnh",
                    "Trạng Trình",
                    "Trạng Lường",
                    "Trạng Lợn"
                ],
                "correct": 2
            }, {
                "question": "Trong thần thoại Hy Lạp, người anh hùng nào đã lấy cắp lửa của thân linh cho loài người?",
                "content": [
                    "Akhil",
                    "Hecculơ",
                    "Thêxê",
                    "Prômêtê"
                ],
                "correct": 3
            }
        ]
    },
    {
        "questions": [{
                "question": "Nhạc sĩ nào có tác phẩm được dịch ra tiếng nước ngoài nhiều nhất?",
                "content": [
                    "Trần Tiến",
                    "Trần Hiếu",
                    "Trịnh Công Sơn",
                    "Duy Mạnh"
                ],
                "correct": 3
            },
            {
                "question": "Quốc gia nào ở Châu Phi có tỉ lệ người da trắng xấp xỉ tỉ lệ người da đen?",
                "content": [
                    "Ai Cập",
                    "Ma Rốc",
                    "Nam Phi",
                    "Madagascar"
                ],
                "correct": 3
            }, {
                "question": "Phần 1 và 2 của bộ phim Harry Potter do ai đạo diễn?",
                "content": [
                    "Christina Anguilera",
                    "James Cameron",
                    "Scorpions",
                    "Madagascar"
                ],
                "correct": 2
            }
        ]
    },
];