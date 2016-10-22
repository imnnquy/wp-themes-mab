<?php
/**
 *    The template for dispalying the footer.
 *
 * @package    WordPress
 * @subpackage illdy
 */
?>
    <?php

if ( current_user_can( 'edit_theme_options' ) ) {
	$display_copyright = get_theme_mod( 'illdy_general_footer_display_copyright', 1 );
	$footer_copyright  = get_theme_mod( 'illdy_footer_copyright', __( '&copy; Copyright 2016. All Rights Reserved.', 'illdy' ) );
	$img_footer_logo   = get_theme_mod( 'illdy_img_footer_logo', esc_url( get_template_directory_uri() . '/layout/images/footer-logo.png' ) );
} else {
	$display_copyright = get_theme_mod( 'illdy_general_footer_display_copyright' );
	$footer_copyright  = get_theme_mod( 'illdy_footer_copyright' );
	$img_footer_logo   = get_theme_mod( 'illdy_img_footer_logo' );
}
?>
        
        <!--/#footer-->
        <?php wp_footer(); ?>
        </body>

        </html>
