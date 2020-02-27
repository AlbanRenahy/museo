<?php

namespace App\Controller;

use App\Entity\Monument;
use App\Form\MonumentType;
use App\Repository\MonumentRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/monument")
 */
class MonumentController extends AbstractController
{
    /**
     * @Route("/", name="monument_index", methods={"GET"})
     */
    public function index(MonumentRepository $monumentRepository): Response
    {
        return $this->render('monument/index.html.twig', [
            'monuments' => $monumentRepository->findAll(),
        ]);
    }

    /**
     * @Route("/new", name="monument_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $monument = new Monument();
        $form = $this->createForm(MonumentType::class, $monument);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($monument);
            $entityManager->flush();

            return $this->redirectToRoute('monument_index');
        }

        return $this->render('monument/new.html.twig', [
            'monument' => $monument,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="monument_show", methods={"GET"})
     */
    public function show(Monument $monument): Response
    {
        return $this->render('monument/show.html.twig', [
            'monument' => $monument,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="monument_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, Monument $monument): Response
    {
        $form = $this->createForm(MonumentType::class, $monument);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('monument_index');
        }

        return $this->render('monument/edit.html.twig', [
            'monument' => $monument,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="monument_delete", methods={"DELETE"})
     */
    public function delete(Request $request, Monument $monument): Response
    {
        if ($this->isCsrfTokenValid('delete'.$monument->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($monument);
            $entityManager->flush();
        }

        return $this->redirectToRoute('monument_index');
    }
}
