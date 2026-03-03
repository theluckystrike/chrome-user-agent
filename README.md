# chrome-user-agent

[![npm version](https://img.shields.io/npm/v/chrome-user-agent)](https://npmjs.com/package/chrome-user-agent)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)](https://www.typescriptlang.org/)
[![Chrome Web Extension](https://img.shields.io/badge/Chrome-Web%20Extension-orange.svg)](https://developer.chrome.com/docs/extensions/)
[![CI Status](https://github.com/theluckystrike/chrome-user-agent/actions/workflows/ci.yml/badge.svg)](https://github.com/theluckystrike/chrome-user-agent/actions)
[![Discord](https://img.shields.io/badge/Discord-Zovo-blueviolet.svg?logo=discord)](https://discord.gg/zovo)
[![Website](https://img.shields.io/badge/Website-zovo.one-blue)](https://zovo.one)
[![GitHub Stars](https://img.shields.io/github/stars/theluckystrike/chrome-user-agent?style=social)](https://github.com/theluckystrike/chrome-user-agent)

> Manage user agent strings in Chrome extensions.

**chrome-user-agent** provides utilities to get and set user agent strings. Part of the Zovo Chrome extension utilities.

Part of the [Zovo](https://zovo.one) developer tools family.

## Features

- ✅ **Get User Agent** - Get current user agent
- ✅ **Set User Agent** - Set custom user agent
- ✅ **Presets** - Common browser user agents
- ✅ **TypeScript Support** - Full type definitions included

## Installation

```bash
npm install chrome-user-agent
```

## Usage

```javascript
import { UserAgent } from 'chrome-user-agent';

// Get current user agent
const ua = await UserAgent.get();

// Set custom user agent
await UserAgent.set('Custom User Agent');

// Use preset
await UserAgent.set(UserAgent.PRESETS.CHROME_MAC);
```

## Contributing

Contributions are welcome! Please follow these steps:

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/ua-feature`
3. **Make** your changes
4. **Test** your changes: `npm test`
5. **Commit** your changes: `git commit -m 'Add new feature'`
6. **Push** to the branch: `git push origin feature/ua-feature`
7. **Submit** a Pull Request

## See Also

### Related Zovo Repositories

- [webext-privacy-guard](https://github.com/theluckystrike/webext-privacy-guard) - Privacy utilities
- [chrome-extension-starter-mv3](https://github.com/theluckystrike/chrome-extension-starter-mv3) - Extension template

### Zovo Chrome Extensions

- [Zovo Tab Manager](https://chrome.google.com/webstore/detail/zovo-tab-manager) - Manage tabs efficiently
- [Zovo Focus](https://chrome.google.com/webstore/detail/zovo-focus) - Block distractions

Visit [zovo.one](https://zovo.one) for more information.

## License

MIT — [Zovo](https://zovo.one)
