<?php

namespace App\Controller;

use App\Repository\BlogRepository;
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
    public function index(BlogRepository $blogRepository)
    {
        return $this->render('dashboard/index.html.twig', [
            'countPosts' => $blogRepository->countPosts(),
        ]);
    }
}
