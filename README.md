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

- **checked**: Boolean, defines the checkbox state.
- **disabled**: Boolean, mark checkbox as disabled.

### Custom events

- **dile-checkbox-changed**: Every time the checkbox changes emits a dile-checkbox-changed event. The checkbox current state is received in the handler usign the event object "detail" property.

### CSS Custom Properties

You can customize it using CSS Custom Properties.

```
<style>
.customized {
  --dile-checkbox-checked-color: #006;
  --dile-checkbox-unchecked-color: #f66;
  --dile-checkbox-fill-color: #fcc;
  --dile-checkbox-unchecked-fill-color: #666;
  --dile-checkbox-label-color: #c57;
  --dile-checkbox-font-weight: bold;
}
</style>

<dile-checkbox checked class="customized">Mark as urgent</dile-checkbox>
```

