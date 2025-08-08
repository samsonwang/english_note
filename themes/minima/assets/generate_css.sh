#!/bin/bash
sass sass/minima.scss css/minima.css
curl -X POST -s --data-urlencode 'input@css/minima.css' https://cssminifier.com/raw > css/minima.min.css
