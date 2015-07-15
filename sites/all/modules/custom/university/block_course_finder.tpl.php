<i class="fa fa-search"></i>

  <?php
    $b = module_invoke('custom_search_blocks', 'block_view', '2');
    print render($b['content']);
  ?> 
