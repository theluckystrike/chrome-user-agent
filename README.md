# chrome-user-agent

Manage user agent strings in Chrome extensions.

## Overview

chrome-user-agent provides utilities to get and set user agent strings.

## Installation

```bash
npm install chrome-user-agent
```

## Usage

```javascript
import { UserAgent } from 'chrome-user-agent';

const ua = await UserAgent.get();
await UserAgent.set('Custom User Agent');
```

## License

MIT
