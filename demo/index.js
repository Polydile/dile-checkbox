import { html, render } from 'lit-html';
import '../dile-checkbox.js';

const title = 'test';
render(html`
<style>
* {
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
.customized {
  --dile-checkbox-checked-color: #006;
  --dile-checkbox-unchecked-color: #f66;
  --dile-checkbox-fill-color: #fcc;
  --dile-checkbox-unchecked-fill-color: #666;
  --dile-checkbox-label-color: #c57;
  --dile-checkbox-font-weight: bold;
  font-size: 1.5em;
}
</style>
<dile-checkbox>Accept the terms and conditions</dile-checkbox>
<hr>
<dile-checkbox checked class="customized">Mark as urgent</dile-checkbox>
<hr>
<dile-checkbox disabled>Checkbox disabled</dile-checkbox>
<hr>
<style>
.big {
  --dile-checkbox-size: 32px;
}
</style>
<dile-checkbox class="big">Big checkbox!!</dile-checkbox>
<style>
.small {
  --dile-checkbox-size: 16px;
}
</style>
<br>
<dile-checkbox class="small">Small checkbox!!</dile-checkbox>
`, document.querySelector('#demo'));
