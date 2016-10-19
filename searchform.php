<?php
/**
 *	The template for displaying the search form in sidebar.
 *
 *	@package WordPress
 *	@subpackage illdy
 */
?>
<form role="search" method="get" class="search-form" action="<?php echo home_url( '/' ); ?>">
    <div class="search-form-box">
        <input type="search" id="s" placeholder="<?php echo esc_attr_x( 'Recherche...', 'placeholder', 'illdy' ); ?>" value="<?php echo esc_attr(get_search_query()); ?>" name="s" title="<?php echo esc_attr_x( 'Search for:', 'label', 'illdy' ); ?>" />
        <input type="submit" id="searchsubmit" value="" />
    </div><!--/.search-form-box-->
</form><!--/.search-form-->