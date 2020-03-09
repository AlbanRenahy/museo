<?php

namespace App\Controller;

use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class MainController extends AbstractController
{

    /**
     * @Route("/", name="home")
     */
    public function index(User $user)
    {
        return $this->render('main/index.html.twig', compact('token'));
    }

    /**
     * @Route("/cgu", name="rgpd")
     */
    public function rgpd()
    {
        return $this->render('main/terms/cgu.html.twig');
    }

}
