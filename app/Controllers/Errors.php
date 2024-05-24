<?php
namespace App\Controllers;

use CodeIgniter\Controller;

class Errors extends Controller {
    public function show_404() {
        return view('404');
    }
}
