export enum Category {
  Converter = 'Converter',
  Calculator = 'Calculator',
  Checker = 'Checker',
  Array = 'Array',
  String = 'String',
  Advanced = 'Advanced',
}

export enum InputType {
  Text = 'text',
  Number = 'number',
}

export interface Theme {
  name: string;
  className: string;
}

export interface ProblemInput {
  id: string;
  label: string;
  type: InputType;
  placeholder: string;
  min?: number;
  max?: number;
  step?: number | string;
  defaultValue?: string | number;
}

export interface Problem {
  title: string;
  category: Category;
  solverName?: string;
  inputs: ProblemInput[];
  buttonText: string;
  solver: (inputs: Record<string, string>) => string;
}