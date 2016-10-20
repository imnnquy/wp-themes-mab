<?php
/**
 *    The template for displaying the bottom header section in front page.
 *
 * @package    WordPress
 * @subpackage illdy
 */
?>
<?php
if ( current_user_can( 'edit_theme_options' ) ) {
	$first_row_from_title  = get_theme_mod( 'illdy_jumbotron_general_first_row_from_title', __( 'Clean', 'illdy' ) );
	$second_row_from_title = get_theme_mod( 'illdy_jumbotron_general_second_row_from_title', __( 'Slick', 'illdy' ) );
	$third_row_from_title  = get_theme_mod( 'illdy_jumbotron_general_third_row_from_title', __( 'Pixel Perfect', 'illdy' ) );
	$entry                 = get_theme_mod( 'illdy_jumbotron_general_entry', __( 'lldy is a great one-page theme, perfect for developers and designers but also for someone who just wants a new website for his business. Try it now!', 'illdy' ) );
	$first_button_title    = get_theme_mod( 'illdy_jumbotron_general_first_button_title', __( 'Learn more', 'illdy' ) );
	$first_button_url      = get_theme_mod( 'illdy_jumbotron_general_first_button_url', esc_url( '#' ) );
	$second_button_title   = get_theme_mod( 'illdy_jumbotron_general_second_button_title', __( 'Download', 'illdy' ) );
	$second_button_url     = get_theme_mod( 'illdy_jumbotron_general_second_button_url', esc_url( '#' ) );
} else {
	$first_row_from_title  = get_theme_mod( 'illdy_jumbotron_general_first_row_from_title', get_the_title() );
	$second_row_from_title = get_theme_mod( 'illdy_jumbotron_general_second_row_from_title' );
	$third_row_from_title  = get_theme_mod( 'illdy_jumbotron_general_third_row_from_title' );
	$entry                 = get_theme_mod( 'illdy_jumbotron_general_entry' );
	$first_button_title    = get_theme_mod( 'illdy_jumbotron_general_first_button_title' );
	$first_button_url      = get_theme_mod( 'illdy_jumbotron_general_first_button_url' );
	$second_button_title   = get_theme_mod( 'illdy_jumbotron_general_second_button_title' );
	$second_button_url     = get_theme_mod( 'illdy_jumbotron_general_second_button_url' );
}

if ( $first_row_from_title || $second_row_from_title || $third_row_from_title || $entry || $first_button_title || $second_button_title ) {

	?>
	<div class="bottom-header front-page">
		<div class="container">
			<div class="row">
			<div class="col-md-12"><button class="btn btn-default button-tele-app">Télécharger APP</button></div>
			</div><!--/.row-->
		</div><!--/.container-->
	</div><!--/.bottom-header.front-page-->

<?php } ?>