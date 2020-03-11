<?php

namespace App\Controller\Admin;

use App\Repository\MonumentRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
/**
 * @Route("/admin", name="dashboard.")
 */
class DashboardController extends AbstractController
{


    /**
     * @Route("/", name="index")
     */
    public function index(MonumentRepository $monumentRepository)
    {
        return $this->render('dashboard/index.html.twig', [
            'countMonuments' => $monumentRepository->countByEntry(),
        ]);
    }
}
