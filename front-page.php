<?php
/**
 *	The template for displaying the front page.
 *
 *	@package WordPress
 *	@subpackage illdy
 */


get_header();


if( get_option( 'show_on_front' ) == 'posts' ): ?>

	<div class="container">
		<div class="row">
			<div class="col-sm-7">
				<section id="blog">
					<?php do_action( 'illdy_above_content_after_header' ); ?>
					<?php
					if( have_posts() ):
						while( have_posts() ):
							the_post();
							get_template_part( 'template-parts/content', get_post_format() );
						endwhile;
					else:
						get_template_part( 'template-parts/content', 'none' );
					endif;
					?>
					<?php do_action( 'illdy_after_content_above_footer' ); ?>
				</section><!--/#blog-->
			</div><!--/.col-sm-7-->
			<?php get_sidebar(); ?>
		</div><!--/.row-->
	</div><!--/.container-->

<?php
else:

	$sections_order_first_section = get_theme_mod( 'illdy_general_sections_order_first_section', 1 );
	$sections_order_second_section = get_theme_mod( 'illdy_general_sections_order_second_section', 2 );
	$sections_order_third_section = get_theme_mod( 'illdy_general_sections_order_third_section', 3 );
	$sections_order_fourth_section = get_theme_mod( 'illdy_general_sections_order_fourth_section', 4 );
	$sections_order_fifth_section = get_theme_mod( 'illdy_general_sections_order_fifth_section', 5 );
	$sections_order_sixth_section = get_theme_mod( 'illdy_general_sections_order_sixth_section', 6 );
	$sections_order_seventh_section = get_theme_mod( 'illdy_general_sections_order_seventh_section', 7 );
	$sections_order_eighth_section = get_theme_mod( 'illdy_general_sections_order_eighth_section', 8 );

    if( $sections_order_first_section ):
        illdy_sections_order( $sections_order_first_section );
    endif;

	if( have_posts() ):
		while( have_posts() ): the_post();
			$static_page_content = get_the_content();
			if ( $static_page_content != '' ) : ?>
				<section class="front-page-section" id="static-page-content">
					<div class="section-header">
						<div class="container">
							<div class="row">
								<div class="col-sm-12">
									<h3><?php the_title(); ?></h3>
								</div><!--/.col-sm-12-->
							</div><!--/.row-->
						</div><!--/.container-->
					</div><!--/.section-header-->
					<div class="section-content">
						<div class="container-fluid">
							<div class="row">
								<div class="col-sm-10 col-sm-offset-1">
									<?php echo $static_page_content; ?>
								</div>
							</div>
						</div>
					</div>
				</section>
			<?php endif;
		endwhile;
	endif;


    /* SECTION ARTISAN POURQUOI REJOINDRE CE RESEAU */

    $arrayPosts = array(44, 2, 11,40, 42);
    foreach ($arrayPosts as $postId) {
        $currentPost = get_post($postId);

        $currentTitle = get_the_title($currentPost);
        $currentContent = apply_filters('the_content', $currentPost->post_content);

        if ( $currentTitle != '' ) : ?>
            <section class="front-page-section" id="<?php echo $currentPost->post_name; ?>">
                <div class="section-header">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-12">
                                <h3><?php echo $currentTitle; ?></h3>
                            </div><!--/.col-sm-12-->
                        </div><!--/.row-->
                        <div class="row">
                            <div class="col-sm-10 col-sm-offset-1">
                                <?php echo $currentContent; ?>
                            </div>
                        </div>
                    </div><!--/.container-->
                </div><!--/.section-header-->
            </section>

            <?php if ($postId == 11) { ?>
                <section id="tarif" class="front-page-section" style="background-image: url(/wp-content/uploads/2016/10/OB823N0.jpg);">
                    <div class="tarif-overlay"></div>
                    <div class="container">
                        <div class="row inline-columns">
                            <div id="tarif_1" class="col-sm-4">
                                <span class="description">Création de votre vitrine personnelle</span>
                                <span class="number">69 €</span>
                            </div>
                            <div id="tarif_2" class="col-sm-4">
                                <span class="description">Tarif mensuel</span>
                                <span class="number">24,90 €</span>
                            </div>
                        </div><!--/.row-->
                    </div><!--/.container-->
                </section>
            <?php } ?>



        <?php endif;
    }

    if( $sections_order_second_section ):
		illdy_sections_order( $sections_order_second_section );
	endif;

	if( $sections_order_third_section ):
		illdy_sections_order( $sections_order_third_section );
	endif;

	if( $sections_order_fourth_section ):
		illdy_sections_order( $sections_order_fourth_section );
	endif;

	if( $sections_order_fifth_section ):
		illdy_sections_order( $sections_order_fifth_section );
	endif;

	if( $sections_order_sixth_section ):
		illdy_sections_order( $sections_order_sixth_section );
	endif;
	
	if( $sections_order_seventh_section ):
		illdy_sections_order( $sections_order_seventh_section );
	endif;

	if( $sections_order_eighth_section ):
		illdy_sections_order( $sections_order_eighth_section );
	endif;
endif;

get_footer(); ?>