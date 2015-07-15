<?php

/**
 * @file
 * Default simple view template to display a list of rows.
 *
 * @ingroup views_templates
 */
foreach ($rows as $id => $row):  
  $cgroup = explode('LAW', $row);
  $classgroup = substr($cgroup[1], 0 ,1);
  break;
endforeach;  
?>
<div class="curriculum-year" id="<?php print 'curriculum-year-block-' . $classgroup; ?>">
  <?php if (!empty($title)): ?>
    <a href="javascript:void(0)" class="rg-data-title" data-attrd="<?php print $classgroup; ?>" id="rg-data-precessed-<?php print $classgroup; ?>"><h3><?php print $title; ?></h3></a>
  <?php endif; ?>
  <div class="rg-data" id="rg-data-<?php print $classgroup; ?>">
    <?php foreach ($rows as $id => $row): ?>
      <div<?php if ($classes_array[$id]) { print ' class="' . $classes_array[$id] .'"';  } ?>>
        <?php print $row; ?>
      </div>
    <?php endforeach; ?>
  </div>
</div>