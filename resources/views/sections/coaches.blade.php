<section class="relative">
    <div class="container mx-auto flex flex-col flex-wrap xl:flex-row">
        <nav
            class="sticky top-10 z-20 bg-white py-2 xl:order-1 xl:w-1/2 xl:pr-[0.375rem]"
        >
            <div class="flex flex-col gap-2 lg:flex-row lg:gap-3">
                @include("sections.coaches.search")
                @include("sections.coaches.sort-select")
            </div>
        </nav>
        @include("sections.coaches.grid")
        @include("sections.coaches.template")

        <nav
            class="sticky bottom-0 z-10 bg-white py-2 xl:bottom-auto xl:top-10 xl:order-1 xl:w-1/2 xl:pl-[0.375rem]"
        >
            @include("sections.coaches.pagination")
        </nav>
    </div>
</section>
