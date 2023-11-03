# Imagemagick Configuration
Installs and configures Imagemagick for Drupal.


## Configuring Drupal for Recipes

See https://www.drupal.org/files/issues/2023-10-01/Configuring%20Drupal%20to%20Apply%20Recipes.md


## Installing this Recipe

`composer require kanopi/imagemagick-configuration`


## Applying this Recipe

CD into your webroot.
Run`php core/scripts/drupal recipe recipes/contrib/imagemagick-configuration`
Run `drush cr`

If you have our Docksal command in your project, run the following command:
`fin recipe-apply imagemagick-configuration`


## Unpacking this Recipe

To unpack this recipe's dependencies to your site's composer.json, in the root
of your project run:

`composer unpack kanopi/imagemagick-configuration`

If you have our Docksal command in your project, run the following command:
`fin recipe-unpack kanopi/imagemagick-configuration`


## Known Issues

* If the Imagemagick module is currently enabled, installation will fail.
