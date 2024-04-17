import * as Tabs from '@radix-ui/react-tabs';
import './folder-tabs.css';

const FolderTabs = () => {
  return (
    <Tabs.Root className='TabsRoot' orientation='vertical'>
      <Tabs.List className='TabsList'>
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

export default FolderTabs;
