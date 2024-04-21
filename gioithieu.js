import $ from 'jquery';
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

      $(document).ready(function() {
        // Thêm sự kiện click vào từng ảnh
        $('.image-box img').click(function() {
          // Lấy phần tử cha của ảnh (class "image-box")
          var parent = $(this).parent();
      
          // Kiểm tra xem phần tử cha có class "active" hay không
          if (parent.hasClass('active')) {
            // Nếu có, thì xóa class "active"
            parent.removeClass('active');
          } else {
            // Nếu không, thì thêm class "active"
            parent.addClass('active');
          }
        });
      });