#!/bin/bash
# polite sequential download
start=$(date +%s)
for s in $(seq 1 114); do
  [ -s muyassar/$s.json ] || { curl -s --max-time 60 -A "NibrasCode-tafsir-import/1.0 (nibrascode.com)" -o muyassar/$s.json https://quranenc.com/api/v1/translation/sura/arabic_moyassar/$s; sleep 0.5; }
  [ -s ibnkathir/$s.json ] || { curl -s --max-time 120 -o ibnkathir/$s.json https://raw.githubusercontent.com/spa5k/tafsir_api/main/tafsir/ar-tafsir-ibn-kathir/$s.json; sleep 0.3; }
  [ -s saadi/$s.html ] || { curl -s --max-time 120 -A "NibrasCode-tafsir-import/1.0 (nibrascode.com)" -o saadi/$s.html https://quranenc.com/en/browse/arabic_saadi/$s; sleep 1; }
  echo "$s $(( $(date +%s)-start ))s" > progress.txt
done
echo done >> progress.txt
