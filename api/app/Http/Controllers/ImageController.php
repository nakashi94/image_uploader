<?php

namespace App\Http\Controllers;

use App\Models\Image;
use Illuminate\Http\Request;

class ImageController extends Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [ //inputs are not empty or null
            'name' => 'required',
            'content' => 'required',
            'type' => 'required',
            'size' => 'required',
        ]);

        $image = new Image;
        $image->name = $request->input('name');
        $image->content = $request->input('content');
        $image->type = $request->input('type');
        $image->size = $request->input('size');
        $image->save();
        return "store successfully!";
    }
}
