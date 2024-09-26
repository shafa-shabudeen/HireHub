<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          '5AQXkv23G/X0g[78GYS*>rj>7DXoij!5 d9L)(c3F/&h}0v[&3/=>X;z9Ug[3u_0' );
define( 'SECURE_AUTH_KEY',   'FA^soD$Ca*?N NA_58N=A3u#a95,|eNP_C<Gi/HOFNg|KKFCA?xL5*YkfDh6^f_2' );
define( 'LOGGED_IN_KEY',     'POb>Pnogl)H+6>czWJ3R..2qt-WJq$o0:/B_FcBzy1}&(*m}-9NY.)43r^GD`C/)' );
define( 'NONCE_KEY',         '9_+TdFSx#SG/N.jSfvJcSJg,~p[5Q8wu&LmPemOrnG@R!F rmvid~8#Lu?%_;`Wq' );
define( 'AUTH_SALT',         'RWJ/i0p;X&#8+p5DtWy)7LEiVT=T[$BHAZ#o/x&;iVIi=Rq1W7>I)5y}_C%@yBQX' );
define( 'SECURE_AUTH_SALT',  ' [75|Go$jf/!kQ5DUl9,wL(:KLoQTaydp`aWRYp?;2#9~U41He2#]uI;A[esVR?i' );
define( 'LOGGED_IN_SALT',    '4(&lx%q:QZc:oZTZ$([4wyC|..qP;ROMt%0?i0iV]-n+1O>+iU_lJgB1S*v`t}6`' );
define( 'NONCE_SALT',        'J$`U)8Fle2G<T3R[rM.>Ef~#Wr[kRkHN75BdR9l6-ZKnGUCx:~4airR ?Eo+-dP7' );
define( 'WP_CACHE_KEY_SALT', 'WOyZ1Wbp~?ZNYx1S8(+<rg3BazRmkS`=L7T?!~+bs? xWnzM5tI=+*4<dY-Z!Y-@' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

define( 'WP_ENVIRONMENT_TYPE', 'local' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
