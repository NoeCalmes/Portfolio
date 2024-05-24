<?php

namespace App\Controllers;

class Resume extends BaseController
{
    public function getIndex(): string
    {
        // Définir la page active
        $activePage = 'resume';
    
        // Charger la vue 'menu' en premier, puis les autres vues
        return view('template/menu')
            . view('template/navbar', ['activePage' => $activePage])
            . view('resume_page')
            . view('template/footer');
    }
}


