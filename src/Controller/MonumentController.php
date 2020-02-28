<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;


class MonumentController extends AbstractController
{

    public function index()
    {
        return $this->render('monument/index.html.twig');
    }
}
