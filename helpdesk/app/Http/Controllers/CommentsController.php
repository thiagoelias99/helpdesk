<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCommentRequest;
use App\Models\Comment;

class CommentsController extends Controller
{
    public function store(StoreCommentRequest $request)
    {
        $data = $request->validated();
        $data['user_id'] = auth()->id();
        Comment::create($data);
        return to_route('tickets.show', $data['ticket_id']);
    }
}
