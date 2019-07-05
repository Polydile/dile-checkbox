import { html, render } from 'lit-html';
import '../src/dile-checkbox.js';

const title = 'test';
render(html`
<style>
* {
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
.customized {
  --eit-checkbox-checked-color: #006;
  --eit-checkbox-unchecked-color: #f66;
  --eit-checkbox-fill-color: #fcc;
  --eit-checkbox-unchecked-fill-color: #666;
  --eit-checkbox-label-color: #c57;
  --eit-checkbox-font-weight: bold;
  font-size: 1.5em;
}
</style>
<dile-checkbox>Accept the terms and conditions</dile-checkbox>
<hr>
<dile-checkbox checked class="customized">Mark as urgent</dile-checkbox>
<hr>
<dile-checkbox disabled>Checkbox disabled</dile-checkbox>

`, document.querySelector('#demo'));
