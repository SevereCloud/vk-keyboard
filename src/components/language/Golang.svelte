<script>
  import { Keyboard } from "../../lib/keyboard";
  import { toGolang } from "../../lib/golang";

  export let keyboard = new Keyboard();
  export let code = "";

  $: code = toGolang(keyboard);
</script>

<div>
  Для модуля <a href="https://github.com/SevereCloud/vksdk">github.com/SevereCloud/vksdk</a>
</div>