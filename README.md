# chrome-user-agent

> User agent detection and spoofing for Chrome extensions -- parse UA strings, detect browsers, override user agent headers, and device emulation for MV3.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

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
