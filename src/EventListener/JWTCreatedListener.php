<?php 

namespace App\EventListener;

use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorageInterface;
use Lexik\Bundle\JWTAuthenticationBundle\Event\JWTCreatedEvent;
use Symfony\Component\HttpFoundation\RequestStack;

class JWTCreatedListener
{

    /**
     * @var RequestStack
     */
    private $requestStack;

    /**
     * @param RequestStack $requestStack
     */
    public function __construct(RequestStack $requestStack)
    {
        $this->requestStack = $requestStack;
    }

    /**
     * Replaces the data in the generated
     *
     * @param JWTCreatedEvent $event
     *
     * @return void
     */
    public function onJWTCreated(JWTCreatedEvent $event)
    {
        /** @var $user \AppBundle\Entity\User */
        $user = $event->getUser();
        $req = $this->requestStack->getCurrentRequest();

        // add new data
        $payload['userId'] = $user->getId();
        $payload['username'] = $user->getUsername();
        $payload['userEmail'] = $user->getEmail();
        $payload['ip'] = $req->getClientIp();

        $event->setData($payload);
    }
}