<?php
/*
Template Name: Job Seeker Dashboard
*/
get_header();
?>

<div class="container">
    <?php if (is_user_logged_in() && current_user_can('job_seeker')) : ?>
        <h1>Job Seeker Dashboard</h1>
        <p>Submit your resume and explore available job listings below.</p>
        
        <!-- Resume Submission Form -->
        <form action="<?php echo esc_url(admin_url('admin-post.php')); ?>" method="POST">
            <input type="text" name="resume_title" placeholder="Resume Title" required>
            <textarea name="resume_description" placeholder="Describe your experience" rows="5" required></textarea>
            <button type="submit">Submit Resume</button>
            <input type="hidden" name="action" value="submit_resume">
        </form>
    <?php else : ?>
        <p>You must be logged in as a job seeker to view this page.</p>
    <?php endif; ?>
</div>

<?php
get_footer();
