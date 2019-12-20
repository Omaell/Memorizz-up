<?php
namespace Memo\models;

// On laisse la classe parente gérer la connexion à la base de données
// Ici ne seront définies que les méthodes utiles pour se souvenirs des scores 
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