<?php

namespace Memo\controllers;

use Memo\models\Score;

class Main
{
    static public function addScore ($score)
    {
        $modelScore = new Score();
        $retour = $modelScore->insert(['score' => $score]);
    }

    static public function listScores ($nb)
    {
        $modelScore = new Score();
        $retour = $modelScore->select('0,'.$nb);
        echo json_encode($retour);
    }
}