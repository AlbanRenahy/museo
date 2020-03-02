<?php

namespace App\Controller\Admin;

use App\Repository\BlogRepository;
use App\Repository\MonumentRepository;
use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/admin")
 */
class DashboardController extends AbstractController
{
    /**
     * @Route("/", name="admin.index")
     */
    public function index(BlogRepository $blogRepository, MonumentRepository $monumentRepository, UserRepository $userRepository)
    {
        return $this->render('dashboard/index.html.twig', [
            'countPosts' => $blogRepository->countPosts(),
            'countMonuments' => $monumentRepository->countMonuments(),
            'countUsers' => $userRepository->countUsers(),
        ]);
    }
}
