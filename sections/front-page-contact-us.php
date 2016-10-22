<?php
/**
 *    The template for displaying the contact us section in front page.
 *
 * @package    WordPress
 * @subpackage illdy
 */
?>
<?php
if ( current_user_can( 'edit_theme_options' ) ) {

	$contact_bar_facebook_url  = get_theme_mod( 'illdy_contact_bar_facebook_url', esc_url( '#' ) );
	$contact_bar_twitter_url   = get_theme_mod( 'illdy_contact_bar_twitter_url', esc_url( '#' ) );
	$contact_bar_linkedin_url  = get_theme_mod( 'illdy_contact_bar_linkedin_url', esc_url( '#' ) );
	$contact_bar_googlep_url   = get_theme_mod( 'illdy_contact_bar_googlep_url', esc_url( '#' ) );
	$contact_bar_youtube_url   = get_theme_mod( 'illdy_contact_bar_youtube_url', esc_url( '#' ) );
	$contact_bar_vimeo_url     = get_theme_mod( 'illdy_contact_bar_vimeo_url', esc_url( '#' ) );
	$contact_bar_pinterest_url = get_theme_mod( 'illdy_contact_bar_pinterest_url', esc_url( '#' ) );
	$contact_bar_instagram_url = get_theme_mod( 'illdy_contact_bar_instagram_url', esc_url( '#' ) );
	$email                  = get_theme_mod( 'illdy_email', __( 'contact@site.com', 'illdy' ) );
	$phone                  = get_theme_mod( 'illdy_phone', __( '(555) 555-5555', 'illdy' ) );
	$address1               = get_theme_mod( 'illdy_address1', __( 'Street 221B Baker Street, ', 'illdy' ) );
	$address2               = get_theme_mod( 'illdy_address2', __( 'London, UK', 'illdy' ) );
	$general_title          = get_theme_mod( 'illdy_contact_us_general_title', __( 'Contact us', 'illdy' ) );
	$general_entry          = get_theme_mod( 'illdy_contact_us_general_entry', __( 'And we will get in touch as soon as possible.', 'illdy' ) );
	$general_contact_form_7 = get_theme_mod( 'illdy_contact_us_general_contact_form_7' );
	$general_address_title  = get_theme_mod( 'illdy_contact_us_general_address_title', __( 'Address', 'illdy' ) );
	$customer_support_title = get_theme_mod( 'illdy_contact_us_general_customer_support_title', __( 'Customer Support', 'illdy' ) );
} else {
	$contact_bar_facebook_url  = get_theme_mod( 'illdy_contact_bar_facebook_url' );
	$contact_bar_twitter_url   = get_theme_mod( 'illdy_contact_bar_twitter_url' );
	$contact_bar_linkedin_url  = get_theme_mod( 'illdy_contact_bar_linkedin_url' );
	$contact_bar_googlep_url   = get_theme_mod( 'illdy_contact_bar_googlep_url' );
	$contact_bar_youtube_url   = get_theme_mod( 'illdy_contact_bar_youtube_url' );
	$contact_bar_vimeo_url     = get_theme_mod( 'illdy_contact_bar_vimeo_url' );
	$contact_bar_pinterest_url = get_theme_mod( 'illdy_contact_bar_pinterest_url' );
	$contact_bar_instagram_url = get_theme_mod( 'illdy_contact_bar_instagram_url' );
	$email                     = get_theme_mod( 'illdy_email' );
	$phone                     = get_theme_mod( 'illdy_phone' );
	$address1                  = get_theme_mod( 'illdy_address1' );
	$address2                  = get_theme_mod( 'illdy_address2' );
	$general_title             = get_theme_mod( 'illdy_contact_us_general_title' );
	$general_entry             = get_theme_mod( 'illdy_contact_us_general_entry' );
	$general_contact_form_7    = get_theme_mod( 'illdy_contact_us_general_contact_form_7' );
	$general_address_title     = get_theme_mod( 'illdy_contact_us_general_address_title' );
	$customer_support_title    = get_theme_mod( 'illdy_contact_us_general_customer_support_title' );
}

if ( $general_title != '' || $general_entry != '' || $general_address_title != '' || $address1 != '' || $address2 != '' || $customer_support_title != '' || $email != '' || $phone != '' || $contact_bar_twitter_url != ''
     || $contact_bar_facebook_url != '' || $contact_bar_linkedin_url != '' || $contact_bar_googlep_url != '' || $contact_bar_instagram_url || $contact_bar_vimeo_url != '' || $contact_bar_pinterest_url != '' || $contact_bar_youtube_url != ''
     || $general_contact_form_7 != null && $general_contact_form_7 != 'default' ) {

	?>
        <section id="newsletter-section" class="front-page-section">
            <!--/.section-header-->
            <div class="mab-email-input">
            	<input type="email" name="email" placeholder="Email">
            </div>
            <a href="#" title="Subscribe Newsletter" class="subscribe-button"><i class="fa fa-bell"></i>Inscrivez-vous au newsletter</a>
            <div class="section-content">
                <div class="container">
                    
                </div>
                <!--/.container-->
            </div>
            <!--/.section-content-->
        </section>
	<section id="tarif" class="front-page-section" style="background-image: url(/wp-content/uploads/2016/10/OB823N0.jpg);">
	    <div class="tarif-overlay"></div>
	    <div class="container">
	        <div class="row inline-columns">
	            <div id="tarif_1" class="col-sm-3">
	                <span class="description"><?php echo esc_html( $address1); ?></span>
	            </div>
	            <div id="tarif_2" class="col-sm-3">
	                <span class="description"><?php echo esc_html( $phone ); ?></span>
	            </div>
	            <div id="tarif_3" class="col-sm-3">
	                <span class="description"><?php echo esc_html( $email ); ?></span>
	            </div>
	        </div>
	        <!--/.row-->
	        
	    </div>
	    <!--/.container-->
	</section>
	<section id="contact-us-social">
		<div class="container">
	    	<div class="row">
	        	<a href="<?php echo esc_url( $contact_bar_facebook_url ); ?>" title="<?php _e( 'Facebook', 'illdy' ); ?>" target="_blank">
	        		<img src="<?php echo get_template_directory_uri() ?>/layout/images/front-page/14.png">
	        	</a>
	        	<a href="<?php echo esc_url( $contact_bar_instagram_url ); ?>" title="<?php _e( 'Instagram', 'illdy' ); ?>" target="_blank">
	        		<img src="<?php echo get_template_directory_uri() ?>/layout/images/front-page/16.png">
	        	</a>
	        </div>
	        <div class="row footer-text">mesartisansbeaute</div>
	    </div>
    </section>


<?php } ?>