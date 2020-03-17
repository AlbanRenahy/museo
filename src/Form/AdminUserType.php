<?php

namespace App\Form;

use App\Entity\User;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\NotBlank;

class AdminUserType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('username', TextType::class)
            ->add('roles', ChoiceType::class, [
                'label' => 'Choissez un ou plusieurs roles',
                'constraints' => [  
                    new NotBlank([
                        'message' => 'Vous êtes obligez d\'attribuer au moin un role.'
                    ])
                ],
                'choices' => [
                    'Administrateur' => 'ROLE_ADMIN_MUSEO',
                    'Modérateur' => 'ROLE_MODERATOR_MUSEO',
                    'Utilisateur' => 'ROLE_USER_MUSEO',
                ],
                'expanded' => true,
                'multiple' => true,
            ])
            ->add('password', HiddenType::class)
            ->add('firstname', TextType::class, [
                'label' => 'Prénom',
                'required' => false,
            ])
            ->add('lastname', TextType::class, [
                'label' => 'Nom de famille',
                'required' => false,
            ])
            ->add('email', EmailType::class, [
                'disabled' => true,
            ])
            ->add('createdAt', DateType::class, [
                'disabled' => true,
                'format' => 'dd-MM-yyyy',
            ])
            ->add('isActive')
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => User::class,
        ]);
    }
}
