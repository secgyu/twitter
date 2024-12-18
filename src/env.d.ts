declare module '*.css';
declare module '*.svg' {
    export const ReactComponent: React.FunctionComponent<
        React.SVGAttributes<SVGElement>
    >;
}

interface ImportMeta {
    readonly env: Record<string, string>;
}
