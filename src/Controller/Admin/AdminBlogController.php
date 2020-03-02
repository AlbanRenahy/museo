<?php

namespace App\Controller\Admin;

use App\Entity\Blog;
use App\Form\BlogType;
use App\Repository\BlogRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
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
     * @Route("/new", name="admin.blog.new")
     */
    public function add(Request $request): Response
    {
        $blog = new Blog();

        $form = $this->createForm(BlogType::class, $blog);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($blog);
            $entityManager->flush();
            $this->addFlash('info', 'Article ajouté');

            return $this->redirectToRoute('admin.blog.index', ['id' => $blog->getId()]);
        }

        return $this->render('dashboard/blog/new.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}/edit", name="admin.blog.edit", methods="GET|POST")
     */
    public function edit(Blog $blog, Request $request)
    {
        $form = $this->createForm(BlogType::class, $blog);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $blog->setUpdatedAt(new \DateTime());
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($blog);
            $entityManager->flush();
            $this->addFlash('success', 'Article modifié');
            
            return $this->redirectToRoute('admin.blog.index', ['id' => $blog->getId()]);
        }

        return $this->render('dashboard/blog/edit.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}/delete", name="admin.blog.delete")
     */
    public function delete(Request $request, Blog $blog): Response
    {
        return $this->redirectToRoute('admin.blog.index');
    }

}
