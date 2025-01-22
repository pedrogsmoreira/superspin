<?php

namespace App\Http\Controllers;

use App\Models\Coach;
use Illuminate\Http\Request;

class CoachController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $query = Coach::query();

        // Search across name, city, and country columns
        if ($request->has("search")) {
            $searchTerm = $request->search;
            $query->where(function ($q) use ($searchTerm) {
                $q->where("name", "like", "%" . $searchTerm . "%")
                    ->orWhere("city", "like", "%" . $searchTerm . "%")
                    ->orWhere("country", "like", "%" . $searchTerm . "%");
            });
        }

        // Sort by hourly rate, ascending and descending
        if (
            $request->has("sort") &&
            in_array($request->sort, ["asc", "desc"])
        ) {
            $query->orderBy("hourly_rate", $request->sort);
        }

        // Paginate the results
        $pagination = $query->paginate(12);

        // Append search and sort parameters to the pagination links
        $pagination->appends([
            "search" => $request->search,
            "sort" => $request->sort,
        ]);

        // Return the paginated response
        return response()->json($pagination);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Coach $coach)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Coach $coach)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Coach $coach)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Coach $coach)
    {
        //
    }
}
