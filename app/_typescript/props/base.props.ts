import React from 'react';

export type NodeWithChildrenProps<TProps> = React.PropsWithChildren<TProps>;

export interface AuthLayoutProps {
    signin?: React.ReactNode;
    register?: React.ReactNode;
}