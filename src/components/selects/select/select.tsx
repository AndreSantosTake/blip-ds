import { Component, h, State, Prop, EventEmitter, Event, Watch, Element, Listen } from '@stencil/core';
import { Option, SelectChangeEventDetail, SelectOptionsPositionType, SelectSizeType } from '../select-interface';
import { Keyboard } from '../../../utils/enums';
@Component({
  tag: 'bds-select',
  styleUrl: '../select.scss',
  shadow: true,
})
export class Select {
  private nativeInput?: HTMLInputElement;

  @Element() el!: HTMLBdsSelectElement;

  @State() isOpen? = false;

  @State() isFocused? = false;

  @State() text? = '';

  @State() internalOptions: Option[];

  /**
   * The options of the select
   * Should be passed this way:
   * options='[{"value": "Cat", "label": "Meow"}, {"value": "Dog", "label": "Woof"}]'
   * Options can also be passed as child by using bds-select-option component, but passing as a child you may have some compatibility problems with Angular.
   */
  @Prop() options?: string | Option[];

  /**
   * the value of the select.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Prop({ mutable: true }) value?: any | null;

  /**
   * Add state danger on input, use for use feedback.
   */
  @Prop({ reflect: true }) danger? = false;

  /**
   * Disabled input.
   */
  @Prop({ reflect: true }) disabled? = false;

  /**
   *  label in input, with he the input size increases.
   */
  @Prop() label? = '';

  /**
   * used for add icon in input left. Uses the bds-icon component.
   */
  @Prop({ reflect: true }) icon?: string = '';

  /**
   * Set the placement of the options menu. Can be 'bottom' or 'top'.
   */
  @Prop() optionsPosition?: SelectOptionsPositionType = 'bottom';

  /**
   * The size of select, if the size is set to short, the label won't be shown together with the value
   */
  @Prop() size?: SelectSizeType = 'standard';

  /**
   * IF true, the label will always be visible (the size should be standard)
   */
  @Prop() fixedLabel?: boolean = true;

  /**
   * Select placeholder
   */
  @Prop() placeholder?: string = '';

  /**
   * Emitted when the value has changed.
   */
  @Event() bdsChange!: EventEmitter<SelectChangeEventDetail>;

  /**
   * Emitted when the selection is cancelled.
   */
  @Event() bdsCancel!: EventEmitter<void>;

  /**
   * Emitted when the select loses focus.
   */
  @Event() bdsFocus!: EventEmitter<void>;

  /**
   * Emitted when the select loses focus.
   */
  @Event() bdsBlur!: EventEmitter<void>;

  @Watch('value')
  valueChanged(): void {
    this.bdsChange.emit({ value: this.value });

    for (const option of this.childOptions) {
      option.selected = this.value === option.value;
    }

    this.text = this.getText();
  }

  @Listen('mousedown', { target: 'window', passive: true })
  handleWindow(ev: Event) {
    if (!this.el.contains(ev.target as HTMLInputElement)) {
      this.isOpen = false;
    }
  }

  componentWillLoad() {
    this.options && this.parseOptions();
  }

  @Watch('options')
  parseOptions() {
    if (this.options) {
      if (typeof this.options === 'string') {
        this.internalOptions = JSON.parse(this.options);
      } else {
        this.internalOptions = this.options;
      }
    }
  }

  componentDidLoad() {
    if (this.placeholder) {
      this.fixedLabel = true;
    } else {
      this.fixedLabel = this.size === 'short' ? false : this.fixedLabel;
    }

    for (const option of this.childOptions) {
      option.selected = this.value === option.value;
      option.addEventListener('optionSelected', this.handler);
    }
    this.text = this.getText();
  }

  private get childOptions(): HTMLBdsSelectOptionElement[] {
    return this.options
      ? Array.from(this.el.shadowRoot.querySelectorAll('bds-select-option'))
      : Array.from(this.el.querySelectorAll('bds-select-option'));
  }

  private get childOptionSelected(): HTMLBdsSelectOptionElement {
    return this.options
      ? Array.from(this.el.shadowRoot.querySelectorAll('bds-select-option')).find((option) => option.selected)
      : Array.from(this.el.querySelectorAll('bds-select-option')).find((option) => option.selected);
  }

  private onFocus = (): void => {
    this.isFocused = true;
    this.bdsFocus.emit();
  };

  private onBlur = (): void => {
    this.isFocused = false;
    this.bdsBlur.emit();
  };

  private toggle = (): void => {
    if (!this.disabled) {
      this.isOpen = !this.isOpen;
    }
  };

