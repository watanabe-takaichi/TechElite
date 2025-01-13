$(function(){
  $('#hamburger').on('click',function(){
    $('#hamburger').toggleClass("open");
    $('.hamburger_menu').slideToggle();
  });

  //都道府県と市町村のデータ
  const data = {
  "北海道":[
    "札幌市",
    "函館市",
    "小樽市",
    "旭川市",
    "室蘭市",
    "釧路市",
    "帯広市",
    "北見市",
    "夕張市",
    "岩見沢市",
    "網走市",
    "留萌市",
    "苫小牧市",
    "稚内市",
    "美唄市",
    "芦別市",
    "江別市",
    "赤平市",
    "紋別市",
    "士別市",
    "名寄市",
    "三笠市",
    "根室市",
    "千歳市",
    "滝川市",
    "砂川市",
    "歌志内市",
    "深川市",
    "富良野市",
    "登別市",
    "恵庭市",
    "伊達市",
    "北広島市",
    "石狩市",
    "北斗市"
  ],
  "青森県" :[
    "青森市",
    "弘前市",
    "八戸市",
    "黒石市",
    "五所川原市",
    "十和田市",
    "三沢市",
    "むつ市",
    "つがる市",
    "平川市"
  ],
  "岩手県" :[
    "盛岡市",
    "宮古市",
    "大船渡市",
    "花巻市",
    "北上市",
    "久慈市",
    "遠野市",
    "一関市",
    "陸前高田市",
    "釜石市",
    "二戸市",
    "八幡平市",
    "奥州市",
    "滝沢市"
  ]

}

//都道府県が変更されたときの処理
  $("#ken").change(function(){
    const ken = $(this).val();
    const citySelect = $('#city');

    //市区町村セレクトボックスをリセットする
    citySelect.empty();

    // 選択された都道府県に対応する市町村を追加
    if(ken) {
      data[ken].forEach(function(city) {
        citySelect.append(`<option value="${city}">${city}</option>`);
      });
    } else {
      //都道府県が未選択の場合
      citySelect.append('<option value="">先に都道府県を選択してください</option>');
    }    
  });

  //ヘッダーの「サービス」を押下すると「サービス」のコンテンツまでスクロールさせる関数
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

  //「WEB制作」「SEOコンサル」「スマホアプリ開発」をそれぞれクリックすると、下のコンテンツの内容を変える関数
  function ClickButton(position1,position2){
    $(position1).on("click", function(){
      //１．ボタンがクリックされたときに前のactiveを削除して、クリックされたボタンに新しくactiveクラスを付与する
      $(".active").removeClass("active");
      $(this).addClass("active");

      //２．ボタンがクリックされたときに前のshow（テキストの内容を表示させるdivのクラス名）を削除して、クリックされたボタンに対応するdiv要素に新しくshowクラスを付与する
      $(".show").removeClass("show");
      $(position2).addClass("show");
    });
  }

  //上記の各関数を実行する
  const scrollButton = ScrollButton("#header-service", ".service");
  const button1 = ClickButton("#contents1", "#text1");
  const button2 = ClickButton("#contents2", "#text2");
  const button3 = ClickButton("#contents3", "#text3");

});