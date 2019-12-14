<?php
// Entêtes HTTP pour permettre de recharger à chaque fois les données
header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
header("Cache-Control: post-check=0, pre-check=0", false);
header("Pragma: no-cache");

error_reporting(E_ALL);
ini_set('display_errors', TRUE);
ini_set('display_startup_errors', TRUE);

// chargement des constantes de configuration
require('conf.php');

// autoloader.php

// chargement du controller

// chargement du template
include_once(constant('PATH') . '/templates/main.html.php');