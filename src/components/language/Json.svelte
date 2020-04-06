<script>
  import { Keyboard } from "../../lib/keyboard";

  export let code = "";
  export let JSONminify = false;
  export let keyboard = new Keyboard();

  $: code = JSON.stringify(keyboard, "", JSONminify?0:2);
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
