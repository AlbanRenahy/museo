<?php

namespace App\Controller\Admin;

use App\Entity\Monument;
use App\Form\MonumentType;
use App\Repository\MonumentRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/admin/monument")
 */
class AdminMonumentController extends AbstractController
{

    /**
     * @Route("/", name="admin.monument.index")
     */
    public function index(MonumentRepository $monumentRepository)
    {
        return $this->render('dashboard/monument/index.html.twig', [
            'monuments' => $monumentRepository->findAll(),
        ]);
    }

    
    /**
     * @Route("/new", name="admin.monument.new")
     */
    public function add(Request $request): Response
    {
        $monument = new Monument();

        $form = $this->createForm(MonumentType::class, $monument);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($monument);
            $entityManager->flush();
            $this->addFlash('success', 'Monument ajouté');

            return $this->redirectToRoute('admin.monument.index', ['id' => $monument->getId()]);
        }

        return $this->render('dashboard/monument/new.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}/edit", name="admin.monument.edit", methods="GET|POST")
     */
    public function edit(Monument $monument, Request $request)
    {
        $form = $this->createForm(MonumentType::class, $monument);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $blog->setUpdatedAt(new \DateTime());
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($monument);
            $entityManager->flush();
            $this->addFlash('success', 'Monument modifié');
            
            return $this->redirectToRoute('admin.blog.index', ['id' => $monument->getId()]);
        }

        return $this->render('dashboard/monument/edit.html.twig', [
            'form' => $form->createView(),
        ]);
    }


    /**
     * @Route("/{id}/delete", name="admin.monument.delete")
     */
    public function delete($id): Response
    {
       $em = $this->getDoctrine()->getManager();
       $obj = $em->getRepository(Monument::class)->find($id);
       $em->remove($obj);
       $em->flush();
       $this->addFlash('success', 'Monument bien supprimé');
       return $this->redirectToRoute('admin.monument.index');
    }

}
