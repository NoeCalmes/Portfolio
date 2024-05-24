<?php

namespace App\Controllers;

class Home extends BaseController
{
    public function index(): string
    {
        // Définir la page active
        $activePage = 'index';

        // Charger la vue 'navbar' avec la variable $activePage
        return view('template/menu')    
            . view('template/navbar', ['activePage' => $activePage])
            . view('home_page')
            . view('template/footer');
    }
}
