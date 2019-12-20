<?php
namespace Memo\models;

// On laisse la classe parente gérer la connexion à la base de données
// Ici ne seront définies que les méthodes utiles pour se souvenirs des scores 

/**
 * Nom de la base de données : memorizzup
 * La table utilisée : score
 * Les champs de la table "score" :
 *  - id, clé primaire, auto-incrément
 *  - score, entier
 *  - created, datetime
 */
class Score extends Bdd
{
    private $connexion;

    public function __construct()
    {
        $this->connexion = parent::connexion();
    }

    public function insert($args)
    {
        $preparedQuery = $this->connexion->prepare('INSERT INTO score (score , created) VALUES (?, NOW())');
        $result = $preparedQuery->execute([$args['score']]);
            
        return $result;
    }

    // Cette méthode permet de lister les meilleurs scores
    // On peut envisager de renvoyer aussi le jour et l'heure de cet enregistrement puisque ils sont aussi stockés
    public function select($limit = '0,10', $order = 'ASC')
    {
        $query = 'SELECT score FROM score';
        $query .= ' ORDER BY score ' . $order . ' LIMIT ' . $limit;
        $preparedQuery = $this->connexion->prepare($query);
        $preparedQuery->execute();
        $result = $preparedQuery->fetchAll(\PDO::FETCH_COLUMN);
        return $result;
    }

}