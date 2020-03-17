<?php

namespace App\Controller\Admin;

use App\Entity\User;
use App\Form\AdminUserType;
use App\Form\AdminAddUserType;
use App\Repository\UserRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoder;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
// use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface

/**
 * @Route("/admin/user", name="dashboard.user.")
 */
class AdminUserController extends AbstractController
{

    /**
     * @Route("/", name="index")
     */
    public function index(UserRepository $userRepository)
    {
        $users = $userRepository->findAll();
        $count = $userRepository->countByEntry();
        return $this->render('dashboard/user/index.html.twig', [
            'users' => $users,
            'count' => $count,
        ]);
    }

    /**
     * @Route("/edit/{id}", name="edit")
     */
    public function edit(User $user, Request $req)
    {
        $form = $this->createForm(AdminUserType::class, $user);
        $form->handleRequest($req);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($user);
            $entityManager->flush();
            $this->addFlash('success', 'Vous avez modifiez l\'utilisateur');

            return $this->redirectToRoute('dashboard.user.index', ['id' => $user->getId()]);
        }


        return $this->render('dashboard/user/edit.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/add", name="add")
     */
    public function add(Request $req, UserPasswordEncoderInterface $passwordEncoder): Response
    {
        $user = new User();

        $form = $this->createForm(AdminAddUserType::class, $user);
        $form->handleRequest($req);

        if ($form->isSubmitted() && $form->isValid()) {
            $user->setPassword(
                $passwordEncoder->encodePassword(
                    $user,
                    $form->get('password')->getData()
                )
            );
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($user);
            $entityManager->flush();
            $this->addFlash('success', 'Utilisateur bien ajouté');

            return $this->redirectToRoute('dashboard.user.index', ['id' => $user->getId()]);
        }

        return $this->render('dashboard/user/new.html.twig', [
            'form' => $form->createView(),
        ]);

    }

    /**
     * @Route("/delete/{id}", name="delete")
     */
    public function delete($id): Response
    {
        $em = $this->getDoctrine()->getManager();
        $obj = $em->getRepository(User::class)->find($id);
        $em->remove($obj);
        $em->flush();
        $this->addFlash('danger', 'Vous avez bien supprimer l\'utilisateur');
        return $this->redirectToRoute('dashboard.user.index');
    }
}