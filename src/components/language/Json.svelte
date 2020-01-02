<script>
  export let JSONminify = false;
  export let keyboard;
</script>

<style>
  .Rows {
    display: flex;
    flex-direction: row;
    margin-bottom: 16px;
    margin-top: 0;
  }
  .Rows label {
    margin-left: 6px;
  }
</style>

<div class="Rows">
	<input type="checkbox" bind:checked={JSONminify}>
	<label>JSON minify</label>
</div>

<pre>
{JSON.stringify(keyboard, "", JSONminify?0:2)}
</pre>


	