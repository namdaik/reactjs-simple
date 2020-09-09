<style type="text/css">
	.btn {
  border: none;
  color: white;
  padding: 14px 28px;
  font-size: 16px;
  cursor: pointer;
}
.success {background-color: #4CAF50;} /* Green */
.success:hover {background-color: #46a049;}

::-webkit-scrollbar {
  display: none;
}
.acontinue{
    display: inline-block;
    text-decoration: none;
}
</style>

<div style="width: 100%; height: 100%; position: relative; margin-bottom: 1500px ">
	<div style="position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%)">
		<div style="text-align: center;">
	      <img src="{{ asset('images/common/recaptcha.png') }}" style="height: 80px; cursor: not-allowed;" alt="foo" />
    	<div style="clear: both;"></div>
		<a class="btn success acontinue" href="{{ $link }}">Tiếp tục</a>
		</div>
	</div>
</div>
<script type="text/javascript">
	//window.onscroll = function () { window.scrollTo(0, 0); };
</script>
