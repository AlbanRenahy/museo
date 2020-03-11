<?php

namespace App\Controller\Admin;

use App\Repository\MonumentRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/admin/monument", name="dashboard.monument.")
 */
class AdminMonumentController extends AbstractController
{

    /**
     * @Route("/", name="index")
     */
    public function index(MonumentRepository $monumentRepository)
    {
        $monuments = $monumentRepository->findAll();
        return $this->render('dashboard/monument/index.html.twig', compact('monuments'));
    }
}