<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/admin/monument")
 */
class MonumentController extends AbstractController
{

    /**
     * @Route("/", name="admin.monument.index")
     */
    public function index()
    {
        return $this->render('dashboard/monument/index.html.twig');
    }
}
