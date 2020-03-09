<?php

namespace App\Controller\Api;

use App\Entity\Monument;
use App\Repository\UserRepository;
use App\Repository\MonumentRepository;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Serializer\Normalizer\DenormalizerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\Mapping\Entity;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class ApiMonumentController extends AbstractController
{
    /**
     * GET monuments
     * 
     * @Route("/api/monuments", name="api_monuments", methods={"GET"})
     */
    public function getMonuments(MonumentRepository $monumentRepository)
    {
        return $this->json($monumentRepository->findAll(), 200, [], ['groups' => 'monument']);
    }

    /**
     * @Route("/api/monuments/{id}", name="api_monuments_get_id", methods={"GET"})
     */
    
    public function readQuestion(Monument $monument)
    {
        return $this->json($monument, Response::HTTP_OK, [], ['groups' => 'monument']);
    }

    /**
     * POST Create monument
     * 
     * @Route("/api/monuments/add", methods={"POST"})
     */
    public function post(Request $request, SerializerInterface $serializer, ValidatorInterface $validator)
    {
        // Récupérer le contenu de la requête (JSON)
        $jsonContent = $request->getContent();

        // @todo : vérifier que jsonContent est bien une chaine JSON
        if (json_decode($jsonContent) === null) {
            // Sinon on envoie un statut 422
            return $this->json([
                'error' => 'Format de données érroné.'
            ], Response::HTTP_UNPROCESSABLE_ENTITY);
        }

        // Convertir ce JSON en entitié Movie Doctrine
        $monument = $serializer->deserialize($jsonContent, Monument::class, 'json');

        // Validation de l'entité ?
        $errors = $validator->validate($monument);

        // Si $errors est vide = entité valide
        if (count($errors) !== 0) {
            // Objectif : retourne une liste JSON des erreurs
            $jsonErrors = [];
            // On boucle sur les erreurs pour renvoyer un truc propre au client
            foreach ($errors as $error) {
                $jsonErrors[] = [
                    'field' => $error->getPropertyPath(),
                    'message' => $error->getMessage(),
                ];
            }
            // On renvoie les erreurs via $this->json() directement
            // car $jsonErrors = tableau PHP
            // on y ajoute un statut HTTP 422
            return $this->json($jsonErrors, Response::HTTP_UNPROCESSABLE_ENTITY);
        }

        // Si valide, la sauver
        $em = $this->getDoctrine()->getManager();
        $em->persist($monument);
        $em->flush();

        // 201 + Redirection vers movies/123
        return $this->redirectToRoute('api_monuments', ['id' => $monument->getId()], Response::HTTP_CREATED);
    }


}