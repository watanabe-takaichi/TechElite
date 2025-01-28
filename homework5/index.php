<?php include("./header.php");  ?>
<div class="main_content">

  <!-- スライドショー -->
  <div class="swiper" id="swiper">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
      <!-- Slides -->
      <div class="swiper-slide"><img src="./img/slide_1.jpg" alt=""></div>
      <div class="swiper-slide"><img src="./img/slide_2.jpg" alt=""></div>
      <div class="swiper-slide"><img src="./img/slide_3.jpg" alt=""></div>
    </div>
    <!-- If we need pagination -->
    <div class="swiper-pagination"></div>

    <!-- If we need navigation buttons -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>

    <!-- If we need scrollbar -->
    <!-- <div class="swiper-scrollbar"></div> -->
  </div>

  <!-- キャッチコピーとスケジュール -->
  <div class="about_content section" id="about">
    <p class="about_text">今年も始まる<span>夏祭り</span></p>
  </div>

  <div class="schedule_content section" id="schedule_content">
    <p class="title">スケジュール</p>
    <div class="schedule_flex">
      <div class="schedule active" id="schedule1">
        <p>9月1日</p>
      </div>
      <div class="schedule" id="schedule2">
        <p>9月2日</p>
      </div>
      <div class="schedule" id="schedule3">
        <p>9月3日</p>
      </div>
    </div>

    <div class="description">
      <p class="description_text active" id="schedule1_text">
        9月1日の内容9月1日の内容9月1日の内容9月1日の内容9月1日の内容9月1日の内容9月1日の内容9月1日の内容9月1日の内容9月1日の内容9月1日の内容9月1日の内容9月1日の内容</p>
      <p class="description_text" id="schedule2_text">
        9月2日の内容9月2日の内容9月2日の内容9月2日の内容9月2日の内容9月2日の内容9月2日の内容9月2日の内容9月2日の内容9月2日の内容9月2日の内容9月2日の内容9月2日の内容</p>
      <p class="description_text" id="schedule3_text">
        9月3日の内容9月3日の内容9月3日の内容9月3日の内容9月3日の内容9月3日の内容9月3日の内容9月3日の内容9月3日の内容9月3日の内容9月3日の内容9月3日の内容9月3日の内容</p>
    </div>

  </div>

  <!-- キャッチコピーとスケジュール -->
  <div class="access_content section" id="access_content">
    <p class="title ">アクセス</p>
    <p class="address">〒771-1154 徳島県徳島市応神町東貞方南川淵</p>
    <div class="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6607.067008310554!2d134.51811817544117!3d34.107089176392634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3553725a43298fb3%3A0x1bc47188f8f9226a!2z44CSNzcxLTExNTQg5b6z5bO255yM5b6z5bO25biC5b-c56We55S65p2x6LKe5pa55Y2X5bed5re1!5e0!3m2!1sja!2sjp!4v1737939649851!5m2!1sja!2sjp"
        width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </div>

  <!-- 席予約 -->
  <div class="reserve_content section" id="reserve_content">
    <p class="title">席予約</p>
    <form method="post" action="./confirm.php" id="myForm">
      <div class="form_contents">
          <label for="name">名前<span>※必須</span></label>
          <input type="text" name="name" id="name" placeholder="田中太郎" required value="<?php if (isset($_POST["name"])) {echo $_POST["name"];} ?>">
      </div>
      <div class="form_contents">
        <label for="seat">席の場所<span>※必須</span></label>
        <select name="seat" id="seat" required>
          <option value="">ーーー</option>
          <option <?= isset($_POST['seat']) == "SS席" ? "selected" : "" ?> value="SS席">SS席</option>
          <option value="S席" <?= isset($_POST['seat']) == "S席" ? "selected" : "" ?>>S席</option>
          <option value="A席" <?= isset($_POST['seat']) == "A席" ? "selected" : "" ?>>A席</option>
          <option value="B席" <?= isset($_POST['seat']) == "B席" ? "selected" : "" ?>>B席</option>
          <option value="C席" <?= isset($_POST['seat']) == "C席" ? "selected" : "" ?>>C席</option>
        </select>
      </div>
      <div class="form_contents">
        <label for="email">メールアドレス<span>※必須</span></label>
        <input type="email" id="email" name="email" pattern=".+@example\.com" placeholder="abcd123@example.com" required value="<?php if (isset($_POST["email"])) {echo $_POST["email"];} ?>">
      </div>
      <div class="form_contents tel">
        <label for="tel">電話番号<span>※任意</span></label>
        <input type="tel" name="tel" id="tel" pattern="[0-9]{3}[0-9]{4}[0-9]{4}" placeholder="09012345678" value="<?php if (isset($_POST["tel"])) {echo $_POST["tel"];} ?>">
      </div>
      <button type="submit" id="submitBtn" name="submit" class="firstSubmit" disabled>送信</button>
    </form>
  </div>
</div>
<?php include("./footer.php");  ?>