const removeAllH1Classes = () => {
  var h1s = document.getElementsByClassName('happyBirthday');

  Array.from(h1s).forEach(function(h1){
    $(h1).removeClass('active');
  });
}

const startAnimationInterval = () => {
  let i = 0;
  const h1s = document.getElementsByClassName('happyBirthday');
  $(h1s[i]).addClass('active');

  setInterval(() => {
    console.log('TIC');
    removeAllH1Classes();
    i++;
    if (i < h1s.length) {
      $(h1s[i]).addClass('active');
    } else {
      i = 0;
      $(h1s[i]).addClass('active');
    }
  }, 1500);
}

$(document).ready(() => {
  removeAllH1Classes();
  startAnimationInterval();

  $('#mail-button').on('click', () => {
    window.open('https://mail.google.com/', '_blank');
  });
});
