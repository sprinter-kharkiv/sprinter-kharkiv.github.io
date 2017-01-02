<?php
/*Template Name: Home*/
 get_header(); ?>

<section id="start-screen">
    <div class="start-screen_header">
        <div class="container">
            <div class="logo-wrap">
                <a href="<?php echo home_url();?>" class="logo">
                    <img src="<?php bloginfo('template_url'); ?>/images/logo.png" alt="adoption space"/>

                    <p>Adopt<br>
                        Space</p>
                </a>
            </div>
            <div class="phone-block">
                <p class="phone-block_title"><?php the_field('phone_block'); ?></p>
                <a href="tel:<?php the_field('phone'); ?>" class="phone-block_number"><?php the_field('phone'); ?></a>
            </div>
            <div class="menu-trigger j-menu-trig" id="trig">
                <span></span>
            </div>
        </div>
        <ul class="header_nav">
		<?php wp_nav_menu( array('theme_location' => 'primary', 'container' =>false,  'menu_class' => '',  'echo' => true,  'before' => '',  'after' => '',  'link_before' => '',  'link_after' => '',  'depth' => 0) ); ?>	
        </ul>

    </div>

    <div class="start-screen_banner">
        <div class="container">
            <div class="banner-info ">
                <div class="banner-info_text">
                    <p><?php the_field('banner_info'); ?></p>

                    <h2><?php the_field('title'); ?></h2>
                </div>
                <div class="banner-info_buttons">
                <?php if( have_rows('info_buttons') ): ?>
				<?php while( have_rows('info_buttons') ): the_row(); 
				$url = get_sub_field('url');
				$label = get_sub_field('label');
				?>  
				<div class="banner-info_button__wrap">
                        <a href="<?php echo $url;?>"><p><?php echo $label;?></p></a>
                    </div>
				<?php endwhile; ?>
				<?php endif; ?>    
				
                </div>
            </div>
        </div>
    </div>
</section>

<!--                  END START SCREEN                 -->
<!--                   CONTENT BLOCK                  -->
<section id="main-content" class="main-content container">
    <div class="image-block">
        <h2 class="section_title meet-title"><?php the_field('meet_title'); ?> <span class="alex_brush"><?php the_field('name_f'); ?>&nbsp;<?php the_field('meet_title_2'); ?>&nbsp;<?php the_field('last_f'); ?></span></h2>
        <img src="<?php the_field('brush'); ?>" alt="meet Jon and Jane"/>


    </div>
    <div id="additional_content" class="button j-additional-trig">
        <h2 class="flash additional-title"><span class="title-arrow">Click to Expand Profile</span></h2>
    </div>

    <div class="additional_content">
        <div class="content_block__video ">
            <h2 class="title"><?php the_field('meet_title'); ?> <br>
                <span class="alex_brush"><?php the_field('alex_brush'); ?></span></h2>

            <h3 class="description"><?php the_field('description'); ?></h3>
            <!-- http://v4e.thewikies.com/ генератор кода для вставки видео -->
            <div class="photo_wrap">
                <div class="main-photo">
                    <img src="<?php the_field('main-photo'); ?>" alt="">
                </div>
                <div class="secondary-photo_wrap">
                    <div class="secondary-photo">
                        <img src="<?php the_field('secondary_photo_wrap'); ?>" alt="">
                    </div>
                    <div class="secondary-photo">
                        <img src="<?php the_field('secondary_photo'); ?>" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div class="content_block__story">
            <div class="titles">
                <div class="story_title j-tab-btn active"><span><?php the_field('menu_item'); ?></span></div>
                <div class="story_title j-tab-btn"><span><?php the_field('menu_item_2'); ?></span></div>
                <div class="story_title j-tab-btn"><span><?php the_field('menu_item_3'); ?></span></div>
                <div class="story_title j-tab-btn"><span><?php the_field('menu_item_4'); ?></span></div>
            </div>
            <div class="text">
                <div class="story_block j-tab active">
                    <h3><?php the_field('title2'); ?></h3>

                    <?php the_field('content2'); ?>
                </div>
                <div class="story_block j-tab">
                    <h3><?php the_field('title_2'); ?></h3>

                    <?php the_field('content_2'); ?>
                </div>
                <div class="story_block j-tab">
                    <h3><?php the_field('title_3'); ?></h3>

                    <?php the_field('content_3'); ?>
                </div>
                <div class="story_block j-tab">
                    <h3><?php the_field('title_4'); ?></h3>

                    <?php the_field('content_4'); ?>
                </div>
            </div>
        </div>
    </div>
    <div class="testimonials-block clearfix">
        <h2 class="section_title">testimonials/info</h2>

        <div class="testimonials-block_video">
            <div class="testimonial-video">
                <a href="<?php the_field('testimonials_1'); ?>" class="vp-a test-1"></a>
            </div>
            <div class="testimonial-video">
                <a href="<?php the_field('testimonials_2'); ?>" class="vp-a test-2"></a>

            </div>
            <div class="testimonial-video">
                <a href="<?php the_field('testimonials_3'); ?>" class="vp-a test-3"></a>

            </div>
            <a class="vp-a" href="https://www.youtube.com/watch?v=L5s0ERQt8ek" target="_blank" rel="nofollow">YouTube Popup with autoplay</a>
        </div>
    </div>
</section>
<!--                  END CONTENT BLOCK                  -->
<!--                  FORM                  -->

<section id="contact-form" class="contact-form">
    <div class="form-wrap">
        <h2 class="contact-form__title">Contact us</h2>
		<?php echo do_shortcode('[contact-form-7 id="4" title="Contact form 1" html_id="contact" html_class="clearfix"]') ?>
    </div>
</section>
<!--                  END FORM                  -->
<!--                  START FOOTER              -->

<?php get_footer(); ?> 

<!--Start of Tawk.to Script-->
<script type="text/javascript">
/* var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/5780fd67622e6f5c23701c7c/default';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})(); */
</script>
<!--End of Tawk.to Script-->