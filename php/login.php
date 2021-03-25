<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
    <title>Home - Visionary</title>
    <link rel="stylesheet" href="../assets/login/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Cabin:700">
    <link rel="stylesheet" href="../assets/login/fonts/font-awesome.min.css">
    <link rel="stylesheet" href="../assets/login/fonts/ionicons.min.css">
    <link rel="stylesheet" href="../assets/login/css/Login-Form-Dark.css">
</head>

<body id="page-top">
    <nav class="navbar navbar-light navbar-expand-md fixed-top" id="mainNav">
        <div class="container"><a class="navbar-brand js-scroll-trigger" href="../index.html">Visionary</a><button data-toggle="collapse" class="navbar-toggler navbar-toggler-right" data-target="#navbarResponsive" type="button" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation" value="Menu"><i class="fa fa-bars"></i></button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item nav-link js-scroll-trigger"></li>
                    <li class="nav-item nav-link js-scroll-trigger"><a class="nav-link js-scroll-trigger" href="/php/register.php#register">sign up</a></li>
                    <li class="nav-item nav-link js-scroll-trigger"><a class="nav-link js-scroll-trigger" href="#login">login</a></li>
                </ul>
            </div>
        </div>
    </nav>
    <header class="masthead" style="background-image:url('../assets/login/img/intro-bg.jpg');">
        <div class="intro-body">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 mx-auto">
                        <h1 class="brand-heading">Visionary</h1>
                        <p class="intro-text">A search engine to find information on people.</p><a class="btn btn-link btn-circle" role="button" href="#login"><i class="fa fa-angle-double-down animated"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <section class="text-center content-section" id="login" style="padding-top: 0px;">
        <section class="login-dark">
            <form method="post" action="loginInput.php">
                <h2 class="sr-only">Login Form</h2>
                <div class="illustration"><i class="icon ion-ios-locked-outline"></i></div>
                <div class="form-group"><input class="form-control" type="text" name="username_input" placeholder="Username"></div>
                <div class="form-group"><input class="form-control" type="password" name="password_input" placeholder="Password"></div>
                <div class="form-group"><button class="btn btn-primary btn-block" type="submit">Log In</button></div>
            </form>
        </section>
    </section>
    <footer>
        <div class="container text-center">
            <p>Copyright ©&nbsp;Visionary 2021</p>
        </div>
    </footer>
    <script src="../assets/login/js/jquery.min.js"></script>
    <script src="../assets/login/bootstrap/js/bootstrap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js"></script>
    <script src="../assets/login/js/grayscale.js"></script>
</body>

</html>
