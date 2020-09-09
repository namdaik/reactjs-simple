@extends('sitemap_app.base.layout', ['title' => $category->name ,'description' =>''])
@section('content')
<style type="text/css">
	html, body {
  height: 100%;
}
</style>
<main>
<h1>{{ $category->name }}</h1>
@foreach($sitemapUrl as $item)
	<p><a href="{{ $item->link }}">{{ $item->name }}</a></p>
@endforeach
@foreach($urls as $item)
	<h4><a href="{{ $item->link }}">{{ $item->name }}</a></h4>
@endforeach
@foreach($urlsLast as $item)
	<p><a href="{{ $item->link }}">{{ $item->name }}</a></p>
@endforeach
{{ $urls->links() }}
@endsection
</main>

@push('scripts')
<script type="text/javascript">
    if(document.cookie.indexOf("visited") == -1)
    {
        var day = 7*86400000;
        document.cookie = "visited=visited;max-age="+day+";path=/";
    }
</script>
@endpush
