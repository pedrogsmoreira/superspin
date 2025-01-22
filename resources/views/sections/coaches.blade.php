<section class="container mx-auto flex flex-col flex-wrap xl:flex-row">
    <h3 class="w-full py-1 text-2xl font-bold tracking-tighter">Our Coaches</h3>
    <div
        class="sticky top-10 z-20 bg-white py-2 xl:order-1 xl:w-1/2 xl:pr-[0.375rem]"
    >
        <div class="flex flex-col gap-2 lg:flex-row lg:gap-3">
            @include("sections.coaches.search")
            @include("sections.coaches.sort-select")
        </div>
    </div>
    @include("sections.coaches.grid")
    @include("sections.coaches.template")
    @include("sections.coaches.pagination")
</section>
