#!/bin/bash
sass sass/minima.scss css/minima.css
sass sass/minima.scss css/minima.min.css --style=compressed
# curl -X POST -s --data-urlencode 'input@css/minima.css' https://cssminifier.com/raw > css/minima.min.css
