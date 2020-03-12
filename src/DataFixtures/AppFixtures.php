<?php

namespace App\DataFixtures;

use App\Entity\Category;
use App\Entity\Monument;
use App\Entity\Period;
use App\Entity\Region;
use App\Entity\Target;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        // Adding 25 Monuments Fixtures in DB
        // Adding 10 Categories Fixtures in DB
        // Adding 50 Period Fixtures in DB
        // After add 50 regions, we flush with Doctrine
        // Adding 50 Target Fixtures in DB
        
        // for ($i = 0; $i < 25; $i++) {
        //     $monument = new Monument();
        //     $monument->setName('Monument numéro ' . $i);
        //     $monument->setDescription('Et quia Mesopotamiae tractus omnes crebro inquietari sueti praetenturis et stationibus servabantur agrariis, laevorsum flexo itinere Osdroenae subsederat extimas partes, novum parumque aliquando temptatum commentum adgressus. quod si impetrasset, fulminis modo cuncta vastarat. erat autem quod cogitabat huius modi.');
        //     $monument->setAddress($i . ' Rue des Test');
        //     $monument->setCity('Ville numéro ' . $i);
        //     $monument->setCreatedAt(new \DateTime());
        //     $monument->setLatitude(mt_rand(1, 401) / 100);
        //     $monument->setLongitude(mt_rand(1, 401) / 100);
        //     $manager->persist($monument);
        // }

        for ($i = 0; $i < 10; $i++) {
            $category = new Category();
            $category->setName('Catégorie numéro ' . $i);
            $category->setDescription('Et quia Mesopotamiae tractus omnes crebro inquietari sueti praetenturis et stationibus servabantur agrariis, laevorsum flexo itinere Osdroenae subsederat extimas partes, novum parumque aliquando temptatum commentum adgressus. quod si impetrasset, fulminis modo cuncta vastarat. erat autem quod cogitabat huius modi.');
            $category->setCreatedAt(new \DateTime());
            $manager->persist($category);
        }
        
        for ($i = 0; $i < 10; $i++) {
            $period = new Period();
            $period->setName('Période numéro ' . $i);
            $period->setCreatedAt(new \DateTime());
            $manager->persist($period);
        }
        
        for ($i = 0; $i < 10; $i++) {
            $region = new Region();
            $region->setName('Région numéro ' . $i);
            $region->setZipcode(mt_rand(1, 99999));
            $region->setCreatedAt(new \DateTime());
            $manager->persist($region);
        }

        for ($i = 0; $i < 10; $i++) {
            $target = new Target();
            $target->setName('Publique visée ' . $i);
            $target->setCreatedAt(new \DateTime());
            $manager->persist($target);
        }

        $manager->flush();
    }
}
