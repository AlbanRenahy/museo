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
        $user = $this->getUser();
        $data = $request->files->get('image');
        $fileName = $user.'.'.$data->guessExtension();
        // moves the file to the directory where usuarios are stored
        $data->move(
            $this->getParameter('upload_directory'),
            $fileName
        );
        echo $data; exit;
        return $this->json($data);
    }

}