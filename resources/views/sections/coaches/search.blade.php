<div class="relative lg:w-full">
    <input
        id="coaches-search"
        type="text"
        name="search"
        class="h-8 w-full rounded-xl border border-black px-2 text-sm outline-none outline-1 outline-offset-0 hover:border-red-light hover:outline hover:outline-red-light focus:border-red focus:outline focus:outline-red active:border-red-dark active:outline active:outline-red-dark"
        placeholder="Search by name or location..."
    />
    <button
        class="group absolute right-0 top-0 flex h-8 w-8 items-center justify-center outline-none"
    >
        <x-fas-search
            class="h-3 text-black group-hover:text-red-light group-focus:text-red group-active:text-red-dark"
        />
    </button>
</div>
