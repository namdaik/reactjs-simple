<div class="row">
    @foreach($urls as $url)
    <div class="col-md-3 com-sm-4">
        <a href="{{ $url->link }}">
            {{ $url->name }}
        </a>
    </div>
    @endforeach
</div>
