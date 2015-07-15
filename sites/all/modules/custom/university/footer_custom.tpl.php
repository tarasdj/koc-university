<div class="footer-top">

  <div class="footer-logo">
    <a href="<front>"><img class="header__logo-image-footer" src="
      <?php 
            global $language;
            if($language->language == 'en'){
              print "/sites/default/files/logo-en.png";
            }   
            if($language->language == 'tr'){
              print "/sites/default/files/logo-tr.png";
            }    
      ?>
    "></a>  
  </div>

  <div id="block-text-footer-address">
    <?php $b = module_invoke('block', 'block_view', '1');
    print render($b['content']);?> 
  </div> 

  <a href="contact"><div class="find-on-map">
    <i class="fa fa-map-marker"></i>
    <h1><?php print t('find on map');?></h1>
  </div></a>

</div>

<div class="footer-menu">
  <div id="block-menu-menu-footer-main-menu">
    <?php $b = module_invoke('menu', 'block_view', 'menu-footer-main-menu');
    print render($b['content']);?> 
  </div>  

  <div id="block-menu-menu-footer-header-menu">
    <?php $b = module_invoke('menu', 'block_view', 'menu-footer-header-menu');
    print render($b['content']);?>
  </div>  
</div>

<div class="footer-bottom">
  <div class="kong">
    <span id="reserved">KOC University <span id="c-symbol">©</span> All rights reserved 2015</span></br></br></br>
    <span id="design-by">Design & Development by</span>
    <img src="<?php print base_path();?>sites/default/files/kong.png" alt="" id="kong-log">
  </div>
  <div class="social">
    <a class="services-icon" href="#"><i class="fa fa-facebook"></i></a>
    <a class="services-icon" href="#"><i class="fa fa-twitter"></i></a>
    <a class="services-icon" href="#"><i class="fa fa-linkedin-square"></i></a>
    <a class="services-icon" href="#"><i class="fa fa-youtube"></i></a>
  </div>
</div>

