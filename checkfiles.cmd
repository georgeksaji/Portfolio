@echo off
setlocal enabledelayedexpansion

set files=index.html public\favicon\favicon-96x96.png public\favicon\favicon.svg public\favicon\favicon.ico public\favicon\apple-touch-icon.png public\favicon\site.webmanifest public\images\hero1.png public\images\profile-pic.jpg public\images\sign.png public\images\avatars\user-01.jpg public\images\avatars\user-02.jpg public\images\avatars\user-04.jpg public\images\avatars\user-05.jpg public\images\portfolio\building-blocks.jpg public\images\portfolio\lamp.jpg public\images\portfolio\sand-dunes.jpg public\images\portfolio\shout-and-jump.jpg public\images\portfolio\windows-in-the-city.jpg public\images\portfolio\woodcraft.jpg public\images\portfolio\gallery\g-building-blocks.jpg public\images\portfolio\gallery\g-lamp.jpg public\images\portfolio\gallery\g-sand-dunes.jpg public\images\portfolio\gallery\g-shout-jump.jpg public\images\portfolio\gallery\g-windows-in-the-city.jpg public\images\portfolio\gallery\g-woodcraft.jpg src\assets\css\base.css src\assets\css\main.css src\assets\css\vendor.css src\components\Preloader.jsx src\components\Header.jsx src\components\Hero.jsx src\components\About.jsx src\components\Services.jsx src\components\Portfolio.jsx src\components\Footer.jsx src\App.jsx src\main.jsx package.json

for %%f in (%files%) do (
    if exist "%%f" (
        echo [OK] %%f
    ) else (
        echo [MISSING] %%f
    )
)
