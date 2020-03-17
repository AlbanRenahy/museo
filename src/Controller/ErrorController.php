<?php 

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class ErrorController extends AbstractController
{

    public function show()
    {
        return $this->render('layout/error/show.html.twig');
    }

}