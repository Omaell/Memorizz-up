<?php

/**
 * Entêtes HTTP pour permettre de recharger à chaque fois les données
 */
header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
header("Cache-Control: post-check=0, pre-check=0", false);
header("Pragma: no-cache");
// Chaque communication entre le serveur et le client (le navigateur) comporte des entêtes. 
// avec header(), PHP nous permet de prendre le controle sur les entêtes envoyées par le serveur.

/**
 * Gestion de l'affichage des erreurs PHP
 */
error_reporting(E_ALL);
ini_set('display_errors', TRUE);
ini_set('display_startup_errors', TRUE);
// Ces options sont en général configurées dans le php.ini
// Mais pour les besoins du développement, on peut très bien les modifier à la volée
// grâce à ini_set()
// ==>> le bloc ci-dessus est spécifiquement celui qu'on aime avoir pendant la phase de développement pour obtenir l'affichage de toutes les erreurs

/**
 * Chargement des constantes de configuration
 */ 
require('conf.php');
/// Utiliser require() permet de générer une erreur si le fichier n'est pas accessible. 
/// Comme il s'agit des données nécessaires à la connexion de la BDD, 
/// on pourrait ici mettre un bloc TRY CATCH pour prévenir que le score ne pourra pas être enregistré 



/**
 * Chargement de l'autoloader
 */
require(__DIR__ . '/vendor/autoload.php');

/**
 * Partie qui permettra de répondre aux appels AJAX faits par le jeu
 */
if (isset($_POST) && count($_POST) > 0) {
    
    if (isset($_POST['addScore'])) {
        Memo\controllers\Main::addScore($_POST['addScore']);die;
    }
    if (isset($_POST['listScores'])) {
        Memo\controllers\Main::listScores($_POST['listScores']);die;
    }
}

/**
 * chargement de la vue HTML
 */
include(__DIR__ . '/templates/main.html.php');


