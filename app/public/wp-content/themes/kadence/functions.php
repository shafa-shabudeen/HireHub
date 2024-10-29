<?php
/**
 * Kadence functions and definitions
 *
 * This file must be parseable by PHP 5.2.
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package kadence
 */

define( 'KADENCE_VERSION', '1.2.9' );
define( 'KADENCE_MINIMUM_WP_VERSION', '6.0' );
define( 'KADENCE_MINIMUM_PHP_VERSION', '7.4' );

// Bail if requirements are not met.
if ( version_compare( $GLOBALS['wp_version'], KADENCE_MINIMUM_WP_VERSION, '<' ) || version_compare( phpversion(), KADENCE_MINIMUM_PHP_VERSION, '<' ) ) {
	require get_template_directory() . '/inc/back-compat.php';
	return;
}
// Include WordPress shims.
require get_template_directory() . '/inc/wordpress-shims.php';

// Load the `kadence()` entry point function.
require get_template_directory() . '/inc/class-theme.php';

// Load the `kadence()` entry point function.
require get_template_directory() . '/inc/functions.php';

// Initialize the theme.
call_user_func( 'Kadence\kadence' );
<<<<<<< HEAD
=======

function enqueue_registration_styles(){
	if(is_page_template('registration.php')){
		wp_enqueue_style('registration-style',get_template_directory_uri() .'/assets/css/registration-style.css',array(),'1.0.0','all' );
	}
}
add_action('wp_enqueue_scripts', 'enqueue_registration_styles');


function enqueue_login_styles(){
	if(is_page_template('login.php')){
		wp_enqueue_style('login-style',get_template_directory_uri() .'/assets/css/login-style.css',array(),'1.0.0','all' );
	}
}
add_action('wp_enqueue_scripts', 'enqueue_login_styles');
>>>>>>> bd06bd206965cc56e0274c0dcf857ad87f3e6bf4
