<?php
namespace models;

class Score extends Bdd
{
    private $connexion;

    public function __construct():void
    {
        $this->connexion = parent::connexion();
    }

    public function add(array $args):boolean
    {
        return true;
    }

    public function list()
    {
        return array();
    }

}