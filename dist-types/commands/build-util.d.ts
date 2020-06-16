/// <reference types="node" />
import type { EventEmitter } from 'events';
import { BuildScript, SnowpackConfig, SnowpackPluginBuildArgs, SnowpackPluginBuildResult } from '../config';
export declare function checkIsPreact(filePath: string, contents: string): boolean;
export declare function isDirectoryImport(fileLoc: string, spec: string): boolean;
export declare function wrapImportMeta({ code, hmr, env, config: { buildOptions }, }: {
    code: string;
    hmr: boolean;
    env: boolean;
    config: SnowpackConfig;
}): string;
export declare function wrapCssModuleResponse({ url, code, ext, hasHmr, config: { buildOptions }, }: {
    url: string;
    code: string;
    ext: string;
    hasHmr?: boolean;
    config: SnowpackConfig;
}): Promise<string>;
export declare function wrapHtmlResponse({ code, hasHmr, buildOptions, }: {
    code: string;
    hasHmr?: boolean;
    buildOptions: SnowpackConfig['buildOptions'];
}): string;
export declare function wrapEsmProxyResponse({ url, code, ext, hasHmr, config: { buildOptions }, }: {
    url: string;
    code: string;
    ext: string;
    hasHmr?: boolean;
    config: SnowpackConfig;
}): string;
export declare type FileBuilder = (args: SnowpackPluginBuildArgs) => null | SnowpackPluginBuildResult | Promise<null | SnowpackPluginBuildResult>;
export declare function getFileBuilderForWorker(cwd: string, selectedWorker: BuildScript, messageBus: EventEmitter): FileBuilder | undefined;
export declare function generateEnvModule(mode: 'development' | 'production'): string;
