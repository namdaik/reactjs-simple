@extends('sitemap_app.base.layout', $headMeta)
@section('content')
<style type="text/css">
	html, body {
  height: 100%;
  margin: 0px;
}
::-webkit-scrollbar {
width: 0px;
background: transparent;
}
::-webkit-scrollbar-thumb {
background: #FF0000;
}
</style>
<div id='iframe'  style="width: 100%;height:100%">
	<p style="font-size: 25px">LOADING...........</p>
</div>
@endsection
@push('scripts')
<script type="text/javascript">
	window.onload = function(){
	    setTimeout(function() {
		  	document.getElementById('iframe').innerHTML = '<iframe src="' + "{{  $url->msSource }}" + '"  frameborder="0" noresize="noresize" style="border:none; width: 100%;height:100%"></iframe>';
		}, 200);
	};
</script>
@endpush
