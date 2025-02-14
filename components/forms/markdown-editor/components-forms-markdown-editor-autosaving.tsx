'use client';
import PanelCodeHighlight from '@/components/panel-code-highlight';
import React, { useEffect, useMemo, useState } from 'react';
import SimpleMdeReact from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';

const ComponentsFormsMarkdownEditorAutosaving = () => {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    }, []);

    const delay = 1000;
    const autosavedValue =
        (isMounted && localStorage.getItem(`smde_demo`)) ||
        `# Autosaving!

  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

  By default, it saves every 10 seconds, but this can be changed. When this textarea is included in a form, it will automatically forget the saved value when the form is submitted.`;

    const anOptions = useMemo(() => {
        return {
            autosave: {
                enabled: true,
                uniqueId: 'demo',
                delay,
            },
        };
    }, [delay]);

    return (
        <PanelCodeHighlight title="Autosaving" codeHighlight="">
            <div className="markdown-editor prose mb-5 dark:prose-invert rtl:text-right">
                <SimpleMdeReact value={autosavedValue} options={anOptions} />
            </div>
        </PanelCodeHighlight>
    );
};

export default ComponentsFormsMarkdownEditorAutosaving;
