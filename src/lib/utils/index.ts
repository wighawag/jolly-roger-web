import * as base64Module from 'byte-base64';
import * as lz from 'lz-string';
import prettyMs from 'pretty-ms';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const {compressToUint8Array, decompressFromUint8Array} = (lz as any) as lz.LZStringStatic;

export function wait<T>(numSeconds: number, v: T): Promise<T> {
  return new Promise(function (resolve) {
    setTimeout(resolve.bind(null, v), numSeconds * 1000);
  });
}

export const base64 = base64Module;

export function timeToText(timeInSec: number, options?: prettyMs.Options): string {
  return prettyMs(Math.floor(timeInSec) * 1000, options);
}
