#!/bin/bash

ss_start()
{
  ssserver -c /root/shadowsocks/shadowsocks.json -d start
}

ss_stop()
{
  ssserver -c /root/shadowsocks/shadowsocks.json -d stop
}

# shell script main

if [ "$#" -eq "0" ]; then
  ss_start
else
  case "$1" in
  start)
    ss_start
    exit;;
  stop)
    ss_stop
    exit;;
  esac
fi

