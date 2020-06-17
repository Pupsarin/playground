import React from "react";
import {Breadcrumb, BreadcrumbItem, BreadcrumbHome} from '@wfp/ui';
import {Link} from 'react-router-dom';

export const Wpfui: React.FC = () => {
    return <section>
        <h3>WPF-UI</h3>
        <Breadcrumb>
            <BreadcrumbItem active>
                <Link to="/#">
                    <BreadcrumbHome/>
                </Link>
            </BreadcrumbItem>
            <BreadcrumbItem>
                <Link to="/#">
                    first
                </Link>
            </BreadcrumbItem>
            <BreadcrumbItem>
                <Link to="/wpf-ui">
                    second
                </Link>
            </BreadcrumbItem>
        </Breadcrumb>
    </section>
}