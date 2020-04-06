<script>
  import { Keyboard } from "../../lib/keyboard";
  import { Generate } from "../../lib/golang";

  export let keyboard = new Keyboard();
  export let code = "";

  $: code = Generate(keyboard);
</script>

<div>
  Для модуля <a href="https://github.com/SevereCloud/vksdk">github.com/SevereCloud/vksdk</a>
</div>