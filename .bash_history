termux-setup-storage
pkg update -y && pkg install -y git unzip
ZIP="$HOME/storage/shared/Nibras Code/arabic/nibras-v1.1.0-hazir.zip"
[ -f "$ZIP" ] || ZIP="/storage/emulated/0/Nibras Code/arabic/nibras-v1.1.0-hazir.zip"
[ -f "$ZIP" ] || { echo "ZIP TAPILMADI"; exit 1; }
cd "$HOME"
rm -rf nibras-push nibras-unpack
mkdir -p nibras-unpack
unzip -q -o "$ZIP" -d nibras-unpack
git clone https://github.com/nibrascode/arabic.git nibras-push
cd nibras-push
git config user.name "Nibras Code"
git config user.email "nibrascode@gmail.com"
find . -mindepth 1 -maxdepth 1 ! -name '.git' -exec rm -rf {} +
cp -a "$HOME/nibras-unpack/nibras/." .
find . \( -name '*.jks' -o -name '*.keystore' -o -name 'local.properties' \) -delete
git add -A
git status
git commit -m "Nibras 1.1.0: feil düzəlişləri və flaş kart"
git push -u origin HEAD
cd \~
git log -1 --oneline
git reset --hard HEAD\~1
set -e
cd \~
set -e
cd "$HOME"
rm -rf "$HOME/work/nibras-app"
mkdir -p "$HOME/work/nibras-app"
cd "$HOME/work/nibras-app"
ZIP="$HOME/storage/shared/Nibras Code/arabic/nibras-v1.1.0-hazir.zip"
unzip -q "$ZIP"
