<HTML lang="fr" xml:lang="fr" >
<?php 
$Langue=""; 
include ('php/param_site.php');
$txt_niveau1='Publications';
$Titre_Page=$Nom." ".$Prenom." : ".$txt_niveau1 ;
$niveau=1;
?>
<HEAD>  <?php  include $Base_Ref_URL.'php/en-tete_2012.php';  ?> </HEAD> 

<BODY  align=middle>
<?php  include $Base_Ref_URL.'php/preambule.php';  ?>

<! ========== Debut d'insertion ==================>

<font size=-3>

<iframe src="http://hal.archives-ouvertes.fr/Public/afficheRequetePubli.php?auteur_exp=marwa,chafii&labos_exp=ietr&CB_auteur=oui&CB_titre=oui&CB_article=oui&langue=Francais&tri_exp=annee_publi&tri_exp2=typdoc&tri_exp3=date_publi&ordre_aff=TA&Fen=Aff&css=http://www.rennes.supelec.fr/ren/rd/scee/css/Visu-Publis_hal.css" width="700" height="600" frameborder="0"></iframe>

</font>




<! ========== Fin d'insertion ==================>
<?php  include $Base_Ref_URL.'php/postambule.php';  ?>
<?php echo "<b><Font size='-2' color='green'>Mise à jour</font>	: le " . date ("d/m/Y H:i", filemtime(__FILE__))."</b>"; ?>
</BODY>
</HTML>


