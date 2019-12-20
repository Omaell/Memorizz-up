<?php

namespace Memo\controllers;

use Memo\models\Score;

class Main
{
    /**
     * Methode appelée par l'AJAX quand le jeu veut enregistrer un nouveau temps en base de données
     */
    static public function addScore ($score)
    {
        $modelScore = new Score(); //permet d'ouvrir une connexion à la BDD
        $retour = $modelScore->insert(['score' => $score]); // ajoute un nouveau score dans la table memorizzup.score
    }

    /**
     * Methode appelée par l'AJAX quand le jeu demande la liste des 10 meilleurs temps
     */
    static public function listScores ($nb)
    {
        $modelScore = new Score(); //permet d'ouvrir une connexion à la BDD
        $retour = $modelScore->select('0,'.$nb); // retourne les 10 meilleurs scores de la table memorizzup.score
        echo json_encode($retour); // renvoie une chaine de caractères au format JSON
    }
}