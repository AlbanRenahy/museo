<?php

namespace App\Controller\Admin;

use App\Entity\Target;
use App\Form\TargetType;
use App\Repository\TargetRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/admin/target", name="dashboard.target.")
 */
class AdminTargetController extends AbstractController
{

    /**
     * @Route("/", name="index")
     */
    public function index(TargetRepository $targetRepository)
    {
        $targets = $targetRepository->findAll();
        return $this->render('dashboard/target/index.html.twig', compact('targets'));
    }

    /**
     * @Route("/edit/{id}", name="edit")
     */
    public function edit(Target $target, Request $req)
    {
        $form = $this->createForm(TargetType::class, $target);
        $form->handleRequest($req);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($target);
            $entityManager->flush();
            $this->addFlash('success', 'Vous avez modifiez le publique visée');

            return $this->redirectToRoute('dashboard.target.index', ['id' => $target->getId()]);
        }


        return $this->render('dashboard/target/edit.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/add", name="add")
     */
    public function add(Request $req): Response
    {
        $target = new Target();

        $form = $this->createForm(TargetType::class, $target);
        $form->handleRequest($req);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($target);
            $entityManager->flush();
            $this->addFlash('success', 'Publique visée bien ajouté');

            return $this->redirectToRoute('dashboard.region.index', ['id' => $target->getId()]);
        }

        return $this->render('dashboard/target/new.html.twig', [
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
        $obj = $em->getRepository(Target::class)->find($id);
        $em->remove($obj);
        $em->flush();
        $this->addFlash('danger', 'Vous avez bien supprimer le publique visée');
        return $this->redirectToRoute('dashboard.target.index');
    }
}