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
 * @Route("/admin/monument", name="dashboard.monument.")
 */
class AdminMonumentController extends AbstractController
{

    /**
     * @Route("/", name="index")
     */
    public function index(MonumentRepository $monumentRepository)
    {
        $monuments = $monumentRepository->findAll();
        return $this->render('dashboard/monument/index.html.twig', compact('monuments'));
    }

    /**
     * @Route("/edit/{id}", name="edit")
     */
    public function edit(Monument $monument, Request $req)
    {
        $form = $this->createForm(MonumentType::class, $monument);
        $form->handleRequest($req);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($monument);
            $entityManager->flush();
            $this->addFlash('success', 'Vous avez modifiez le monument');

            return $this->redirectToRoute('dashboard.monument.index', ['id' => $monument->getId()]);
        }


        return $this->render('dashboard/monument/edit.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/delete/{id}", name="delete")
     */
    public function delete($id): Response
    {
        $em = $this->getDoctrine()->getManager();
        $obj = $em->getRepository(Monument::class)->find($id);
        $em->remove($obj);
        $em->flush();
        $this->addFlash('danger', 'Vous avez bien supprimer le monument');
        return $this->redirectToRoute('dashboard.monument.index');
    }
}