<?
$nome = $_POST{'nome'};
$email = $_POST{'email'};
$mensagem = $_POST['mensagem'];

$email_message = "

Nome: ".$nome."
Email: ".$email."
Mensagem: ".$mensagem."
";

mail ("marcioguinati@outlook.com" , "Mensagem Site", $email_message);
header("location: ../emailEnviado.html");
?>
