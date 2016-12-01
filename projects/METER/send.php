<?php
function mail_attachment($filename, $path, $mailto, $from_mail, $from_name, $replyto, $subject, $message) {
    $file = $path.$filename;
    $file_size = filesize($file);

    $handle = fopen($file, "r,b");
    $content = fread($handle, $file_size);
    fclose($handle);


    $content = chunk_split(base64_encode($content));
    $uid = md5(uniqid(time()));
    $name = basename($file);


    $header = "From: ".$from_name." <".$from_mail.">\r\n";
    $header .= "Reply-To: ".$replyto."\r\n";
    $header .= "MIME-Version: 1.0\r\n";
    $header .= "Content-Type: multipart/mixed; boundary=\"".$uid."\"\r\n\r\n";
    $header .= "This is a multi-part message in MIME format.\r\n";
    $header .= "--".$uid."\r\n";
    $header .= "Content-type:text/plain; charset=iso-8859-1\r\n";
    $header .= "Content-Transfer-Encoding: 7bit\r\n\r\n";
    $header .= $message."\r\n\r\n";
    $header .= "--".$uid."\r\n";
    $header .= "Content-Type: application/pdf; name=\"".$filename."\"\r\n"; // use different content types here
    $header .= "Content-Transfer-Encoding: base64\r\n";
    $header .= "Content-Disposition: attachment; filename=\"".$filename."\"\r\n\r\n";
    $header .= $content."\r\n\r\n";
    $header .= "--".$uid."--";
    if (mail($mailto, $subject, "", $header)) {
        echo "mail send ... OK"; // or use booleans here
    } else {
        echo "mail send ... ERROR!";
    }
}
$client = $_POST['email'];
$admin = "info@laudarte.com";    //email for replay
$reportSubject     = "downloading the catalog";
$reportMessage = "\n\n"              // replay text 
    . " $client download our catalog";
$my_file = "Oceano_catalogo2016_low_new.pdf";
$my_path = $_SERVER['/files/']."/your_path_here/";
$my_name = "Oceano";
$my_mail = "info@laudarte.com";
$my_replyto = "my_reply_to@mail.net";
$my_subject = "NEW  catalog Oceano";
$my_message = "\n\n"
    . "Thank you for your request,\n
ATTACHED HERE\n
Oceano Oltreluce 2016/2017 Catalogue: a technical and essential collection, totally handmade.\n
Extremely modern furnishing products for privates and supplies.";

mail_attachment($my_file, $my_path, $client, $my_mail, $my_name, $my_replyto, $my_subject, $my_message);

mail($admin, $reportSubject, $reportMessage)

?>

