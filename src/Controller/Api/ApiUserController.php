<?php

namespace App\Controller\Api;

use App\Entity\User;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Security\Http\Firewall\UsernamePasswordJsonAuthenticationListener;
use Symfony\Component\Serializer\Exception\NotEncodableValueException;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;

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
    public function add(Request $request, SerializerInterface $serializer, EntityManagerInterface $em, ValidatorInterface $validator, UserPasswordEncoderInterface $passwordEncoder)
    {
        $jsonContent = $request->getContent();

        try {
            $user = $serializer->deserialize($jsonContent, User::class, 'json');
            $errors = $validator->validate($user);
            if(count($errors) > 0) {
                return $this->json($errors, 400);
            }
            $em->persist($user);
            $em->flush();
        } catch(NotEncodableValueException $e) {
            return $this->json([
                'status' => 400,
                'message' => $e->getMessage()
            ], 400);
        }

        return $this->json($user, 201, [], ['groups' => 'user']);
    }

    /**
     * @Route("/edit/{id}", name="edit", methods="PUT")
     */
    public function edit(?User $user, Request $request)
    {
        // TODO: Edit
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