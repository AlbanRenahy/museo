<?php

namespace App\Controller;

use App\Repository\MonumentRepository;
use App\Repository\RegionRepository;
use App\Repository\StatusRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class MainController extends AbstractController
{
    /**
     * @Route("/", name="home")
     */
    public function index(MonumentRepository $monumentRepository, RegionRepository $regionRepository, StatusRepository $statusRepository)
    {
        return $this->render('main/index.html.twig', [
            'monuments' => $monumentRepository->findAll(),
            'regions' => $regionRepository->findAll(),
            'status' => $statusRepository->findAll(),
        ]);
    }
}
