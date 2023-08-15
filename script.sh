#!/bin/bash

echo "NEXT_PUBLIC_API=https://192.168.0.106" > .env.local
echo "NEXT_PUBLIC_URL=$1" >> .env.local