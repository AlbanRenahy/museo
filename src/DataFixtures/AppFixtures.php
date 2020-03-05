<?php

namespace App\DataFixtures;

use App\Entity\Period;
use App\Entity\Monument;
use App\Entity\Region;
use App\Entity\Status;
use App\Entity\Target;
use App\Entity\Thematic;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        for ($i = 0; $i < 20; $i++) {
            $monument = new Monument();
            $monument->setName('monument '.$i);
            $monument->setCity('city '.$i);
            $monument->setAdress('adress '.$i);
            $monument->setDescription('description' .$i);
            //$monument->setThematic('thematiques' .$i);
            $manager->persist($monument);
        }

        for ($i = 0; $i < 20; $i++) {
            $period = new Period();
            $period->setName('period '.$i);
            $manager->persist($period);
        }

        for ($i = 0; $i < 20; $i++) {
            $region = new Region();
            $region->setName('region '.$i);
            $manager->persist($region);
        }
        
        for ($i = 0; $i < 20; $i++) {
            $status = new Status();
            $status->setStatus($i);
            $manager->persist($status);
        }

        for ($i = 0; $i < 20; $i++) {
            $target = new Target();
            $target->setName('target '.$i);
            $manager->persist($target);
        }

        for ($i = 0; $i < 20; $i++) {
            $thematic = new Thematic();
            $thematic->setName('thematic '.$i);
            $manager->persist($thematic);
        }

            $manager->flush();
    }
}
