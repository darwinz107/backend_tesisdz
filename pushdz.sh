#!/bin/bash

echo "Write a message to commit:"
read msg

git ckeckout main
git add .
git commit -m "$msg"
git push origin main
