<?php

namespace App\Controller;

use App\Entity\Blog;
use App\Repository\BlogRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/blog")
 */
class BlogController extends AbstractController
{

    /**
     * @var BlogRepository
     */
    private $repository;

    public function __construct(BlogRepository $repository)
    {
        $this->repository = $repository;
    }

    /**
     * @Route("/", name="blog.index")
     */
    public function index()
    {
        $posts = $this->repository->findAll();
        return $this->render('blog/index.html.twig', compact('posts'));
    }

    /**
     * @Route("/{slug}", name="blog.show")
     */
    public function show(Blog $blog)
    {
        return $this->render('blog/show.html.twig', compact('blog'));
    }
}
