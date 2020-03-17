<?php

namespace App\Controller\Admin;

use App\Entity\Category;
use App\Form\CategoryType;
use App\Repository\CategoryRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/admin/category", name="dashboard.category.")
 */
class AdminCategoryController extends AbstractController
{

    /**
     * @Route("/", name="index")
     */
    public function index(CategoryRepository $categoryRepository)
    {
        $categories = $categoryRepository->findAll();
        return $this->render('dashboard/category/index.html.twig', compact('categories'));
    }

    /**
     * @Route("/edit/{id}", name="edit")
     */
    public function edit(Category $category, Request $req)
    {
        $form = $this->createForm(CategoryType::class, $category);
        $form->handleRequest($req);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($category);
            $entityManager->flush();
            $this->addFlash('success', 'Vous avez modifiez la catégorie');

            return $this->redirectToRoute('dashboard.category.index', ['id' => $category->getId()]);
        }


        return $this->render('dashboard/region/edit.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/add", name="add")
     */
    public function add(Request $req): Response
    {
        $category = new Category();

        $form = $this->createForm(CategoryType::class, $category);
        $form->handleRequest($req);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($category);
            $entityManager->flush();
            $this->addFlash('success', 'Catégorie bien ajouté');

            return $this->redirectToRoute('dashboard.category.index', ['id' => $category->getId()]);
        }

        return $this->render('dashboard/category/new.html.twig', [
            'form' => $form->createView(),
        ]);

    }

    /**
     * @IsGranted("ROLE_ADMIN_MUSEO")
     * @Route("/delete/{id}", name="delete")
     */
    public function delete($id): Response
    {
        $em = $this->getDoctrine()->getManager();
        $obj = $em->getRepository(Category::class)->find($id);
        $em->remove($obj);
        $em->flush();
        $this->addFlash('danger', 'Vous avez bien supprimer la catégorie');
        return $this->redirectToRoute('dashboard.category.index');
    }
}