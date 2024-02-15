<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<div class="login_form">
        <form action="inscription_traitement.php" method="post">
            <h2 class="text-center">Connexion</h2>
            <div class="form-group">
                <input type="Email" name="Email" class="form-control" placeholder="Email" required="required" autocomplete="off">
            </div>
            <div class="form-group">
                <input type="Password" name="Password" class="form-control" placeholder="Mot de passe" required="required" autocomplete="off">
            </div>
            <div class="form-group">
                <input type="Password" name="Password_retype" class="form-control" placeholder="Resaisir le mot de passe" required="required" autocomplete="off">
            </div>
            <div class="form-group">
                <button type="submit" class="btn btn-primary btn-block">Connexion</button>
            </div>
        </form>
        <p class="text-center"><a href="inscription.php">Inscription</a></p>
        </div>
        <style>
            body{
                background-color: grey;
            }
            .login_form{
                width: 340px;
                margin: 50px auto;
            }

            .login_form form{
                margin-bottom:15px;
                background:#f7f7f7;
                box-shadow: 0px 2px 2px rgba(0,0,0,0.3);
                padding: 30px; 
            }

            .login_form h2{
                margin:0 0 15px;
            }
            .form-control, .btn{
                min-height:38px;
                border-radius:2px;
            }

            .btn{
                font-size:15px;
                font-weight:bold;
            }
        </style>
</body>
</html>