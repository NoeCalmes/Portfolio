<?php

namespace App\Controllers;

class Concretesecurity extends BaseController
{
    public function getIndex(): string
    {
        // Définir la page active
        $activePage = 'work';
    
        // Charger la vue 'menu' en premier, puis les autres vues
        return view('template/menu')
            . view('template/navbar', ['activePage' => $activePage])
            . view('concrete_security_page')
            . view('template/footer');
    }
}


