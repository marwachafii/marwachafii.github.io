<?php
if (!isset($Langue)) $Langue="";   // Initialisation de la langue, si non définie
$Nom="CHAFII";
$Prenom="Marwa";
$Sigle="chafii_mar";
$Base_URL=$_SERVER['DOCUMENT_ROOT'].'/ren/perso/'.$Sigle.'/';
$Base_Ref_URL=$_SERVER['DOCUMENT_ROOT'].'/ren/perso/jweiss/';
echo '<base href="http://'.$_SERVER['SERVER_NAME'].'/ren/perso/'.$Sigle.'/">';



if ($Langue=="en")
{
$Titre="Ph.D Student (SCEE Team)";

$Slogan="A \"Grande &Eacute;cole\" of engineering in the forefront <br> of Energy and Information Science";
$Accueil="Home";
$Site="Rennes Campus";
$Activite="Staff";
$Type="Home Page";
}
else
{
$Titre="Doctorant (Equipe SCEE)";

$Slogan="Une Grande &Eacute;cole d'ingénieurs au c&oelig;ur des sciences <br> 	de l'information,de l'énergie et des systèmes";
$Accueil="Accueil" ;
$Site="Campus de Rennes";
$Activite="Personnel";
$Type="Page Personnelle";
}
?>


