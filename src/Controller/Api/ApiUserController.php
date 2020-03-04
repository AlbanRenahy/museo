<?php

namespace App\Controller\Api;

use App\Entity\User;
use App\Repository\UserRepository;
use Normalizer;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;

/**
 * @Route("/api/users", name="api.users.")
 */
class ApiUserController extends AbstractController
{

    /**
     * @Route("/", name="index")
     */
    public function index(UserRepository $userRepository)
    {
        $users = $userRepository->apiFindAll();
        $encoders = [new JsonEncoder()];
        $normalizers = [new ObjectNormalizer()];
        $serializer = new Serializer($normalizers, $encoders);
        $jsonContent = $serializer->serialize($users, 'json', [
            'circular_reference_handler' => function ($object) {
                return $object->getId();
            }
        ]);

        $response = new Response($jsonContent);
        $response->headers->set('Content-Type', 'application/json');
        // $response->headers->set('Access-Control-Allow-Origin', '*');
        // $response->headers->set('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE'); 

        return $response;
    }

    /**
     * @Route("/show/{id}", name="show", methods="GET")
     */
    public function show(User $user)
    {
        $encoders = [new JsonEncoder()];
        $normalizers = [new ObjectNormalizer()];
        $serializer = new Serializer($normalizers, $encoders);
        $jsonContent = $serializer->serialize($user, 'json', [
            'circular_reference_handler' => function ($object) {
                return $object->getId();
            }
        ]);
        $response = new Response($jsonContent);
        $response->headers->set('Content-Type', 'application/json');
        // $response->headers->set('Access-Control-Allow-Origin', '*');
        return $response;
    }

    /**
     * @Route("/add", name="add", methods="POST")
     */
    public function add(Request $request)
    {
        if($request->isXmlHttpRequest()) {
            // On instancie un nouvel article
            $user = new User();
    
            // On décode les données envoyées
            $data = json_decode($request->getContent());
    
            // On hydrate l'objet
            $user->setEmail($data->email);
            $user->setPassword($data->password);
            $user->setFirstname($data->firstname);
            $user->setLastname($data->lastname);
            $user->setRoles(['ROLE_USER']);
            // $user = $this->getDoctrine()->getRepository(User::class)->findOneBy($id);
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($user);
            $entityManager->flush();
            // $response->headers->set('Content-Type', 'application/json');
            // $response->headers->set('Access-Control-Allow-Origin', '*');
            // On retourne la confirmation
            return new Response('ok', 201);
        }
        return new Response('Failed', 404);
    }

    /**
     * @Route("/edit/{id}", name="edit", methods="PUT")
     */
    public function edit(?User $user, Request $request): Response
    {
        if($request->isXmlHttpRequest()) {
            $data = json_decode($request->getContent());
            $code = 200;

            if(!$user){
                $user = new User();
                $code = 201;
            }

            $user->setEmail($data->email);
            $user->setPassword($data->password);
            $user->setFirstname($data->firstname);
            $user->setLastname($data->lastname);

            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($user);
            $entityManager->flush();
            // $response->headers->set('Content-Type', 'application/json');
            // $response->headers->set('Access-Control-Allow-Origin', '*');
            return new Response('ok', $code);
        }

        return new Response('Fail', 404);
    }

    /**
     * @Route("/delete/{id}", name="delete", methods="DELETE")
     */
    public function delete(User $user)
    {
        $entityManager = $this->getDoctrine()->getManager();
        $entityManager->remove($user);
        $entityManager->flush();
        return new Response('Delete OK');
    }

}