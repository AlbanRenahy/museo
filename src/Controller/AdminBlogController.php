<?php

namespace App\Controller;

use App\Repository\BlogRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/admin/blog")
 */
class AdminBlogController extends AbstractController
{

    /**
     * @Route("/", name="admin.blog.index")
     */
    public function index(BlogRepository $blogRepository)
    {
        return $this->render('dashboard/blog/index.html.twig', [
            'articles' => $blogRepository->findAll(),
        ]);
    }

    /**
     * @Route("/{id}/edit", name="admin.blog.edit", methods="GET|POST")
     */
    public function edit()
    {
        // TODO: form for edit
    }

    /**
     * @Route("/{id}/delete", name="admin.blog.delete", methods="DELETE")
     */
    public function delete()
    {
        // TODO: delete single post
    }

}
