
// Code index cho nihao
const header = document.querySelector('.menu');
const headerHeight = header.offsetHeight;

const scrollHandler = () => {
  if (window.scrollY >= headerHeight) {
    header.classList.add('is-sticky');

  } else {
    header.classList.remove('is-sticky');
  }
};

window.addEventListener('scroll', scrollHandler);
window.addEventListener('resize', () => {
  headerHeight = header.offsetHeight;
});
  // scroll thì đổi màu
    window.onscroll = function() {
        var header = document.getElementById("menu1");
        if (window.pageYOffset > 0) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }};

        $(document).ready(function() {
          $(window).scroll(function() {
              if($(this).scrollTop() > 100) {
                  $('.menu1').css('background-color', 'white');
                  $('.menu a').css('color', 'red');
              } else {
                  $('.menu1').css('background-color', '');//có thể thêm tranferrency
                  $('.menu a').css('color', 'white');
              }
          });
      });


      $(document).ready(function() {
        $(".logo img").attr("src", "images/logo1-removebg-preview.png");
      
        var headerHeight = $("#menu1").outerHeight();
      
        function isScrolled() {
          if ($(window).scrollTop() > headerHeight) {
            $("#menu1").addClass("scrolled");
          } else {
            $("#menu1").removeClass("scrolled");
          }
        }
        isScrolled();
        $(window).scroll(function() {
          isScrolled();
        });
      });

      document.addEventListener('DOMContentLoaded', function () {
        const orderButtons = document.querySelectorAll('.order-btn');
        
        orderButtons.forEach(button => {
            button.addEventListener('click', function () {
                const itemName = this.parentNode.querySelector('h3').innerText;
                const itemPrice = this.parentNode.querySelector('p').innerText;
                alert(`Bạn đã đặt món: ${itemName} - ${itemPrice}`);
            });
        });
    });


    // danh gia khach hang
    // JavaScript to calculate the overall rating based on individual ratings
// Không có JavaScript trong ảnh được cung cấp.

// Ví dụ về cách thêm hiệu ứng trượt cho phần tử "testimonials-container"

$(document).ready(function() {
  var testimonials = $('.testimonial');
  var currentIndex = 0;
  
  // Hiển thị testimonial đầu tiên
  testimonials.eq(currentIndex).addClass('active');
  
  // Tự động chuyển đổi giữa các testimonial
  setInterval(function() {
    // Loại bỏ class active từ testimonial hiện tại
    testimonials.eq(currentIndex).removeClass('active');
    
    // Di chuyển tới testimonial tiếp theo
    currentIndex = (currentIndex + 1) % testimonials.length;
    
    // Thêm class active cho testimonial tiếp theo
    testimonials.eq(currentIndex).addClass('active');
  }, 3000); // Thời gian chuyển đổi: 3 giây
});


// slider nhee mn
let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function(){
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}
let refreshInterval = setInterval(()=> {next.click()}, 3000);
function reloadSlider(){
    slider.style.left = -items[active].offsetLeft + 'px';
    // 
    let last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 3000);

    
}

dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         active = key;
         reloadSlider();
    })
})
window.onresize = function(event) {
    reloadSlider();
};

