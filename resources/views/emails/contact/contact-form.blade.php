@component('mail::message')

# Laiškas iš BalticDisplay.com.

<strong>Vardas:</strong> {{ $formData['name'] }} <br/>
<strong>Elektroninis paštas:</strong> {{ $formData['email'] }}  <br/><br/>

<strong>Žinutė:</strong> {{ $formData['message'] }}

@endcomponent
