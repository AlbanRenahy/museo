<?php

namespace App\Controller;

use App\Form\ContactType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class ContactController extends AbstractController
{
    /**
     * @Route("/contact", name="contact")
     */
    public function index(Request $request, \Swift_Mailer $mailer)
    {
        // $form = $this->createForm(ContactType::class);
        // $form->handleRequest($request);

        // if($form->isSubmitted() && $form->isValid()){
        //     $contact = $form->getData();
        //     // dd($contact);
        // }

        // return $this->render('contact/index.html.twig', [
        //     'contactForm' => $form->createView(),
        // ]);
        $message = (new \Swift_Message('Hello Email'))
        ->setFrom('send@example.com')
        ->setTo('museodev@gmail.com')
        ->setBody($this->renderView('test.txt.twig'));
        $mailer->send($message);

        return $this->render('contact/index.html.twig');
    }
}
