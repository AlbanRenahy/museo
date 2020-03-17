<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\RegistrationFormType;
use App\Repository\UserRepository;
use App\Security\AdminLoginAuthenticator;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Security\Guard\GuardAuthenticatorHandler;

class RegistrationController extends AbstractController
{
    /**
     * @Route("/register", name="app_register")
     */
    public function register(Request $request, UserPasswordEncoderInterface $passwordEncoder, GuardAuthenticatorHandler $guardHandler, AdminLoginAuthenticator $authenticator, \Swift_Mailer $mailer): Response
    {
        $user = new User();
        $form = $this->createForm(RegistrationFormType::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            // encode the plain password
            $user->setPassword(
                $passwordEncoder->encodePassword(
                    $user,
                    $form->get('plainPassword')->getData()
                )
            );
            $user->setCreatedAt(new \DateTime());
            $user->setIsActive(0);
            $user->setRoles(['ROLE_USER']);

            // Generation du token
            $user->setActivationToken(md5(uniqid()));

            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($user);
            $entityManager->flush();

            // do anything else you need here, like send an email
            $msg = (new \Swift_Message('Activation de votre compte'))
                ->setFrom('test@museo.fr')
                ->setTo($user->getEmail())
                ->setBody(
                    $this->renderView(
                        'layout/email/activate.html.twig', ['token' => $user->getActivationToken()]
                    ),
                    'text/html'
                )
            ;
            $mailer->send($msg);
            return $guardHandler->authenticateUserAndHandleSuccess(
                $user,
                $request,
                $authenticator,
                'main' // firewall name in security.yaml
            );
        }

        return $this->render('registration/register.html.twig', [
            'registrationForm' => $form->createView(),
        ]);
    }

    /**
     * @Route("/account/activate/{token}", name="activate")
     */
    public function activate($token, UserRepository $userRepository)
    {
        $user = $userRepository->findOneBy(['activation_token' => $token]);

        if(!$user){
            throw $this->createNotFoundException("Cet utilisateur n'existe pas.");
        }

        // Si user existe ! 
        $user->setActivationToken(null);
        $em = $this->getDoctrine()->getManager();
        $em->persist($user);
        $em->flush();
        $this->addFlash('success', 'Votre compte à bien été activer.');
        return $this->redirectToRoute('app_login');
    }
}
