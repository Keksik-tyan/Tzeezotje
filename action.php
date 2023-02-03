<?php
  $countPerson = trim(strip_tags($_POST["countPerson"]));
  $name = trim(strip_tags($_POST["name"]));
  $numberContact = trim(strip_tags($_POST["numberContact"]));
  $msg = "Ваши данные :\n" ."Имя: $name\n" ."Количество персон : $countPerson\n" ."Контакт: $numberContact\n";
  if(!empty($name) && !empty($countPerson) && !empty($numberContact)){
    echo $msg;
    echo "Спасибо! Вы успешно зареpезервировали столик.";
    }
?>