<?php

namespace App\Controller;

use App\Repository\MonumentRepository;
use App\Repository\RegionRepository;
use App\Repository\StatusRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class MainController extends AbstractController
{
    /**
     * @Route("/", name="home", methods={"GET"})
     */
    public function index(MonumentRepository $monumentRepository): Response
    {
        return $this->render('main/index.html.twig', [
            'monuments' => $monumentRepository->findAll(),
        ]);
    }
}
