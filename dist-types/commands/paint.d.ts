/// <reference types="node" />
import { EventEmitter } from 'events';
import { BuildScript } from '../config';
/**
 * Get the actual port, based on the `defaultPort`.
 * If the default port was not available, then we'll prompt the user if its okay
 * to use the next available port.
 */
export declare function getPort(defaultPort: number): Promise<number>;
export declare function paint(bus: EventEmitter, registeredWorkers: BuildScript[], buildMode: {
    dest: string;
} | undefined, devMode: {
    addPackage: (pkgName: string) => void;
} | undefined): void;
