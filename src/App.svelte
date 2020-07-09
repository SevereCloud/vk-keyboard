<script>
  import Export from "./components/Export.svelte";

  import Button from "./components/Button.svelte";
  import Buttons from "./components/Buttons.svelte";

  import {
    Keyboard,
    ButtonType,
    Color,
    checkLabel,
    checkPayload
  } from "./lib/keyboard";

  // varibatle
  let keyboard = new Keyboard();
  keyboard.addLastRow();
  let i = 0;
  let j = 0;

  // TODO: save keyboard

  // TODO: load keyboard

  let removeButton = () => {
    if (keyboard.buttons.length === 1 && keyboard.buttons[i].length === 1){
      return
    }
    keyboard.removeButton(i, j);

    if (i >= keyboard.buttons.length) {
      i--;
    }
    if (j >= keyboard.buttons[i].length) {
      j--;
    }
  };

  // Проверка на ошибки
  let errors = "";
  $: errors = $keyboard.check();

  // Костыль
  const update = () => (keyboard.crutch = !keyboard.crutch);
</script>

<style>
  input[type="text"],
  input[type="number"] {
    width: 100%;
  }
  .app {
    max-width: 1000px;
    margin: 0 auto;
    padding: 16px;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial,
      sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
  }

  .border {
    background-color: #fff;
    border: 1px solid #d1d5da;
    border-radius: 3px;
    padding: 16px 16px 8px;
    margin-bottom: 16px;
    margin-top: 16px;
  }

  .buttons-main {
    max-width: 492px;
    margin: 0 auto;
    border-radius: 3px;
    margin-bottom: 16px;
    margin-top: 0;
  }
  .buttons-main label {
    font-weight: 600;
    margin: 0 0 6px;
  }
  .note {
    color: #586069;
    font-size: 12px;
    margin: 4px 0 2px;
    min-height: 17px;
  }
  .block-item {
    margin-bottom: 16px;
  }

  .one-time,
  .row {
    display: flex;
    flex-direction: row;
  }

  .button-add,
  .button-remove {
    margin: 5px auto;
    line-height: 38px;
    cursor: pointer;
    text-align: center;
    border-radius: 4px;
    max-width: 200px;
    user-select: none;
  }

  .button-add {
    color: #55677d;
  }
  .button-add:hover {
    background: #dfe6ed;
  }
  .button-add:active {
    background: #dae2ea;
  }

  .button-remove {
    color: #db3b3b;
  }
  .button-remove:hover {
    color: #fff;
    background: #eb5050;
  }
  .button-remove:active {
    color: #fff;
    background: #db3b3b;
  }

  .one-time {
    margin-bottom: 16px;
    margin-top: 0;
  }
  .one-time label {
    margin-left: 6px;
  }
</style>

