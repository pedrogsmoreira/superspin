@php
    $sortOptions = [
        ["label" => "Default", "value" => "default"],
        ["label" => "Hourly Rate (Ascending)", "value" => "asc"],
        ["label" => "Hourly Rate (Descending)", "value" => "desc"],
    ];
@endphp

<div class="flex w-full items-center gap-2">
    <span class="text-xs uppercase">Sort by</span>
    <div class="relative flex-grow">
        <button
            id="coaches-sort-button"
            class="relative z-20 flex h-8 w-full items-center rounded-xl border border-black bg-white px-2 text-left text-sm outline-offset-0 hover:border-red-light hover:outline hover:outline-red-light focus:border-red focus:outline focus:outline-red active:border-red-dark active:outline active:outline-red-dark"
        >
            <span>{{ $sortOptions[0]["label"] }}</span>
            <x-fas-chevron-down class="ml-auto h-3" />
        </button>
        <ul
            id="coaches-sort-options"
            class="absolute left-0 top-0 z-10 w-full overflow-hidden rounded-xl border bg-white text-sm opacity-0"
        >
            @foreach ($sortOptions as $option)
                <li>
                    <button
                        class="{{ $loop->first ? "h-16 pt-8" : "h-8 border-t" }} w-full px-2 text-left outline-none transition-colors hover:bg-red-light focus:bg-red-light"
                        data-value="{{ $option["value"] }}"
                    >
                        {{ $option["label"] }}
                    </button>
                </li>
            @endforeach
        </ul>
    </div>
</div>
