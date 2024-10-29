<?php
/*
Template Name: Registration
*/
get_header()
?>

<!DOCTYPE html>
<html>
<body>
<div class="container">
    <form class="form">
        <span class="title">Sign up</span>
        <span class="subtitle">Create a free account with your email.</span>
        <div class="form-container">
            <label for="name">Username</label>
            <input type="text" id="name" name="name" placeholder="Full Name">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Email">
            <label for="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Password">
            <label for="user-type">Register as:</label>
            <label>
                <input type="radio" name="user-type" id="employee" value="employee"> Employee
            </label>
            <label>
                <input type="radio" name="user-type" id="jobseeker" value="jobseeker"> Jobseeker
            </label>
        </div>
        <input type="submit" id="btn" name="btn" value="Sign up">
    </form>
</div>
</body>
</html>
<?php get_footer()?>