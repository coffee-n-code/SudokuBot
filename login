#!/bin/bash

function prompt() {
	read -p "$1: " input
	echo $input
}

function sprompt() {
	read -s -p "$1: " input
	echo $input
}

id=$(prompt "UserID")
pass=$(sprompt "Password")
payload="{\"type\":\"m.login.password\", \"user\":\"$id\", \"password\":\"$pass\"}"

curl -XPOST -d "$payload" "https://matrix.org/_matrix/client/r0/login"