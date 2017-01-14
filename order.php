<?php
  require 'PHPMailer/PHPMailerAutoload.php';

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
  $mail->addReplyTo('razmakhnin9402@gmail.com', 'Information');
  $mail->isHTML(true);

  // some errors with smtp servers on eurobyte hosting (found at MailerIssues)
  // http://stackoverflow.com/questions/35604159/phpmailer-not-sending-mails-tls-error
  $mail->SMTPOptions = array(
    'ssl' => array(
      'verify_peer' => false,
      'verify_peer_name' => false,
      'allow_self_signed' => true
    )
); 

  $mail->Subject = 'Заявка для связи с сайта компании';
  $mail->Body    = sprintf(
    '<p>На сайте компании оставлена заявка для связи:<br /><b>Имя:</b> %s;<br /><b>Телефон:</b> %s;<br /><b>Email:</b> %s<br /></p>',
    $_POST['name'], $_POST['phone'], $_POST['email']
  );

  $mail->send()
?>
