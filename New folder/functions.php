<?php
// Enqueue custom CSS
function job_dashboard_enqueue_styles() {
    wp_enqueue_style('job-dashboard-style', get_stylesheet_uri());
}
add_action('wp_enqueue_scripts', 'job_dashboard_enqueue_styles');

// Register custom post types and user roles here...
?>
