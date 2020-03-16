<?php

namespace App\Controller\Admin;

use App\Repository\CategoryRepository;
use App\Repository\MonumentRepository;
use App\Repository\PeriodRepository;
use App\Repository\RegionRepository;
use App\Repository\TargetRepository;
use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
/**
 * @Route("/admin", name="dashboard.")
 */
class DashboardController extends AbstractController
{

    public function __construct(MonumentRepository $monumentRepository, RegionRepository $regionRepository, PeriodRepository $periodRepository, TargetRepository $targetRepository, UserRepository $userRepository, CategoryRepository $categoryRepository)
    {
        $this->countMonuments = $monumentRepository->countByEntry();
        $this->countRegions = $regionRepository->countByEntry();
        $this->countPeriods = $periodRepository->countByEntry();
        $this->countTargets = $targetRepository->countByEntry();
        $this->countUsers = $userRepository->countByEntry();
        $this->countCategories = $categoryRepository->countByEntry();
    }

    /**
     * @Route("/", name="index")
     */
    public function index()
    {
        return $this->render('dashboard/index.html.twig', [
            'countMonuments' => $this->countMonuments,
            'countRegions' => $this->countRegions,
            'countPeriods' => $this->countPeriods,
            'countTargets' => $this->countTargets,
            'countUsers' => $this->countUsers,
            'countCategories' => $this->countCategories,
            
        ]);
    }

    /**
     * @Route("/website/settings", name="settings")
     */
    public function settings()
    {
        return $this->render('dashboard/settings/index.html.twig');
    }
}
