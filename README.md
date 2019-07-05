# \<dile-checkbox>

Web Component to create a customized checkbox input interface, based on LitElement.

## Installation
```bash
npm i dile-checkbox
```

## Usage
```html
<script type="module">
  import 'dile-checkbox/dile-checkbox.js';
</script>

<dile-checkbox>Label for the element</dile-checkbox>
```

### Properties

- checked: Boolean, defines the checkbox state.
- disabled: Boolean, mark checkbox as disabled.

### Custom events

Every time the checkbox changes emits a eit-checkbox-changed event. The checkbox current state is received in the handler usign the event object "detail" property.

### CSS Custom Properties

You can customize it using CSS Custom Properties.

```
<style>
.customized {
  --eit-checkbox-checked-color: #006;
  --eit-checkbox-unchecked-color: #f66;
  --eit-checkbox-fill-color: #fcc;
  --eit-checkbox-unchecked-fill-color: #666;
  --eit-checkbox-label-color: #c57;
  --eit-checkbox-font-weight: bold;
}
</style>

<dile-checkbox checked class="customized">Mark as urgent</dile-checkbox>
```

