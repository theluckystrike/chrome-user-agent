# chrome-user-agent

[![npm version](https://img.shields.io/npm/v/chrome-user-agent)](https://npmjs.com/package/chrome-user-agent)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)](https://www.typescriptlang.org/)

User agent parsing and spoofing for Chrome extensions. Detects browser, version, OS, engine, and mobile status from any UA string. Overrides the outgoing User-Agent header at the network level using the declarativeNetRequest API (Manifest V3).

INSTALL

```bash
npm install chrome-user-agent
```

QUICK START

```ts
import { UserAgent } from 'chrome-user-agent';

const info = UserAgent.parse();
// => { browser: "Chrome", version: "120.0.0.0", os: "macOS", mobile: false, engine: "WebKit" }
```

PARSING

UserAgent.parse accepts an optional UA string. When called without arguments it reads navigator.userAgent automatically.

```ts
const result = UserAgent.parse(someString);
```

The returned object has the following shape.

```ts
{
  browser: string   // "Chrome" | "Edge" | "Opera" | "Firefox" | "Safari" | "Unknown"
  version: string   // e.g. "120.0.0.0"
  os: string        // "Windows" | "macOS" | "Linux" | "Android" | "iOS" | "Unknown"
  mobile: boolean   // true when the UA contains Mobile, Android, iPhone, or iPad
  engine: string    // "WebKit" | "Gecko" | "Unknown"
}
```

Detection order for browsers is Edge, Opera, Chrome, Firefox, Safari. This matters because Edge and Opera both include "Chrome" in their UA strings.

SPOOFING

UserAgent.spoof replaces the User-Agent header on all main_frame, sub_frame, and xmlhttprequest traffic using chrome.declarativeNetRequest. Your extension manifest needs the declarativeNetRequest permission.

```ts
await UserAgent.spoof(UserAgent.PRESETS.FIREFOX_WIN);
```

To remove the override and restore the original header, call resetSpoof.

```ts
await UserAgent.resetSpoof();
```

Both methods use rule ID 9999 internally. If your extension uses declarativeNetRequest for other rules, avoid that ID.

PRESETS

UserAgent.PRESETS provides six ready-made UA strings.

```
CHROME_WIN    Chrome 120 on Windows 10
CHROME_MAC    Chrome 120 on macOS
FIREFOX_WIN   Firefox 121 on Windows 10
SAFARI_MAC    Safari 17.2 on macOS
IPHONE        Safari 17.2 on iPhone (iOS 17.2)
ANDROID       Chrome 120 on Android 14
```

Use them directly with spoof or pass them to parse for testing.

```ts
const ios = UserAgent.parse(UserAgent.PRESETS.IPHONE);
// => { browser: "Safari", version: "17.2", os: "iOS", mobile: true, engine: "WebKit" }
```

BUILDING FROM SOURCE

```bash
git clone https://github.com/theluckystrike/chrome-user-agent.git
cd chrome-user-agent
npm install
npm run build
```

Output lands in dist/ as CommonJS with type declarations and source maps.

LICENSE

MIT. See LICENSE file for details.

---

A theluckystrike project. Part of the zovo.one extension studio.
