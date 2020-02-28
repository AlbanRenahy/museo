<?php

namespace App\DataFixtures;

use App\Entity\Blog;
use DateTime;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;

class BlogFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        for ($i = 0; $i < 5; $i++) {
            $posts = new Blog();
            $posts->setName('Article de test numéro ' . $i);
            $posts->setContent('Je suis un texte de test attention à vous!');
            $posts->setSlug('article-de-test-' . $i);
            $posts->setCreatedAt(new DateTime());
            $manager->persist($posts);
        }
        $manager->flush();
    }
}
