<?php

namespace App\Controllers;

class Skill extends BaseController
{
    public function getIndex(): string
    {
        // Définir la page active
        $activePage = 'skill';
    
        // Charger la vue 'menu' en premier, puis les autres vues
        return view('template/menu')
            . view('template/navbar', ['activePage' => $activePage])
            . view('skill_page')
            . view('template/footer');
    }
}


