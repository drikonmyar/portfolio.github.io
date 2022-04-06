<!doctype html>
<html lang="en">

<head>

    <script async src="https://www.googletagmanager.com/gtag/js?id=G-J3R97FCKD1"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());

        gtag('config', 'G-J3R97FCKD1');
    </script>

    <meta charset="utf-8">

    <link rel="stylesheet" href="./css/bootstrap.min.css">
    <link rel="stylesheet" href="./style.css">
    <link rel="stylesheet" href="./css/all.min.css">

    <title>Portfolio | Nabyendu Ojha</title>
    <link rel="icon" href="./logos/tabicon.webp">
</head>

<body onload="pingMe()">

    <?php
        include_once("det.php")
    ?>

    <div id="anim">

        <div id="boxes-anim">
            <div class="box-anim">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div class="box-anim">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div class="box-anim">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div class="box-anim">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>

    </div>

    <section class="header fixed-top">
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container-fluid">
                <div class="navbar-brand"><a href="index.php"><img src="./logos/text.webp" alt=""></a></div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <div class="mx-auto"></div>
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="index.php">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#goto-about">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#goto-education">Education</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#goto-trainings">Training</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#goto-skills">Expertise</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#goto-projects">Leisure</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#goto-hobby">Interest</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#goto-contact">Contact</a>
                        </li>


                    </ul>

                </div>
            </div>
        </nav>
    </section>

    <section class="home">
        <div class="home-background">
            <div class="home-content">
                <div class="home-text">
                    <h3>Hi, my name is <span class="badge bg-dark"
                            style="text-transform: uppercase; color: #ffd500;">Nabyendu Ojha</span> and I'm a <span
                            class="badge bg-dark" style="text-transform: uppercase; color: #ffd500;">Graduate Civil
                            Engineer</span></h3>
                </div>
                <div id="green-line"></div>
            </div>
            <div class="box">
                <div class="nav-wrapper">
                    <div class="dots-wrapper">
                        <div id="dot-1" class="browser-dot"></div>
                        <div id="dot-2" class="browser-dot"></div>
                        <div id="dot-3" class="browser-dot"></div>
                    </div>

                    <ul id="navigation">
                        <li><a href="./pdfs/Resume-Nabyendu_Ojha.pdf" target="_blank">Get CV</a></li>
                    </ul>
                </div>
                <div class="box-text">
                    <div class="box-intro">Dont let your <span style="color:rgb(197, 0, 0)">degree</span> decide your
                        <span style="color:#0000FF">future</span>
                    </div>

                </div>
            </div>
        </div>
    </section>

    <section class="about" id="goto-about">
        <div class="about-content">
            <div class="about-heading">
                <div class="about-heading-text"><span style="color: #000000;">About me</span></div>
                <div id="about-heading-greenline"></div>
            </div>
            <div class="about-wrapper">
                <div class="about-pic">
                    <img src="./pics/me.webp" alt="">
                </div>
                <div class="about-description">
                    <span style="font-weight: bold; font-size: large;">This is Nabyendu Ojha</span>
                    <hr>
                    <p>Currently working as a Computer Engineer in an Indian MNC. Though I've completed my
                        graduation in Civil Engineering, I'm passionate towards computer & related technologies and want
                        to build my career in this field only. I'm trained in Java, DBMS & ABAP. Acquired knowledge on
                        C++ & Python as
                        well. I'm interested in android development and data science. I've gained some skills in
                        HTML, CSS & JS surfing the internet and the demo is in front of you :)</p>
                    <div class="d-grid gap-2 about-button">
                        <a href="./pdfs/Resume-Nabyendu_Ojha.pdf" target="_blank" class="btn btn-primary">Download CV
                            &nbsp;<i class="fa-solid fa-download"></i></a>

                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="education" id="goto-education">
        <div class="education-content">
            <div class="about-heading">
                <div class="about-heading-text"><span style="color: #000000;">Educations & Qualifications</span></div>
                <div id="about-heading-greenline"></div>
            </div>
            <div class="education-wrapper">
                <div class="edu-container">
                    <div class="grid-educontainer">
                        <div class="grid-eduitem gl"><img class="left-logo" src="./logos/jgeclogo.webp" alt=""></div>
                        <div class="grid-eduitem gt"><span class="edu-head"><a href="https://jgec.ac.in/"
                                    target="_blank">Jalpaiguri Government Engineering College</a></span>
                            Jalpaiguri, India
                            <div class="edu-det">Qualification: B.Tech (Civil)<br>Passing Year: 2021<br>Board: MAKAUT
                                (Autonomous)</div>
                        </div>
                    </div>
                    <div class="grid-educontainer">
                        <div class="grid-eduitem gl mkci-exception"><img class="mid-logo" src="./logos/mkcilogo.webp"
                                alt=""></div>
                        <div class="grid-eduitem gt"><span class="edu-head"><a
                                    href="https://www.facebook.com/pages/category/Community/Mahiary-Kundu-Chowdhury-Institution-353140688171387/"
                                    target="_blank">Mohiary Kundu Chowdhury Institution</a></span>
                            Howrah, India
                            <div class="edu-det">Qualification: Higher Secondary (10+2)<br>Passing Year: 2017<br>Board:
                                WBCHSE</div>
                        </div>
                    </div>
                    <div class="grid-educontainer">
                        <div class="grid-eduitem gl"><img class="right-logo" src="./logos/rkmvlogo.webp" alt=""></div>
                        <div class="grid-eduitem gt"><span class="edu-head"><a href="https://www.rkmvmidnapore.org/"
                                    target="_blank">Ramakrishna Mission Vidyabhavan</a></span>
                            Midnapore, India
                            <div class="edu-det">Qualification: Secondary (10th)<br>Passing Year: 2015<br>Board: WBBSE
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="trainings" id="goto-trainings">
        <div class="trainings-content">
            <div class="about-heading">
                <div class="about-heading-text"><span style="color: #000000;">Trainings & Internships</span></div>
                <div id="about-heading-greenline"></div>
            </div>
            <div class="trainings-wrapper">


                <div class="courses-container">
                    <div class="course-odd">
                        <div class="course-preview">
                            <p style="text-transform: uppercase;">Course</p>
                            <h5>Google IT Support</h5>
                            <p>From: 23/08/2021 To: 07/02/2022</p>
                        </div>
                        <div class="course-info">
                            <h6>Description</h6>
                            <p>Learnt about computer networking, operating systems, IT security, IT infrastructure
                                services, IT technical support process.</p>
                        </div>
                        <div class="course-preview">
                            <p style="text-transform: uppercase;">Organizer</p>
                            <h5><a href="https://www.coursera.org/" target="_blank">Coursera</a></h5>
                            <p>Mode: Virtual<a href="./pdfs/googleit-coursera.pdf" target="_blank"><img
                                        src="./logos/pdfimg.webp" alt=""></a></p>
                        </div>
                    </div>
                </div>

                <div class="courses-container">
                    <div class="course-even">
                        <div class="course-preview">
                            <p style="text-transform: uppercase;">Course</p>
                            <h5>HyperWorks (CAE)</h5>
                            <p>From: 09/11/2020 To: 12/02/2021</p>
                        </div>
                        <div class="course-info">
                            <h6>Description</h6>
                            <p>Worked with Altair HyperWorks to find stress-strain characteristics of various
                                sections for applying loads from different directions.</p>
                        </div>
                        <div class="course-preview">
                            <p style="text-transform: uppercase;">Organizer</p>
                            <h5><a href="https://www.eleation.com/" target="_blank">ELEATION</a></h5>
                            <p>Mode: Virtual<a href="./pdfs/hyperworks-eleation.pdf" target="_blank"><img
                                        src="./logos/pdfimg.webp" alt=""></a>
                            </p>
                        </div>
                    </div>
                </div>

                <div class="courses-container">
                    <div class="course-odd">
                        <div class="course-preview">
                            <p style="text-transform: uppercase;">Course</p>
                            <h5>RCC : Basics & Advanced</h5>
                            <p>From: 01/08/2020 To: 26/08/2020</p>
                        </div>
                        <div class="course-info">
                            <h6>Description</h6>
                            <p>Learnt about site engineering drawings, site hierarchy, SOP for RCC elements, site
                                logistics, WBS, various stakeholders & site safety.</p>
                        </div>
                        <div class="course-preview">
                            <p style="text-transform: uppercase;">Organizer</p>
                            <h5><a href="https://knowhowschools.com/" target="_blank">Know How Schools</a></h5>
                            <p>Mode: Virtual<a href="./pdfs/rcc-knowhowschools.pdf" target="_blank"><img
                                        src="./logos/pdfimg.webp" alt=""></a></p>
                        </div>
                    </div>
                </div>

                <div class="courses-container">
                    <div class="course-even">
                        <div class="course-preview">
                            <p style="text-transform: uppercase;">Course</p>
                            <h5>Python Programming</h5>
                            <p>From: 19/04/2020 To: 31/05/2020</p>
                        </div>
                        <div class="course-info">
                            <h6>Description</h6>
                            <p>Learnt variables in Python, OOPs, SQLite database, to develop a GUI with PyQT and
                                application of Python in various disciplines.</p>
                        </div>
                        <div class="course-preview">
                            <p style="text-transform: uppercase;">Organizer</p>
                            <h5><a href="https://internshala.com/" target="_blank">Internshala</a></h5>
                            <p>Mode: Virtual<a href="./pdfs/python-internshala.pdf" target="_blank"><img
                                        src="./logos/pdfimg.webp" alt=""></a></p>
                        </div>
                    </div>
                </div>

                <div class="courses-container">
                    <div class="course-odd">
                        <div class="course-preview">
                            <p style="text-transform: uppercase;">Course</p>
                            <h5>STAAD.Pro</h5>
                            <p>From: 23/12/2019 To: 22/01/2020</p>
                        </div>
                        <div class="course-info">
                            <h6>Description</h6>
                            <p>Designed 2 RCC structures (G+3 building, Water tank) & 1 steel structure (Transmission
                                tower) and analysed them with suitable loads.</p>
                        </div>
                        <div class="course-preview">
                            <p style="text-transform: uppercase;">Organizer</p>
                            <h5><a href="http://www.msmetoolroomkolkata.com/" target="_blank">MSME Tool Room</a></h5>
                            <p>Place: Bonhooghly, Kolkata<a href="./pdfs/staadpro-msme.pdf" target="_blank"><img
                                        src="./logos/pdfimg.webp" alt=""></a></p>
                        </div>
                    </div>
                </div>

                <div class="courses-container">
                    <div class="course-even">
                        <div class="course-preview">
                            <p style="text-transform: uppercase;">Course</p>
                            <h5>Structural Engineering</h5>
                            <p>From: 17/06/2019 To: 24/06/2019</p>
                        </div>
                        <div class="course-info">
                            <h6>Description</h6>
                            <p>Created different types of truss & analysed them with given loads using Python (Jupyter
                                Notebook).</p>
                        </div>
                        <div class="course-preview">
                            <p style="text-transform: uppercase;">Organizer</p>
                            <h5><a href="http://www.iitkgp.ac.in/department/CE" target="_blank">CE Dept, IITKGP</a></h5>
                            <p>Place: IIT, Kharagpur<a href="./pdfs/structure-iitkgp.pdf" target="_blank"><img
                                        src="./logos/pdfimg.webp" alt=""></a></p>
                        </div>
                    </div>
                </div>

                <div class="courses-container">
                    <div class="course-odd">
                        <div class="course-preview">
                            <p style="text-transform: uppercase;">Course</p>
                            <h5>AutoCAD 3D</h5>
                            <p>From: 24/12/2018 To: 23/01/2019</p>
                        </div>
                        <div class="course-info">
                            <h6>Description</h6>
                            <p>Learnt 3D modeling in Autocad. Also designed plan & elevation of a
                                2-storeyed building, created 3D view and rendered it.</p>
                        </div>
                        <div class="course-preview">
                            <p style="text-transform: uppercase;">Organizer</p>
                            <h5><a href="http://www.msmetoolroomkolkata.com/" target="_blank">MSME Tool Room</a></h5>
                            <p>Place: Bonhooghly, Kolkata<a href="./pdfs/autocad-msme.pdf" target="_blank"><img
                                        src="./logos/pdfimg.webp" alt=""></a></p>
                        </div>
                    </div>
                </div>

                <div class="courses-container">
                    <div class="course-even">
                        <div class="course-preview">
                            <p style="text-transform: uppercase;">Course</p>
                            <h5>Building Analysis</h5>
                            <p>From: 29/09/2018 To: 30/09/2018</p>
                        </div>
                        <div class="course-info">
                            <h6>Description</h6>
                            <p>Learnt Primavera, ETABS & SAP2000. Also completed one project on
                                building analysis & planning.</p>
                        </div>
                        <div class="course-preview">
                            <p style="text-transform: uppercase;">Organizer</p>
                            <h5><a href="https://www.skyfilabs.com/" target="_blank">Skyfi Labs</a></h5>
                            <p>Place: JGEC, Jalpaiguri<a href="./pdfs/buildinganalysis-skyfilabs.pdf"
                                    target="_blank"><img src="./logos/pdfimg.webp" alt=""></a></p>
                        </div>
                    </div>
                </div>

                <div class="courses-container">
                    <div class="course-odd">
                        <div class="course-preview">
                            <p style="text-transform: uppercase;">Course</p>
                            <h5>Advance Excel</h5>
                            <p>From: 21/06/2018 To: 18/07/2018</p>
                        </div>
                        <div class="course-info">
                            <h6>Description</h6>
                            <p>Learnt Excel basics, Excel functions, data visualization & various advanced concepts of
                                Excel.</p>
                        </div>
                        <div class="course-preview">
                            <p style="text-transform: uppercase;">Organizer</p>
                            <h5><a href="https://internshala.com/" target="_blank">Internshala</a></h5>
                            <p>Mode: Virtual<a href="./pdfs/advanceexcel-internshala.pdf" target="_blank"><img
                                        src="./logos/pdfimg.webp" alt=""></a></p>
                        </div>
                    </div>
                </div>


                <div class="courses-container">
                    <div class="course-even">
                        <div class="course-preview">
                            <p style="text-transform: uppercase;">Course</p>
                            <h5>AutoCAD 2D</h5>
                            <p>From: 01/06/2018 To: 12/07/2018</p>
                        </div>
                        <div class="course-info">
                            <h6>Description</h6>
                            <p>Learnt AutoCAD interface, drawing aids & basic objects, complex objects & object
                                editing, blocks & annotations & plotting.</p>
                        </div>
                        <div class="course-preview">
                            <p style="text-transform: uppercase;">Organizer</p>
                            <h5><a href="https://internshala.com/" target="_blank">Internshala</a></h5>
                            <p>Mode: Virtual<a href="./pdfs/autocad-internshala.pdf" target="_blank"><img
                                        src="./logos/pdfimg.webp" alt=""></a></p>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </section>

    <section class="skills" id="goto-skills">
        <div class="skills-content">
            <div class="about-heading">
                <div class="about-heading-text"><span style="color: #000000;">My Expertises</span></div>
                <div id="about-heading-greenline"></div>
            </div>
            <div class="skills-wrapper">
                <div id="left">
                    <ul class="skills-bar-container">
                        <div class="skills-title">
                            <h2><b>
                                    <span class="badge bg-dark"
                                        style="text-transform: uppercase; color: #ffd500;">Civil</span></b></h2>

                        </div>
                        <label>AutoCAD</label>
                        <label class="at-right">95%</label>
                        <!-- <img src="./logos/autodesk-autocad.png" /> -->
                        <span class="percent"></span>
                        <li>
                            <span class="progressbar" id="progress-autocad"></span>
                        </li>

                        <label>STAAD.Pro</label>
                        <label class="at-right">90%</label>
                        <!-- <img src="./logos/staadproimg1.png" height="17px" width="17px" alt=""> -->
                        <span class="percent"></span>
                        <li>
                            <span class="progressbar" id="progress-staadpro"></span>
                        </li>

                        <label>ETABS</label>
                        <label class="at-right">80%</label>
                        <!-- <img src="./logos/etabs1.png" height="16px" width="16px" alt=""> -->
                        <span class="percent"></span>
                        <li>
                            <span class="progressbar" id="progress-etabs"></span>
                        </li>

                        <label>HyperWorks</label>
                        <label class="at-right">70%</label>
                        <!-- <img src="./logos/hyperworks1.png" height="16px" width="16px" alt=""> -->
                        <span class="percent"></span>
                        <li>
                            <span class="progressbar" id="progress-cae"></span>
                        </li>
                    </ul>
                </div>

                <div id="center">
                    <ul class="skills-bar-container">
                        <div class="skills-title">
                            <h2><b>
                                    <span class="badge bg-dark"
                                        style="text-transform: uppercase; color: #ffd500;">Programming</span></b></h2>

                        </div>
                        <label>Java</label>
                        <label class="at-right">85%</label>
                        <!-- <i class="fab fa-java"></i> -->
                        <span class="percent"></span>
                        <li>
                            <span class="progressbar" id="progress-java"></span>
                        </li>

                        <label>Python</label>
                        <label class="at-right">75%</label>
                        <!-- <i class="fab fa-python"></i> -->
                        <span class="percent"></span>
                        <li>
                            <span class="progressbar" id="progress-python"></span>
                        </li>

                        <label>ABAP</label>
                        <label class="at-right">70%</label>
                        <!-- <img src="./logos/abap.png"> -->
                        <span class="percent"></span>
                        <li>
                            <span class="progressbar" id="progress-abap"></span>
                        </li>

                        <label>SQL</label>
                        <label class="at-right">60%</label>
                        <!-- <i class="fa-solid fa-database"></i> -->
                        <span class="percent"></span>
                        <li>
                            <span class="progressbar" id="progress-sql"></span>
                        </li>
                    </ul>
                </div>

                <div id="right">
                    <ul class="skills-bar-container">
                        <div class="skills-title">
                            <h2><b>
                                    <span class="badge bg-dark" style="text-transform: uppercase; color: #ffd500;">Web
                                        Development</span></b></h2>

                        </div>
                        <label>HTML</label>
                        <label class="at-right">70%</label>
                        <!-- <i class="fab fa-html5"></i> -->
                        <span class="percent"></span>
                        <li>
                            <span class="progressbar" id="progress-html"></span>
                        </li>

                        <label>CSS</label>
                        <label class="at-right">50%</label>
                        <!-- <i class="fab fa-css3-alt"></i> -->
                        <span class="percent" id="angular-pourcent"></span>
                        <li>
                            <span class="progressbar" id="progress-css"></span>
                        </li>

                        <label>JavaScript</label>
                        <label class="at-right">35%</label>
                        <!-- <i class="fab fa-js-square"></i> -->
                        <span class="percent" id="angular-pourcent"></span>
                        <li>
                            <span class="progressbar" id="progress-javascript"></span>
                        </li>

                        <label>PHP</label>
                        <label class="at-right">30%</label>
                        <!-- <i class="fab fa-php"></i> -->
                        <span class="percent"></span>
                        <li>
                            <span class="progressbar" id="progress-php"></span>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    </section>

    <section class="projects" id="goto-projects">
        <div class="projects-content">
            <div class="about-heading">
                <div class="about-heading-text"><span style="color: #000000;">Leisure Works</span></div>
                <div id="about-heading-greenline"></div>
            </div>
            <div class="projects-wrapper">
                <div class="grid2-container">

                    <div class="civil-grid">
                        <a href="https://drive.google.com/drive/folders/14nK0PHr1hNls8M7rNZvvSnQAaYlSNz09?usp=sharing"
                            target="_blank">
                            <img class='grid-item grid-item-6 civil-exception' src='./logos/building.webp' alt=''>
                            <p>"Civil Projects"</p>
                        </a>
                    </div>

                    <div class="arduino-grid">
                        <a href="https://drive.google.com/drive/folders/1X1ak0cSy_y8LNB8n8XqoAJmNuih2g8Au?usp=sharing"
                            target="_blank">
                            <img class='grid-item grid-item-12 sap-exception' src='./logos/sap.webp' alt=''>
                            <p>"SAP Projects"</p>
                        </a>
                    </div>



                    <div class="python-grid">
                        <a href="https://drive.google.com/drive/folders/1UHsX8QhlCnnb2F7LqN5Mhvrb1LuEwJGM?usp=sharing"
                            target="_blank">
                            <img class='grid-item grid-item-14 ms-exception' src='./logos/pythonimg.webp' alt=''>
                            <p>"Python Projects"</p>
                        </a>
                    </div>



                    <div class="civilcad-grid">
                        <a href="https://drive.google.com/drive/folders/1piVb0TV739Gm81oG7dC38vk7O0xNJFUp?usp=sharing"
                            target="_blank">
                            <img class='grid-item grid-item-5' src='./pics/civilimg.webp' alt=''>
                            <p>"Civil - CAD 3D"</p>
                        </a>
                    </div>


                    <div class="bccicad-grid">
                        <a href="https://drive.google.com/drive/folders/1SLjXl1kbpC-hAfuLHqPh0TuheH0NdDrZ?usp=sharing"
                            target="_blank">
                            <img class='grid-item grid-item-2' src='./pics/bcciimg.webp' alt=''>
                            <p>"BCCI - CAD 3D"</p>
                        </a>
                    </div>

                    <div class="sketch-grid">
                        <a href="https://drive.google.com/drive/folders/1w1AT1IYs3-GUTpx8bnOquzkfMEespix7?usp=sharing"
                            target="_blank">
                            <img class='grid-item grid-item-9' src='logos/web.webp' alt=''>
                            <p>"Web Projects"</p>
                        </a>
                    </div>

                    <div class="sketch-grid">
                        <a href="https://drive.google.com/drive/folders/1HWHRfj5MnO64LsoU49q8Mp8fATbyy2Mi?usp=sharing"
                            target="_blank">
                            <img class='grid-item grid-item-11 java-exception' src='./logos/java.webp' alt=''>
                            <p>"Java Projects"</p>
                        </a>
                    </div>




                    <div class="sketch-grid">
                        <a href="https://drive.google.com/drive/folders/1qorq0db9t6nhlQXOSgVbSHXDhmPkxS5b?usp=sharing"
                            target="_blank">
                            <img class='grid-item grid-item-3' src='./logos/sketch.webp' alt=''>
                            <p>"Pencil Sketch"</p>
                        </a>
                    </div>


                    <div class="sketch-grid">
                        <a href="https://drive.google.com/drive/folders/1YDJnb7yOfikAYM_2a6H1WGpNdorMlgsM?usp=sharing"
                            target="_blank">
                            <img class='grid-item grid-item-5 iot-exception' src='./logos/iot.webp' alt=''>
                            <p>"IOT Projects"</p>
                        </a>
                    </div>

                    <div class="presentation-grid">
                        <a href="https://drive.google.com/drive/folders/17GgDFIqOhtEqmcoJ_yIwH9qn1HFMUYk0?usp=sharing"
                            target="_blank">
                            <img class='grid-item grid-item-4 civil-exception' src='./logos/presentation.webp' alt=''>
                            <p>"Presentations"</p>
                        </a>
                    </div>





                    <div class="android-grid">
                        <a href="https://drive.google.com/drive/folders/1kPMyE_8sidqoKZaNlp7y0PmQjR21EB5R?usp=sharing"
                            target="_blank">
                            <img class='grid-item grid-item-1 android-exception' src='./logos/android.webp' alt=''>
                            <p>"Android Projects"</p>
                        </a>
                    </div>




                    <div class="jgeccad-grid">
                        <a href="https://drive.google.com/drive/folders/1IuHPrhCYxJ-zjPQCj9pX3mpL1Oh0drZ2?usp=sharing"
                            target="_blank">
                            <img class='grid-item grid-item-8' src='./pics/jgeclogoimg.webp' alt=''>
                            <p>"JGEC - CAD 3D"</p>
                        </a>
                    </div>

                    <div class="ds-grid">
                        <a href="https://drive.google.com/drive/folders/1e0xy8g3eRBFQsWzAtabqt9TI0pQ19Ud7?usp=sharing"
                            target="_blank">
                            <img class='grid-item grid-item-14 ds-exception' src='./logos/datascience.webp' alt=''>
                            <p>"Data Science Projects"</p>
                        </a>
                    </div>




                    <div class="burjcad-grid">
                        <a href="https://drive.google.com/drive/folders/1GGg4IOkyUtxQg02_FNjjbyr28560JHve?usp=sharing"
                            target="_blank">
                            <img class='grid-item grid-item-10' src='./pics/burjimg.webp' alt=''>
                            <p>"Burj Khalifa - CAD 3D"</p>
                        </a>
                    </div>

                    <div class="sketch-grid">
                        <a href="https://drive.google.com/drive/folders/1A9sF5YBeH7hRDEkl-X8hRWOlbBFrpKhD?usp=sharing"
                            target="_blank">
                            <img class='grid-item grid-item-7 cloud-exception' src='./logos/cloud.webp' alt=''>
                            <p>"Cloud Projects"</p>
                        </a>
                    </div>

                    <div class="c-grid">
                        <a href="https://drive.google.com/drive/folders/1C_o1Y0Nfk1dp0yby4ycZAfgDf4FVMZyD?usp=sharing"
                            target="_blank">
                            <img class='grid-item grid-item-14 ms-exception' src='./logos/c++.webp' alt=''>
                            <p>"C++ Projects"</p>
                        </a>
                    </div>




                </div>
            </div>
        </div>
    </section>

    <section class="hobby" id="goto-hobby">
        <div class="hobby-content">
            <div class="about-heading">
                <div class="about-heading-text"><span style="color: #000000;">I'm interested in</span></div>
                <div id="about-heading-greenline"></div>
            </div>
            <div class="hobby-wrapper">
                <div class='diamond diamond1'>
                    <img src="./logos/chessimg.webp" alt="">
                    Chess
                </div>
                <div class='diamond diamond2'>
                    <img src="./logos/geopoliticsimg.webp" alt="">
                    Geopolitics
                </div>
            </div>
        </div>
    </section>

    <section class="contact" id="goto-contact">
        <div class="contact-content">
            <div class="about-heading">
                <div class="about-heading-text"><span style="color: #000000;">Contact me</span></div>
                <div id="about-heading-greenline"></div>
            </div>
            <div class="contact-wrapper">
                <div class="left">
                    <div class="text">
                        Get in Touch</div>
                    <p>Dear visitor! Thanks for your time. I've intentionally blocked access of some documents due to
                        privacy concern. Feel free to contact me in case you want to view any. Kindly provide
                        suggestions for improvement and your valuable feedback. Have a good day.</p>
                    <div class="icons">
                        <div class="row">
                            <i class="fa-solid fa-user-tie"></i>
                            <div class="info">
                                <div class="head"><b>Name</b>
                                </div>
                                <div class="sub-title">
                                    Nabyendu Ojha</div>
                            </div>
                        </div>
                        <div class="row">
                            <i class="fas fa-map-marker-alt"></i>
                            <div class="info">
                                <div class="head">
                                    <b>Address</b>
                                </div>
                                <div class="sub-title">
                                    Howrah, India</div>
                            </div>
                        </div>
                        <div class="row">
                            <i class="fas fa-envelope"></i>
                            <div class="info">
                                <div class="head">
                                    <b>Email</b>
                                </div>
                                <div class="sub-title">
                                    nabyenduojha99@gmail.com</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="right">

                    <form onsubmit="sendEmail(); reset(); return false;">
                        <div class="text">
                            Message me</div>
                        <div class="fields">
                            <div class="field name">
                                <input name="name" type="text" id="form-name" placeholder="Name" required>
                            </div>
                            <div class="field email">
                                <input name="email" type="email" id="form-email" placeholder="Email" required>
                            </div>
                        </div>
                        <div class="field">
                            <input name="subject" type="text" id="form-subject" placeholder="Subject" required>
                        </div>
                        <div class="field textarea">
                            <textarea name="message" id="form-message" cols="30" rows="10" placeholder="Message"
                                required></textarea>
                        </div>
                        <div class="button">
                            <button type="submit">Send message</button>
                        </div>
                    </form>
                </div>

            </div>
            <div class="last-line">
                <h4><a href="https://www.linkedin.com/in/nabyendu-ojha/" target="_blank">Connect with me on Linked <i
                            class="fab fa-linkedin"></i></a></h4>
            </div>
        </div>
    </section>

    <footer>
        <span>Created By <span class="yellow-text">Nabyendu Ojha</span> | <span class="far fa-copyright"></span> 2022
            All rights reserved.</span>
    </footer>

    <script src="https://smtpjs.com/v3/smtp.js"></script>
    <script src="./script.js"></script>

</body>

</html>