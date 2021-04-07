import {VERSION, basepath} from '../init';

class LocalCache {

  private _prefix: string;
  constructor(version?: string) {
    this._prefix =
    basepath &&
    (basepath.startsWith('/ipfs/') ||
      basepath.startsWith('/ipns/'))
      ? basepath.slice(6)
      : ''; // ensure local storage is not conflicting across web3w-based apps on ipfs gateways (require encryption for sensitive data)

      const lastVersion = this.getItem('_version');
      if (lastVersion !== version) {
        this.clear();
        if (version) {
          this.setItem('_version', version);
        }
      }
  }
  setItem(key: string, value: string): void {
    try {
      localStorage.setItem(this._prefix + key, value);
    } catch (e) {
      //
    }
  }

  getItem(key: string): string | null {
    try {
      return localStorage.getItem(this._prefix + key);
    } catch (e) {
      return null;
    }
  }

  removeItem(key: string) {
    try {
      localStorage.removeItem(this._prefix + key);
    } catch (e) {
      //
    }
  }

  clear(): void {
    try {
      localStorage.clear();
    } catch (e) {
      //
    }
  }
}


export default new LocalCache(VERSION);
