<div
    id="coaches-grid"
    class="grid min-h-[calc(100vh-163px)] w-full grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 xl:order-3"
>
    <div
        id="coaches-not-found"
        class="col-span-4 hidden flex-col items-center justify-center"
    >
        <x-fas-window-close class="mb-1 h-12 text-red-light" />
        <h4 class="font-semibold tracking-tight">
            No coaches match your search criteria
        </h4>
        <p class="mb-3 text-sm">
            Try clearing your search to explore all available coaches.
        </p>
        @include("includes.button", ["content" => "Clear Search"])
    </div>
</div>
