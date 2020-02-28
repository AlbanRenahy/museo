<?php

namespace App\Controller;

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
    public function index()
    {
        return $this->render('dashboard/blog/index.html.twig');
    }

}
