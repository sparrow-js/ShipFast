"use client"

import React, {useContext, useEffect, useState} from "react";
import componentStore from '@/components/store';
import Landingpage from '@/components/landing-page';

interface Props {
    page: any
}

const components = {
  ...componentStore,
  ...Landingpage
};

const PageRender = ({page}: Props) => {
  return (
    <div className="min-h-screen bg-background"> 
        {
                page.children.map((component: any) => {
                    const Comp = (components as any)[component.componentName];
                    const data = component.props.data;
                    const props: any = {};
                    if (data) {
                        props.data = data;
                    }

                    return <Comp component-id="123" key={component.componentName} {...props} />
                })
        }
    </div>
  );
};

export default PageRender;