var change=document.getElementById('nav')
function scroll(){
    if (window.scrollY>500){
        change.classList.add("nav-colored");
        change.classList.remove("nav-transparent");
    }else{
        change.classList.add("nav-transparent");
        change.classList.remove("nav-colored");
    }
}
        // Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
function showInfo(type) {
    modal.style.display = "block";
    if (type==1){
        document.getElementById('p_img').src='img/minh.jpg'
        document.getElementById('p_txt1').textContent='1.Nguyễn Công Minh'
        document.getElementById('p_txt2').textContent='Là Học sinh lớp 8 trường Ngô Sĩ Liên'
        document.getElementById('p_txt3').textContent='Sở thích:Chơi game, Nghe nhạc.'
        document.getElementById('p_txt4').textContent='Đảm nhận công việc:Lập trình trang chủ cho web'
    }else if(type==2){
        document.getElementById('p_img').src='img/uyen.jpg'
        document.getElementById('p_txt1').textContent='2.Nguyễn Phương Uyên'
        document.getElementById('p_txt2').textContent='Là học sinh lớp 12 trường THPT Việt Đức'
        document.getElementById('p_txt3').textContent='Sở thích:Đọc truyện, nghe nhạc, xem phim'
        document.getElementById('p_txt4').textContent='Đảm nhận công việc:Nghĩ ra tên web, lên ý tưởng, thuyết trình,viết bài marketing'
    }else if(type==3){
        document.getElementById('p_img').src='img/chi.jpg'
        document.getElementById('p_txt1').textContent='3.Ngô Mai Chi'
        document.getElementById('p_txt2').textContent='Là học sinh lớp 11 trường Nguyễn Tất Thành'
        document.getElementById('p_txt3').textContent='Sở thích:Nghe nhạc, makeup, design,..'
        document.getElementById('p_txt4').textContent='Đảm nhận công việc:Lên ý tưởng cho website, quán xuyến các thành viên trong nhóm. thiết kế logo và UI, lấy database cho quiz'

    }
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
function rnd(){
    a="./muitiple_quiz.html?id=" + String(Math.ceil(Math.random() * 8))
    window.open(a)
}