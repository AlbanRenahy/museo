<?php

namespace App\Controller\Admin;

use App\Entity\Period;
use App\Entity\Monument;
use App\Form\MonumentType;
use App\Repository\MonumentRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/admin/monument", name="dashboard.monument.")
 */
class AdminMonumentController extends AbstractController
{

    /**
     * @Route("/add", name="add")
     */
    public function add(Request $req)
    {
        $monument = new Monument();
        // $period = new Period();

        $form = $this->createForm(MonumentType::class, $monument);
        $form->handleRequest($req);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($monument);
            $entityManager->flush();
            $this->addFlash('success', 'Monument bien ajouté');

            return $this->redirectToRoute('dashboard.monument.index', ['id' => $monument->getId()]);
        }

        return $this->render('dashboard/monument/new.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/", name="index")
     */
    public function index(MonumentRepository $monumentRepository)
    {   
        $monuments = $monumentRepository->findAll();
        // $countMonuments = $monumentRepository->countByEntry();
        return $this->render('dashboard/monument/index.html.twig', [
            'monuments' => $monuments,
            // 'count' => 
        ]);
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
     * @IsGranted("ROLE_ADMIN_MUSEO")
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

    /**
     * @Route("/accept/{id}", name="accept")
     */
    // public function accept(Monument $monument, Request $req, int $id): Response
    // {
    //     if($monument->getId() == $id){
    //         $em = $this->getDoctrine()->getManager();
    //         $monument->setIsActive(1);
    //         $em->persist($monument);
    //         $em->flush();
    //         $this->addFlash('success', 'Monument bien accepter');
    //         return $this->redirectToRoute('dashboard.monument.index');
    //     } else {
    //         return $this->addFlash('danger', 'Impossible d\'accepter un monument');
    //     }

         // return $this->render('dashboard/monument/accept.html.twig');
    // }

    /**
     * @Route("/decline/{id}", name="decline")
     */
    // public function decline(Monument $monument, Request $req, int $id): Response
    // {
    //     $em = $this->getDoctrine()->getManager();
    //     $obj = $em->getRepository(Monument::class)->find($id);
    //     $em->remove($obj);
    //     $em->flush();
    //     $this->addFlash('danger', 'Vous avez refuser le monument');
    //     return $this->redirectToRoute('dashboard.monument.index');
    // }
}