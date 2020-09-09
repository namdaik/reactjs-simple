@extends('sitemap_app.base.layout', $headMeta)
@section('content')
<style type="text/css">
	html, body {
  height: 100%;
}
</style>
@include('sitemap_app.units.robot2', ['link' => env('sitemap_frame') == 0 ? $url->source : $url->link])
@include('sitemap_app.units.breadcrumb', ['breadcrumb' => $url->breadcrumbItem()])
<main>
    @if(!empty($url->h3Items))
        <p>{!! $url->h3Items !!}</p>
    @endif

    @if($url->image)
        <img src="{{ html_entity_decode($url->image, ENT_QUOTES | ENT_XML1, 'UTF-8')  }}" alt="{{ $url->name }}">
    @endif

    @include('sitemap_app.units.text_link_gray', ['urls' => $urlSpecial])
    @include('sitemap_app.units.text_link_gray', ['urls' => $urlNew])
    @include('sitemap_app.units.text_link_gray', ['urls' => $urlBefore])

    @if(!empty($url->h4Items))
        <p>{!! $url->h4Items !!}</p>
    @endif

    @foreach($url->keywordItems as $item)
        <h2>{{ $item }}</h2>
    @endforeach
     <p>{{ $url->getRandomText(10) }}</p>
     <p>{{ $url->content }}</p>
    @foreach($sitemapUrl as $item)
        <a href="{{ $item->postLink }}">{{ $item->url }}</a>
    @endforeach
    <div class="backLinks">
        @foreach($backLinks as $link1)
            <a href="{{ $link1->url }}">{{ $link1->keyName }}</a>
        @endforeach
    </div>
    {!! _siteConfig('web_text') !!}
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
<script type="application/ld+json">
    {!! $url->getSchemeArticle() !!}
</script>
@endpush
