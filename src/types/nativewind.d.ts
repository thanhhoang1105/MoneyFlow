declare module 'nativewind' {
  import { ComponentType } from 'react';
  import { ViewProps, TextProps, ImageProps } from 'react-native';

  export const styled: {
    View: ComponentType<ViewProps>;
    Text: ComponentType<TextProps>;
    Image: ComponentType<ImageProps>;
  };
}
