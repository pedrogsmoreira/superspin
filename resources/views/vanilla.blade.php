<!DOCTYPE html>
<html lang="{{ str_replace("_", "-", app()->getLocale()) }}">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>Our Coaches - SuperSpin</title>
        <link rel="icon" href="{{ asset("favicon.ico")}}" sizes="any" />
        <link rel="icon" href="{{ asset("icon.svg")}}" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="{{ asset("apple-touch-icon.png")}}" />
        <link rel="manifest" href="{{ asset("manifest.webmanifest")}}" />

        <!-- Styles / Scripts -->
        @if (file_exists(public_path("build/manifest.json")) || file_exists(public_path("hot")))
            @vite(["resources/css/app.css", "resources/js/vanilla/app.js"])
        @endif
    </head>
    <body class="px-3 font-sans text-black">
        @include("sections.header")
        @include("sections.coaches")
        @include("sections.footer")
    </body>
</html>
