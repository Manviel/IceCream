enum VariantTypes {
  Default = 'token',
  Danger = 'alias red',
  Dark = 'layer',
}

const getVariant = (variant: VariantTypes) =>
  `shape touch icon flex justify-center items-center ${variant}`;

export const ShapeIcon = {
  Default: getVariant(VariantTypes.Default),
  Danger: getVariant(VariantTypes.Danger),
  Dark: getVariant(VariantTypes.Dark),
};

export const getStack = (variant: string) => `flex col os ${variant}`;

export const getGroup = (variant: string) =>
  `flex os justify-between ${variant}`;
