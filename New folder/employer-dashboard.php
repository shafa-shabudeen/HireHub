<?php
/*
Template Name: Employer Dashboard
*/
get_header();
?>

<div class="container">
    <?php if (is_user_logged_in() && current_user_can('employer')) : ?>
        <h1>Employer Dashboard</h1>
        <p>Welcome to your dashboard! Post and manage job listings below.</p>
        
        <!-- Job Post Form -->
        <form action="<?php echo esc_url(admin_url('admin-post.php')); ?>" method="POST">
            <input type="text" name="job_title" placeholder="Job Title" required>
            <textarea name="job_description" placeholder="Job Description" rows="5" required></textarea>
            <button type="submit">Post Job</button>
            <input type="hidden" name="action" value="post_job">
        </form>
    <?php else : ?>
        <p>You must be logged in as an employer to view this page.</p>
    <?php endif; ?>
</div>

<?php
get_footer();
