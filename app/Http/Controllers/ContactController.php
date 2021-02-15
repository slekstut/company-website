<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request; 
use Illuminate\Http\Response; 
use Illuminate\Support\Facades\Mail;
use App\Mail\ContactEmail; 
use App\Mail\ContactFormMail;


class ContactController extends Controller
{
    public function submitForm(Request $request) {
        $formData = $this->validate($request, [
            'name' => 'required',
            'email' => 'required|email',
            'message' => 'required',

        ]);

        // Mail::to( config('mail.from.address') )->send(new ContactEmail($request->only(['name', 'email', 'message'])) );

        // return response()->json( ['sent' => true], Response::HTTP_OK);
            // dd(request()->all());
        // return response()->json([$request->all()]);

        Mail::to('s.opusdei@gmail.com')->send(new ContactFormMail($formData));
    }
}
