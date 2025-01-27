<?php include("./header.php");  ?>
<div class="confirm_content">
  <p class="title">お問い合わせ内容確認</p>

  <div class="confirm ">
    <p class="item_name">お名前</p>
    <p class="item_data"><?php echo $_POST["name"] ?></p>
  </div>

  <div class="confirm">
    <p class="item_name">希望席</p>
    <p class="item_data"><?php echo $_POST["seat"] ?></p>
  </div>

  <div class="confirm">
    <p class="item_name">メールアドレス</p>
    <p class="item_data"><?php echo $_POST["email"] ?></p>
  </div>

  <div class="confirm">
    <p class="item_name">電話番号</p>
    <p class="item_data"><?php echo $_POST["tel"] ?></p>
  </div>

  <form action="" class="form" method="post">
    <input type="hidden" name="name" value="<?php echo $_POST["name"]; ?>">
    <input type="hidden" name="seat" value="<?php echo $_POST["seat"]; ?>">
    <input type="hidden" name="email" value="<?php echo $_POST["email"]; ?>">
    <input type="hidden" name="tel" value="<?php echo $_POST["tel"]; ?>">
    <input type="submit" class="form_button return" value="戻る" formaction='./index.php#reserve_content'>
    <input type="submit" class="form_button nextSubmit" value="送信" formaction='./thanks.php'>
  </form>

</div>
<?php include("./footer.php"); ?>