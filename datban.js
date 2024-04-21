const header = document.querySelector('.menu');
const headerHeight = header.offsetHeight;

const scrollHandler = () => {
  if (window.scrollY >= headerHeight) {
    header.classList.add('is-fixed');
    header.classList.add('has-background');
  } else {
    header.classList.remove('is-fixed');
    header.classList.remove('has-background');
  }
};

window.addEventListener('scroll', scrollHandler);
window.addEventListener('resize', () => {
  headerHeight = header.offsetHeight;
});
document.getElementById('submitButton').addEventListener('click', function(event) {
  event.preventDefault();

  var name = document.getElementById('name');
  var email = document.getElementById('email');
  var phone = document.getElementById('phone');
  var date = document.getElementById('date');
  var time = document.getElementById('time');
  var guests = document.getElementById('guests');

  // Validation logic here
  if (name.value.trim() === '') {
    alert('Vui lòng điền tên.');
    name.focus();
    return;
  }

  // Validate email
  if (email.value.trim() === '') {
    alert('Vui lòng điền email.');
    email.focus();
    return;
  }

  // Validate phone
  if (phone.value.trim() === '') {
    alert('Vui lòng điền số điện thoại.');
    phone.focus();
    return;
  }

  // Validate date
  if (date.value.trim() === '') {
    alert('Vui lòng chọn ngày.');
    date.focus();
    return;
  }

  // Validate time
  if (time.value.trim() === '') {
    alert('Vui lòng chọn thời gian.');
    time.focus();
    return;
  }

  // Validate guests
  if (guests.value.trim() === '') {
    alert('Vui lòng chọn số lượng khách.');
    guests.focus();
    return;
  }

  // Display success message
  var message = document.getElementById('message');
  message.innerHTML = '<p>Cảm ơn bạn. Bạn đã đặt bàn thành công!</p>';
  message.style.color = 'green';

  // Redirect to confirmation page
  window.location.href = 'camon.html';
});