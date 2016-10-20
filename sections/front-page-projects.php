<?php
/**
 *	The template for displaying the projects section in front page.
 *
 *	@package WordPress
 *	@subpackage illdy
 */
?>
<?php
if ( current_user_can( 'edit_theme_options' ) ) {
	$general_title = get_theme_mod( 'illdy_projects_general_title', esc_html__( 'Projects', 'illdy' ) );
	$general_entry = get_theme_mod( 'illdy_projects_general_entry', esc_html__( 'You\'ll love our work. Check it out!', 'illdy' ) );
}else{
	$general_title = get_theme_mod( 'illdy_projects_general_title' );
	$general_entry = get_theme_mod( 'illdy_projects_general_entry' );
}

?>

<?php if ( $general_title != '' || $general_entry != '' || is_active_sidebar( 'front-page-projects-sidebar' ) ) { ?>

<section id="projects" class="front-page-section" style="<?php if( !$general_title && !$general_entry ): echo 'padding-top: 0;'; endif; ?>">
	<?php if( $general_title || $general_entry ): ?>
		<div class="section-header">
			<div class="container">
				<div class="row">
					<?php if( $general_title ): ?>
						<div class="col-sm-12">
							<h3><?php echo illdy_sanitize_html( $general_title ); ?></h3>
						</div><!--/.col-sm-12-->
					<?php endif; ?>
					<?php if( $general_entry ): ?>
						<div class="col-sm-10 col-sm-offset-1">
							<p><?php echo illdy_sanitize_html( $general_entry ); ?></p>
						</div><!--/.col-sm-10.col-sm-offset-1-->
					<?php endif; ?>
				</div><!--/.row-->





			</div><!--/.container-->
		</div><!--/.section-header-->
	<?php endif; ?>
	<div class="section-content">
		<div class="container-fluid">

		</div><!--/.container-fluid-->
	</div><!--/.section-content-->
</section><!--/#projects.front-page-section-->

<?php } ?>