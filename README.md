# chrome-user-agent

[![npm version](https://img.shields.io/npm/v/chrome-user-agent)](https://npmjs.com/package/chrome-user-agent)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)](https://www.typescriptlang.org/)
[![Discord](https://img.shields.io/badge/Discord-Zovo-blueviolet.svg?logo=discord)](https://discord.gg/zovo)
[![Website](https://img.shields.io/badge/Website-zovo.one-blue)](https://zovo.one)
[![GitHub Stars](https://img.shields.io/github/stars/theluckystrike/chrome-user-agent?style=social)](https://github.com/theluckystrike/chrome-user-agent)

> User agent detection and spoofing for Chrome extensions -- parse UA strings, detect browsers, override user agent headers, and device emulation for MV3.

Part of the [Zovo](https://zovo.one) developer tools family.

## Install

```bash
npm install chrome-user-agent
```

## Usage

```ts
import { UserAgent } from 'chrome-user-agent';

// Parse the current browser's user agent
const info = UserAgent.parse();
console.log(info.browser);  // "Chrome"
console.log(info.version);  // "120.0.0.0"
console.log(info.os);       // "macOS"
console.log(info.mobile);   // false
console.log(info.engine);   // "WebKit"

// Parse an arbitrary user agent string
const mobile = UserAgent.parse(UserAgent.PRESETS.IPHONE);
console.log(mobile.browser); // "Safari"
console.log(mobile.os);      // "iOS"
console.log(mobile.mobile);  // true

// Spoof the user agent header via declarativeNetRequest
await UserAgent.spoof(UserAgent.PRESETS.FIREFOX_WIN);

// Remove the user agent override
await UserAgent.resetSpoof();

// Available presets
console.log(UserAgent.PRESETS.CHROME_WIN);
console.log(UserAgent.PRESETS.CHROME_MAC);
console.log(UserAgent.PRESETS.FIREFOX_WIN);
console.log(UserAgent.PRESETS.SAFARI_MAC);
console.log(UserAgent.PRESETS.IPHONE);
console.log(UserAgent.PRESETS.ANDROID);
```

## API

### `class UserAgent`

#### `static parse(ua?: string): { browser: string; version: string; os: string; mobile: boolean; engine: string }`

Parse a user agent string and return detected properties. If `ua` is omitted, uses `navigator.userAgent`. Detects the following:

- **browser** -- `"Chrome"`, `"Edge"`, `"Opera"`, `"Firefox"`, `"Safari"`, or `"Unknown"`
- **version** -- version string (e.g. `"120.0.0.0"`)
- **os** -- `"Windows"`, `"macOS"`, `"Linux"`, `"Android"`, `"iOS"`, or `"Unknown"`
- **mobile** -- `true` if the UA contains mobile identifiers
- **engine** -- `"WebKit"`, `"Gecko"`, or `"Unknown"`

#### `static spoof(userAgent: string): Promise<void>`

Override the `User-Agent` request header for all main frame, sub-frame, and XMLHttpRequest traffic using Chrome's `declarativeNetRequest` API. Requires the `declarativeNetRequest` permission.

#### `static resetSpoof(): Promise<void>`

Remove any active user agent override set by `spoof()`.

#### `static readonly PRESETS`

A collection of common user agent strings:

| Key            | Browser / Device                  |
| -------------- | --------------------------------- |
| `CHROME_WIN`   | Chrome 120 on Windows 10          |
| `CHROME_MAC`   | Chrome 120 on macOS               |
| `FIREFOX_WIN`  | Firefox 121 on Windows 10         |
| `SAFARI_MAC`   | Safari 17.2 on macOS              |
| `IPHONE`       | Safari 17.2 on iPhone (iOS 17.2)  |
| `ANDROID`      | Chrome 120 on Android 14          |

## License

MIT

## See Also

### Related Zovo Repositories

- [chrome-extension-core](https://github.com/theluckystrike/chrome-extension-core) - Essential utilities for Chrome extension development
- [chrome-identity-helper](https://github.com/theluckystrike/chrome-identity-helper) - OAuth2 identity management
- [webext-privacy-guard](https://github.com/theluckystrike/webext-privacy-guard) - Privacy and PII utilities
- [chrome-extension-starter-mv3](https://github.com/theluckystrike/chrome-extension-starter-mv3) - Production-ready Chrome extension starter

### Zovo Chrome Extensions

- [Zovo Tab Manager](https://chrome.google.com/webstore/detail/zovo-tab-manager) - Manage tabs efficiently
- [Zovo Focus](https://chrome.google.com/webstore/detail/zovo-focus) - Block distractions

Visit [zovo.one](https://zovo.one) for more information.

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

Built by [Zovo](https://zovo.one)
