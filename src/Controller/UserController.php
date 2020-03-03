<?php 

namespace App\Controller;

use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/user")
 */
class UserController extends AbstractController 
{

    /**
     * @Route("/profile/{id}", name="user.profile.index")
     */
    public function index(User $user): Response
    {
        return $this->render('security/user/index.html.twig');
    }

    /**
     * @Route("/profile/show", name="user.profile.show")
     */
    public function show()
    {
        // TODO: Load User and add Show
    }

    /**
     * @Route("/profile/edit", name="user.profile.edit")
     */
    public function edit()
    {
        // TODO: Load user and add Edit methods
    }
    
    /**
     * @Route("/profile/delete", name="user.profile.delete")
     */
    public function delete()
    {
        // TODO: Load User and add Delete methods
    }
}