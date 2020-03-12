<?php

namespace App\Controller\Admin;

use App\Entity\Region;
use App\Form\RegionType;
use App\Repository\RegionRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/admin/region", name="dashboard.region.")
 */
class AdminRegionController extends AbstractController
{

    /**
     * @Route("/", name="index")
     */
    public function index(RegionRepository $regionRepository)
    {
        $regions = $regionRepository->findAll();
        return $this->render('dashboard/region/index.html.twig', compact('regions'));
    }

    /**
     * @Route("/edit/{id}", name="edit")
     */
    public function edit(Region $region, Request $req)
    {
        $form = $this->createForm(RegionType::class, $region);
        $form->handleRequest($req);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($region);
            $entityManager->flush();
            $this->addFlash('success', 'Vous avez modifiez la région');

            return $this->redirectToRoute('dashboard.region.index', ['id' => $region->getId()]);
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
        $region = new Region();

        $form = $this->createForm(RegionType::class, $region);
        $form->handleRequest($req);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($region);
            $entityManager->flush();
            $this->addFlash('success', 'Région bien ajouté');

            return $this->redirectToRoute('dashboard.region.index', ['id' => $region->getId()]);
        }

        return $this->render('dashboard/region/new.html.twig', [
            'form' => $form->createView(),
        ]);

    }

    /**
     * @Route("/delete/{id}", name="delete")
     */
    public function delete($id): Response
    {
        $em = $this->getDoctrine()->getManager();
        $obj = $em->getRepository(Region::class)->find($id);
        $em->remove($obj);
        $em->flush();
        $this->addFlash('danger', 'Vous avez bien supprimer la région');
        return $this->redirectToRoute('dashboard.region.index');
    }
}