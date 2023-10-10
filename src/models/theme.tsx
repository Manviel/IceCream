enum VariantTypes {
  Default = 'token',
  Danger = 'price red',
  Dark = 'layer',
}

const getVariant = (variant: VariantTypes) =>
  `shape touch icon flex justify-center items-center ${variant}`;

export const ShapeIcon = {
  Default: getVariant(VariantTypes.Default),
  Danger: getVariant(VariantTypes.Danger),
  Dark: getVariant(VariantTypes.Dark),
};
