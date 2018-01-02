#!/bin/bash
set -e

DIR=$1

if [ $# -eq 0 ]; then
    echo "Must specify a directory path to images."
    exit 0;
fi

echo "Creating Directories..."
echo "${DIR}/l"
echo "${DIR}/h"

mkdir -p $DIR/l
mkdir -p $DIR/h

for image_file in $DIR/*.jpg
do
    filename=$(basename "$image_file")
    extension="${filename##*.}"
    filename="${filename%.*}"
    echo "Optimizing ${filename}"

    magick convert $image_file -resize 400 -gravity center -extent 400 -quality 92 -set filename:size '%wx%h' $DIR/l/${filename}_%[filename:size].$extension
    magick convert $image_file -resize 1200 -gravity center -extent 1200 -quality 92 -set filename:size '%wx%h' $DIR/h/${filename}_%[filename:size].$extension
done

echo "Ding! Fries are done."
