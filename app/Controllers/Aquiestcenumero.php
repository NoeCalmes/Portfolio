<?php

namespace App\Controllers;

class Aquiestcenumero extends BaseController
{
    public function getIndex(): string
    {
        // Définir la page active
        $activePage = 'work';
    
        // Charger la vue 'menu' en premier, puis les autres vues
        return view('template/menu')
            . view('template/navbar', ['activePage' => $activePage])
            . view('a-qui-est-ce-numero')
            . view('template/footer');
    }
}


