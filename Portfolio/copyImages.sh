#!/bin/sh

thumb="_tn.png";

rm *_tn.png

for i in *.png; do
	nf=`basename $i .png`
	cp $i "$nf$thumb"
done
