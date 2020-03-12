<?php

namespace App\Form;

use App\Entity\Category;
use App\Entity\Monument;
use App\Entity\Period;
use App\Entity\Region;
use App\Entity\Target;
use Doctrine\DBAL\Types\BooleanType;
use Doctrine\ORM\EntityRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
// use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType as TypeIntegerType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class MonumentType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name', TextType::class)
            ->add('description', TextareaType::class)
            ->add('address', TextType::class)
            // ->add('city', TextType::class)
            ->add('createdAt', DateType::class, [
                'disabled' => true,
                'format' => 'dd-MM-yyyy',
            ])
            ->add('latitude', NumberType::class, [
                'scale' => 10,
            ])
            ->add('longitude', NumberType::class, [
                'scale' => 10,
            ])
            ->add('updatedAt', DateType::class, [
                'disabled' => true,
                'label' => 'Mise à jour le',
                'format' => 'dd-MM-yyyy'
            ])
            ->add('available', TypeIntegerType::class)
            ->add('region', EntityType::class, [
                'class' => Region::class,
                'query_builder' => function (EntityRepository $er) {
                    return $er->createQueryBuilder('r')
                        ->orderBy('r.name', 'ASC');
                },
                'label' => 'Région',
                'placeholder' => 'Choissez une région',
            ])
            ->add('category', EntityType::class, [
                'class' => Category::class,
                'query_builder' => function (EntityRepository $er) {
                    return $er->createQueryBuilder('c')
                        ->orderBy('c.name', 'ASC');
                },
                'label' => 'Catégorie',
                'placeholder' => 'Choissez une catégorie',
            ])
            // ->add('period', EntityType::class, [
            //     'class' => Period::class,
            //     'label' => 'Période',
            // ])
            ->add('target', EntityType::class, [
                'class' => Target::class,
                'query_builder' => function (EntityRepository $er) {
                    return $er->createQueryBuilder('t')
                        ->orderBy('t.name', 'ASC');
                },
                'label' => 'Publique visée',
                'placeholder' => 'Choissez un publique visée',
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Monument::class,
        ]);
    }
}
