<div class="container" style="margin-bottom: 7px">
    <div class="row"  style="background-color: white;color: #777;padding: 7px 0;">
        @foreach($urls as $url)
        <div class="col-md-3 com-sm-4">
            <h3><a href="{{ $url->link }}">
                {{ $url->name }}
            </a></h3>
        </div>
        @endforeach
    </div>
</div>
