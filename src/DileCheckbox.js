import { html, css, LitElement } from 'lit-element';

export default class DileCheckbox extends LitElement {
  
  static get properties() {
    return {
      checked: { type: Boolean },
      disabled: { type: Boolean },
    };
  }

  constructor() {
    super(); 
    this.checked = false;
  }

  static get styles() {
    return css`
    :host {
      display: inline-block;
    }
    div {
      display: flex;
      align-items: center;
      cursor: pointer;
    }
    div.disabled {
      opacity: 0.5;
      cursor: auto;
    }
    .checkbox {
      display: flex;
      background-color: var(--eit-checkbox-checked-color, #30a030);
      border-radius: 4px;
      width: 20px;
      height: 20px;
      line-height: 0;
      align-items: center;
      justify-content: center;
      margin-right: 10px;
    }
    .isUnchecked {
      background-color: var(--eit-checkbox-unchecked-color, #ddd);
    }
    path[fill="none"], .checked path[fill="none"] {
      fill: transparent;
    }
    path {
      fill: var(--eit-checkbox-fill-color, #fff);
    }
    .checked path {
      fill: var(--eit-checkbox-unchecked-fill-color, #fff);
    }
    .label {
      font-weight: var(--eit-checkbox-font-weight, normal);
      color: var(--eit-checkbox-label-color, #303030);
    }
    `;
  }

  render() {
    return html`
      <div @click="${this.doClick}" class="${this.disabled ? 'disabled' : ''}">
        <span class="checkbox ${ this.checked ? 'isChecked' : 'isUnchecked' }">
          ${this.checked
            ? this.checkedIcon
            : this.unCheckedIcon
          }
        </span>
        <span class="label">
          <slot></slot>
        </span>
      </div>
    `;
  }

  doClick() {
    if(this.disabled) {
      return;
    }
    this.checked = !this.checked;
    this.dispatchEvent(new CustomEvent('eit-checkbox-changed', {
      bubbles: true,
      composed: true,
      detail: this.checked
    }));
  }


  get checkedIcon() {
    return html`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>`;
  }
  get unCheckedIcon() {
    return html`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/><path d="M0 0h24v24H0z" fill="none"/></svg>`;
  }

}
