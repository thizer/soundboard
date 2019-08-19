<?php
namespace ModuleDefault\Controllers;

class IndexController extends AbstractController
{
  public function indexAction() {

    $soundsPath = 'assets/sounds/';
    $sounds = array();

    if (is_dir($soundsPath)) {

      foreach (scandir($soundsPath) as $item) {
        if (is_dir("$soundsPath/$item") && !in_array($item, array('.', '..'))) {

          foreach (scandir("$soundsPath/$item") as $file) {

            if (is_file("$soundsPath/$item/$file")) {
              $sounds[ucwords($item)][] = "$item/$file";
            }
          }
        }
      }

    }

    $this->addViewVar('sounds', $sounds);
    $this->addViewVar('soundsPath', $soundsPath);

  }

  public function newSoundAction() {
    dump($_FILES);
  }
}

