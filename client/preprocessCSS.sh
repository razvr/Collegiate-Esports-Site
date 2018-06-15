#!/bin/bash

(ls src/_Styling/*.css | while read -r line; do
    echo -n '@import "'
    echo -n ${line/src\//}
    echo '";'
done) > src/index.css