<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>

    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>

    <link rel="stylesheet" href="style/style.css">


    <title>ToDo</title>
</head>
<body>
    
<div class="container">

    <section>
        <!--Pocetak Kartica sa opcijama -->
        <div class="cart-options f-center">

            <div class="back-icon f-center" id="backBtn">
                <ion-icon name="chevron-back-outline"></ion-icon> 
            </div>
            
            <div class="content f-center">
                <div class="user-image f-center">
                    <span class="ring-gray"></span>
                    <span class="ring-pink"></span>
                    <img src="img/avatars/avatar.jpg" alt="">
                </div>
        
                <div class="user-info">
                    <h1>Srdjan <br> Grujeskovic</h1>
                </div>
        
                <div class="options">
                    <div class="option-container">
                        <ion-icon name="bookmark-outline"></ion-icon>
                        <h3 id="temp">Templates</h3>
                    </div>
                    <div class="option-container">
                        <ion-icon name="grid-outline"></ion-icon>
                        <h3 id="categories">Categories</h3>
                    </div>
                    <div class="option-container">
                        <ion-icon name="pie-chart-outline"></ion-icon>
                        <h3 id="analitics">Analytics</h3>
                    </div>
        
                </div>
            </div>
        
            <div class="analitics">
        
                <div class="graphic">
        
                </div>
        
                <div class="graphic-info">
                    <h4>Good</h4>
                    <h2>Consistency</h2>
                </div>
        
            </div>
        </div>
        <!--Kraj Kartica sa opcijama -->
    </section>


    <!--Pocetak Kartica za prekrivanje -->
    <section>
        <div class="cart-middle f-center"></div>
    </section>
    <!--Kraj Kartica za prekrivanje -->


    <!--Pocetak Kartica sa ToDo Listom -->
    <div class="cart-list" id="cardList">

        <nav>
            <div class="todo-menu" >
                <div class="menu-left" id="todoMenu">
                    <ion-icon name="reorder-two-outline"></ion-icon>
                    <!-- <ion-icon name="pause-outline"></ion-icon> -->
                </div>
                <div class="menu-right">
                    <ion-icon name="search-outline"></ion-icon>
                    <ion-icon name="notifications-outline"></ion-icon>
                </div>
            </div>
        </nav>
        
        <header>
            <div class="todo-user">
                <h1>What's up, Srdjan!</h1>
            </div>
        </header>
        
        <section>
            <div class="todo-categories">
                <label for="" >Categories</label>

                <div class="todo-containers">
                    <div class="categories-card" id="bussines">
                        <label for="">40 Task</label>
                        <h2>Bussines</h2>
                        <div class="progress-bars">
                            <div class="line-gray"></div>
                             <div class="line-progress-pink"></div> 
                         </div>
                    </div>

                    <div class="categories-card">
                        <label for="">40 Task</label>
                        <h2>Personal</h2>
                        <div class="progress-bars">
                           <div class="line-gray"></div>
                            <div class="line-progress-blue"></div> 
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <!-- Sekcija ToDO lista zadataka -->
        <section>
            <div class="todo-list">
                <label for="" >Today's tasks</label>

                <!-- Jedan Task koji treba da se ponavlja sa WHILE -->
                <div class="todo-single-task">
                    <div class="task-icon">
                        <div class="task-todo" id="todo"></div>
                        <!-- <div class="task-done" id="done"><ion-icon name="checkmark-outline"></ion-icon></div> -->
                    </div>
                    <div class="task-text">
                        <h3>Neki zadatak za danas!</h3>
                    </div>
                </div>
                <!-- Jedan Task koji treba da se ponavlja sa WHILE -->
                <!-- Jedan Task koji treba da se ponavlja sa WHILE -->
                <div class="todo-single-task">
                    <div class="task-icon">
                        <!-- <div class="task-todo" id="todo"></div> -->
                        <div class="task-done" id="done"><ion-icon name="checkmark-outline"></ion-icon></div>
                    </div>
                    <div class="task-text">
                        <h3>Neki zadatak za danas!</h3>
                    </div>
                </div>
                <!-- Jedan Task koji treba da se ponavlja sa WHILE -->
                <!-- Jedan Task koji treba da se ponavlja sa WHILE -->
                <div class="todo-single-task">
                    <div class="task-icon">
                        <div class="task-todo" id="todo"></div>
                        <!-- <div class="task-done" id="done"><ion-icon name="checkmark-outline"></ion-icon></div> -->
                    </div>
                    <div class="task-text">
                        <h3>Neki zadatak za danas!</h3>
                    </div>
                </div>
                <!-- Jedan Task koji treba da se ponavlja sa WHILE -->
                <!-- Jedan Task koji treba da se ponavlja sa WHILE -->
                <div class="todo-single-task">
                    <div class="task-icon">
                        <!-- <div class="task-todo" id="todo"></div> -->
                        <div class="task-done" id="done"><ion-icon name="checkmark-outline"></ion-icon></div>
                    </div>
                    <div class="task-text">
                        <h3>Neki zadatak za danas!</h3>
                    </div>
                </div>
                <!-- Jedan Task koji treba da se ponavlja sa WHILE -->
                <!-- Jedan Task koji treba da se ponavlja sa WHILE -->
                <div class="todo-single-task">
                    <div class="task-icon">
                        <div class="task-todo" id="todo"></div>
                        <!-- <div class="task-done" id="done"><ion-icon name="checkmark-outline"></ion-icon></div> -->
                    </div>
                    <div class="task-text">
                        <h3>Neki zadatak za danas!</h3>
                    </div>
                </div>
                <!-- Jedan Task koji treba da se ponavlja sa WHILE -->


            </div> 
        </section>

        <!-- Start of Add Task button -->
        <section>
            <div class="addBtn" id="addBtn">
                <ion-icon name="add-outline"></ion-icon>
            </div>
        </section>
        <!-- End of Add Task button -->
    </div>
    <!--Kraj Kartica sa ToDo Listom -->

    <!-- Start forma za dodavanje taskova -->
    <section>
        <div class="task-form-overlay" id="taskOverlay">
            <div class="task-content">
                <ion-icon name="close-outline" id="closeTask"></ion-icon>
                <label for="">Add Task</label>
                <div class="form">
                    <input type="text" id="taskTitle" placeholder="Task Name">
                    <textarea name="" id="taskText" cols="2" rows="1" placeholder="Task Text"></textarea>
                    <select name="" id="taskKategorija">
                        <option value="">Odaberi kategoriju zadatka</option>
                        <option value="1">Licni</option>
                        <option value="2">Poslovni</option>
                    </select>
                </div>
                <div class="task-buttons">
                    <button type='button' class="addTask" id="addTask">Add Task</button>
                    <!-- <button class="resetTask" id="resetTask">Reset Task</button> -->
                </div>
            </div> 
        </div>
    </section>
    <!-- End forma za dodavanje taskova -->

    <!-- DIV za odgovore o akcojama -->
    <div class="odgovor" id="odgovor"></div>


</div>

    <script src="js/functionality.js"></script>
    <script src="js/ajax_add.js"></script>
    <!-- <script src="js/message.js"></script> -->
</body>
</html>