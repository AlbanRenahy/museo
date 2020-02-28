<?php

namespace App\Form;

use App\Entity\Monument;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\NotBlank;

class MonumentType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name', TextType::class, [
                'constraints' => new NotBlank,
                'label' => "Nom du Monument"
            ])
            ->add('city', TextType::class, [
                'constraints' => new NotBlank,
                'label' => "Ville ou se situe le monument"
            ])
            ->add('adress', TextType::class, [
                'constraints' => new NotBlank,
                'label' => "Adresse du Monument"
            ])
            ->add('description', TextareaType::class, [
                'constraints' => new NotBlank,
                'label' => "Description du Monument"
            ])
            // ->add('thematiques')
            // ->add('likes')
            // ->add('dislikes')
            // ->add('createdAt')
            // ->add('updatedAt')
            // ->add('region')
            // ->add('status')
            // ->add('thematic')
            // ->add('period')
            // ->add('target')
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Monument::class,
        ]);
    }
}
