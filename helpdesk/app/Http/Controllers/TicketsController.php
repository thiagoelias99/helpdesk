<?php

namespace App\Http\Controllers;

use App\Models\Ticket;
use App\Http\Requests\StoreTicketRequest;
use App\Http\Requests\UpdateTicketRequest;
use App\Models\User;
use Inertia\Inertia;

class TicketsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $tickets = null;
        if (auth()->user()->isTechnician()) {
            $tickets = Ticket::latest()->paginate(10);
        } else {
            $tickets = Ticket::where('user_id', auth()->id())->latest()->paginate(10);
        }

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
                $query->orderBy('created_at', 'desc');
            },
            'comments.user'
        ])->where('id', $id)->first();

        if (auth()->user()->isTechnician()) {
            return Inertia::render("Tickets/Show", [
                "ticket" => $data
            ]);
        }

        if ($data->user_id !== auth()->id()) {
            return back();
        }

        return Inertia::render("Tickets/Show", [
            "ticket" => $data
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(int $id)
    {
        if (!auth()->user()->isTechnician()) {
            return back();
        }

        $ticket = Ticket::with([
            'technician',
            'created_by'
        ])->where('id', $id)->first();

        $technicians = User::all();

        return Inertia::render("Tickets/Edit", [
            "ticket" => $ticket,
            "technicians" => $technicians
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateTicketRequest $request, Ticket $ticket)
    {
        $data = $request->validated();
        $ticket->update($data);
        return to_route('tickets.show', $ticket->id);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Ticket $ticket)
    {
        //
    }
}
