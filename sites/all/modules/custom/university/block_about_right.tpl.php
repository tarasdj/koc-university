<div class="logo-memebers-container">
  <img src="/sites/default/files/about-img-1.png" alt="Member 1" class="logo-members">
  <img src="/sites/default/files/about-img-2.png" alt="Member 2" class="logo-members">
  <img src="/sites/default/files/about-img-3.png" alt="Member 3" class="logo-members">
</div>

<div class="helicopter">
  <img src="/sites/default/files/helicopter.png" alt="" class="he">
  <h1><?php print t('coach air to discover');?></h1>
  <div class="start-container"> 
    <a href="https://www.youtube.com/watch?v=JPWvMHmkhcU" class="link-he"><?php print t('start'); ?></a>
  </div>
</div>

<div class="eye">
  <img src="/sites/default/files/eye.png" alt="" class="he">
  <h1><?php print t('virtual tour'); ?></h1>
  <div class="start-container">
    <a href="https://ku.edu.tr/tr/virtual-tour#virtualtour" class="link-he"><?php print t('start'); ?></a>
  </div>
</div>

  <?php 
    global $language;
    if($language->language == 'en'):
      drupal_add_js('$(".link-he").addClass("en");');
    endif;  

    if($language->language == 'tr'):
      drupal_add_js('$(".link-he").addClass("tr");');
    endif;
  ?>

