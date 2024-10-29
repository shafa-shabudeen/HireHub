<?php
/*
Template Name: Login
*/
get_header()
?>

<!DOCTYPE html>
<html>
<body>
<div class="container">
    <form class="form">
        <span class="title">Login</span>
        <span class="subtitle">Explore you career.</span>
        <div class="form-container">
            <label for="name">Username</label>
            <input type="text" id="name" name="name" placeholder="Full Name">
            <label for="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Password">
           
        </div>
        <input type="submit" id="btn" name="btn" value="Login">
    </form>
</div>
</body>
</html>
<?php get_footer()?>