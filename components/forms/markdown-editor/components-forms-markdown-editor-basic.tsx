'use client';
import PanelCodeHighlight from '@/components/panel-code-highlight';
import React, { useCallback, useState } from 'react';
import SimpleMdeReact from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';

const ComponentsFormsMarkdownEditorBasic = () => {
    const [value, setValue] = useState(
        `# Basic Example
Go ahead, play around with the editor! Be sure to check out **bold** and *italic* styling, or even[links](https://google.com). You can type the Markdown syntax, use the toolbar, or use shortcuts like 'cmd-b' or 'ctrl-b'.

## Lists
Unordered lists can be started using the toolbar or by typing '*', '-', or '+'. Ordered lists can be started by typing '1.'.

#### Unordered
* Lists are a piece of cake
* They even auto continue as you type
* A double enter will end them
* Tabs and shift - tabs work too

#### Ordered
1. Numbered lists...
2. ...work too!

## What about images?
![Yes](https://i.imgur.com/sZlktY7.png)
`
    );

    const onChange = useCallback((value: string) => {
        setValue(value);
    }, []);

    return (
        <PanelCodeHighlight
            title="Basic"
            codeHighlight={`import { useCallback, useMemo, useState } from 'react';
import SimpleMdeReact from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';

const [value, setValue] = useState(
\`# Basic Example
Go ahead, play around with the editor! Be sure to check out **bold** and *italic* styling, or even[links](https://google.com). You can type the Markdown syntax, use the toolbar, or use shortcuts like 'cmd-b' or 'ctrl-b'.

## Lists
Unordered lists can be started using the toolbar or by typing '*', '-', or '+'. Ordered lists can be started by typing '1.'.

#### Unordered
* Lists are a piece of cake
* They even auto continue as you type
* A double enter will end them
* Tabs and shift - tabs work too

#### Ordered
1. Numbered lists...
2. ...work too!

## What about images?
![Yes](https://i.imgur.com/sZlktY7.png)
\`
);

const onChange = useCallback((value: string) => {
setValue(value);
}, []);

<SimpleMdeReact value={value} onChange={onChange} />`}
        >
            <div className="markdown-editor prose mb-5 dark:prose-invert rtl:text-right">
                <SimpleMdeReact value={value} onChange={onChange} />
            </div>
        </PanelCodeHighlight>
    );
};

export default ComponentsFormsMarkdownEditorBasic;
