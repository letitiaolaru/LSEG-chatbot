export type PICKED_VALUE = {
  code: string;
  name: string;
  price?: number;
}

export type MESSAGE_QUEUE = {
  message: string;
  options?: PICKED_VALUE[];
  code?: string;
  messageBy: string;
  isDisabled: boolean;
}