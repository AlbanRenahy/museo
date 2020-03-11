<?php

namespace App\Controller\Admin;

use App\Entity\Monument;
use App\Repository\MonumentRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
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
    public function edit(Monument $monument)
    {
        // TODO: Make form for edit :)
    }

    /**
     * @Route("/delete/{id}", name="delete")
     */
    public function delete(Monument $monument)
    {
        // TODO: Make logic for delete :)
    }
}