declare var _default: {
    entry: string;
    devtool: string;
    output: {
        path: string;
        libraryTarget: string;
        library: string;
        filename: string;
    };
    resolve: {
        extensions: string[];
    };
    module: {
        rules: {
            test: RegExp;
            use: ({
                loader: string;
                options: {
                    presets: string[];
                };
            } | {
                loader: string;
            })[];
            exclude: string[];
        }[];
    };
    plugins: any[];
};
export default _default;
