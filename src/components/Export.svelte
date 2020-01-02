<script>
  import Json from './language/Json.svelte'
  // import Golang from './language/Golang.svelte'

  let select_export;
  export let keyboard;
</script>

<style>
  .header{
    font-size: 1.25em;
    font-weight: 600;
    line-height: 1.25;
    border: none;
    background: none;
    padding: 0;
    margin: 24px 0 16px;
    color: #333;
  }
</style>

<select class="header" bind:value={select_export}>
  <option value="JSON">JSON</option>
  <!-- <option value="Golang">Golang</option> -->
</select>

{#if select_export == 'JSON'}
  <Json {keyboard} />
<!-- {:else if select_export == 'Golang'}
  <Golang {keyboard} /> -->
{/if}