<div class="app">
  <h1>Генератор клавиатуры для VK</h1>

  <p>
    Генерирует
    <a href="https://vk.com/dev/bots_docs_3">клавиатуру</a>
    для ботов. Проверить клавиатуру можно отправив JSON
    <a href="https://vk.com/im?sel=-174472256">боту</a>
    .
  </p>
  <p>
    <a href="https://github.com/SevereCloud/vk-keyboard">GitHub</a>
  </p>

  <h3>Клавиатура</h3>

  <div class="buttons-main">
    {#each $keyboard.buttons as buttons, ii}
      <div class="row">
        <Buttons>
          {#each buttons as button, jj}
            <Button
              type={button.action.type}
              label={button.action.label}
              color={button.color}
              select={i == ii && j == jj ? true : false}
              on:click={() => {
                i = ii;
                j = jj;
              }} />
          {/each}
        </Buttons>
        {#if keyboard.buttons[ii].length < 5}
          <div class="button-add" on:click={() => keyboard.addColumn(ii)}>
            +
          </div>
        {/if}
      </div>
    {/each}
    {#if keyboard.buttons.length < 10}
      <div class="button-add" on:click={() => keyboard.addLastRow()}>
        Добавить
      </div>
    {/if}

    <div class="border">
      <div class="block-item">
        <label>Тип кнопки</label>

        <Buttons>
          <Button
            label="Text"
            color={$keyboard.buttons[i][j].action.type === ButtonType.Text ? Color.Primary : Color.Secondary}
            on:click={() => $keyboard.buttons[i][j].toText()} />
          <Button
            label="Open Link"
            color={$keyboard.buttons[i][j].action.type === ButtonType.OpenLink ? Color.Primary : Color.Secondary}
            on:click={() => $keyboard.buttons[i][j].toOpenLink()} />
          <Button
            label="Location"
            color={$keyboard.buttons[i][j].action.type === ButtonType.Location ? Color.Primary : Color.Secondary}
            on:click={() => $keyboard.buttons[i][j].toLocation()} />
        </Buttons>
        <Buttons>
          <Button
            label="VK Pay"
            color={$keyboard.buttons[i][j].action.type === ButtonType.VKPay ? Color.Primary : Color.Secondary}
            on:click={() => $keyboard.buttons[i][j].toVKPay()} />
          <Button
            label="VK Apps"
            color={$keyboard.buttons[i][j].action.type === ButtonType.VKApps ? Color.Primary : Color.Secondary}
            on:click={() => $keyboard.buttons[i][j].toVKApps()} />
          <Button
            label="Callback"
            color={$keyboard.buttons[i][j].action.type === ButtonType.Callback ? Color.Primary : Color.Secondary}
            on:click={() => $keyboard.buttons[i][j].toCallback()} />
        </Buttons>
      </div>

      {#if [ButtonType.Text, ButtonType.VKApps, ButtonType.OpenLink, ButtonType.Callback].includes($keyboard.buttons[i][j].action.type)}
        <div class="block-item">
          <label>Текст</label>
          <input
            type="text"
            bind:value={$keyboard.buttons[i][j].action.label} />
          {#each checkLabel($keyboard.buttons[i][j].action.label) as err}
            <div class="note" style="color:#db3b3b;">
              <b>{err}</b>
            </div>
          {/each}
        </div>
      {/if}

      {#if [ButtonType.OpenLink].includes($keyboard.buttons[i][j].action.type)}
        <div class="block-item">
          <label>Ссылка</label>
          <input type="text" bind:value={$keyboard.buttons[i][j].action.link} />
        </div>
      {/if}

      {#if $keyboard.buttons[i][j].action.type === ButtonType.VKPay}
        <div class="block-item">
          <label>Параметры платежа VK Pay</label>
          <input type="text" bind:value={$keyboard.buttons[i][j].action.hash} />
          {#if $keyboard.buttons[i][j].action.hash === ''}
            <b class="note" style="color:#db3b3b;">Пустой hash!</b>
          {/if}
        </div>
      {/if}

      {#if $keyboard.buttons[i][j].action.type === ButtonType.VKApps}
        <div class="block-item">
          <label>Приложение</label>
          <input
            type="number"
            bind:value={$keyboard.buttons[i][j].action.app_id} />
          {#if $keyboard.buttons[i][j].action.app_id === ''}
            <b class="note" style="color:#db3b3b;">Пустой индификатор!</b>
          {/if}
        </div>
        <div class="block-item">
          <label>Идентификатор сообщества</label>
          <input
            type="number"
            bind:value={$keyboard.buttons[i][j].action.owner_id} />
        </div>
        <div class="block-item">
          <label>Хэш</label>
          <input type="text" bind:value={$keyboard.buttons[i][j].action.hash} />
        </div>
      {/if}

      <div class="block-item">
        <label>Полезная нагрузка</label>
        <input
          type="text"
          bind:value={$keyboard.buttons[i][j].action.payload} />
        {#each checkPayload($keyboard.buttons[i][j].action.payload) as err}
          <div class="note" style="color:#db3b3b;">
            <b>{err}</b>
          </div>
        {/each}
      </div>

      {#if [ButtonType.Text, ButtonType.Callback].includes($keyboard.buttons[i][j].action.type)}
        <div class="block-item">
          <label>Цвет</label>
          <Buttons>
            {#each [Color.Primary, Color.Secondary, Color.Negative, Color.Positive] as color}
              <Button
                label={$keyboard.buttons[i][j].color === color ? 'X' : ''}
                {color}
                on:click={() => ($keyboard.buttons[i][j].color = color)} />
            {/each}
          </Buttons>
        </div>
      {/if}

      <div class="button-remove" on:click={() => removeButton()}>Удалить</div>
    </div>

    <div class="block-item">

      <Buttons>
        <Button
          label="Клавиатура"
          on:click={() => keyboard.toKeyboard()}
          color={$keyboard.inline !== true ? Color.Primary : Color.Secondary} />
        <Button
          label="Инлайн клавиатура"
          on:click={() => keyboard.toInlineKeyboard()}
          color={$keyboard.inline === true ? Color.Primary : Color.Secondary} />
      </Buttons>
    </div>
    {#if $keyboard.inline !== true}
      <div class="one-time">
        <input type="checkbox" bind:checked={$keyboard.one_time} />
        <label>скрывать клавиатуру сразу</label>
      </div>
    {/if}

  </div>

  {#if errors}
    <h3>Ошибки</h3>
    <pre>{errors}</pre>
  {:else}
    <Export keyboard={$keyboard} />
  {/if}
</div>
