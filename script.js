<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script>
$(function(){
  $("h2").click(function(){
    $(this).next().slideToggle();
  });
});
</script>
