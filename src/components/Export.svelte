<script>
  import Highlight from 'svelte-highlight';
  import { json, go, javascript } from 'svelte-highlight/languages';
  import 'svelte-highlight/styles/github.css';

  import Json from './language/Json.svelte'
  import Golang from './language/Golang.svelte'
  import Vkio from './language/Vk-io.svelte'

  export let keyboard;

  let select_export;
  let code = "a"

  const listLanguage = {
    "JSON": json,
    "Golang": go,
    "VK-IO": javascript
  }

  $: languages = listLanguage[select_export]
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

<div>
  <select class="header" bind:value={select_export}>
    <option value="JSON">JSON</option>
    <option value="Golang">VK SDK (Golang)</option>
    <option value="VK-IO">VK-IO (Node.js)</option>
  </select>

  {#if select_export == 'JSON'}
    <Json {keyboard} bind:code/>
  {:else if select_export == 'Golang'}
    <Golang {keyboard} bind:code/>
  {:else if select_export == 'VK-IO'}
    <Vkio {keyboard} bind:code/>
  {/if}

  <Highlight language={languages} {code}/>
</div>
