$(function() {
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
  const scrollButton2 = ScrollButton("#access", ".access");
  const scrollButton3 = ScrollButton("#reserve", ".service");

});