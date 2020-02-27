<?php

namespace App\Form;

use App\Entity\Monument;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class MonumentType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name')
            ->add('city')
            ->add('adress')
            ->add('description')
            ->add('thematiques')
            ->add('likes')
            ->add('dislikes')
            ->add('createdAt')
            ->add('updatedAt')
            ->add('region')
            ->add('status')
            ->add('thematic')
            ->add('period')
            ->add('target')
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Monument::class,
        ]);
    }
}
