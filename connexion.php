<?php
    session_start();
    require_once 'config.php';
    if(isset($_POST['Email']) && isset($_POST['Password']))
    {
        $email= htmlspecialchars($_POST['Email']);
        $password= htmlspecialchars($_POST['Password']);

        $check = $bdd->prepare('SELECT noms, email, password FROM utilisateur WHERE email= ?');
        $check->execute(array($email));
        $data = $check->fetch();
        $row = $check->rowCount();

        if($row == 1)
        {
            if(filter_var($email, FILTER_VALIDATE_EMAIL))
            {
                $password = hash('sha256', $password);
                if($data['Password'] === $password)
                {
                    $_SESSION['user'] = $data['noms'];
                    header('Location:landing.php');

                }else header('Location:index.php?login_err=password');
            }else header('Location:index.php?login_err=email');
        }else header('Location:index.php?login_err=already');
    }else header('Location:index.php');