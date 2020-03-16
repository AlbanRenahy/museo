<?php

namespace App\Controller\Admin;

use App\Entity\Period;
use App\Form\PeriodType;
use App\Repository\PeriodRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/admin/period", name="dashboard.period.")
 */
class AdminPeriodController extends AbstractController
{

    /**
     * @Route("/add", name="add")
     */
    public function add(Request $req)
    {
        $period = new Period();

        $form = $this->createForm(PeriodType::class, $period);
        $form->handleRequest($req);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($period);
            $entityManager->flush();
            $this->addFlash('success', 'Période bien ajouté');

            return $this->redirectToRoute('dashboard.period.index', ['id' => $period->getId()]);
        }

        return $this->render('dashboard/monument/new.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/", name="index")
     */
    public function index(PeriodRepository $periodRepository)
    {
        $periods = $periodRepository->findAll();
        $countPeriods = $periodRepository->countByEntry();
        return $this->render('dashboard/period/index.html.twig', [
            'periods' => $periods,
            'count' => $countPeriods,
        ]);
    }

    /**
     * @Route("/edit/{id}", name="edit")
     */
    public function edit(Period $period, Request $req)
    {
        $form = $this->createForm(PeriodType::class, $period);
        $form->handleRequest($req);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($period);
            $entityManager->flush();
            $this->addFlash('success', 'Vous avez modifiez la période');

            return $this->redirectToRoute('dashboard.period.index', ['id' => $period->getId()]);
        }


        return $this->render('dashboard/period/edit.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/delete/{id}", name="delete")
     */
    public function delete($id): Response
    {
        $em = $this->getDoctrine()->getManager();
        $obj = $em->getRepository(Period::class)->find($id);
        $em->remove($obj);
        $em->flush();
        $this->addFlash('danger', 'Vous avez bien supprimer la période');
        return $this->redirectToRoute('dashboard.period.index');
    }
}