<?php

namespace App\Controller\Admin;

use App\Repository\UserRepository;
use App\Repository\PeriodRepository;
use App\Repository\RegionRepository;
use App\Repository\TargetRepository;
use App\Repository\CategoryRepository;
use App\Repository\MonumentRepository;
use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
/**
 * @Route("/admin", name="dashboard.")
 * @IsGranted("ROLE_MUSEO_ADMIN")
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
