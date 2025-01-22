<button
    class="{{ $type ?? "" }} flex h-8 items-center rounded-xl border border-black bg-white px-3 text-xs font-semibold uppercase leading-8 text-black outline-none outline-offset-0 transition-all hover:border-red-light hover:outline hover:outline-red-light focus:border-red focus:outline focus:outline-red active:border-red-dark active:outline active:outline-red-dark disabled:border-gray disabled:text-gray disabled:outline-none disabled:hover:border-gray disabled:hover:bg-white md:order-2 md:ml-0"
>
    @if (isset($type) && $type == "first")
        <x-fas-angles-left class="-ml-2 h-4" />
        First
    @elseif (isset($type) && $type == "prev")
        <x-fas-angle-left class="-ml-2 h-4" />
        Prev
    @elseif (isset($type) && $type == "next")
        Next
        <x-fas-angle-right class="-mr-2 h-4" />
    @elseif (isset($type) && $type == "last")
        Last
        <x-fas-angles-right class="-mr-2 h-4" />
    @else
        {!! $content !!}
    @endif
</button>
