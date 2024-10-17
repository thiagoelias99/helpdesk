<?php

namespace App\Http\Controllers;

use App\Models\Ticket;
use App\Http\Requests\StoreTicketRequest;
use App\Http\Requests\UpdateTicketRequest;
use Inertia\Inertia;

class TicketsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $tickets = Ticket::latest()->paginate(10);

        return Inertia::render("Tickets/Index", [
            "paginate" => $tickets
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render("Tickets/Create");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreTicketRequest $request)
    {
        $data = $request->validated();
        $data['user_id'] = auth()->id();
        $data['status'] = 'open';
        Ticket::create($data);
        return to_route('tickets.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(int $id)
    {
        $data = Ticket::with([
            'technician',
            'created_by',
            'comments' => function ($query) {
                $query->orderBy('created_at','desc');
            },
            'comments.user'
        ])->where('id', $id)->first();

        return Inertia::render("Tickets/Show", [
            "ticket" => $data
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Ticket $ticket)
    {

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateTicketRequest $request, Ticket $ticket)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Ticket $ticket)
    {
        //
    }
}
