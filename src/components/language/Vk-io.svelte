<script>
  import { Keyboard } from "../../lib/keyboard";
  import { Generate } from "../../lib/vk-io";

  export let keyboard = new Keyboard();
  export let code = "";

  $: code = Generate(keyboard);
</script>

<div>
  Для модуля <a href="https://github.com/negezor/vk-io/blob/master/docs/ru/api-reference/buttons/keyboard.md">VK-IO</a>
</div>