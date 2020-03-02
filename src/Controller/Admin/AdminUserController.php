<?php

namespace App\Controller\Admin;

use App\Entity\User;
use App\Form\UserType;
use App\Form\UserEditType;
use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

/**
 * @Route("/admin/user")
 */
class AdminUserController extends AbstractController
{

    /**
     * @Route("/", name="admin.user.index")
     */
    public function index(UserRepository $userRepository)
    {
        return $this->render('dashboard/user/index.html.twig', [
            'users' => $userRepository->findAll(),
        ]);
    }

    /**
     * @Route("/new", name="admin.user.new")
     */
    public function add(Request $request, UserPasswordEncoderInterface $passwordEncoder): Response
    {
        $user = new User();

        $form = $this->createForm(UserType::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $user->setPassword(
                $passwordEncoder->encodePassword(
                    $user,
                    $form->get('plainPassword')->getData()
                )
            );
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($user);
            $entityManager->flush();
            $this->addFlash('success', 'Utilisateur bien ajouté par le dashboard');

            return $this->redirectToRoute('admin.user.index', ['id' => $user->getId()]);
        }

        return $this->render('dashboard/user/new.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}/edit", name="admin.user.edit", methods="GET|POST")
     */
    public function edit(User $user, Request $request)
    {
        $form = $this->createForm(UserEditType::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($user);
            $entityManager->flush();
            $this->addFlash('success', 'Utilisateur modifié');
            
            return $this->redirectToRoute('admin.user.index', ['id' => $user->getId()]);
        }

        return $this->render('dashboard/user/edit.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}/delete", name="admin.user.delete")
     */
    public function delete($id): Response
    {
       $em = $this->getDoctrine()->getManager();
       $obj = $em->getRepository(User::class)->find($id);
       $em->remove($obj);
       $em->flush();
       $this->addFlash('info', 'Utilisateur bien supprimé');
       return $this->redirectToRoute('admin.user.index');
    }

}