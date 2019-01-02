export interface ViewModel {
  itemId: string;
  name: string;
  templateId: string;
  fieldTypeItemId: string;
}

export interface FieldViewModel extends ViewModel {
  cssClass?: string;
}

export interface TitleFieldViewModel extends FieldViewModel {
  title: string;
  labelCssClass?: string;
}

export interface InputViewModel extends TitleFieldViewModel {
  required: boolean;
  isTrackingEnabled: boolean;
  value: string;
}

export function instanceOfInputViewModel(object: ViewModel): object is InputViewModel {
  return 'value' in object;
}

export interface StringInputViewModel extends InputViewModel {
  minLength?: number;
  maxLength?: number;
  placeholderText?: string;
}