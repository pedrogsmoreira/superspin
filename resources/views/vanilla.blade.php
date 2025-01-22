<!DOCTYPE html>
<html lang="{{ str_replace("_", "-", app()->getLocale()) }}">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>Laravel</title>

        <!-- Styles / Scripts -->
        @if (file_exists(public_path("build/manifest.json")) || file_exists(public_path("hot")))
            @vite(["resources/css/app.css", "resources/js/vanilla/app.js"])
        @endif
    </head>
    <body class="px-3 font-sans text-black">
        @include("sections.header")
        @include("sections.hero")
        @include("sections.coaches")
        @include("sections.footer")
    </body>
</html>
