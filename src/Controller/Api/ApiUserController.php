<?php

namespace App\Controller\Api;

use App\Entity\User;
use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\Validator\Validation;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @Route("/api/users", name="api.users.")
 */
class ApiUserController extends AbstractController
{

    /**
     * @Route("/", name="index", methods="GET")
     */
    public function index(UserRepository $userRepository)
    {
        return $this->json($userRepository->findAll(), 200, [], ['groups' => 'user']);
    }

    /**
     * @Route("/show/{id}", name="show", methods="GET")
     */
    public function show(User $user)
    {
        return $this->json($user, 200, [], ['groups' => 'user']);
    }

    /**
     * @Route("/add", name="add", methods="POST")
     */
    public function add(Request $request)
    {
        
    }

    /**
     * @Route("/edit/{id}", name="edit", methods="PUT")
     */
    public function edit(?User $user, Request $request): Response
    {
        
    }

    /**
     * @Route("/delete/{id}", name="delete", methods="DELETE")
     */
    public function delete(User $user)
    {
        $entityManager = $this->getDoctrine()->getManager();
        $entityManager->remove($user);
        $entityManager->flush();
        return new Response('Vous avez bien supprimer l\'utilisateur', 200, []);
    }

}