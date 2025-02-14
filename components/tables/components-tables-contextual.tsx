import PanelCodeHighlight from '@/components/panel-code-highlight';
import React from 'react';

const ComponentsTablesContextual = () => {
    return (
        <PanelCodeHighlight
            title="Contextual"
            codeHighlight={`<div className="table-responsive mb-5">
    <table>
        <thead>
            <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-dark-dark-light border-dark-dark-light">
                <td>1</td>
                <td>John</td>
                <td>Doe</td>
                <td>johndoe@yahoo.com</td>
            </tr>
            <tr className="bg-primary/20 border-primary/20">
                <td>2</td>
                <td>Andy</td>
                <td>King</td>
                <td>andyking@gmail.com</td>
            </tr>
            <tr className="bg-secondary/20 border-secondary/20">
                <td>3</td>
                <td>Lisa</td>
                <td>Doe</td>
                <td>lisadoe@yahoo.com</td>
            </tr>
            <tr className="bg-success/20 border-success/20">
                <td>4</td>
                <td>Vincent</td>
                <td>Carpenter</td>
                <td>vinnyc@yahoo.com</td>
            </tr>
            <tr className="bg-dark-dark-light border-dark-dark-light">
                <td>5</td>
                <td>Amy</td>
                <td>Diaz</td>
                <td>amydiaz@yahoo.com</td>
            </tr>
            <tr className="bg-danger/20 border-danger/20">
                <td>6</td>
                <td>Nia</td>
                <td>Hillyer</td>
                <td>niahill@gmail.com</td>
            </tr>
            <tr className="bg-info/20 border-info/20">
                <td>7</td>
                <td>Marry</td>
                <td>McDonald</td>
                <td>marryMcD@yahoo.com</td>
            </tr>
            <tr className="bg-warning/20 border-warning/20">
                <td>8</td>
                <td>Shaun</td>
                <td>Park</td>
                <td>park@yahoo.com</td>
            </tr>
        </tbody>
    </table>
</div>`}
        >
            <div className="table-responsive mb-5">
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-dark-dark-light bg-dark-dark-light">
                            <td>1</td>
                            <td>John</td>
                            <td>Doe</td>
                            <td>johndoe@yahoo.com</td>
                        </tr>
                        <tr className="border-primary/20 bg-primary/20">
                            <td>2</td>
                            <td>Andy</td>
                            <td>King</td>
                            <td>andyking@gmail.com</td>
                        </tr>
                        <tr className="border-secondary/20 bg-secondary/20">
                            <td>3</td>
                            <td>Lisa</td>
                            <td>Doe</td>
                            <td>lisadoe@yahoo.com</td>
                        </tr>
                        <tr className="border-success/20 bg-success/20">
                            <td>4</td>
                            <td>Vincent</td>
                            <td>Carpenter</td>
                            <td>vinnyc@yahoo.com</td>
                        </tr>
                        <tr className="border-dark-dark-light bg-dark-dark-light">
                            <td>5</td>
                            <td>Amy</td>
                            <td>Diaz</td>
                            <td>amydiaz@yahoo.com</td>
                        </tr>
                        <tr className="border-danger/20 bg-danger/20">
                            <td>6</td>
                            <td>Nia</td>
                            <td>Hillyer</td>
                            <td>niahill@gmail.com</td>
                        </tr>
                        <tr className="border-info/20 bg-info/20">
                            <td>7</td>
                            <td>Marry</td>
                            <td>McDonald</td>
                            <td>marryMcD@yahoo.com</td>
                        </tr>
                        <tr className="border-warning/20 bg-warning/20">
                            <td>8</td>
                            <td>Shaun</td>
                            <td>Park</td>
                            <td>park@yahoo.com</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </PanelCodeHighlight>
    );
};

export default ComponentsTablesContextual;
