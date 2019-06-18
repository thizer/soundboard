<?php

// Put your personal functions here

function randColor() {
  return sprintf('#%06X', mt_rand(0, 0xFFFFFF));
}
