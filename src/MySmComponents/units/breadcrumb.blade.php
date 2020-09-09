<ol itemscope itemtype="http://schema.org/BreadcrumbList">
  <li itemprop="itemListElement" itemscope
      itemtype="http://schema.org/ListItem">
    <a itemprop="item" href="{{ asset('') }}">
    <span itemprop="name">{{ _siteName() }}</span></a>
    <meta itemprop="position" content="1" />
  </li>
  @if(isset($breadcrumb))

    @foreach($breadcrumb as $index => $item)
        <li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
            <a itemprop="item" href="{{ $item->link }}">
            <span itemprop="name">{{ $item->name }}</span></a>
            <meta itemprop="position" content="{{ $index + 2 }}" />
        </li>
        @endforeach
    @endif
</ol>
