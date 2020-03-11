<?php

namespace App\Controller\Admin;

use App\Repository\MonumentRepository;
use App\Repository\PeriodRepository;
use App\Repository\RegionRepository;
use App\Repository\TargetRepository;
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
    public function index(MonumentRepository $monumentRepository, RegionRepository $regionRepository, PeriodRepository $periodRepository, TargetRepository $targetRepository)
    {
        return $this->render('dashboard/index.html.twig', [
            'countMonuments' => $monumentRepository->countByEntry(),
            'countRegions' => $regionRepository->countByEntry(),
            'countPeriods' => $periodRepository->countByEntry(),
            'countTargets' => $targetRepository->countByEntry(),
        ]);
    }
}
