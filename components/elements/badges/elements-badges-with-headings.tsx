import PanelCodeHighlight from '@/components/panel-code-highlight';
import React from 'react';

const ElementsBadgesWithHeadings = () => {
    return (
        <PanelCodeHighlight
            title="Badges with Heading"
            codeHighlight={`<div className="space-y-2 prose dark:prose-headings:text-white-dark">
    <h1>
        Example heading <span className="badge bg-primary">Primary</span>
    </h1>
    <h2>
        Example heading <span className="badge bg-success">Success</span>
    </h2>
    <h3>
        Example heading <span className="badge bg-info">Info</span>
    </h3>
    <h4>
        Example heading <span className="badge bg-warning">Warning</span>
    </h4>
    <h5>
        Example heading <span className="badge bg-danger">Danger</span>
    </h5>
    <h6>
        Example heading <span className="badge bg-dark">Dark</span>
    </h6>
</div>`}
        >
            <div className="mb-5 dark:text-white-dark">
                <p className="mb-5">Badges scale to match the size of the immediate parent element by using relative font sizing and em units.</p>
                <div className="prose space-y-2 dark:prose-headings:text-white-dark">
                    <h1>
                        Example heading <span className="badge bg-primary">Primary</span>
                    </h1>
                    <h2>
                        Example heading <span className="badge bg-success">Success</span>
                    </h2>
                    <h3>
                        Example heading <span className="badge bg-info">Info</span>
                    </h3>
                    <h4>
                        Example heading <span className="badge bg-warning">Warning</span>
                    </h4>
                    <h5>
                        Example heading <span className="badge bg-danger">Danger</span>
                    </h5>
                    <h6>
                        Example heading <span className="badge bg-dark">Dark</span>
                    </h6>
                </div>
            </div>
        </PanelCodeHighlight>
    );
};

export default ElementsBadgesWithHeadings;
