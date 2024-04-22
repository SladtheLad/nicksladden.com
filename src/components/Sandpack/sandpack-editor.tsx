import {
  Sandpack,
  type SandpackInternal,
  type SandpackInternalOptions,
} from '@codesandbox/sandpack-react';

const SandpackEditor: SandpackInternal = (props) => {
  return (
    <Sandpack
      theme={{
        colors: {
          accent: '--accent',
        },
        syntax: {
          tag: '#006400',
          string: 'rgb(255, 165, 0)',
          plain: 'tomato',
        },
      }}
      {...props}
    ></Sandpack>
  );
};
export default SandpackEditor;
