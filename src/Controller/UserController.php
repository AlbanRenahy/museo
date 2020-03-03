<?php 

namespace App\Controller;

use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/user")
 */
class UserController extends AbstractController 
{

    /**
     * @Route("/profile", name="user.profile.index")
     */
    public function index(User $user)
    {
        // TODO: Load User by ID
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