<?php
    $name = $_POST['name'];
	$phone = $_POST['phone'];
    $email = $_POST['email'];
    $text = $_POST['text'];
	$myinput = $_POST['myinput'];

	$to = "tonna39.ru@gmail.com"; 
	$date = date ("d.m.Y"); 
	$time = date ("h:i");
	$from = $email;
	$subject = "Заявка c сайта";

	$msg="
    Имя: $name /n
    Телефон: $phone /n
    Почта: $email /n
	Услуга: $myinput /n
    Сообщение: $text"; 	
	mail($to, $subject, $msg, "From: $to ");

?>