  private getText = (): string => {
    const opt = this.childOptions.find((option) => option.value == this.value);
    if (opt?.status || opt?.bulkOption) {
      if (this.internalOptions) {
        const internalOption = this.internalOptions.find((option) => option.value == opt.value);
        if (internalOption) {
          return internalOption.label;
        }
      }
      return opt.querySelector(`#bds-typo-label-${this.value}`).textContent;
    }
    return opt?.titleText ? opt.titleText : opt?.textContent?.trim() ?? '';
  };

  private handler = (event: CustomEvent): void => {
    const {
      detail: { value },
    } = event;
    this.value = value;
    this.toggle();
  };

  private setFocusWrapper = (): void => {
    if (this.nativeInput) {
      this.nativeInput.focus();
    }
  };

  private removeFocusWrapper = (event: FocusEvent): void => {
    const isInputElement = (event.relatedTarget as Element).localName === 'input';

    if (this.nativeInput && !isInputElement) {
      this.nativeInput.blur();
    }
  };

  private keyPressWrapper = (event: KeyboardEvent): void => {
    const isSelectElement = (event.target as Element).localName === 'bds-select';
    const isInputElement = (event.target as Element).localName === 'input';

    switch (event.key) {
      case Keyboard.ENTER:
        if (!this.isOpen && (isSelectElement || isInputElement)) {
          this.toggle();
        }
        break;
      case Keyboard.ARROW_DOWN:
        if (this.childOptionSelected) {
          (this.childOptionSelected.nextElementSibling?.firstElementChild as HTMLInputElement)?.focus();
          return;
        }
        (this.el.firstElementChild?.firstElementChild as HTMLInputElement)?.focus();
        break;
      case Keyboard.ARROW_UP:
        if (this.childOptionSelected) {
          (this.childOptionSelected.previousElementSibling?.firstElementChild as HTMLInputElement)?.focus();
          return;
        }
        (this.el.previousElementSibling?.firstElementChild as HTMLInputElement)?.focus();
        break;
    }
  };

  private refNativeInput = (el: HTMLInputElement): void => {
    this.nativeInput = el;
  };

  private renderLabel = () => {
    if (this.label && (this.fixedLabel || (!this.fixedLabel && !this.value))) {
      return (
        <bds-typo tag="span" variant={this.value ? 'fs-12' : 'fs-14'}>
          {this.label}
        </bds-typo>
      );
    }
  };

  private renderText = () => {
    return (
      <bds-typo tag="span" variant="fs-14">
        {this.text}
      </bds-typo>
    );
  };

  private renderPlaceholder = () => {
    if (this.placeholder && !this.text) {
      return (
        <bds-typo tag="span" variant="fs-14" class="select__body__placeholder">
          {this.placeholder}
        </bds-typo>
      );
    }
  };

  private addPaddingClass = () => {
    return this.size === 'short' ? 'select__body--padding-short' : 'select__body--padding-standard';
  };

  render(): HTMLElement {
    const iconArrow = this.isOpen ? 'arrow-up' : 'arrow-down';

    return (
      <div
        class={{ select: true }}
        tabindex="0"
        onFocus={this.setFocusWrapper}
        onBlur={this.removeFocusWrapper}
        onKeyDown={this.keyPressWrapper}
      >
        <div
          class={{
            select__body: true,
            'select__body--focus': this.isOpen || this.isFocused,
            'select__body--danger': this.danger,
            'select__body--disabled': this.disabled,
            [`select__body--size-${this.size}`]: true,
            [this.addPaddingClass()]: true,
          }}
          onClick={this.toggle}
        >
          <div class="select__body__content">
            {this.icon && (
              <div class="select__body__content__icon">
                <bds-icon size="small" name={this.icon} color="inherit"></bds-icon>
              </div>
            )}
            <div class="select__body__label">
              {this.renderPlaceholder()}
              {this.text && this.renderLabel()}
              {this.text && this.renderText()}
            </div>
          </div>
          {/* this input is used to set focus and blur event and can be used to filter content */}
          <input
            ref={this.refNativeInput}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            unselectable={true}
            autocomplete="off"
          ></input>
          <div class="select__arrow">
            <bds-icon size="small" name={iconArrow} color="inherit"></bds-icon>
          </div>
        </div>
        <div
          class={{
            select__options: true,
            'select__options--position-top': this.optionsPosition === 'top',
            'select__options--open': this.isOpen,
          }}
        >
          {this.internalOptions ? (
            this.internalOptions.map((option, idx) => (
              <bds-select-option value={option.value} key={idx} bulkOption={option.bulkOption} status={option.status}>
                {option.label}
              </bds-select-option>
            ))
          ) : (
            <slot />
          )}
        </div>
      </div>
    );
  }
}
