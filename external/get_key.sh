#!/bin/bash

# Exit if any of the intermediate steps fail
set -e

# Get an ssh key id value
rid=$(curl -X GET -H "Content-Type: application/json" -H "Authorization: Bearer $1" "https://api.digitalocean.com/v2/account/keys/?page=2" | jq -r --arg rkey "$2" '{id: .ssh_keys[] | select(.public_key == $rkey) | .id}' | tr -d '\n' | cut -c 10-17)

# Safely produce a JSON object
jq -n --arg id "$rid" '{"id":$id}'
