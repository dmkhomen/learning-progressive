<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Progressive Web Apps</title>
    <link rel="stylesheet" href="css/app.css">
</head>
<body>
    <div class="loader">
        <div class="loader-text">Loading...</div>
        <div class="progress">
            <div class="progress-bar progress-bar-danger progress-bar-striped active" role="progressbar" style="width: 100%"></div>
        </div>
    </div>
    <header>
        <nav class="navbar navbar-default navbar-fixed-top" role="navigation">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#collapse">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="#slideshow">
                        <h1>Wisdom <span>Pet Medicine</span></h1>
                    </a>
                </div>
                <div class="collapse navbar-collapse" id="collapse">
                    <ul class="nav navbar-nav navbar-right">
                        <li class="active"><a href="#slideshow">Home</a></li>
                        <li><a href="#adoption">Adoption</a></li>
                        <li><a href="#appointments">Appointments</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        <script id="slideshow-template" type="text/x-handlebars-template">
            <div id="slideshow" class="carousel fade" data-ride="carousel">
                <div class="carousel-inner">
                    {{#each slideshow}}
                    {{#if @first}}
                    <div class="item active"><img src="images/pets/{{filename}}.jpg" alt="{{pet}} photo"></div>
                    {{else}}
                    <div class="item"><img src="images/pets/{{filename}}.jpg" alt="{{pet}} photo"></div>
                    {{/if}}
                    {{/each}}
                </div>
                <a href="#slideshow" class="left carousel-control" role="button" data-slide="prev"></a>
                <a href="#slideshow" class="right carousel-control" role="button" data-slide="next"></a>
            </div>
        </script>
        <div id="slideshow-content"></div>
    </header>
    <main>
        <div class="page" id="adoption">
            <div class="container">
                <h2 class="page-headline">Adoptions</h2>
                <p>These loving and deserving pets need a home. Please help us find a place for them. Click on their photo for more information.</p>
                <script id="adoption-template" type="text/handlebars-template">
                {{#each adoption}}
                <div class="col-md-2 col-sm-3 col-xs-4 openpetmodal" data-toggle="modal" data-target="#wisdompetmodal" data-petname="{{pet}}" data-petbreed="{{breed}}" data-petowner="{{owner}}" data-petinfo={{description}} data-petimage="{{filename}}">
                <img class="img-circle" src="images/pets/{{filename}}_tn.jpg" alt="{{pet}} photo"/>
                </div>


                {{/each}}
                </script>
                <div id="adoption-content"></div>
            </div><!-- container -->
        </div><!-- page-adoption -->
        <div class="page" id="appointments">
            <div class="container">
                <h2 class="page-headline">Appointments</h2>
                <p>Here's the pets that came in this week for an appointment. Click on a pet's photo for more info.</p>
            </div><!-- container -->
        </div><!-- page-appointments -->
    </main>
    <div class="modal fade" id="wisdompetmodal" tabindex="-1" role="dialog" aria-labelledby="petModal">
        <div class="modal-dialog" data-dismiss="modal" aria-label="close" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="close" role="document"><span aria-hidden="true">&times;</span></button>
                    <h2 class="modal-title modal-petname"></h2>
                    <div class="modal-petbreed"></div>
                </div>
                <div class="modal-body">
                    <img class="img-responsive modal-petimage">
                    <p class="modal-petinfo"></p>
                </div>
            </div>
        </div>
    </div>
    <script src="js/app.js"></script>
</body>
</html>
