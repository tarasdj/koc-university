<?php $path = drupal_get_path_alias(current_path()); if ($path == 'people'):?>
  <a href="people" class="sort-link active-sort"><?php print t('All');?></a>
    <a href="research-academic-staff" class="sort-link"><?php print t('Academic');?></a>
  <a href="administrative" class="sort-link"><?php print t('Administrative');?></a>
<?php endif; ?>

<?php $path = drupal_get_path_alias(current_path()); if ($path == 'administrative'):?>
  <a href="people" class="sort-link"><?php print t('All');?></a>
    <a href="research-academic-staff" class="sort-link"><?php print t('Academic');?></a>
  <a href="administrative" class="sort-link active-sort"><?php print t('Administrative');?></a>
<?php endif; ?>

<?php $path = drupal_get_path_alias(current_path()); if ($path == 'research-academic-staff'):?>
  <a href="people" class="sort-link"><?php print t('All');?></a>
  <a href="research-academic-staff" class="sort-link active-sort"><?php print t('Academic');?></a>
  <a href="administrative" class="sort-link"><?php print t('Administrative');?></a>
<?php endif; ?>