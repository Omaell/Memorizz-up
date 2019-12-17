<?php
namespace models;

class Bdd 
{    
    protected function connexion()
    {
        try
        {
            $connexion = new PDO('mysql:host=' . constant('HOST') . ';dbname=' . constant('DB_NAME'), constant('DB_USERNAME'), constant('DB_PASSWORD'));
        }
        catch(Exception $e)
        {
            return false;
        }
        return $connexion;
    }
}