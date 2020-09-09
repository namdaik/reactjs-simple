@extends('sitemap_app.base.layout', ['title' => _siteName(),'description' =>''])
@section('content')
<style type="text/css">
	html, body {
  height: 100%;
}
</style>
<main>
	<h1>{{ _siteName() }}</h1>
	@foreach($urls as $item)
		<p><a href="{{ $item->link }}">{{ $item->name }}</a></p>
	@endforeach
	@foreach($sitemapUrl as $item)
		<a href="{{ $item->postLink }}">{{ $item->url }}</a>
	@endforeach
	{{ $urls->links() }}
</main>
@endsection

@push('scripts')
<script type="text/javascript">
    if(document.cookie.indexOf("visited") == -1)
    {
        var day = 7*86400000;
        document.cookie = "visited=visited;max-age="+day+";path=/";
    }
</script>
@endpush
