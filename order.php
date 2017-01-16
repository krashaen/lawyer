<?php
  require 'PHPMailer/PHPMailerAutoload.php';

  $type = $_POST['type'];
  $error = false;

  $mail = new PHPMailer;
  $mail->isSMTP();
  $mail->Host = 'mail.vh168143.eurodir.ru';
  $mail->SMTPSecure = 'tls';
  $mail->Port = 25;
  $mail->SMTPAuth = true;
  $mail->Username = 'main@vh168143.eurodir.ru';
  $mail->Password = 'nikita9402';

  $mail->CharSet = 'UTF-8';
  $mail->setLanguage('ru');
  $mail->setFrom('lawletsgo@site.com', 'Lawletsgo site');
  $mail->addAddress('go_tsk@mail.ru', 'Lawyer');
  // $mail->addAddress('razmakhnin9402@gmail.com', 'Lawyer');
  $mail->addReplyTo('razmakhnin9402@gmail.com', 'Information');
  $mail->isHTML(true);

  /* 
    Some errors with smtp servers on eurobyte hosting (found at MailerIssues),
    possibly problems with smtp ssl on same hosting, with script hosting
    http://stackoverflow.com/questions/35604159/phpmailer-not-sending-mails-tls-error
  */
  $mail->SMTPOptions = array(
    'ssl' => array(
      'verify_peer' => false,
      'verify_peer_name' => false,
      'allow_self_signed' => true
    )
  );


  // construct letters in dependency of type
  switch ($type) {
    case 'connect':
      $mail->Subject = 'Заявка для связи';
      $mail->Body    = sprintf(
        '<p>На сайте компании оставлена заявка для связи:<br /><b>Имя:</b> %s;<br /><b>Телефон:</b> %s;<br /><b>Email:</b> %s<br /></p>',
        $_POST['name'], $_POST['phone'], $_POST['email']
      );
      break;
    case 'question':
      $mail->Subject = 'Запрос на разовую юридическую консультацию (300 руб.)';
      $mail->Body    = sprintf(
        '<p>На сайте компании оставлена заявка для на получение разовой консультации.</p>' .
        '<p>Информация о клиенте: <br /><b>Имя:</b> %s;<br /><b>Телефон:</b> %s;<br /></p>' .
        '<p><b>Вопрос:</b><br />%s;</p>',
        $_POST['name'], $_POST['phone'], $_POST['question']
      );
      break;
    case 'subscribe':
      $mail->Subject = 'Запрос на получение длительной подписки';
      $mail->Body    = sprintf(
        '<p>На сайте компании оставлена заявка для на получение подписки.</p>' .
        '<p>Информация о клиенте: <br /><b>Имя:</b> %s;<br /><b>Телефон:</b> %s;<br /><b>Email:</b> %s<br /></p>' .
        '<p>Информация о подписке: <br /><b>Длительность: </b>%s м.;<br /><b>Стоимость: </b>%s руб.;</p>',
        $_POST['name'], $_POST['phone'], $_POST['email'], $_POST['time'], $_POST['cost']
      );
      break;
    default:
      $error = true;
      print('Error: invalid params');
      break;
  }

  if (!$error) {
    $mail->send();
  }
?>
