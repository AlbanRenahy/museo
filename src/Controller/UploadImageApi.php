<?php 

namespace App\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * A little bit controller upload
 * @Route("/upload", name="upload.")
 */
class UploadImageApi extends AbstractController
{

    /**
     * @return JsonResponse
     * @Route("/image", name="image", methods="POST")
     */
    public function jsonImage(Request $request): JsonResponse
    {
        $data= $request->get("data");
        return $this->json($data);
    }

}