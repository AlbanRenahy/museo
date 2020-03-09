<?php

namespace App\Controller\Api;

use App\Repository\MonumentRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

class ApiMonumentController extends AbstractController
{
    /**
     * GET monuments
     * 
     * @Route("/api/monuments", name="api_monuments", methods={"GET"})
     */
    public function getMonuments(MonumentRepository $monumentRepository, SerializerInterface $serializer)
    {
        //récupération des monuments
        // $monuments = $monumentRepository->findAll();
        // $monumentsJson = $serializer->serialize($monuments, 'json', ['groups' => 'monument']);
        // return new Response ($monumentsJson, Response::HTTP_OK, ['Content-Type' => 'application/json']);

        return $this->json($monumentRepository->findAll(), 200, [], ['groups' => 'monument']);
    }
}
