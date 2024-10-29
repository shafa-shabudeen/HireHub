<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php wp_title(); ?></title>
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<header>
    <nav>
        <a href="<?php echo home_url(); ?>">Home</a>
        <a href="<?php echo get_permalink(get_page_by_path('employer-dashboard')); ?>">Employer Dashboard</a>
        <a href="<?php echo get_permalink(get_page_by_path('jobseeker-dashboard')); ?>">Job Seeker Dashboard</a>
    </nav>
</header>
