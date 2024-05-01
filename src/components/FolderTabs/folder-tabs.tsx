import * as Tabs from '@radix-ui/react-tabs';
import './folder-tabs.css';
import { useLayoutEffect, useRef, useState } from 'react';
// import SandpackEditor from '../Sandpack/sandpack-editor';

interface FolderTabsProps extends Tabs.TabsProps {
  defaultValue?: string;
}

const FolderTabs = ({
  defaultValue = 'Folder 1',
  ...props
}: FolderTabsProps) => {
  const folderClipRef = useRef<HTMLDivElement | null>(null);
  const [folderClipHeight, setFolderClipHeight] = useState<number>(0);
  const [folderClipWidth, setFolderClipWidth] = useState<number>(0);
  useLayoutEffect(() => {
    const folderClip = folderClipRef.current;
    if (folderClip) {
      const folderClipHeight = folderClip.getBoundingClientRect().height;
      const folderClipWidth = folderClip.getBoundingClientRect().width;
      setFolderClipHeight(folderClipHeight);
      setFolderClipWidth(folderClipWidth);
    }
  }, []);

  return (
    <Tabs.Root
      defaultValue={defaultValue}
      className='TabsRoot'
      orientation='vertical'
      {...props}
    >
      <div
        style={{
          height: folderClipHeight + 20,
          top: 20,
          left: folderClipWidth + 1,
        }}
        className='folder-clip'
      ></div>
      <Tabs.List ref={folderClipRef} className='TabsList'>
        <Tabs.Trigger className='TabsTrigger' value='Folder 1'>
          Folder 1
        </Tabs.Trigger>
        <Tabs.Trigger className='TabsTrigger' value='Folder 2'>
          Folder 2
        </Tabs.Trigger>
        <Tabs.Trigger className='TabsTrigger' value='Folder 3'>
          Folder 3
        </Tabs.Trigger>
      </Tabs.List>

      <Tabs.Content className='TabsContent' value='Folder 1'>
        Content 1
      </Tabs.Content>
      <Tabs.Content className='TabsContent' value='Folder 2'>
        Content 2
      </Tabs.Content>
      <Tabs.Content className='TabsContent' value='Folder 3'>
        Content 3
      </Tabs.Content>
    </Tabs.Root>
  );
};

// export const SandPackExample = () => (
//   <SandpackEditor
//     template='vite-react-ts'
//     customSetup={{ dependencies: { '@radix-ui/react-tabs': 'latest' } }}
//     files={{
//       '/App.js': `import ReactMarkdown from 'react-markdown'
//
// export default function App() {
//   return (
//     <ReactMarkdown>
//       # Hello, *world*!
//     </ReactMarkdown>
//   )
// }`,
//     }}
//   />
// );

export default FolderTabs;
