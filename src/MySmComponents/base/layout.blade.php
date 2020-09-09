<!DOCTYPE html>
<html lang="{{ _siteConfig('lang') }}">
<head>
   @include('common.head-meta')
</head>
<body>
@yield('content')
@include('sitemap_app.base.footer')

<!--     <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/jquery.lazy/1.7.9/jquery.lazy.min.js"></script>
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/jquery.lazy/1.7.9/jquery.lazy.plugins.min.js"></script>


<script type="text/javascript">
 $(function() {
    $('.lazy').Lazy();
});
</script> -->
@stack('scripts')
</body>
</html>
