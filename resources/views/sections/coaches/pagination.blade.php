<div
    class="bottom-0 z-10 bg-white py-2 xl:bottom-auto xl:top-10 xl:order-1 xl:w-1/2 xl:pl-[0.375rem]"
>
    <div class="flex justify-between xl:justify-normal">
        <div class="flex gap-2 xl:order-2 xl:pl-[0.375rem]">
            @include("includes.button", ["type" => "first"])
            @include("includes.button", ["type" => "prev"])
        </div>
        <div
            class="flex items-center justify-end xl:order-1 xl:w-1/2 xl:pr-[0.375rem]"
        >
            <p class="text-xs uppercase">
                Page
                <span class="page-current"></span>
                of
                <span class="page-total"></span>
            </p>
        </div>
        <div class="flex gap-2 xl:order-2 xl:flex-grow xl:justify-end">
            @include("includes.button", ["type" => "next"])
            @include("includes.button", ["type" => "last"])
        </div>
    </div>
</div>
