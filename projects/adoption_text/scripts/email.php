<?php


//$to  = $_POST["email"] ;
//$filepath = "http:test-wp/files/Oceano_catalogo2016_low_new.pdf";
//require_once '../swiftmailer-master/lib/swift_required.php';

require_once '../swiftmailer-master/lib/swift_required.php';

// Create the Transport
$transport = (new Swift_SmtpTransport('smtp.yandex.ru', 25))
    ->setUsername('zagatskiy@yandex.ru')
    ->setPassword('A0955673318+a')
;

/*
You could alternatively use a different transport such as Sendmail or Mail:

// Sendmail
$transport = new Swift_SendmailTransport('/usr/sbin/sendmail -bs');

// Mail
$transport = new Swift_MailTransport();
*/

// Create the Mailer using your created Transport
$mailer = new Swift_Mailer($transport);

// Create a message
$message = new Swift_Message('Wonderful Subject')

    ->setFrom(array('john@doe.com' => 'John Doe'))
    ->setTo(array('receiver@domain.org', 'other@domain.org' => 'A name'))
    ->setBody('Here is the message itself')
;

// Send the message
$result = $mailer->send($message);
?>