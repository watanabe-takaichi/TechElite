$(function() {
  $(".schedule").click(function() {
    let id = $(this).attr("id");
    $(".schedule").removeClass("active");
    $(this).addClass("active");
    $(".description_text").removeClass("active");
    $("#"+id+"_text").addClass("active");

  });

  $('#hamburger').on('click',function(){
    $('.hamburger_menu').slideToggle();
    $('#hamburger_menu').toggleClass("open");
    $('#hamburger').toggleClass("open");
  });

  $('.ac').on('click',function(){
    $('.hamburger_menu').slideToggle();
    $('#hamburger_menu').toggleClass("open");
    $('#hamburger').toggleClass("open");
  });


  function ScrollButton(button, place){
    //１．スクロールさせたい要素の上端位置を取得し、変数に投入する
    let position = $(place).offset().top;

    //２．指定のボタンを押下したら、スクロールする
    $(button).click(function(){
      $("html,body").animate({
        scrollTop : position 
      }, {queue : false});
    });
  }

  const scrollButton1 = ScrollButton("#schedule", ".schedule_content");
  const scrollButton2 = ScrollButton("#access", ".access_content");
  const scrollButton3 = ScrollButton("#reserve", ".reserve_content");
  const scrollButton4 = ScrollButton("#schedule-ac", ".schedule_content");
  const scrollButton5 = ScrollButton("#access-ac", ".access_content");
  const scrollButton6 = ScrollButton("#reserve-ac", ".reserve_content");

}); 

const swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView:1.2,
  spaceBetween: 20,
  centeredSlides: true,
  direction: 'horizontal',
  speed: 1000,
  //↓ effectを加えると動きがおしゃれになる
  // effect: 'coverflow',

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    hide: true,
  },
});

//HTMLの要素を読み込んだ瞬間に関数を発動させる。
document.addEventListener("DOMContentLoaded", function() {
  validateForm();
});

//バリエーション
// 要素の取得
const form = document.getElementById('myForm');
const nameInput = document.getElementById('name');
const seatInput = document.getElementById('seat');
const emailInput = document.getElementById('email');
const telInput = document.getElementById('tel');
const submitBtn = document.getElementById('submitBtn');

// 入力が有効か確認する関数
function validateForm() {
  const isNameValid = nameInput.value.trim() !== ''; // 名前が入力されているか
  const isSeatValid = seatInput.value !== ''; // 希望の席が選択されているか
  const isEmailValid = emailInput.validity.valid;    // メールアドレスが正しい形式か
  const phonePattern = /^0\d{9,10}$/;  // 電話番号が数字のみか
  const isTelValid = telInput.value === '' || phonePattern.test(telInput.value);

  // 名前とメールが有効であり、電話番号の形式が正しい場合のみ送信ボタンを有効化
  submitBtn.disabled = !(isNameValid && isSeatValid && isEmailValid && isTelValid);
}

// 入力イベントリスナーを各入力フィールドに追加
[nameInput, emailInput, telInput].forEach((input) => {
  input.addEventListener('input', validateForm);
});

// select要素は `change` イベントも監視
selectInput.addEventListener('change', validateForm);

validateForm();